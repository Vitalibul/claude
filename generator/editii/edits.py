import zipfile, glob, re, copy, shutil, os
from lxml import etree
WN='http://schemas.openxmlformats.org/wordprocessingml/2006/main'; W='{%s}'%WN
A='{http://schemas.openxmlformats.org/drawingml/2006/main}'
WP='{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}'
def E(tag, **attrs):
    e=etree.Element(W+tag)
    for k,v in attrs.items(): e.set(W+k, str(v))
    return e
def sub(parent, tag, **attrs):
    e=E(tag, **attrs); parent.append(e); return e
def txt(e): return ''.join(t.text or '' for t in e.iter(W+'t'))

class Doc:
    def __init__(s, path):
        s.path=path; s.z=zipfile.ZipFile(path); s.x=etree.fromstring(s.z.read('word/document.xml')); s.body=s.x.find(W+'body'); s.log=[]
    def save(s, out):
        zin=s.z; tmp=out+'.tmp'; zout=zipfile.ZipFile(tmp,'w',zipfile.ZIP_DEFLATED)
        for it in zin.infolist():
            data=zin.read(it.filename)
            if it.filename=='word/document.xml': data=etree.tostring(s.x, xml_declaration=True, encoding='UTF-8', standalone=True)
            zout.writestr(it, data)
        zout.close(); os.replace(tmp,out)
    def paras(s): return list(s.body.iter(W+'p'))
    def img_par(s, cap):
        ps=s.paras()
        for i,p in enumerate(ps):
            if p.find('.//'+A+'blip') is None: continue
            for q in ps[i+1:i+4]:
                t=txt(q).strip()
                if t:
                    if t.startswith(cap): return p, q
                    break
        raise Exception('image not found: '+cap)
    def top(s, e):  # body-level ancestor
        while e.getparent() is not s.body: e=e.getparent()
        return e

SNIP={}
def load_snips():
    x=etree.fromstring(zipfile.ZipFile('snippets.docx').read('word/document.xml')); b=x.find(W+'body'); cur=None
    for e in b:
        t=txt(e)
        m=re.match(r'@@SNIP:(\w+)@@',t)
        if m: cur=m.group(1); SNIP[cur]=[]; continue
        if e.tag==W+'sectPr': continue
        if cur: SNIP[cur].append(e)
load_snips()
def snip(name): return [copy.deepcopy(e) for e in SNIP[name]]
def insert_after(anchor, els):
    for e in reversed(els): anchor.addnext(e)
def insert_before(anchor, els):
    for e in els: anchor.addprevious(e)

def borders(tag_parent, style, sz, color):
    b=sub(tag_parent,'tblBorders' if tag_parent.tag==W+'tblPr' else 'tcBorders')
    for side in ['top','left','bottom','right']: sub(b, side, val=style, sz=sz, space=0, color=color)
    return b
def run(p, text, sz=18, bold=False, color='777777', italic=False):
    r=sub(p,'r'); rp=sub(r,'rPr')
    if bold: sub(rp,'b')
    if italic: sub(rp,'i')
    sub(rp,'color',val=color); sub(rp,'sz',val=sz); sub(rp,'szCs',val=sz)
    t=sub(r,'t'); t.text=text; t.set('{http://www.w3.org/XML/1998/namespace}space','preserve'); return r
def cellp(tc, text, sz=18, bold=False, color='777777', keep=False):
    p=sub(tc,'p'); pp=sub(p,'pPr')
    if keep: sub(pp,'keepNext')
    sub(pp,'spacing',before=0,after=0); sub(pp,'jc',val='center'); run(p,text,sz,bold,color); return p
def tbl_base(widths):
    t=E('tbl'); tp=sub(t,'tblPr'); sub(tp,'tblW',w=sum(widths),type='dxa'); sub(tp,'jc',val='center')
    borders(tp,'nil',0,'auto'); sub(tp,'tblLayout',type='fixed')
    m=sub(tp,'tblCellMar'); sub(m,'left',w=60,type='dxa'); sub(m,'right',w=60,type='dxa')
    g=sub(t,'tblGrid')
    for w in widths: sub(g,'gridCol',w=w)
    return t
def tc(tr, w, span=1, dashed=False, fill=None, valign='center'):
    c=sub(tr,'tc'); cp=sub(c,'tcPr'); sub(cp,'tcW',w=w,type='dxa')
    if span>1: sub(cp,'gridSpan',val=span)
    b=sub(cp,'tcBorders')
    for side in ['top','left','bottom','right']:
        if dashed: sub(b,side,val='dashed',sz=8,space=0,color='999999')
        else: sub(b,side,val='nil')
    if fill: sub(cp,'shd',val='clear',color='auto',fill=fill)
    sub(cp,'vAlign',val=valign); return c
def tr(t, h=None, rule='exact'):
    r=sub(t,'tr'); rp=sub(r,'trPr'); sub(rp,'cantSplit')
    if h: sub(rp,'trHeight',val=h,hRule=rule)
    return r
def spacer_par(before=80):
    p=E('p'); pp=sub(p,'pPr'); sub(pp,'spacing',before=before,after=0,line=120,lineRule='auto'); rp=sub(pp,'rPr'); sub(rp,'sz',val=4); return p

def frame_single(wpx, hpx, text):
    Wd=int(wpx*15); H=int(hpx*15)
    t=tbl_base([Wd]); r=tr(t,H); c=tc(r,Wd,dashed=True); cellp(c,'IMAGINE: '+text,18,True,'777777',keep=True)
    return t
def frame_grid(wpx, groups, cols=8, frame_ratio=0.8, text_in='IMAGINE'):
    """groups: [(title or None, [names])]"""
    Wd=int(wpx*15); cw=Wd//cols; widths=[cw]*(cols-1)+[Wd-cw*(cols-1)]
    t=tbl_base(widths); fh=int(cw*frame_ratio)
    for title, names in groups:
        if title:
            r=tr(t,300,'atLeast'); c=tc(r,Wd,span=cols,fill='E3F1E8'); cellp(c,title,16,True,'1F5C45',keep=True)
        for k in range(0,len(names),cols):
            chunk=names[k:k+cols]
            r1=tr(t,fh); r2=tr(t,300,'atLeast')
            for j in range(cols):
                if j<len(chunk):
                    c=tc(r1,widths[j],dashed=True); cellp(c,text_in,12,False,'999999',keep=True)
                    c2=tc(r2,widths[j],valign='top'); cellp(c2,chunk[j],15,True,'2B3A33',keep=True)
                else:
                    c=tc(r1,widths[j]); cellp(c,'',12); c2=tc(r2,widths[j]); cellp(c2,'',12)
    return t
def frame_pair(wpx, hpx, texts, names):
    Wd=int(wpx*15); cw=Wd//len(texts); widths=[cw]*(len(texts)-1)+[Wd-cw*(len(texts)-1)]
    t=tbl_base(widths); r=tr(t,int(hpx*15)-450); r2=tr(t,300,'atLeast')
    for j,tx in enumerate(texts):
        c=tc(r,widths[j],dashed=True); cellp(c,'IMAGINE: '+tx,16,True,'777777',keep=True)
        c2=tc(r2,widths[j],valign='top'); cellp(c2,names[j],15,True,'2B3A33',keep=True)
    return t
def replace_img(d, cap, table, desc):
    p,q=d.img_par(cap)
    ext=p.find('.//'+WP+'extent')
    sp=spacer_par(); p.addprevious(sp); p.addprevious(table); p.getparent().remove(p)
    d.log.append(desc); return q

def replace_text(d, pat, rep, count=None, within=None):
    n=0
    for t in (within if within is not None else d.body).iter(W+'t'):
        if t.text and re.search(pat,t.text):
            t.text,k=re.subn(pat,rep,t.text); n+=k
    if count is not None: assert n==count,(pat,n)
    return n
def find_par(d, startswith):
    for p in d.paras():
        if txt(p).strip().startswith(startswith): return p
    raise Exception('par not found '+startswith)
def next_el(e, tag):
    n=e.getnext()
    while n is not None and n.tag!=W+tag: n=n.getnext()
    return n
def extpx(d, cap):
    p,_=d.img_par(cap); e=p.find('.//'+WP+'extent'); return int(e.get('cx'))/9525, int(e.get('cy'))/9525

R='/home/user/claude/'
def G(p): m=glob.glob(R+p); assert len(m)==1,p; return m[0]
LOG={}
def done(d, name): d.save('src/'+name); LOG[name]=d.log

# ---------- M1
d=Doc(G('Modul_1_*.docx'))
ex=find_par(d,'4.2    One, more'); insert_before(ex, snip('m1_attn')); d.log.append('M1 4.2: ATTENTION box (holiday names)')
done(d,'M01.docx')
for n in ['2','3','4','6','7']:
    d=Doc(G(f'Modul_{n}_*.docx')); done(d,f'M0{n}.docx')
# ---------- M5
d=Doc(G('Modul_5_*.docx'))
w,h=extpx(d,'Fig. 5.1 '); replace_img(d,'Fig. 5.1 ',frame_single(w,h,'harta României — regiunile istorice și orașele mari'),'Fig. 5.1 Harta României (M5, 5.1)')
w,h=extpx(d,'Fig. 5.14 '); replace_img(d,'Fig. 5.14 ',frame_single(w,h,'ouă roșii de Paști'),'Fig. 5.14 Ou roșu de Paști (M5, 5.6)')
done(d,'M05.docx')
# ---------- M8
d=Doc(G('Modul_8_*.docx'))
FR=['un măr','o pară','o banană','o portocală','o mandarină','o lămâie','struguri','o căpșună','cireșe','o piersică','o caisă','o prună','un pepene verde','un pepene galben','un kiwi','un ananas']
VG=['o roșie','un castravete','un cartof','o ceapă','un usturoi','un morcov','un ardei','un ardei iute','o varză','o vânătă','un dovlecel','o salată verde','o conopidă','ciuperci','mazăre','o ridiche']
QT=['un kilogram','½ kilogram','200 de grame','o bucată','un pachet','o sticlă','o cutie','o legătură']
w,h=extpx(d,'Fig. 8.1 '); q=replace_img(d,'Fig. 8.1 ',frame_grid(w,[(None,FR)]),'Fig. 8.1 Fructe — grilă 16 chenare (M8, 8.1)'); insert_after(q, snip('m8_fruit'))
w,h=extpx(d,'Fig. 8.2 '); q=replace_img(d,'Fig. 8.2 ',frame_grid(w,[(None,VG)]),'Fig. 8.2 Legume — grilă 16 chenare (M8, 8.1)'); insert_after(q, snip('m8_veg'))
w,h=extpx(d,'Fig. 8.3 '); replace_img(d,'Fig. 8.3 ',frame_grid(w,[(None,QT)]),'Fig. 8.3 Cantități / alimente — grilă 8 chenare (M8, 8.2)')
d.log.append('M8: tabele de vocabular fructe (16) și legume (16) cu plural')
done(d,'M08.docx')
# ---------- M9 (unchanged)
for k,p in [('C','Constructii'),('H','HoReCa'),('T','Transport'),('R','Comert'),('P','Productie')]:
    d=Doc(G(f'Modul_9_Domeniul_de_activitate_{p}*.docx')); done(d,f'M09{k}.docx')
# ---------- M10
d=Doc(G('Modul_10_*.docx'))
w,h=extpx(d,'Fig. 10.2 '); q=replace_img(d,'Fig. 10.2 ',frame_pair(w,h,['harta schematică a regiunilor istorice','stema României — scutul cu cinci câmpuri'],['harta regiunilor','stema României']),'Fig. 10.2 Harta regiunilor + stema României — 2 chenare (M10, 10.7)')
insert_after(q, snip('m10_stema')); d.log.append('M10: tabel cu simbolurile celor 5 câmpuri ale stemei')
done(d,'M10.docx')
# ---------- M11
d=Doc(G('Modul_11_*.docx'))
ZOO=['un leu','un tigru','un urs','un elefant','o girafă','o zebră','o maimuță','o gorilă','un hipopotam','un crocodil','un șarpe','un pinguin','un papagal']
WILD=['un urs','un lup','o vulpe','un cerb','o căprioară','un mistreț','un iepure','o veveriță']
PET=['un câine','o pisică','un papagal','un pește','un hamster']
w,h=extpx(d,'Fig. 11.2 '); q=replace_img(d,'Fig. 11.2 ',frame_grid(w,[('LA ZOO / AT THE ZOO',ZOO),('SĂLBATICE DIN ROMÂNIA / WILD IN ROMANIA',WILD),('DE COMPANIE / PETS',PET)]),'Fig. 11.2 Animale — grilă 26 chenare în 3 grupe (M11, 11.3)')
insert_after(q, snip('m11_animals')+snip('m11_dialog')); d.log.append('M11: tabel animale (3 grupe) + mini-dialog la zoo')
w,h=extpx(d,'Fig. 11.3 '); replace_img(d,'Fig. 11.3 ',frame_single(w,h,'harta României cu cele zece obiective turistice'),'Fig. 11.3 Harta obiectivelor turistice (M11, 11.4)')
MOD='11'
def tests22(d, mod):
    q20=find_par(d,'20.  '); t20=next_el(q20,'tbl'); insert_after(t20, snip(f'm{mod}_q21')+snip(f'm{mod}_q22'))
    for t in d.body.iter(W+'tbl'):
        c=t.find('.//'+W+'tc')
        if c is not None and re.match(r'1 – [abcd]$',txt(c)): old=t; break
    new=snip(f'm{mod}_key'); old.addprevious(new[0]); old.getparent().remove(old)
    replace_text(d,r'test \(20 questions\)','test (22 questions)',1)
    replace_text(d,r'20 de întrebări, 20 de puncte','22 de întrebări, 22 de puncte',1)
    replace_text(d,r'TOTAL: 20 de puncte','TOTAL: 22 de puncte',1)
    replace_text(d,r'(_{3,}\s*)/ 20(?![\d_])',r'\1/ 22',3)
    d.log.append(f'M{mod}: test cumulativ +2 itemi despre animale (21–22), cheia și punctajul actualizate la 22')
tests22(d,'11'); done(d,'M11.docx')
# ---------- M12
d=Doc(G('Modul_12_*.docx'))
FARM=['o vacă','un taur','un vițel','un porc','o oaie','un berbec','o capră','un cal','un măgar','o găină','un cocoș','un pui','o rață','o gâscă','un curcan','un iepure']
w,h=extpx(d,'Fig. 12.3 '); q=replace_img(d,'Fig. 12.3 ',frame_grid(w,[(None,FARM)]),'Fig. 12.3 Animalele din gospodărie — grilă 16 chenare (M12, 12.3)')
insert_after(q, snip('m12_farm')); d.log.append('M12: tabel animale din gospodărie cu coloana „ce ne dă”')
tests22(d,'12'); done(d,'M12.docx')
# ---------- M13
d=Doc(G('Modul_13_*.docx'))
w,h=extpx(d,'Fig. 13.3 '); q=replace_img(d,'Fig. 13.3 ',frame_single(w,h,'harta liniilor de metrou din București (M1–M5)'),'Fig. 13.3 Harta metroului (M13, 13.3)')
insert_after(q, snip('m13_metro')); d.log.append('M13: tabel cu liniile de metrou, capetele de linie și stațiile de legătură')
done(d,'M13.docx')
# ---------- M14
d=Doc(G('Modul_14_*.docx'))
n=0
for t in d.body.iter(W+'t'):
    if t.text=='24 ianuarie': t.text='24 Ianuarie'; n+=1
    elif t.text=='1 decembrie' and n<3: t.text='1 Decembrie'; n+=1
print('M14 caps runs changed', n)
# restrict: only in the "national days" row of sheet 6 — verify
row=[r for r in d.body.iter(W+'tr') if txt(r).startswith('national days')]
print('national row:', txt(row[0])[:120] if row else None)
replace_text(d,r'days and months with a ','days and months with a ',1)
for t in d.body.iter(W+'t'):
    if t.text and t.text.startswith('stress has no written mark; days and months with a '):
        pass
for p in d.paras():
    if txt(p).startswith('stress has no written mark'):
        rs=p.findall(W+'r'); last=rs[-1]
        for text,b in [(' — but holiday names: ',False),('1 Decembrie, 1 Mai',True),(' (M1, 4.2)',False)]:
            r=copy.deepcopy(last); t=r.find(W+'t'); t.text=text; t.set('{http://www.w3.org/XML/1998/namespace}space','preserve')
            rp=r.find(W+'rPr')
            if rp is not None:
                for bb in rp.findall(W+'b'): rp.remove(bb)
                if b: rp.insert(0,E('b'))
            last.addnext(r); last=r
        break
d.log.append('M14 fișa 1: notă despre majuscula la numele sărbătorilor')
d.log.append('M14 fișa 6: 24 Ianuarie, 1 Decembrie cu majusculă (nume de sărbători)')
for r in d.body.iter(W+'tr'):
    cs=[txt(c) for c in r.iter(W+'tc')]
    if len(cs)>=5 and cs[0] in ('11','12') and '/ 20' in cs[4]:
        for t in r.iter(W+'t'):
            if t.text and '/ 20' in t.text: t.text=t.text.replace('/ 20','/ 22')
d.log.append('M14 fișa de închidere: testele M11 și M12 notate / 22')
done(d,'M14.docx')
import json; json.dump(LOG,open('src/log.json','w'),ensure_ascii=False,indent=1)
print('done')

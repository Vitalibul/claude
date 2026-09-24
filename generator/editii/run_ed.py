import sys, os, re, json, subprocess, glob
import pymupdf
sys.path.insert(0, os.path.dirname(__file__))
from assemble import build, put_toc

ed = sys.argv[1]
S = 'src/'
base = [S + f'M0{i}.docx' for i in range(1, 9)]
tail = [S + f'M{i}.docx' for i in range(10, 15)]
m9 = {'complet': ['M09C', 'M09H', 'M09T', 'M09R', 'M09P'], 'C': ['M09C'], 'H': ['M09H'], 'T': ['M09T'], 'R': ['M09R'], 'P': ['M09P']}[ed]
modules = base + [S + x + '.docx' for x in m9] + tail
work = f'build_{ed}'
merged, entries, kinds, _ = build(ed, modules, os.path.join(work, 'x'), work)

def render(docx):
    out = os.path.dirname(docx)
    subprocess.run(['soffice', '--headless', '--convert-to', 'pdf', '--outdir', out, docx], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=1500)
    return pymupdf.open(docx[:-5] + '.pdf')
norm = lambda s: re.sub(r'\s+', ' ', s).strip()

def compute(pdf):
    pages = [norm(p.get_text()) for p in pdf]
    toc0 = next(i for i, t in enumerate(pages) if 'CUPRINS DETALIAT' in t)
    i = toc0 + 1
    while not ('SUPORT DE CURS' in pages[i] and 'LIMBA ROMÂNĂ PENTRU STRĂINI' in pages[i]): i += 1
    cur = i; where = {}
    for lvl, t, bm in entries:
        key = norm(t)[:28]
        j = cur
        while j < len(pages) and key not in pages[j]: j += 1
        if j >= len(pages): raise Exception('heading not found: ' + t)
        where[bm] = j; cur = j
    mods = [where[bm] for lvl, t, bm in entries if lvl == 1]
    numbered = [False] * len(pages)
    for j in range(toc0, len(pages)): numbered[j] = True
    for k, s in enumerate(mods):
        e = mods[k + 1] if k + 1 < len(mods) else len(pages)
        det = next(j for j in range(s, e) if 'SECȚIUNE DETAȘABILĂ' in pages[j])
        for j in range(det, e): numbered[j] = False
    disp = {}; c = 0
    for j in range(len(pages)):
        if numbered[j]: c += 1; disp[j] = c
    nums = {bm: disp.get(j) for bm, j in where.items()}
    starts = []; mk = 0
    for kd in kinds:
        if kd == 'toc': starts.append(1)
        elif kd == 'body': starts.append(disp[mods[mk]]); mk += 1
        else: starts.append(None)
    return nums, starts, numbered, where

tmp = os.path.join(work, 'pass1.docx')
put_toc(merged, entries, {bm: 888 for _, _, bm in entries}, [None] * len(kinds), tmp)
pdf = render(tmp)
nums, starts, numbered, where = compute(pdf)
names = {'complet': 'Curs_Limba_Romana_pentru_Straini_Modulele_1-14_Suport_de_Curs_Complet.docx', 'C': 'Curs_Limba_Romana_Straini_Constructii.docx', 'H': 'Curs_Limba_Romana_Straini_HoReCa.docx',
         'T': 'Curs_Limba_Romana_Straini_Transport_Logistica_Curierat.docx', 'R': 'Curs_Limba_Romana_Straini_Comert_Retail.docx', 'P': 'Curs_Limba_Romana_Straini_Productie_Industrie.docx'}
final = os.path.join(work, names[ed])
for it in range(4):
    put_toc(merged, entries, nums, starts, final)
    pdf2 = render(final)
    nums2, starts2, numbered2, where2 = compute(pdf2)
    ok = nums2 == nums and starts2 == starts
    if ok: break
    nums, starts = nums2, starts2
# check footers: the last line of a numbered page is its number
bad = []
pages = [p.get_text().strip().split('\n') for p in pdf2]
c = 0
for j, lines in enumerate(pages):
    if numbered2[j]:
        c += 1
        if str(c) not in lines[-3:]: bad.append((j + 1, c, lines[-3:]))
    else:
        if any(re.fullmatch(r'\d{1,3}', l.strip()) for l in lines[-2:]): bad.append((j + 1, 'unnumbered?', lines[-2:]))
blank = [j + 1 for j, p in enumerate(pdf2) if len(re.sub(r'\s', '', p.get_text())) < 60]
rep = {'edition': ed, 'pages': len(pdf2), 'numbered_pages': sum(numbered2), 'stable': ok, 'footer_mismatch': bad[:10], 'n_bad': len(bad), 'near_blank_pages': blank,
       'toc_entries': len(entries), 'levels': {l: sum(1 for e in entries if e[0] == l) for l in range(1, 5)}}
json.dump(rep, open(os.path.join(work, 'report.json'), 'w'), ensure_ascii=False, indent=1)
print(json.dumps(rep, ensure_ascii=False))

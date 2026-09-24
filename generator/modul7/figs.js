const F = "font-family=\"Arial, 'Liberation Sans', 'DejaVu Sans', sans-serif\"";
const DK='#1F5C45', GR='#2E7D55', LG='#E3F1E8', INK='#2B3A33';
const svg=(w,h,body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
const T=(x,y,s,txt,o={})=>`<text x="${x}" y="${y}" ${F} font-size="${s}" text-anchor="${o.a||'middle'}" fill="${o.c||INK}"${o.b?' font-weight="bold"':''}${o.i?' font-style="italic"':''}>${txt}</text>`;
const out={};

// ---------- 7.1 family tree
{
  const W=920,H=545,w=152,h=120;
  const man={f:'#DCE9F5',s:'#2F6DA3'}, wom={f:'#F8E3E8',s:'#B04A64'};
  const person=(cx,y,col)=>`<circle cx="${cx}" cy="${y+30}" r="15" fill="${col.s}"/><path d="M${cx-25},${y+72} q0,-26 25,-26 q25,0 25,26 z" fill="${col.s}"/>`;
  const node=(cx,y,role,en,name,col,me)=>`<rect x="${cx-w/2}" y="${y}" width="${w}" height="${h}" rx="12" fill="${me?'#FFF4D6':col.f}" stroke="${me?'#C9A227':col.s}" stroke-width="${me?4:2}"/>${person(cx,y,col)}${T(cx,y+92,17,role,{b:1})}${T(cx,y+111,12.5,`${name} · <tspan font-style="italic">${en}</tspan>`,{c:'#555'})}`;
  const r1=15,r2=205,r3=405, ln=(x1,y1,x2,y2)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#7A8A82" stroke-width="3"/>`;
  const ring=(x,y)=>`<circle cx="${x-5}" cy="${y}" r="7" fill="none" stroke="#C9A227" stroke-width="3"/><circle cx="${x+5}" cy="${y}" r="7" fill="none" stroke="#C9A227" stroke-width="3"/>`;
  let b='';
  // couples
  b+=ln(260,r1+60,280,r1+60)+ring(270,r1+60)+ln(730,r1+60,750,r1+60)+ring(740,r1+60);
  b+=ln(170,r2+60,190,r2+60)+ring(180,r2+60)+ln(510,r2+60,530,r2+60)+ring(520,r2+60);
  // children links
  b+=ln(270,r1+68,270,r1+h+35)+ln(100,r1+h+35,440,r1+h+35)+ln(100,r1+h+35,100,r2)+ln(440,r1+h+35,440,r2);
  b+=ln(740,r1+68,740,r1+h+35)+ln(600,r1+h+35,800,r1+h+35)+ln(600,r1+h+35,600,r2)+ln(800,r1+h+35,800,r2);
  b+=ln(180,r2+68,180,r3);
  b+=ln(520,r2+68,520,r2+h+40)+ln(440,r2+h+40,600,r2+h+40)+ln(440,r2+h+40,440,r3)+ln(600,r2+h+40,600,r3);
  b+=node(190,r1,'tatăl','father','Raj',man)+node(350,r1,'mama','mother','Meena',wom)+node(660,r1,'socrul','father-in-law','Gopal',man)+node(820,r1,'soacra','mother-in-law','Kamala',wom);
  b+=node(100,r2,'fratele','brother','Vijay',man)+node(260,r2,'cumnata','sister-in-law','Anita',wom)+node(440,r2,'EU','me','Suresh',man,1)+node(600,r2,'soția','wife','Lakshmi',wom)+node(800,r2,'cumnatul','brother-in-law','Mohan',man);
  b+=node(180,r3,'nepotul','nephew','Rohan',man)+node(440,r3,'fiul','son','Arun',man)+node(600,r3,'fiica','daughter','Priya',wom);
  // legend
  b+=`<g transform="translate(700,425)">${ring(12,12)}${T(30,17,14,'= căsătoriți / married',{a:'start'})}<rect x="2" y="38" width="20" height="14" rx="3" fill="#DCE9F5" stroke="#2F6DA3" stroke-width="2"/>${T(30,50,14,'bărbat / man',{a:'start'})}<rect x="2" y="64" width="20" height="14" rx="3" fill="#F8E3E8" stroke="#B04A64" stroke-width="2"/>${T(30,76,14,'femeie / woman',{a:'start'})}</g>`;
  out.family=svg(W,H,b);
}
// ---------- 7.2 marital status
{
  const W=920,H=190; let b='';
  const lab=(cx,ro,en)=>T(cx,150,19,ro,{b:1})+T(cx,174,15,en,{i:1,c:'#555'});
  const ring=(x,y,r=26,c='#C9A227')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${c}" stroke-width="8"/>`;
  const card=(cx)=>`<rect x="${cx-105}" y="8" width="210" height="178" rx="14" fill="#FAFAF7" stroke="#D8DED9" stroke-width="2"/>`;
  const xs=[115,345,575,805];
  b+=card(xs[0])+ring(xs[0]-16,70)+ring(xs[0]+16,70)+lab(xs[0],'căsătorit(ă)','married');
  b+=card(xs[1])+`<circle cx="${xs[1]}" cy="50" r="18" fill="${GR}"/><path d="M${xs[1]-32},112 q0,-42 32,-42 q32,0 32,42 z" fill="${GR}"/>`+lab(xs[1],'necăsătorit(ă)','not married, single');
  b+=card(xs[2])+ring(xs[2]-34,70)+ring(xs[2]+34,70)+`<path d="M${xs[2]},36 l-8,14 l10,8 l-10,10 l10,10 l-8,14" fill="none" stroke="#C0392B" stroke-width="4"/>`+lab(xs[2],'divorțat(ă)','divorced');
  b+=card(xs[3])+ring(xs[3],70)+`<path d="M${xs[3]+18},34 l14,-14 l14,14 l-8,40 l-6,-8 l-6,8 z" fill="#333"/>`+lab(xs[3],'văduv(ă)','widowed');
  out.status=svg(W,H,b);
}
// ---------- 7.4 menu
{
  const W=900,H=610; let b=`<rect x="4" y="4" width="${W-8}" height="${H-8}" rx="16" fill="#FFF8E6" stroke="${DK}" stroke-width="5"/><rect x="18" y="18" width="${W-36}" height="${H-36}" rx="10" fill="none" stroke="#C9A227" stroke-width="2"/>`;
  b+=T(W/2,70,34,'RESTAURANT LA MASA',{b:1,c:DK})+T(W/2,102,20,'— MENIU —',{c:'#8A6D1B',b:1});
  const sec=(x,y,title)=>T(x,y,19,title,{a:'start',b:1,c:'#fff'}).replace('<text','<text')+'';
  const block=(x,y,title,items)=>{let s=`<rect x="${x}" y="${y-22}" width="400" height="30" rx="6" fill="${GR}"/>`+T(x+12,y,18,title,{a:'start',b:1,c:'#fff'});
    items.forEach((it,i)=>{const yy=y+30+i*27; s+=T(x+8,yy,17,it[0]+(it[1]?` <tspan fill="#777" font-size="14">${it[1]}</tspan>`:''),{a:'start'})+`<line x1="${x+8}" y1="${yy+6}" x2="${x+392}" y2="${yy+6}" stroke="#E5D9B6" stroke-width="1" stroke-dasharray="3,3"/>`+T(x+392,yy,17,it[2],{a:'end',b:1});});
    return s;};
  b+=block(40,150,'CIORBE ȘI SUPE',[['Ciorbă de perișoare','400 g','22 lei'],['Ciorbă de legume','400 g','18 lei'],['Ciorbă de burtă','400 g','26 lei']]);
  b+=block(40,285,'FEL PRINCIPAL',[['Sarmale cu mămăligă','350 g','38 lei'],['Sarmale de post','350 g','32 lei'],['Mici cu muștar','4 buc.','30 lei'],['Tochitură cu mămăligă','400 g','45 lei'],['Friptură de pui','250 g','34 lei']]);
  b+=block(460,150,'GARNITURI',[['Cartofi prăjiți','200 g','12 lei'],['Orez','200 g','10 lei'],['Pâine','1 porție','3 lei']]);
  b+=block(460,285,'SALATE ȘI DESERT',[['Salată de roșii','250 g','14 lei'],['Salată de vinete','200 g','18 lei'],['Papanași','250 g','25 lei']]);
  b+=block(460,420,'BĂUTURI',[['Apă plată / minerală','0,5 l','9 lei'],['Suc de portocale','0,33 l','10 lei'],['Cafea · Ceai','','9 lei'],['Bere fără alcool / Bere','0,5 l','14 lei']]);
  b+=`<rect x="40" y="455" width="400" height="92" rx="8" fill="#FFF4D6" stroke="#C9A227" stroke-width="2"/>`+T(240,482,18,'MENIUL ZILEI',{b:1,c:'#8A6D1B'})+T(240,507,15,'luni – vineri, 12:00 – 15:00')+T(240,530,15,'ciorbă + fel principal + pâine: 40 lei');
  b+=T(W/2,H-32,14,'Lista de alergeni: la ospătar  ·  Preparatele de post nu conțin carne, lapte sau ouă',{c:'#555',i:1});
  out.menu=svg(W,H,b);
}
// ---------- 7.5 bill
{
  const W=420,H=500; let b=`<path d="M20,10 H400 V470 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 l-19,20 l-19,-20 z" fill="#FFFFFF" stroke="#555" stroke-width="2"/>`;
  b+=T(210,50,20,'RESTAURANT LA MASA',{b:1})+T(210,80,18,'NOTĂ DE PLATĂ',{b:1,c:DK})+T(210,104,14,'Masa 5 · 2 persoane',{c:'#555'});
  b+=`<line x1="40" y1="120" x2="380" y2="120" stroke="#999" stroke-dasharray="5,4"/>`;
  const it=[['1 × Ciorbă de legume','18,00'],['1 × Sarmale de post','32,00'],['1 × Apă plată 0,5 l','9,00'],['1 × Pâine','3,00'],['1 × Mici cu muștar','30,00'],['1 × Cartofi prăjiți','12,00'],['1 × Bere 0,5 l','14,00']];
  it.forEach((r,i)=>{b+=T(45,150+i*30,16,r[0],{a:'start'})+T(375,150+i*30,16,r[1],{a:'end'});});
  b+=`<line x1="40" y1="362" x2="380" y2="362" stroke="#333" stroke-width="2"/>`+T(45,395,22,'TOTAL',{a:'start',b:1})+T(375,395,22,'118,00 lei',{a:'end',b:1,c:'#C0392B'});
  b+=T(210,435,15,'Vă mulțumim! Vă așteptăm cu drag!',{i:1,c:'#555'});
  out.bill=svg(W,H,b);
}
// ---------- 7.6 faces
{
  const W=930,H=230; let b='';
  const faces=[['fericit','fericită','happy'],['trist','tristă','sad'],['obosit','obosită','tired'],['supărat','supărată','upset, angry'],['îngrijorat','îngrijorată','worried'],['mulțumit','mulțumită','pleased, satisfied']];
  faces.forEach((f,i)=>{const cx=80+i*154, cy=80, k=f[0];
    const fill=k==='supărat'?'#F6B39A':'#FFD966';
    let s=`<circle cx="${cx}" cy="${cy}" r="62" fill="${fill}" stroke="${INK}" stroke-width="4"/>`;
    const eye=(x)=>`<circle cx="${x}" cy="${cy-12}" r="7" fill="${INK}"/>`;
    const L=cx-22,R=cx+22,st=`fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"`;
    if(k==='fericit') s+=eye(L)+eye(R)+`<path d="M${cx-32},${cy+14} Q${cx},${cy+50} ${cx+32},${cy+14}" ${st}/>`;
    if(k==='trist') s+=eye(L)+eye(R)+`<path d="M${L-10},${cy-30} L${L+8},${cy-36}" ${st}/><path d="M${R+10},${cy-30} L${R-8},${cy-36}" ${st}/><path d="M${cx-26},${cy+34} Q${cx},${cy+12} ${cx+26},${cy+34}" ${st}/><path d="M${R+2},${cy} q-6,12 0,16 q6,-4 0,-16z" fill="#4A90D9"/>`;
    if(k==='obosit') s+=`<path d="M${L-10},${cy-10} L${L+10},${cy-10}" ${st}/><path d="M${R-10},${cy-10} L${R+10},${cy-10}" ${st}/><path d="M${L-10},${cy-18} Q${L},${cy-14} ${L+10},${cy-18}" fill="none" stroke="${INK}" stroke-width="3"/><path d="M${R-10},${cy-18} Q${R},${cy-14} ${R+10},${cy-18}" fill="none" stroke="${INK}" stroke-width="3"/><ellipse cx="${cx}" cy="${cy+26}" rx="12" ry="9" fill="${INK}"/>`+T(cx+50,cy-44,24,'z',{b:1,c:'#2F6DA3'})+T(cx+64,cy-62,18,'z',{b:1,c:'#2F6DA3'});
    if(k==='supărat') s+=eye(L)+eye(R)+`<path d="M${L-12},${cy-34} L${L+10},${cy-24}" ${st}/><path d="M${R+12},${cy-34} L${R-10},${cy-24}" ${st}/><path d="M${cx-26},${cy+32} Q${cx},${cy+14} ${cx+26},${cy+32}" ${st}/>`;
    if(k==='îngrijorat') s+=eye(L)+eye(R)+`<path d="M${L-10},${cy-28} L${L+8},${cy-34}" ${st}/><path d="M${R+10},${cy-28} L${R-8},${cy-34}" ${st}/><path d="M${cx-26},${cy+28} q9,-10 17,0 q9,10 17,0 q9,-10 17,0" ${st}/><path d="M${cx+48},${cy-40} q-8,14 0,18 q8,-4 0,-18z" fill="#4A90D9"/>`;
    if(k==='mulțumit') s+=`<path d="M${L-10},${cy-8} Q${L},${cy-20} ${L+10},${cy-8}" ${st}/><path d="M${R-10},${cy-8} Q${R},${cy-20} ${R+10},${cy-8}" ${st}/><path d="M${cx-22},${cy+18} Q${cx},${cy+34} ${cx+22},${cy+18}" ${st}/><circle cx="${L-8}" cy="${cy+12}" r="8" fill="#F4A6A6" opacity=".7"/><circle cx="${R+8}" cy="${cy+12}" r="8" fill="#F4A6A6" opacity=".7"/>`;
    s+=T(cx,cy+92,18,`${f[0]}(ă)`,{b:1})+T(cx,cy+114,15,f[2],{i:1,c:'#555'});
    b+=s;});
  out.faces=svg(W,H,b);
}
// ---------- 7.7 mi-e icons
{
  const W=930,H=200; let b='';
  const items=[['Mi-e foame.','I am hungry.'],['Mi-e sete.','I am thirsty.'],['Mi-e frig.','I am cold.'],['Mi-e cald.','I am hot.'],['Mi-e somn.','I am sleepy.'],['Mi-e dor de...','I miss ...']];
  items.forEach((it,i)=>{const cx=80+i*154, cy=70; let s=`<circle cx="${cx}" cy="${cy}" r="58" fill="${LG}" stroke="${GR}" stroke-width="3"/>`;
    if(i==0) s+=`<ellipse cx="${cx}" cy="${cy+6}" rx="32" ry="30" fill="#fff" stroke="${INK}" stroke-width="3"/><ellipse cx="${cx}" cy="${cy+6}" rx="18" ry="16" fill="none" stroke="#BBB" stroke-width="2"/><path d="M${cx-44},${cy-26} v24 M${cx-50},${cy-26} v14 q6,6 12,0 v-14 M${cx-44},${cy-2} v40" stroke="${INK}" stroke-width="3" fill="none"/><path d="M${cx+44},${cy-28} q10,20 0,34 v36" stroke="${INK}" stroke-width="4" fill="none"/>`;
    if(i==1) s+=`<path d="M${cx-22},${cy-34} h44 l-6,72 h-32 z" fill="#fff" stroke="${INK}" stroke-width="3"/><path d="M${cx-18},${cy-8} h36 l-4,42 h-28 z" fill="#8EC5F0" opacity=".8"/><path d="M${cx+34},${cy-40} q-10,16 0,20 q10,-4 0,-20z" fill="#4A90D9"/>`;
    if(i==2) s+=[0,60,120].map(a=>`<line x1="${cx-30}" y1="${cy}" x2="${cx+30}" y2="${cy}" stroke="#2F6DA3" stroke-width="6" stroke-linecap="round" transform="rotate(${a} ${cx} ${cy})"/>`).join('')+`<circle cx="${cx}" cy="${cy}" r="8" fill="#2F6DA3"/>`;
    if(i==3) s+=`<circle cx="${cx}" cy="${cy}" r="18" fill="#F5B82E"/>`+[0,45,90,135,180,225,270,315].map(a=>`<line x1="${cx}" y1="${cy-26}" x2="${cx}" y2="${cy-38}" stroke="#F5B82E" stroke-width="5" stroke-linecap="round" transform="rotate(${a} ${cx} ${cy})"/>`).join('');
    if(i==4) s+=`<path d="M${cx+4},${cy-30} a30,30 0 1,0 22,44 a24,24 0 1,1 -22,-44z" fill="#6C7FD1"/>`+T(cx+24,cy-12,20,'Z',{b:1,c:INK})+T(cx+36,cy-28,15,'z',{b:1,c:INK});
    if(i==5) s+=`<path d="M${cx},${cy+30} l-28,-28 a16,16 0 0,1 28,-22 a16,16 0 0,1 28,22 z" fill="#D9534F"/>`;
    s+=T(cx,cy+88,17,it[0],{b:1})+T(cx,cy+110,15,it[1],{i:1,c:'#555'});
    b+=s;});
  out.mie=svg(W,H,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);
console.log(Object.keys(out));

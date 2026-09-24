const K=require('./kit');const {T,INK,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
const st=`stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
const eyes=(dx,y,r=3.2)=>`<circle cx="${-dx}" cy="${y}" r="${r}" fill="${INK}"/><circle cx="${dx}" cy="${y}" r="${r}" fill="${INK}"/>`;
// ---------- animal icons (centred at 0,0, about ±44) ----------
const A={
 leu:`<circle r="40" fill="#B8742A" ${st}/><circle r="25" fill="#F2B35B" ${st}/>`+eyes(9,-5)+`<path d="M-6,5 h12 l-6,6z" fill="${INK}"/><path d="M-7,15 q7,5 14,0" fill="none" ${st}/>`,
 tigru:`<circle cx="-24" cy="-24" r="9" fill="#F28C28" ${st}/><circle cx="24" cy="-24" r="9" fill="#F28C28" ${st}/><circle r="33" fill="#F28C28" ${st}/><ellipse cy="12" rx="17" ry="12" fill="#fff" ${st}/><path d="M0,-32 v10 M-10,-30 l3,9 M10,-30 l-3,9 M-33,-2 h11 M-32,8 h10 M33,-2 h-11 M32,8 h-10" ${st}/>`+eyes(11,-6)+`<path d="M-5,6 h10 l-5,5z" fill="${INK}"/>`,
 urs:`<circle cx="-24" cy="-24" r="11" fill="#7B4A2A" ${st}/><circle cx="24" cy="-24" r="11" fill="#7B4A2A" ${st}/><circle r="32" fill="#7B4A2A" ${st}/><ellipse cy="12" rx="15" ry="11" fill="#C49A6C" ${st}/>`+eyes(11,-6)+`<ellipse cy="6" rx="6" ry="4" fill="${INK}"/>`,
 elefant:`<ellipse cx="-28" cy="-2" rx="18" ry="24" fill="#9EA7AD" ${st}/><ellipse cx="28" cy="-2" rx="18" ry="24" fill="#9EA7AD" ${st}/><circle cy="-6" r="22" fill="#B0BEC5" ${st}/><path d="M-7,6 q-2,20 4,34 q4,4 8,0 q-4,-14 2,-34z" fill="#B0BEC5" ${st}/>`+eyes(9,-10,3),
 girafa:`<path d="M-8,40 l4,-50 h14 l2,50z" fill="#F4C430" ${st}/><ellipse cx="4" cy="-20" rx="22" ry="13" fill="#F4C430" ${st}/><path d="M-4,-31 v-11 M8,-31 v-11" ${st}/><circle cx="-4" cy="-43" r="3" fill="#8D5524"/><circle cx="8" cy="-43" r="3" fill="#8D5524"/><circle cx="0" cy="8" r="4" fill="#B5651D"/><circle cx="6" cy="24" r="4" fill="#B5651D"/><circle cx="-2" cy="-4" r="3" fill="#B5651D"/><circle cx="-6" cy="-22" r="3" fill="${INK}"/><circle cx="20" cy="-20" r="2" fill="${INK}"/>`,
 maimuta:`<circle cx="-30" r="11" fill="#E6BE8A" ${st}/><circle cx="30" r="11" fill="#E6BE8A" ${st}/><circle r="30" fill="#8D5524" ${st}/><path d="M0,-12 q-24,-14 -22,8 q0,26 22,28 q22,-2 22,-28 q2,-22 -22,-8z" fill="#E6BE8A" ${st}/>`+eyes(9,-2)+`<path d="M-8,12 q8,6 16,0" fill="none" ${st}/>`,
 gorila:`<circle r="33" fill="#3E3E3E" ${st}/><path d="M-20,-8 q20,-12 40,0 q2,30 -20,34 q-22,-4 -20,-34z" fill="#8A8A8A" ${st}/><path d="M-18,-12 q18,-8 36,0" fill="none" stroke="#222" stroke-width="4"/>`+eyes(8,-4)+`<path d="M-6,10 h12" ${st}/>`,
 zebra:`<path d="M-10,-40 l-4,-10 l8,6 M10,-40 l4,-10 l-8,6" fill="#fff" ${st}/><path d="M-16,-38 q16,-8 32,0 l4,58 q-20,16 -40,0z" fill="#fff" ${st}/><path d="M-15,-26 h30 M-16,-14 h32 M-17,-2 h34 M-17,10 h34" stroke="${INK}" stroke-width="4"/><ellipse cy="26" rx="15" ry="9" fill="#555" ${st}/>`+eyes(9,-18,2.8).replace(/fill="#2B3A33"/g,'fill="#D9412B"'),
 lup:`<path d="M-30,-40 l12,24 M30,-40 l-12,24" ${st}/><path d="M-32,-42 l16,14 l32,0 l16,-14 l2,28 l-34,44 l-34,-44z" fill="#90A4AE" ${st}/><path d="M-12,4 l12,26 l12,-26z" fill="#ECEFF1" ${st}/>`+eyes(11,-10)+`<circle cy="26" r="4" fill="${INK}"/>`,
 vulpe:`<path d="M-32,-42 l16,14 l32,0 l16,-14 l2,28 l-34,44 l-34,-44z" fill="#F07C1B" ${st}/><path d="M-30,-10 l30,40 l30,-40 q-14,10 -30,6 q-16,4 -30,-6z" fill="#fff" ${st}/>`+eyes(11,-12)+`<circle cy="26" r="4" fill="${INK}"/>`,
 caine:`<circle r="28" fill="#E8C48A" ${st}/><path d="M-26,-18 q-18,4 -12,34 q10,2 14,-10z M26,-18 q18,4 12,34 q-10,2 -14,-10z" fill="#8D5524" ${st}/><ellipse cy="12" rx="12" ry="9" fill="#fff" ${st}/>`+eyes(10,-6)+`<ellipse cy="7" rx="5" ry="3.5" fill="${INK}"/><path d="M0,18 q3,8 6,0" fill="#F48FB1" ${st}/>`,
 pisica:`<path d="M-30,-10 l2,-30 l18,14 M30,-10 l-2,-30 l-18,14" fill="#F4A261" ${st}/><circle cy="2" r="28" fill="#F4A261" ${st}/>`+`<ellipse cx="-10" cy="-2" rx="4" ry="6" fill="${INK}"/><ellipse cx="10" cy="-2" rx="4" ry="6" fill="${INK}"/><path d="M-4,10 h8 l-4,4z" fill="#E57373"/><path d="M-40,8 h24 M-40,16 l24,-4 M40,8 h-24 M40,16 l-24,-4" stroke="${INK}" stroke-width="1.5"/>`,
 papagal:`<path d="M-4,10 q-24,10 -10,34 l14,-6z" fill="#E53935" ${st}/><circle cy="-6" r="26" fill="#43A047" ${st}/><path d="M12,-12 q22,0 16,22 q-6,-8 -16,-6z" fill="#FFC107" ${st}/><circle cx="4" cy="-14" r="7" fill="#fff" ${st}/><circle cx="5" cy="-14" r="3" fill="${INK}"/>`,
 peste:`<ellipse cx="-4" rx="30" ry="18" fill="#4FC3F7" ${st}/><path d="M24,0 l18,-16 v32z" fill="#0288D1" ${st}/><path d="M-4,-16 q8,-12 16,-2" fill="#0288D1" ${st}/><circle cx="-20" cy="-4" r="4" fill="${INK}"/><path d="M-6,-12 q6,12 0,24" fill="none" ${st}/>`,
 cerb:`<path d="M-12,-20 l-14,-24 m6,10 l-16,-2 m10,-4 l-4,-14 M12,-20 l14,-24 m-6,10 l16,-2 m-10,-4 l4,-14" stroke="${INK}" stroke-width="3.5" stroke-linecap="round" fill="none"/><ellipse cx="-22" cy="-12" rx="10" ry="5" fill="#A0522D" ${st}/><ellipse cx="22" cy="-12" rx="10" ry="5" fill="#A0522D" ${st}/><path d="M-16,-18 q16,-8 32,0 l-4,40 q-12,12 -24,0z" fill="#A0522D" ${st}/><ellipse cy="26" rx="9" ry="6" fill="${INK}"/>`+eyes(8,-6),
 mistret:`<path d="M-22,-24 l4,-14 l10,10 M22,-24 l-4,-14 l-10,10" fill="#5D4037" ${st}/><circle cy="-4" r="30" fill="#5D4037" ${st}/><ellipse cy="16" rx="16" ry="12" fill="#8D6E63" ${st}/><circle cx="-5" cy="16" r="3" fill="${INK}"/><circle cx="5" cy="16" r="3" fill="${INK}"/><path d="M-16,20 q-6,-2 -8,-12 M16,20 q6,-2 8,-12" stroke="#fff" stroke-width="4" fill="none"/>`+`<circle cx="-10" cy="-10" r="3" fill="#fff"/><circle cx="10" cy="-10" r="3" fill="#fff"/>`,
};
{ const rows=[[['leu','the lion','leu','Z'],['tigru','the tiger','tigru','Z'],['elefant','the elephant','elefant','Z'],['girafă','the giraffe','girafa','Z'],['maimuță','the monkey','maimuta','Z'],['gorilă','the gorilla','gorila','Z'],['zebră','the zebra','zebra','Z'],['vulpe','the fox','vulpe','Z']],
   [['urs','the bear','urs','W'],['lup','the wolf','lup','W'],['cerb','the red deer','cerb','W'],['mistreț','the wild boar','mistret','W'],['câine','the dog','caine','D'],['pisică','the cat','pisica','D'],['papagal','the parrot','papagal','D'],['pește','the fish','peste','D']]];
  const bg={Z:'#FFF3C4',W:'#D6E8F7',D:'#DCEFE2'};const cw=118,rh=178;let b='';
  const leg=[['Z','la zoo · at the zoo'],['W','sălbatice din România (și la zoo) · wild in Romania'],['D','domestice · pets']];
  leg.forEach((l,i)=>{const x=10+[0,210,640][i];b+=`<rect x="${x}" y="8" width="22" height="22" rx="11" fill="${bg[l[0]]}" stroke="#999"/>`+T(x+30,25,14,l[1],{a:'start',b:1});});
  rows.forEach((r,j)=>r.forEach((it,i)=>{const cx=cw/2+i*cw,cy=100+j*rh;b+=`<circle cx="${cx}" cy="${cy}" r="52" fill="${bg[it[3]]}"/><g transform="translate(${cx},${cy})">${A[it[2]]}</g>`+T(cx,cy+76,15,it[0],{b:1})+T(cx,cy+93,12,it[1],{i:1,c:'#555'});}));
  out.animale=K.svg(cw*8,48+rh*2+10,b);
}
// ---------- transport between cities ----------
{ const ic={
  tren:`<rect x="-44" y="-26" width="88" height="44" rx="10" fill="#1565C0" ${st}/><rect x="-36" y="-18" width="20" height="16" fill="#E3F2FD" ${st}/><rect x="-10" y="-18" width="20" height="16" fill="#E3F2FD" ${st}/><rect x="16" y="-18" width="20" height="16" fill="#E3F2FD" ${st}/><circle cx="-26" cy="24" r="7" fill="${INK}"/><circle cx="26" cy="24" r="7" fill="${INK}"/><path d="M-50,34 h100" ${st}/>`,
  autocar:`<rect x="-46" y="-28" width="92" height="50" rx="8" fill="${YL}" ${st}/><rect x="-38" y="-20" width="56" height="18" fill="#E3F2FD" ${st}/><rect x="24" y="-20" width="16" height="30" fill="#E3F2FD" ${st}/><circle cx="-26" cy="24" r="8" fill="${INK}"/><circle cx="26" cy="24" r="8" fill="${INK}"/>`,
  avion:`<path d="M-46,4 q0,-10 12,-10 h60 q18,0 22,10 q-4,8 -22,8 h-60 q-12,0 -12,-8z" fill="#fff" ${st}/><path d="M-4,-4 l-18,-30 h12 l26,30z M-4,10 l-14,26 h12 l22,-26z M-40,-4 l-8,-18 h8 l12,18z" fill="#90CAF9" ${st}/>`};
  const items=[['tren','trenul · gara','the train · the station'],['autocar','autocarul · autogara','the coach · the bus station'],['avion','avionul · aeroportul','the plane · the airport']];let b='';
  items.forEach((it,i)=>{const cx=110+i*220;b+=`<circle cx="${cx}" cy="62" r="56" fill="#F6F8F4"/><g transform="translate(${cx},60)">${ic[it[0]]}</g>`+T(cx,142,16,it[1],{b:1})+T(cx,160,13,it[2],{i:1,c:'#555'});});
  out.transport=K.svg(660,170,b);
}
// ---------- tourist map ----------
{ const P=a=>a.map(p=>p.join(',')).join(' ');
  const regs=[[[30,180],[40,120],[120,80],[200,55],[260,48],[270,90],[320,150],[330,230],[215,255],[170,240],[120,210]],
   [[30,180],[120,210],[170,240],[215,255],[215,318],[170,300],[110,270],[70,240]],
   [[215,255],[330,230],[380,225],[420,250],[400,330],[330,320],[250,318],[215,318]],
   [[420,250],[450,210],[470,230],[490,270],[460,330],[400,330]],
   [[260,48],[300,40],[360,60],[420,110],[450,210],[420,250],[380,225],[330,230],[320,150],[270,90]]];
  const s=1.3;let b=`<g transform="translate(10,10) scale(${s})">`;
  regs.forEach(p=>b+=`<polygon points="${P(p)}" fill="#E3F1E8" stroke="#fff" stroke-width="3"/>`);
  b+=`<polygon points="${P([[30,180],[40,120],[120,80],[200,55],[260,48],[300,40],[360,60],[420,110],[450,210],[470,230],[490,270],[460,330],[400,330],[330,320],[250,318],[215,318],[170,300],[110,270],[70,240]])}" fill="none" stroke="${GR}" stroke-width="2.5"/>`;
  b+=`<path d="M232,112 q-40,50 30,90 q40,20 10,-40 q-10,-40 -40,-50z" fill="#C8E6C9" opacity=".7"/>`; // Carpathian hint
  b+=`<path d="M70,240 q80,70 180,78 q90,4 150,12 l20,-60 l40,-10" fill="none" stroke="#64B5F6" stroke-width="4"/>`;
  b+=`<text x="120" y="296" font-family="Arial" font-size="12" fill="#1E88E5" font-style="italic" transform="rotate(28 120 296)">Dunărea</text><text x="505" y="300" font-family="Arial" font-size="11" fill="#1E88E5" font-style="italic" transform="rotate(-80 505 300)">Marea Neagră</text>`;
  const pts=[[1,290,240],[2,252,226],[3,98,188],[4,212,160],[5,472,238],[6,200,212],[7,322,72],[8,150,122],[9,462,300],[10,196,66]];
  pts.forEach(p=>b+=`<circle cx="${p[1]}" cy="${p[2]}" r="12" fill="${RD}" stroke="#fff" stroke-width="2"/><text x="${p[1]}" y="${p[2]+4.5}" font-family="Arial" font-size="13" font-weight="bold" text-anchor="middle" fill="#fff">${p[0]}</text>`);
  b+=`<rect x="330" y="280" width="14" height="14" fill="${INK}"/><text x="350" y="292" font-family="Arial" font-size="12" font-weight="bold" fill="${INK}">București</text>`;
  b+=`</g>`;
  const leg=[['Castelul Peleș','Sinaia'],['Castelul Bran','lângă Brașov'],['Castelul Corvinilor','Hunedoara'],['Cetatea Sighișoara','jud. Mureș'],['Delta Dunării','Tulcea'],['Transfăgărășan','DN7C, Munții Făgăraș'],['Mănăstirile pictate','Bucovina, jud. Suceava'],['Salina Turda','jud. Cluj'],['Litoralul','Constanța, Mamaia'],['Bisericile de lemn','Maramureș']];
  leg.forEach((l,i)=>{const y=26+i*43;b+=`<circle cx="700" cy="${y}" r="13" fill="${RD}"/>`+T(700,y+5,14,i+1,{b:1,c:'#fff'})+T(722,y+2,15,l[0],{a:'start',b:1})+T(722,y+19,12.5,l[1],{a:'start',i:1,c:'#555'});});
  b+=T(340,462,12,'hartă schematică · schematic map',{i:1,c:'#777'});
  out.harta=K.svg(930,472,b);
}
// ---------- payslip ----------
{ let b=`<rect x="10" y="10" width="880" height="530" rx="6" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
  b+=`<text x="450" y="330" font-family="Arial" font-size="120" font-weight="bold" text-anchor="middle" fill="#D9412B" opacity=".10" transform="rotate(-18 450 330)">EXEMPLU</text>`;
  b+=`<rect x="10" y="10" width="880" height="46" rx="6" fill="${DK}"/>`+T(30,40,19,'FLUTURAȘ DE SALARIU  ·  septembrie 2026',{a:'start',b:1,c:'#fff'})+T(870,40,15,'EXEMPLU — cifre fictive / SAMPLE',{a:'end',b:1,c:'#FFD54F'});
  const kv=[['Angajator:','SC EXEMPLU CONSTRUCT SRL'],['Angajat:','KUMAR RAVI'],['CNP:','7 •• •• •• •• ••••'],['Funcția:','muncitor necalificat']];
  kv.forEach((r,i)=>{b+=T(30,86+i*24,14,r[0],{a:'start',c:'#555'})+T(120,86+i*24,14,r[1],{a:'start',b:1});});
  const kv2=[['Zile lucrate:','22'],['Ore lucrate:','176'],['Ore suplimentare:','0'],['Concediu de odihnă:','0 zile']];
  kv2.forEach((r,i)=>{b+=T(520,86+i*24,14,r[0],{a:'start',c:'#555'})+T(700,86+i*24,14,r[1],{a:'start',b:1});});
  const rows=[['1','Salariu de bază brut','gross salary','7.000 lei',''],['2','CAS — pensie 25%','pension contribution','− 1.750 lei',RD],['3','CASS — sănătate 10%','health contribution','− 700 lei',RD],['','Deducere personală','personal deduction','0 lei',''],['','Bază de calcul impozit','taxable amount','4.550 lei',''],['4','Impozit pe venit 10%','income tax','− 455 lei',RD],['5','SALARIU NET','net salary — paid to your card','4.095 lei',GR]];
  let y=200;b+=`<rect x="30" y="${y-26}" width="840" height="28" fill="#D9E8DF"/>`+T(84,y-7,13,'ELEMENT',{a:'start',b:1})+T(850,y-7,13,'SUMA / AMOUNT',{a:'end',b:1});
  rows.forEach((r,i)=>{const yy=y+i*38;const last=i===rows.length-1;
    if(last) b+=`<rect x="30" y="${yy}" width="840" height="38" fill="#E3F1E8"/>`;
    b+=`<line x1="30" y1="${yy+38}" x2="870" y2="${yy+38}" stroke="#B7C7BD"/>`;
    if(r[0]) b+=`<circle cx="54" cy="${yy+19}" r="13" fill="${BL}"/>`+T(54,yy+24,14,r[0],{b:1,c:'#fff'});
    b+=T(84,yy+18,16,r[1],{a:'start',b:1})+T(84,yy+33,12,r[2],{a:'start',i:1,c:'#555'})+T(850,yy+26,last?20:17,r[3],{a:'end',b:1,c:r[4]||INK});});
  b+=T(30,500,13,'Plata: virament pe card · IBAN RO•• •••• •••• •••• •••• ••••',{a:'start',c:'#555'})+T(30,522,12.5,'Exemplu simplificat. Nu sunt date reale. / Simplified example, not real data.',{a:'start',i:1,c:RD,b:1});
  out.fluturas=K.svg(900,550,b);
}
// ---------- lost documents: steps ----------
out.acte=K.steps('Ai pierdut pașaportul sau permisul? / Lost your passport or permit?',[
 ['Poliția','declari pierderea / furtul','primești o dovadă'],['Ambasada','a țării tale','pașaport nou'],['IGI','ceri un permis nou','cu dovada de la poliție'],['Banca, angajatorul','anunți schimbarea','documentul nou']]);
// ---------- scams: red flags ----------
{ const ic=[
  `<rect x="-34" y="-14" width="68" height="44" rx="6" fill="#8D6E63" ${st}/><path d="M-12,-14 v-10 h24 v10" fill="none" ${st}/><circle cx="30" cy="-24" r="16" fill="${YL}" ${st}/>`+T(30,-19,12,'lei',{b:1}),
  `<rect x="-22" y="-40" width="44" height="80" rx="8" fill="#455A64" ${st}/><rect x="-16" y="-30" width="32" height="56" fill="#E3F2FD"/><path d="M-12,-22 h26 v18 h-18 l-6,6z" fill="#fff" ${st}/>`+T(1,-9,10,'COD?',{b:1,c:RD}),
  `<path d="M-28,-40 h44 l14,14 v66 h-58z" fill="#fff" ${st}/><path d="M-18,-22 h30 M-18,-10 h30 M-18,2 h30 M-18,14 h20" stroke="#999" stroke-width="2"/><path d="M8,34 l30,-40 l6,6 l-30,40 l-9,3z" fill="${YL}" ${st}/>`];
  const tx=[['Bani pentru un loc de muncă','money for a job'],['Cod, PIN, parolă prin SMS / telefon','a code or PIN by phone or SMS'],['Semnezi fără să înțelegi','signing what you do not understand']];
  let b='';tx.forEach((t,i)=>{const cx=150+i*300;b+=`<rect x="${cx-138}" y="8" width="276" height="200" rx="12" fill="#FDECEA" stroke="${RD}" stroke-width="2"/><g transform="translate(${cx},80)">${ic[i]}</g><circle cx="${cx+92}" cy="44" r="22" fill="${RD}"/><path d="M${cx+82},34 l20,20 M${cx+102},34 l-20,20" stroke="#fff" stroke-width="5"/>`+T(cx,160,15,t[0],{b:1})+T(cx,180,12.5,t[1],{i:1,c:'#555'});});
  out.alarme=K.svg(900,216,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

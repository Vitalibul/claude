const K=require('./kit');const {T,INK,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
const st=`stroke="${INK}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"`;
const eyes=(dx,y,r=3.2)=>`<circle cx="${-dx}" cy="${y}" r="${r}" fill="${INK}"/><circle cx="${dx}" cy="${y}" r="${r}" fill="${INK}"/>`;
// ---------- rental ad ----------
{ let b=`<rect x="10" y="10" width="880" height="380" rx="12" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
  b+=`<rect x="10" y="10" width="880" height="44" rx="12" fill="${DK}"/><rect x="10" y="40" width="880" height="14" fill="${DK}"/>`+T(30,40,19,'DE ÎNCHIRIAT  ·  Apartament 2 camere',{a:'start',b:1,c:'#fff'})+T(870,40,14,'ANUNȚ — EXEMPLU / SAMPLE AD',{a:'end',b:1,c:'#FFD54F'});
  // building sketch
  b+=`<g transform="translate(40,80)"><rect width="220" height="200" rx="6" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/><rect x="40" y="30" width="140" height="170" fill="#CFD8DC" ${st}/>`;
  for(let r=0;r<5;r++)for(let c=0;c<3;c++) b+=`<rect x="${54+c*42}" y="${42+r*30}" width="28" height="18" fill="${r===2&&c===1?YL:'#E3F2FD'}" stroke="${INK}" stroke-width="1.5"/>`;
  b+=`</g>`+T(150,302,12,'etajul 3 din 10',{i:1,c:'#555'});
  const rows=[['1','Zona:','Militari, lângă metrou'],['2','Suprafața:','45 mp · etaj 3 / 10 · bloc 1985'],['3','Dotări:','mobilat, utilat · centrală proprie'],['4','Preț:','1.800 lei / lună + utilități'],['5','Garanție:','o chirie'],['6','Disponibil:','de la 1 octombrie · fără animale'],['7','Contact:','07•• ••• ••• · proprietar, fără comision']];
  rows.forEach((r,i)=>{const y=88+i*40;b+=`<circle cx="300" cy="${y}" r="13" fill="${BL}"/>`+T(300,y+5,14,r[0],{b:1,c:'#fff'})+T(324,y+6,16,r[1],{a:'start',c:'#555'})+T(440,y+6,17,r[2],{a:'start',b:1});});
  b+=T(30,370,12.5,'Anunț inventat, pentru exercițiu. / An invented ad, for practice.',{a:'start',i:1,c:RD,b:1});
  out.anunt=K.svg(900,400,b);
}
// ---------- recycling bins ----------
{ const bins=[['#1E88E5','albastru','hârtie, carton','paper, cardboard'],['#FDD835','galben','plastic, metal','plastic, metal, cans'],['#43A047','verde / alb','sticlă','glass'],['#8D6E63','maro','biodeșeuri','food and garden waste'],['#616161','gri / negru','rezidual','everything else']];
  let b='';bins.forEach((x,i)=>{const cx=90+i*180;
    b+=`<path d="M${cx-48},60 h96 l-10,120 h-76z" fill="${x[0]}" ${st}/><rect x="${cx-56}" y="44" width="112" height="18" rx="4" fill="${x[0]}" ${st}/><rect x="${cx-14}" y="36" width="28" height="10" rx="3" fill="${x[0]}" ${st}/>`;
    b+=`<g transform="translate(${cx},118)" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"><path d="M-14,10 l-8,-14 l8,-14 M6,-20 h14 l6,12 M18,14 h-18"/><path d="M-22,-4 l-4,8 M26,-8 l2,10 M0,14 l6,-6"/></g>`;
    b+=`<circle cx="${cx-30}" cy="195" r="4" fill="${INK}"/><circle cx="${cx+30}" cy="195" r="4" fill="${INK}"/>`;
    b+=T(cx,222,16,x[1],{b:1})+T(cx,242,14,x[2],{b:1,c:x[0]==='#FDD835'?'#9E7C00':x[0]})+T(cx,259,12,x[3],{i:1,c:'#555'});});
  out.gunoi=K.svg(900,268,b);
}
// ---------- farm animals ----------
const A={
 vaca:`<path d="M-30,-26 q-14,-12 -12,-26 M30,-26 q14,-12 12,-26" stroke="#BCAAA4" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-34" cy="-16" rx="12" ry="7" fill="#fff" ${st}/><ellipse cx="34" cy="-16" rx="12" ry="7" fill="#fff" ${st}/><path d="M-24,-30 q24,-8 48,0 l-2,40 h-44z" fill="#fff" ${st}/><path d="M-22,-24 q10,2 8,14 q-10,0 -10,-8z M14,-30 q10,4 8,16 q-6,-2 -10,-10z" fill="${INK}"/><ellipse cy="20" rx="26" ry="16" fill="#F8BBD0" ${st}/><circle cx="-9" cy="20" r="3.5" fill="${INK}"/><circle cx="9" cy="20" r="3.5" fill="${INK}"/>`+eyes(10,-12),
 porc:`<path d="M-30,-18 l-4,-22 l18,12 M30,-18 l4,-22 l-18,12" fill="#F48FB1" ${st}/><circle r="32" fill="#F8BBD0" ${st}/><ellipse cy="10" rx="14" ry="10" fill="#F48FB1" ${st}/><circle cx="-5" cy="10" r="3" fill="${INK}"/><circle cx="5" cy="10" r="3" fill="${INK}"/>`+eyes(12,-10),
 oaie:[[-26,-22],[0,-32],[26,-22],[-34,4],[34,4],[-22,26],[22,26],[0,32]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="15" fill="#fff" ${st}/>`).join('')+`<circle r="22" fill="#fff" stroke="none"/><ellipse cy="4" rx="16" ry="21" fill="#5D4037" ${st}/>`+eyes(7,-2,2.8).replace(/#2B3A33/g,'#fff')+`<ellipse cx="-20" cy="-6" rx="9" ry="5" fill="#5D4037" ${st}/><ellipse cx="20" cy="-6" rx="9" ry="5" fill="#5D4037" ${st}/>`,
 capra:`<path d="M-10,-26 q-16,-22 -30,-16 M10,-26 q16,-22 30,-16" stroke="#8D6E63" stroke-width="6" fill="none" stroke-linecap="round"/><ellipse cx="-26" cy="-10" rx="12" ry="6" fill="#E0E0E0" ${st}/><ellipse cx="26" cy="-10" rx="12" ry="6" fill="#E0E0E0" ${st}/><path d="M-18,-28 q18,-8 36,0 l-6,48 q-12,8 -24,0z" fill="#EEEEEE" ${st}/><path d="M-6,24 l6,20 l6,-20" fill="#BDBDBD" ${st}/>`+eyes(9,-10),
 cal:`<path d="M-4,-44 l-10,-6 v14 M14,-44 l6,-8 v14" fill="#8D5524" ${st}/><path d="M-14,-40 q24,-12 36,4 l4,60 q-14,14 -30,4 l-14,-30z" fill="#A1662F" ${st}/><path d="M-14,-40 q-12,16 -8,44 l8,-4 q-4,-24 4,-38z" fill="#4E342E" ${st}/><ellipse cx="10" cy="26" rx="14" ry="10" fill="#6D4C41" ${st}/><circle cx="4" cy="26" r="2.5" fill="${INK}"/><circle cx="16" cy="26" r="2.5" fill="${INK}"/><circle cx="10" cy="-18" r="3.2" fill="${INK}"/>`,
 gaina:`<path d="M-8,-40 q4,-10 10,-2 q4,-10 10,0 q6,-6 8,4z" fill="#E53935" ${st}/><circle cy="-10" r="30" fill="#fff" ${st}/><path d="M26,-14 l16,6 l-16,6z" fill="${YL}" ${st}/><path d="M26,0 q6,12 -4,14 q-2,-8 4,-14z" fill="#E53935" ${st}/><circle cx="12" cy="-18" r="3.5" fill="${INK}"/><path d="M-10,22 v18 M4,22 v18" stroke="${OR}" stroke-width="4"/>`,
 rata:`<circle cy="-4" r="28" fill="#fff" ${st}/><path d="M18,2 q28,-4 30,8 q-16,10 -30,4z" fill="${OR}" ${st}/><circle cx="8" cy="-10" r="3.5" fill="${INK}"/><path d="M-20,30 q20,12 40,0" fill="none" stroke="#90CAF9" stroke-width="4"/>`,
 curcan:[...Array(7)].map((_,i)=>{const a=(-160+i*23.3)*Math.PI/180;return `<ellipse cx="${Math.cos(a)*30}" cy="${Math.sin(a)*30}" rx="10" ry="20" transform="rotate(${-160+i*23.3+90} ${Math.cos(a)*30} ${Math.sin(a)*30})" fill="${i%2?'#8D6E63':'#D7CCC8'}" ${st}/>`;}).join('')+`<ellipse cy="14" rx="24" ry="22" fill="#6D4C41" ${st}/><circle cy="-8" r="12" fill="#90CAF9" ${st}/><path d="M8,-8 l10,3 l-10,3z" fill="${YL}" ${st}/><path d="M4,-2 q2,14 -4,16 q-4,-8 4,-16z" fill="#E53935" ${st}/><circle cx="3" cy="-11" r="2.4" fill="${INK}"/>`,
 iepure:`<ellipse cx="-12" cy="-30" rx="8" ry="22" fill="#BDBDBD" ${st}/><ellipse cx="12" cy="-30" rx="8" ry="22" fill="#BDBDBD" ${st}/><ellipse cx="-12" cy="-30" rx="3.5" ry="14" fill="#F8BBD0"/><ellipse cx="12" cy="-30" rx="3.5" ry="14" fill="#F8BBD0"/><circle cy="12" r="26" fill="#BDBDBD" ${st}/>`+eyes(10,6)+`<path d="M-4,16 h8 l-4,4z" fill="#E57373"/><path d="M-30,20 h18 M30,20 h-18 M-30,26 l18,-3 M30,26 l-18,-3" stroke="${INK}" stroke-width="1.4"/>`,
};
{ const items=[['vaca','vaca','the cow','muge'],['porc','porcul','the pig','grohăie'],['oaie','oaia','the sheep','behăie'],['capra','capra','the goat','behăie'],['cal','calul','the horse','nechează'],['gaina','găina','the hen','cotcodăcește'],['rata','rața','the duck','măcăie'],['curcan','curcanul','the turkey',''],['iepure','iepurele','the rabbit','']];
  const cw=100;let b='';items.forEach((it,i)=>{const cx=cw/2+i*cw,cy=62;b+=`<circle cx="${cx}" cy="${cy}" r="48" fill="#F1F8E9"/><g transform="translate(${cx},${cy}) scale(.92)">${A[it[0]]}</g>`+T(cx,cy+72,15,it[1],{b:1})+T(cx,cy+89,12,it[2],{i:1,c:'#555'});});
  out.ferma=K.svg(cw*9,160,b);
}
// ---------- farm work by season ----------
{ const S=[['PRIMĂVARA','spring · martie – mai','#C5E1A5','#558B2F',['se ară și se seamănă','se plantează răsadurile','se tund pomii'],`<circle r="10" fill="#F48FB1"/><circle cy="-14" r="8" fill="#F8BBD0"/><circle cx="14" r="8" fill="#F8BBD0"/><circle cy="14" r="8" fill="#F8BBD0"/><circle cx="-14" r="8" fill="#F8BBD0"/><circle r="6" fill="${YL}"/>`],
   ['VARA','summer · iunie – august','#FFE082','#E65100',['se udă grădina','se cosește fânul','se recoltează grâul'],`<circle r="14" fill="${YL}" stroke="${OR}" stroke-width="2"/>`+[...Array(8)].map((_,i)=>{const a=i*Math.PI/4;return `<line x1="${Math.cos(a)*19}" y1="${Math.sin(a)*19}" x2="${Math.cos(a)*27}" y2="${Math.sin(a)*27}" stroke="${OR}" stroke-width="3"/>`;}).join('')],
   ['TOAMNA','autumn · septembrie – noiembrie','#FFCC80','#BF360C',['se culeg fructele, strugurii','se culege porumbul','se fac conservele'],`<path d="M0,-24 q22,8 16,30 q-12,10 -16,-2 q-4,12 -16,2 q-6,-22 16,-30z" fill="${OR}" stroke="#BF360C" stroke-width="2"/><path d="M0,-18 v34" stroke="#BF360C" stroke-width="2"/>`],
   ['IARNA','winter · decembrie – februarie','#B3E5FC','#01579B',['se hrănesc animalele în grajd','se taie lemne pentru foc','se pregătesc semințele'],`<g stroke="#0277BD" stroke-width="3" stroke-linecap="round">`+[0,60,120].map(a=>`<line x1="0" y1="-24" x2="0" y2="24" transform="rotate(${a})"/>`).join('')+`</g>`]];
  let b='';S.forEach((s,i)=>{const x=6+i*224;b+=`<rect x="${x}" y="6" width="214" height="200" rx="12" fill="${s[2]}" opacity=".45"/><rect x="${x}" y="6" width="214" height="200" rx="12" fill="none" stroke="${s[3]}" stroke-width="2"/><g transform="translate(${x+34},46)">${s[5]}</g>`+T(x+68,42,17,s[0],{a:'start',b:1,c:s[3]})+T(x+14,90,12,s[1],{a:'start',i:1,c:'#555'});
    s[4].forEach((t,j)=>{b+=`<circle cx="${x+18}" cy="${118+j*30}" r="4" fill="${s[3]}"/>`+T(x+30,123+j*30,13.5,t,{a:'start'});});});
  out.anotimpuri=K.svg(904,212,b);
}
// ---------- OUG 32/2026 timeline ----------
{ let b='';const y=90;
  b+=`<rect x="40" y="${y}" width="300" height="30" fill="#EF9A9A" stroke="${RD}" stroke-width="2"/><rect x="340" y="${y}" width="420" height="30" fill="#FFE082" stroke="#F9A825" stroke-width="2"/><path d="M760,${y} h80 l20,15 l-20,15 h-80z" fill="#C8E6C9" stroke="${GR}" stroke-width="2"/>`;
  [[40,'ziua 1','începi munca · data din REGES-ONLINE'],[340,'6 luni',''],[760,'2 ani','']].forEach(m=>{b+=`<line x1="${m[0]}" y1="${y-16}" x2="${m[0]}" y2="${y+46}" stroke="${INK}" stroke-width="3"/>`+T(m[0],y-24,17,m[1],{b:1});});
  b+=T(40,y-48,12.5,'începi munca · data din REGES-ONLINE',{a:'start',i:1,c:'#555'});
  b+=T(190,y+66,14.5,'NU poți cere tu',{b:1,c:RD})+T(190,y+84,14.5,'schimbarea angajatorului',{b:1,c:RD})+T(190,y+102,12,'excepție: încălcări grave ale',{i:1})+T(190,y+117,12,'contractului de către angajator',{i:1});
  b+=T(550,y+66,14.5,'poți schimba angajatorul',{b:1,c:'#8D6E00'})+T(550,y+84,14.5,'NUMAI prin agenția de plasare',{b:1,c:'#8D6E00'})+T(550,y+102,12,'care a semnat contractul de plasare',{i:1});
  b+=T(820,y+66,14.5,'după 2 ani:',{b:1,c:GR})+T(820,y+84,14.5,'întrebi la IGI',{b:1,c:GR});
  b+=`<rect x="40" y="${y+136}" width="820" height="44" rx="10" fill="#E3EEF8" stroke="${BL}" stroke-width="2"/>`+T(450,y+164,14.5,'Contractul încetează?  Poți rămâne cel mult 90 de zile ca să găsești un nou angajator (IGI).',{b:1,c:BL});
  out.oug=K.svg(900,y+190,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

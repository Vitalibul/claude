const K=require('./kit');const {T,INK,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
// ---------- online order steps ----------
out.comanda=K.steps('O comandă online / An online order',[['Coșul','adaugi produsele','verifici mărimea'],['Adresa','de livrare','telefonul tău'],['Plata','card online','sau ramburs'],['Confirmarea','e-mail / SMS','numărul comenzii'],['Livrarea','curier la ușă','sau locker']]);
// ---------- AWB label ----------
{ let b=`<rect x="10" y="10" width="620" height="300" rx="8" fill="#fff" stroke="${INK}" stroke-width="2"/>`;
  b+=`<rect x="10" y="10" width="620" height="40" rx="8" fill="${DK}"/><rect x="10" y="36" width="620" height="14" fill="${DK}"/>`+T(28,37,17,'ETICHETĂ COLET  ·  AWB',{a:'start',b:1,c:'#fff'})+T(612,37,13,'EXEMPLU / SAMPLE',{a:'end',b:1,c:'#FFD54F'});
  // barcode
  let x=40;for(let i=0;i<60;i++){const w=[2,3,1,4][(i*7)%4];b+=`<rect x="${x}" y="66" width="${w}" height="56" fill="${INK}"/>`;x+=w+2;}
  b+=T(40,142,18,'AWB: 1•••  •••  •••  •••',{a:'start',b:1});
  const rows=[['1','AWB','numărul pentru urmărirea coletului'],['2','Destinatar:','KUMAR RAVI · 07•• ••• •••'],['3','Adresa:','Str. Exemplului 10, bl. A2, sc. 1, ap. 14'],['4','Ramburs:','149,90 lei — plătești la primire'],['5','Greutate:','2,3 kg · 1 colet']];
  rows.forEach((r,i)=>{const y=168+i*27;b+=`<circle cx="${i===0?375:40}" cy="${i===0?136:y-5}" r="11" fill="${BL}"/>`+T(i===0?375:40,i===0?141:y,12,r[0],{b:1,c:'#fff'});if(i>0)b+=T(58,y,14,r[1],{a:'start',c:'#555'})+T(150,y,14.5,r[2],{a:'start',b:1});});
  b+=T(394,142,12.5,'= numărul de urmărire / tracking number',{a:'start',i:1,c:'#555'});
  b+=T(28,298,11.5,'Date inventate, pentru exercițiu. / Invented data, for practice.',{a:'start',i:1,c:RD,b:1});
  out.awb=K.svg(640,320,b);
}
// ---------- metro scheme ----------
{ const col={M1:'#E0A800',M2:'#1565C0',M3:'#D32F2F',M4:'#2E7D32',M5:'#EF6C00'};
  const st={Pantelimon:[930,210],NGrig:[840,400],Dristor1:[740,400],Dristor2:[740,300],PMuncii:[740,210],Obor:[620,150],Victoriei:[440,150],GNord:[320,150],Basarab:[250,190],Eroilor:[250,400],Izvor:[340,400],Unirii:[440,400],TNoi:[540,400],MBravu:[640,400],Pipera:[440,30],Aviatorilor:[440,90],Universitate:[440,300],Tineretului:[440,480],TArghezi:[440,570],Preciziei:[40,450],Politehnica:[150,420],ASaligny:[930,500],Mai1:[190,110],Straulesti:[130,40],DrTaberei:[150,510],RaulD:[60,570]};
  const line=(c,pts,w=9,dy=0)=>`<polyline points="${pts.map(p=>{const q=st[p];return `${q[0]},${q[1]+dy}`;}).join(' ')}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"/>`;
  let b='';
  b+=line(col.M3,['Preciziei','Politehnica','Eroilor','Izvor','Unirii','TNoi','MBravu','Dristor1','NGrig','ASaligny'],9,10);
  b+=line(col.M1,['Dristor2','PMuncii','Obor','Victoriei','GNord','Basarab','Eroilor','Izvor','Unirii','TNoi','MBravu','Dristor1','NGrig','Pantelimon']);
  b+=line(col.M2,['Pipera','Aviatorilor','Victoriei','Universitate','Unirii','Tineretului','TArghezi']);
  b+=line(col.M4,['GNord','Basarab','Mai1','Straulesti'],9,-10);
  b+=line(col.M5,['Eroilor','DrTaberei','RaulD']);
  const lab=(k,t,dx,dy,a='start',big)=>{const q=st[k];return `<circle cx="${q[0]}" cy="${q[1]+(k==='Basarab'||k==='GNord'?-5:0)}" r="${big?11:7}" fill="#fff" stroke="${INK}" stroke-width="${big?3.5:2.5}"/>`+T(q[0]+dx,q[1]+dy,big?15:13.5,t,{a,b:big?1:0});};
  b+=lab('Pantelimon','Pantelimon',-14,-14,'end')+lab('NGrig','N. Grigorescu',-14,-16,'end')+lab('Dristor1','Dristor',0,36,'middle')+lab('Dristor2','Dristor 2',14,5)+lab('PMuncii','Piața Muncii',14,5)+lab('Obor','Obor',0,-16,'middle')+lab('Victoriei','Piața Victoriei',14,-12,'start',1)+lab('GNord','Gara de Nord',0,-26,'middle',1)+lab('Basarab','Basarab',-14,24,'end')+lab('Eroilor','Eroilor',-14,-12,'end',1)+lab('Izvor','Izvor',0,36,'middle')+lab('Unirii','Piața Unirii',14,-14,'start',1)+lab('TNoi','Timpuri Noi',0,36,'middle')+lab('MBravu','Mihai Bravu',0,36,'middle')+lab('Pipera','Pipera',16,5)+lab('Aviatorilor','Aviatorilor',16,5)+lab('Universitate','Universitate',16,5)+lab('Tineretului','Tineretului',16,5)+lab('TArghezi','Tudor Arghezi',16,5)+lab('Preciziei','Preciziei',0,38,'middle')+lab('Politehnica','Politehnica',0,-16,'middle')+lab('ASaligny','Anghel Saligny',-16,30,'end')+lab('Mai1','1 Mai',-14,5,'end')+lab('Straulesti','Străulești',-14,5,'end')+lab('DrTaberei','Drumul Taberei',16,5)+lab('RaulD','Râul Doamnei / Valea Ialomiței',16,5);
  const L=[['M1','Dristor 2 – Pantelimon'],['M2','Pipera – Tudor Arghezi'],['M3','Preciziei – Anghel Saligny'],['M4','Gara de Nord – Străulești'],['M5','Eroilor – Râul Doamnei / Valea Ialomiței']];
  L.forEach((l,i)=>{const y=620+i*26;b+=`<rect x="40" y="${y-12}" width="44" height="18" rx="9" fill="${col[l[0]]}"/>`+T(62,y+2,12,l[0],{b:1,c:'#fff'})+T(94,y+3,14,l[1],{a:'start'});});
  b+=T(930,640,12.5,'schemă simplificată, nu la scară',{a:'end',i:1,c:'#777'})+T(930,660,12.5,'nu toate stațiile sunt desenate',{a:'end',i:1,c:'#777'})+T(930,680,12.5,'harta completă: metrorex.ro',{a:'end',i:1,c:'#777'});
  out.metrou=K.svg(960,760,b);
}
// ---------- health path ----------
out.sanatate=K.steps('Drumul pacientului / The patient\'s path',[['Medicul de familie','consultația','(Lesson 8.7)'],['Biletul de trimitere','la specialist','sau la analize'],['Programarea','la telefon','sau online'],['Specialistul','consultația','analizele'],['Rețeta','compensată','la farmacie']]);
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

const K=require('./kit');const {T,S,INK,W8,WD,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
const knife=`<path d="M-38,6 L14,-10 L18,4 z" fill="#CFD8DC" ${S}/><rect x="14" y="-8" width="26" height="12" rx="4" fill="${INK}" transform="rotate(-17 14 -2)"/>`;
out.ho_bucatarie=K.grid([
 ['cuțitul','knife',knife],
 ['tocătorul','chopping board',`<rect x="-36" y="-22" width="72" height="46" rx="8" fill="${WD}" ${S}/><circle cx="26" cy="-12" r="5" fill="#F6F8F4" ${S}/>`],
 ['oala','cooking pot',`<path d="M-30,-14 h60 v36 q0,10 -10,10 h-40 q-10,0 -10,-10z" fill="${W8}" ${S}/><path d="M-30,-10 h-10 M30,-10 h10" stroke="${INK}" stroke-width="5"/><path d="M-32,-16 h64" stroke="${INK}" stroke-width="4"/>`],
 ['tigaia','frying pan',`<ellipse cx="-8" cy="4" rx="28" ry="14" fill="#546E7A" ${S}/><rect x="18" y="-2" width="26" height="8" rx="3" fill="${INK}"/>`],
 ['cratița','saucepan',`<path d="M-26,-10 h44 v28 q0,8 -8,8 h-28 q-8,0 -8,-8z" fill="${W8}" ${S}/><rect x="18" y="-8" width="26" height="7" rx="3" fill="${INK}"/>`],
 ['polonicul','ladle',`<path d="M10,-40 L2,6" stroke="${INK}" stroke-width="5"/><path d="M-22,6 h32 q0,22 -16,22 q-16,0 -16,-22z" fill="${W8}" ${S}/>`],
 ['spatula','spatula',`<rect x="-4" y="-40" width="8" height="40" fill="${INK}"/><rect x="-14" y="0" width="28" height="30" rx="3" fill="${W8}" ${S}/>`],
 ['telul','whisk',`<rect x="-4" y="-42" width="8" height="24" rx="3" fill="${INK}"/>`+[-12,-4,4,12].map(x=>`<path d="M0,-18 Q${x*2},10 0,36 Q${-x*2},10 0,-18" fill="none" stroke="${W8}" stroke-width="2.5"/>`).join('')],
 ['răzătoarea','grater',`<path d="M-20,-30 h40 l6,60 h-52z" fill="#CFD8DC" ${S}/>`+[-16,-4,8,20].map(y=>`<path d="M-12,${y} h24" stroke="${INK}" stroke-width="2" stroke-dasharray="4,3"/>`).join('')+`<path d="M-10,-30 q10,-14 20,0" fill="none" ${S}/>`],
 ['strecurătoarea','colander / sieve',`<path d="M-30,-8 h60 q-4,34 -30,34 q-26,0 -30,-34z" fill="#E0E0E0" ${S}/>`+[[-12,4],[0,8],[12,4],[-6,16],[6,16]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="2" fill="${INK}"/>`).join('')+`<path d="M30,-6 h12" stroke="${INK}" stroke-width="5"/>`],
 ['cuptorul','oven',`<rect x="-32" y="-30" width="64" height="62" rx="4" fill="#ECEFF1" ${S}/><rect x="-24" y="-12" width="48" height="36" rx="3" fill="#FFCC80" ${S}/>`+[-18,-6,6,18].map(x=>`<circle cx="${x}" cy="-21" r="3" fill="${INK}"/>`).join('')],
 ['plita','hob',`<rect x="-38" y="-20" width="76" height="40" rx="4" fill="#37474F" ${S}/>`+[[-18,-6],[18,-6],[-18,10],[18,10]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="7" fill="none" stroke="#FF7043" stroke-width="2.5"/>`).join('')],
 ['hota','cooker hood',`<path d="M-10,-40 h20 v20 h22 l10,26 h-84 l10,-26 h22z" fill="#CFD8DC" ${S}/>`],
 ['frigiderul','fridge',`<rect x="-24" y="-40" width="48" height="80" rx="5" fill="#E3F2FD" ${S}/><path d="M-24,-12 h48 M16,-32 v12 M16,-4 v16" stroke="${INK}" stroke-width="2.5"/>`],
 ['congelatorul','freezer',`<rect x="-36" y="-18" width="72" height="44" rx="4" fill="#E1F5FE" ${S}/><path d="M-36,-8 h72" stroke="${INK}" stroke-width="2"/>`+[0,60,120].map(a=>`<line x1="-10" y1="10" x2="10" y2="10" stroke="${BL}" stroke-width="3" transform="rotate(${a} 0 10)"/>`).join('')],
 ['mașina de vase','dishwasher',`<rect x="-30" y="-34" width="60" height="70" rx="4" fill="#ECEFF1" ${S}/><rect x="-22" y="-24" width="44" height="8" rx="2" fill="${W8}"/><circle cx="0" cy="12" r="12" fill="#B3E5FC" ${S}/>`],
 ['cântarul','kitchen scale',`<path d="M-30,20 h60 l-6,-24 h-48z" fill="#ECEFF1" ${S}/><rect x="-14" y="2" width="28" height="12" rx="2" fill="#C8E6C9"/><path d="M-26,-6 h52" stroke="${INK}" stroke-width="4"/>`],
 ['termometrul','food thermometer',`<circle cx="0" cy="-18" r="16" fill="#fff" ${S}/><path d="M0,-18 l8,-8" stroke="${RD}" stroke-width="3"/><path d="M0,-2 v40" stroke="${W8}" stroke-width="5"/>`],
 ['tava','tray / baking tray',`<path d="M-40,4 l8,14 h64 l8,-14z" fill="${W8}" ${S}/>`],
 ['bolul','bowl',`<path d="M-34,-8 h68 q-4,40 -34,40 q-30,0 -34,-40z" fill="#FFE0B2" ${S}/>`],
],10,108,146);
out.ho_sala=K.grid([
 ['farfuria','plate',`<ellipse rx="36" ry="30" fill="#fff" ${S}/><ellipse rx="22" ry="18" fill="none" stroke="#CFD8DC" stroke-width="2"/>`],
 ['paharul','glass',`<path d="M-16,-34 h32 l-4,64 h-24z" fill="#E1F5FE" ${S}/>`],
 ['tacâmurile','cutlery',`<path d="M-18,-36 v70 M-24,-36 v16 q6,8 12,0 v-16" stroke="${INK}" stroke-width="3.5" fill="none"/><path d="M4,-36 v70" stroke="${INK}" stroke-width="5"/><path d="M20,-36 q10,20 0,30 v40" stroke="${INK}" stroke-width="4" fill="none"/>`],
 ['tava de servire','serving tray',`<ellipse cx="0" cy="12" rx="40" ry="10" fill="${W8}" ${S}/><path d="M-12,2 h10 v-26 h-10z M6,2 h12 v-20 h-12z" fill="#E1F5FE" ${S}/>`],
 ['carnetul de comenzi','order pad',`<rect x="-24" y="-32" width="48" height="64" rx="3" fill="#FFFDE7" ${S}/><path d="M-16,-16 h32 M-16,-4 h32 M-16,8 h24" stroke="${W8}" stroke-width="3"/>`],
 ['fața de masă','tablecloth',`<path d="M-38,-14 h76 l-8,40 h-60z" fill="#FFCDD2" ${S}/><path d="M-30,26 v-40 M-10,26 v-40 M10,26 v-40 M30,26 v-40" stroke="#fff" stroke-width="2"/>`],
 ['carafa','jug / carafe',`<path d="M-14,-34 h24 l-4,14 q20,10 18,36 q-2,20 -22,20 q-20,0 -22,-20 q-2,-26 18,-36z" fill="#E1F5FE" ${S}/>`],
 ['patul','bed',`<rect x="-40" y="-4" width="80" height="24" fill="#90CAF9" ${S}/><rect x="-40" y="-26" width="10" height="56" fill="${WD}" ${S}/><rect x="-28" y="-12" width="24" height="10" rx="4" fill="#fff" ${S}/>`],
 ['lenjeria','bed linen',`<rect x="-30" y="-10" width="60" height="30" fill="#fff" ${S}/><rect x="-26" y="-24" width="52" height="16" fill="#E3F2FD" ${S}/>`],
 ['prosopul','towel',`<rect x="-26" y="-32" width="52" height="64" rx="4" fill="#80CBC4" ${S}/><path d="M-26,18 h52" stroke="#fff" stroke-width="4"/>`],
 ['căruciorul de curățenie','housekeeping trolley',`<rect x="-30" y="-24" width="60" height="44" fill="#CFD8DC" ${S}/><path d="M-30,-4 h60" stroke="${INK}" stroke-width="2"/><circle cx="-20" cy="26" r="6" fill="${INK}"/><circle cx="20" cy="26" r="6" fill="${INK}"/><rect x="-24" y="-20" width="14" height="14" fill="#80CBC4"/>`],
 ['aspiratorul','vacuum cleaner',`<ellipse cx="-8" cy="16" rx="24" ry="14" fill="${RD}" ${S}/><path d="M10,10 q20,-10 20,-44" fill="none" stroke="${INK}" stroke-width="4"/><path d="M24,-36 h14" stroke="${INK}" stroke-width="6"/>`],
],6,150,148);
out.ho_echipament=K.worker({hat:'cook',top:'#FFFFFF',apron:'#E0E0E0',gloves:'#90CAF9',legs:'#37474F',shoes:'#212121'},[
 [300,50,'L',50,'boneta / boneta de bucătar','cook\'s hat, hair covered'],[244,190,'L',150,'tunica de bucătar','chef\'s jacket'],[213,365,'L',360,'mănușile de unică folosință','disposable gloves'],
 [300,260,'R',230,'șorțul','apron'],[320,440,'R',420,'pantalonii de lucru','work trousers'],[330,532,'R',520,'încălțămintea antiderapantă','non-slip shoes']]);
out.ho_maini=K.steps('Spălarea corectă a mâinilor / Washing your hands',[['apă','wet your hands',''],['săpun','soap',''],['frecați','rub 20–30 seconds','și între degete'],['clătiți','rinse',''],['uscați','dry','prosop de hârtie'],['închideți','turn off the tap','cu prosopul']]);
{ // thermometer
 let b=''; const x0=80,x1=820,t2x=t=>x0+(t+20)*(x1-x0)/120;
 b+=`<rect x="${x0}" y="70" width="${x1-x0}" height="28" rx="14" fill="#ECEFF1" stroke="${INK}" stroke-width="2"/>`;
 b+=`<rect x="${t2x(-20)}" y="70" width="${t2x(-15)-t2x(-20)}" height="28" fill="#90CAF9"/><rect x="${t2x(0)}" y="70" width="${t2x(4)-t2x(0)}" height="28" fill="#80DEEA"/><rect x="${t2x(95)}" y="70" width="${t2x(100)-t2x(95)}" height="28" fill="#FF8A65"/>`;
 for(let t=-20;t<=100;t+=10){const x=t2x(t);b+=`<line x1="${x}" y1="98" x2="${x}" y2="110" stroke="${INK}" stroke-width="2"/>`+T(x,128,14,`${t}`);}
 const mk=(t,l1,l2,y,a)=>{const x=t2x(t);const tx=a==='start'?x+8:(a==='end'?x-8:x);return `<path d="M${x},66 v-${y-20}" stroke="${GR}" stroke-width="2"/>`+T(tx,66-y+14,14,l1,{b:1,a})+T(tx,66-y+30,12,l2,{i:1,c:'#555',a});};
 b+=mk(-18,'congelatorul ≈ −18 °C','freezer',64,'start')+mk(2,'frigiderul 0 … 4 °C','fridge (fresh food)',30,'start')+mk(20,'camera ≈ 20 °C → nu lăsa mâncarea aici','room temperature: don\'t leave food out',64,'start')+mk(100,'apa fierbe: 100 °C','water boils',64,'end');
 b+=T(450,160,13,'°C = grade Celsius · „minus optsprezece grade” · Check the thermometer and write it on the temperature sheet (fișa de temperaturi).',{i:1,c:'#555'});
 out.ho_temp=K.svg(900,172,b);
}
{ // table setting
 let b=`<rect x="20" y="20" width="560" height="300" rx="10" fill="#FFF8E1" stroke="${INK}" stroke-width="2"/>`;
 b+=`<ellipse cx="300" cy="190" rx="80" ry="72" fill="#fff" stroke="${INK}" stroke-width="2.5"/><ellipse cx="300" cy="190" rx="50" ry="44" fill="none" stroke="#CFD8DC" stroke-width="2"/>`;
 b+=`<path d="M190,120 v140 M182,120 v28 q8,10 16,0 v-28" stroke="${INK}" stroke-width="4" fill="none"/><path d="M405,120 v140" stroke="${INK}" stroke-width="6"/><path d="M430,130 q12,-18 0,-30 q-12,12 0,30 v130" stroke="${INK}" stroke-width="4" fill="none"/>`;
 b+=`<path d="M430,60 h28 l-4,40 h-20z" fill="#E1F5FE" stroke="${INK}" stroke-width="2"/><rect x="120" y="150" width="36" height="70" fill="#FFCDD2" stroke="${INK}" stroke-width="2"/>`;
 const lab=(x1,y1,ly,t,e)=>`<circle cx="${x1}" cy="${y1}" r="4" fill="${GR}"/><polyline points="${x1},${y1} 600,${ly} 620,${ly}" fill="none" stroke="${GR}" stroke-width="1.5"/>`+T(626,ly-2,15,t,{a:'start',b:1})+T(626,ly+14,12,e,{a:'start',i:1,c:'#555'});
 b+=lab(444,80,50,'paharul — dreapta sus','glass — top right')+lab(360,140,110,'farfuria — la mijloc','plate — in the middle')+lab(430,200,170,'lingura — dreapta','spoon — right')+lab(405,240,230,'cuțitul — dreapta, tăișul spre farfurie','knife — right, blade in');
 b+=`<circle cx="138" cy="185" r="4" fill="${GR}"/>`+T(138,300,13,'șervețelul — stânga',{b:1})+`<line x1="138" y1="188" x2="138" y2="288" stroke="${GR}" stroke-width="1.5"/>`;
 b+=`<circle cx="190" cy="250" r="4" fill="${GR}"/>`+T(250,300,13,'furculița — stânga',{b:1,a:'start'})+`<polyline points="190,250 250,288" fill="none" stroke="${GR}" stroke-width="1.5"/>`;
 out.ho_masa=K.svg(900,330,b);
}
out.ho_serviciu=K.steps('Serviciul la masă / Table service',[['primirea','greet, seat the guests','Bună seara! Poftiți!'],['meniul','bring the menu','și apa'],['comanda','take the order','notează, repetă'],['servirea','serve','din dreapta'],['debarasarea','clear the table',''],['nota','the bill','plata, mulțumim']]);
out.ho_camera=K.steps('Curățenia unei camere de hotel / Cleaning a hotel room',[['aerisirea','air the room','deschide fereastra'],['patul','strip & make the bed','lenjerie curată'],['baia','clean the bathroom','prosoape noi'],['praful','dust','de sus în jos'],['aspiratul','vacuum, mop',''],['verificarea','final check','minibar, lumini']]);
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

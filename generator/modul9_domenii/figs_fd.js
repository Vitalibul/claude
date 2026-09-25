const K=require('./kit');const {T,S,INK,W8,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
const bike=`<circle cx="-22" cy="14" r="16" fill="none" stroke="${INK}" stroke-width="4"/><circle cx="22" cy="14" r="16" fill="none" stroke="${INK}" stroke-width="4"/><path d="M-22,14 l14,-24 h26 l4,24 M-8,-10 l10,24 h20 M18,-10 l-4,-10 h-8 M-10,-14 h10" fill="none" stroke="${BL}" stroke-width="4" stroke-linejoin="round"/>`;
const bag=(s=1)=>`<g transform="scale(${s})"><path d="M-26,-20 l10,-10 h44 l-10,10z" fill="#FF8A65" ${S}/><path d="M-26,-20 h44 v44 h-44z" fill="${OR}" ${S}/><path d="M18,-20 l10,-10 v44 l-10,10z" fill="#E65100" ${S}/><path d="M-18,-6 h28" stroke="#fff" stroke-width="3"/></g>`;
out.fd_echipament=K.grid([
 ['bicicleta','bicycle',bike],
 ['trotineta electrică','e-scooter',`<path d="M-30,24 h44 l6,-56 M14,-32 h14" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/><circle cx="-30" cy="26" r="9" fill="${INK}"/><circle cx="20" cy="26" r="9" fill="${INK}"/>`],
 ['mopedul · scuterul','moped',`<path d="M-30,14 q0,-22 26,-22 h14 l14,-26 h10" fill="none" stroke="${INK}" stroke-width="4"/><path d="M-34,8 q4,-18 30,-18 h12 v18z" fill="${RD}" ${S}/><circle cx="-24" cy="20" r="11" fill="${INK}"/><circle cx="26" cy="20" r="11" fill="${INK}"/>`],
 ['geanta termoizolantă','insulated delivery bag',bag(1.1)],
 ['casca','helmet',`<path d="M-32,10 q0,-42 34,-42 q34,0 34,42z" fill="${GR}" ${S}/><path d="M-20,-20 q10,-8 20,-8 M6,-28 q12,0 20,8" stroke="#fff" stroke-width="3" fill="none"/><path d="M-32,10 h66" stroke="${INK}" stroke-width="3"/>`],
 ['vesta reflectorizantă','hi-vis vest',`<path d="M-26,-30 l12,-6 l8,16 h12 l8,-16 l12,6 v64 h-52z" fill="${YL}" ${S}/><path d="M-26,4 h52 M-26,20 h52" stroke="#E0E0E0" stroke-width="5"/>`],
 ['suportul de telefon','phone holder',`<rect x="-14" y="-36" width="28" height="50" rx="5" fill="#37474F" ${S}/><rect x="-10" y="-30" width="20" height="36" fill="#C8E6C9"/><path d="M-20,-10 h-6 M20,-10 h6 M0,14 v14 M-30,28 h60" stroke="${INK}" stroke-width="4"/>`],
 ['bateria externă','power bank',`<rect x="-16" y="-30" width="32" height="60" rx="6" fill="#546E7A" ${S}/><path d="M-4,-14 l-6,14 h8 l-4,14 l12,-18 h-8 l4,-10z" fill="${YL}"/><path d="M16,20 q18,0 18,-20" fill="none" stroke="${INK}" stroke-width="3"/>`],
 ['farul (alb)','front light (white)',`<path d="M-24,-12 h20 v24 h-20z" fill="#fff" ${S}/><path d="M-4,-12 l14,-6 v36 l-14,-6z" fill="#FFF59D" ${S}/><path d="M16,-10 l18,-8 M16,0 h20 M16,10 l18,8" stroke="${YL}" stroke-width="3"/>`],
 ['stopul (roșu)','rear light (red)',`<rect x="-18" y="-14" width="36" height="28" rx="8" fill="${RD}" ${S}/><path d="M-30,-18 l-8,-6 M-30,0 h-10 M-30,18 l-8,6 M30,-18 l8,-6 M30,0 h10 M30,18 l8,6" stroke="${RD}" stroke-width="3"/>`],
 ['catadioptrii','reflectors',`<path d="M0,-30 l26,30 l-26,30 l-26,-30z" fill="#FFB300" ${S}/><path d="M0,-16 l12,16 l-12,16 l-12,-16z" fill="#FFE082"/>`],
 ['frâna · soneria','brake · bell',`<path d="M-34,-10 h40 q10,0 14,10" fill="none" stroke="${INK}" stroke-width="5"/><path d="M-4,-8 l20,18" stroke="${RD}" stroke-width="4"/><circle cx="-18" cy="20" r="12" fill="${YL}" ${S}/><circle cx="-18" cy="20" r="3" fill="${INK}"/>`],
 ['pelerina de ploaie','raincoat',`<path d="M-8,-34 h16 l6,10 l14,56 h-56 l14,-56z" fill="#4FC3F7" ${S}/><path d="M0,-24 v56" stroke="${INK}" stroke-width="2"/>`],
 ['lacătul','lock',`<path d="M-12,-6 v-12 q0,-16 12,-16 q12,0 12,16 v12" fill="none" stroke="${INK}" stroke-width="5"/><rect x="-20" y="-6" width="40" height="34" rx="5" fill="${W8}" ${S}/><circle cx="0" cy="8" r="4" fill="${INK}"/>`],
 ['încărcătorul','charger',`<rect x="-18" y="-24" width="30" height="36" rx="5" fill="#ECEFF1" ${S}/><path d="M-10,-24 v-12 M4,-24 v-12" stroke="${INK}" stroke-width="4"/><path d="M-2,12 q0,20 26,20 h10" fill="none" stroke="${INK}" stroke-width="3"/>`],
 ['mănușile','gloves',`<path d="M-20,30 v-34 q0,-6 5,-6 v-18 q0,-5 5,-5 q5,0 5,5 v-4 q0,-5 5,-5 q5,0 5,5 v4 q0,-5 5,-5 q5,0 5,5 v26 l6,-6 q6,-4 9,2 l-12,20 v16z" fill="#455A64" ${S}/>`],
],8,152,148);
out.fd_curier=K.worker({hat:'none',top:'#1E88E5',vest:1,gloves:'#455A64',legs:'#37474F',shoes:'#263238',
 hold:`<path d="M252,112 q0,-60 48,-60 q48,0 48,60z" fill="${GR}"/><path d="M272,74 q14,-10 28,-10 M306,64 q16,0 26,10" stroke="#fff" stroke-width="4" fill="none"/><path d="M262,112 l10,30 M338,112 l-10,30" stroke="${INK}" stroke-width="3"/><path d="M212,380 v14" stroke="${INK}" stroke-width="4"/><g transform="translate(160,394)"><path d="M0,0 l16,-14 h72 l-16,14z" fill="#FF8A65" ${S}/><path d="M0,0 h72 v66 h-72z" fill="${OR}" ${S}/><path d="M72,0 l16,-14 v66 l-16,14z" fill="#E65100" ${S}/><path d="M10,18 h52" stroke="#fff" stroke-width="4"/></g>`},[
 [300,60,'L',50,'casca','helmet (bike, e-scooter, moped)'],[256,270,'L',230,'vesta reflectorizantă','hi-vis vest'],[213,365,'L',330,'mănușile','gloves'],
 [178,440,'L',450,'geanta termoizolantă','insulated delivery bag'],[320,440,'R',430,'pantaloni de ploaie','rain trousers'],[330,532,'R',520,'încălțăminte închisă','closed shoes']]);
{ // phone app screen, example
 let b=`<rect x="240" y="10" width="240" height="400" rx="26" fill="#263238"/><rect x="252" y="40" width="216" height="340" rx="6" fill="#fff"/>`;
 b+=`<rect x="252" y="40" width="216" height="36" fill="${GR}"/>`+T(360,64,15,'COMANDĂ NOUĂ',{b:1,c:'#fff'});
 const rows=[['Ridicare: Restaurant EXEMPLU',1],['Str. Mare nr. 5',0],['Livrare: Str. Florilor nr. 12,',1],['bl. B3, sc. 2, ap. 17',0],['Distanța: 3,2 km · ~14 min',1],['Plata: numerar · 48,50 lei',1]];
 rows.forEach((r,i)=>{b+=T(272,102+i*30,13,r[0],{a:'start',b:r[1]})});
 b+=`<rect x="272" y="290" width="84" height="36" rx="8" fill="#ECEFF1" stroke="${W8}"/><rect x="364" y="290" width="84" height="36" rx="8" fill="${GR}"/>`+T(314,313,14,'Refuză',{b:1})+T(406,313,14,'Acceptă',{b:1,c:'#fff'});
 b+=T(360,356,12,'Nr. comandă: 4821',{c:'#555'});
 const lab=(x1,y1,side,ly,t,e)=>{const L=side==='L',x2=L?210:510;return `<circle cx="${x1}" cy="${y1}" r="4" fill="${GR}"/><polyline points="${x1},${y1} ${L?x2+20:x2-20},${ly} ${x2},${ly}" fill="none" stroke="${GR}" stroke-width="1.5"/>`+T(L?x2-6:x2+6,ly-2,15,t,{b:1,a:L?'end':'start'})+T(L?x2-6:x2+6,ly+14,12,e,{i:1,c:'#555',a:L?'end':'start'});};
 b+=lab(268,110,'L',100,'ridicarea','pickup: where you take the food')+lab(268,170,'L',180,'livrarea · adresa','drop-off: the customer\'s address')+lab(268,246,'L',250,'plata: numerar / card','payment: cash / card (app)')+lab(462,222,'R',200,'distanța · timpul estimat','distance · estimated time')+lab(448,308,'R',300,'Acceptă / Refuză','accept / decline')+lab(440,352,'R',360,'numărul comenzii','the order number');
 out.fd_app=K.svg(900,420,b);
}
out.fd_flux=K.steps('O livrare pas cu pas / A delivery step by step',[['accepți','accept','comanda în aplicație'],['la restaurant','at the restaurant','ridici comanda'],['în geantă','in the bag','verifici, închizi'],['pe drum','on the road','atenție la trafic'],['la client','at the door','suni, predai'],['livrat','delivered','confirmi în aplicație']]);
{ // road signs for bikes and e-scooters
 let b=''; const cap=(cx,y,ro,en)=>T(cx,y,13.5,ro,{b:1})+T(cx,y+16,11.5,en,{i:1,c:'#555'});
 const xs=[70,200,330,460,590,720,850];
 const bk=(cx,cy,c)=>`<g transform="translate(${cx},${cy}) scale(0.62)"><circle cx="-22" cy="14" r="16" fill="none" stroke="${c}" stroke-width="5"/><circle cx="22" cy="14" r="16" fill="none" stroke="${c}" stroke-width="5"/><path d="M-22,14 l14,-24 h26 l4,24 M-8,-10 l10,24 h20 M18,-10 l-4,-10 h-8" fill="none" stroke="${c}" stroke-width="5" stroke-linejoin="round"/></g>`;
 b+=`<path d="M${xs[0]-20},30 h40 l20,20 v40 l-20,20 h-40 l-20,-20 v-40z" fill="#D32F2F" stroke="#fff" stroke-width="3"/>`+T(xs[0],78,20,'STOP',{b:1,c:'#fff'})+cap(xs[0],140,'Oprire obligatorie','Stop');
 b+=`<path d="M${xs[1]-45},30 h90 l-45,78z" fill="#fff" stroke="#D32F2F" stroke-width="9" stroke-linejoin="round"/>`+cap(xs[1],140,'Cedează trecerea','Give way');
 b+=`<circle cx="${xs[2]}" cy="70" r="40" fill="#D32F2F"/><rect x="${xs[2]-28}" y="62" width="56" height="16" fill="#fff"/>`+cap(xs[2],140,'Accesul interzis','No entry');
 b+=`<rect x="${xs[3]-38}" y="32" width="76" height="76" rx="6" fill="#1565C0"/><path d="M${xs[3]-24},76 h36 v14 l20,-20 l-20,-20 v14 h-36z" fill="#fff"/>`+cap(xs[3],140,'Sens unic','One-way street');
 b+=`<circle cx="${xs[4]}" cy="70" r="40" fill="#1565C0"/>`+bk(xs[4],68,'#fff')+cap(xs[4],140,'Pistă pentru biciclete','Cycle lane (compulsory)');
 b+=`<circle cx="${xs[5]}" cy="70" r="40" fill="#fff" stroke="#D32F2F" stroke-width="8"/>`+bk(xs[5],68,INK)+cap(xs[5],140,'Interzis bicicletelor','No bicycles');
 b+=`<circle cx="${xs[6]}" cy="70" r="40" fill="#1565C0"/><circle cx="${xs[6]}" cy="46" r="7" fill="#fff"/><path d="M${xs[6]},54 v26 l-10,20 M${xs[6]},80 l10,20 M${xs[6]-12},66 h24" stroke="#fff" stroke-width="6" stroke-linecap="round" fill="none"/>`+cap(xs[6],140,'Pentru pietoni','Pedestrians only');
 out.fd_indicatoare=K.svg(920,172,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

const K=require('./kit');const {T,S,INK,W8,WD,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
const box=(c='#D7A86E')=>`<path d="M-30,-10 l14,-12 h44 l-14,12z" fill="#E6BE8A" ${S}/><path d="M-30,-10 h44 v36 h-44z" fill="${c}" ${S}/><path d="M14,-10 l14,-12 v36 l-14,12z" fill="#B98A50" ${S}/><path d="M-12,-10 v10 h8 v-10" fill="#fff" opacity=".6"/>`;
out.tl_depozit=K.grid([
 ['transpaletul','pallet truck',`<path d="M-36,20 h50 v6 h-50z" fill="${W8}" ${S}/><path d="M10,20 v-16 h10 v22" fill="${RD}" ${S}/><path d="M16,4 l14,-40" stroke="${INK}" stroke-width="5"/><path d="M22,-40 h16" stroke="${INK}" stroke-width="6"/><circle cx="-30" cy="30" r="4" fill="${INK}"/><circle cx="14" cy="30" r="5" fill="${INK}"/>`],
 ['stivuitorul','forklift',`<rect x="-26" y="-6" width="36" height="26" fill="${YL}" ${S}/><path d="M-20,-6 v-22 h22 l6,22" fill="none" stroke="${INK}" stroke-width="3"/><path d="M16,-36 v56 M16,20 h20" stroke="${INK}" stroke-width="4"/><circle cx="-16" cy="24" r="8" fill="${INK}"/><circle cx="6" cy="24" r="8" fill="${INK}"/>`],
 ['raftul','shelving / rack',`<path d="M-34,-38 v76 M34,-38 v76" stroke="${BL}" stroke-width="5"/><path d="M-34,-12 h68 M-34,14 h68" stroke="${OR}" stroke-width="5"/><rect x="-26" y="-30" width="18" height="16" fill="#D7A86E" ${S}/><rect x="6" y="-4" width="20" height="16" fill="#D7A86E" ${S}/>`],
 ['paletul','pallet',`<path d="M-38,-2 h76 v8 h-76z M-38,16 h76 v8 h-76z" fill="${WD}" ${S}/><path d="M-34,6 h10 v10 h-10z M-5,6 h10 v10 h-10z M24,6 h10 v10 h-10z" fill="#A0703A" ${S}/>`],
 ['coletul · cutia','parcel · box',box()],
 ['scannerul','barcode scanner',`<path d="M-24,-20 h40 l8,14 h-24 l-6,34 h-12z" fill="#37474F" ${S}/><path d="M24,-6 l14,-8 M24,-6 l14,0 M24,-6 l14,8" stroke="${RD}" stroke-width="2"/>`],
 ['cutterul','utility knife',`<path d="M-36,10 h44 l16,-14 h-60z" fill="${YL}" ${S}/><path d="M24,-4 l14,-6 l-4,10z" fill="${W8}" ${S}/>`],
 ['banda adezivă','packing tape',`<circle r="26" fill="#D7A86E" ${S}/><circle r="12" fill="#F6F8F4" ${S}/><path d="M20,16 h20 v8 h-20z" fill="#D7A86E" ${S}/>`],
 ['folia stretch','stretch film',`<rect x="-14" y="-36" width="28" height="72" rx="10" fill="#E1F5FE" ${S}/><rect x="-5" y="-40" width="10" height="80" fill="${W8}" ${S}/>`],
 ['eticheta','label',`<rect x="-30" y="-24" width="60" height="48" rx="4" fill="#fff" ${S}/>`+Array.from({length:12},(_,i)=>`<rect x="${-24+i*4}" y="-16" width="${i%3?1.5:3}" height="20" fill="${INK}"/>`).join('')+`<path d="M-24,12 h48" stroke="${W8}" stroke-width="3"/>`],
 ['cântarul','scale',`<rect x="-34" y="4" width="68" height="18" rx="3" fill="#CFD8DC" ${S}/><rect x="-12" y="-24" width="24" height="16" rx="3" fill="#C8E6C9" ${S}/><path d="M0,-8 v12" stroke="${INK}" stroke-width="3"/>`],
 ['căruciorul','hand truck',`<path d="M-14,-38 v66 h30" fill="none" stroke="${INK}" stroke-width="5"/><circle cx="-8" cy="30" r="7" fill="${INK}"/><rect x="-8" y="-4" width="26" height="30" fill="#D7A86E" ${S}/><rect x="-8" y="-30" width="26" height="24" fill="#E6BE8A" ${S}/>`],
 ['rampa de încărcare','loading dock',`<path d="M-40,30 h80 v-24 h-40 v-30 h-40z" fill="#CFD8DC" ${S}/><rect x="-36" y="-20" width="30" height="24" fill="#90A4AE" ${S}/>`],
 ['duba · furgoneta','van',`<path d="M-40,14 v-30 h46 l14,14 h18 v16z" fill="#fff" ${S}/><path d="M8,-14 h8 l10,10 h-18z" fill="#B3E5FC" ${S}/><circle cx="-24" cy="18" r="8" fill="${INK}"/><circle cx="22" cy="18" r="8" fill="${INK}"/>`],
 ['camionul','lorry / truck',`<rect x="-40" y="-24" width="52" height="38" fill="#ECEFF1" ${S}/><path d="M12,14 v-26 h16 l12,12 v14z" fill="${RD}" ${S}/><circle cx="-26" cy="18" r="7" fill="${INK}"/><circle cx="-8" cy="18" r="7" fill="${INK}"/><circle cx="28" cy="18" r="7" fill="${INK}"/>`],
 ['terminalul','handheld terminal',`<rect x="-18" y="-34" width="36" height="68" rx="6" fill="#37474F" ${S}/><rect x="-12" y="-26" width="24" height="36" fill="#C8E6C9"/><path d="M-8,-14 h16 M-8,-6 h12" stroke="${GR}" stroke-width="3"/>`],
],8,126,148);
out.tl_echipament=K.worker({hat:'cap',capc:'#37474F',top:'#1E88E5',vest:1,gloves:'#FDD835',legs:'#37474F',hold:`<rect x="386" y="330" width="26" height="40" rx="4" fill="#37474F"/>`},[
 [300,70,'L',50,'șapca (sau casca, în depozit)','cap (helmet in some warehouses)'],[256,270,'L',240,'vesta reflectorizantă','hi-vis vest'],[213,365,'L',360,'mănușile de lucru','work gloves'],
 [398,346,'R',330,'scannerul · terminalul','handheld scanner'],[320,440,'R',430,'pantalonii de lucru','work trousers'],[330,532,'R',520,'bocancii cu bombeu metalic','safety boots']]);
{ // shipping label
 let b=`<rect x="20" y="20" width="560" height="330" rx="10" fill="#fff" stroke="${INK}" stroke-width="3"/>`;
 b+=T(40,56,20,'CURIER EXEMPLU',{a:'start',b:1})+T(560,56,16,'AWB 1234 5678 9012',{a:'end',b:1});
 for(let i=0;i<46;i++) b+=`<rect x="${40+i*11}" y="70" width="${i%3?3:6}" height="46" fill="${INK}"/>`;
 b+=`<line x1="30" y1="132" x2="570" y2="132" stroke="${INK}"/>`+T(40,158,14,'DESTINATAR / to:',{a:'start',b:1,c:'#555'});
 const L=[['Ionescu Maria','nume · name'],['Str. Florilor nr. 12, bl. B3, sc. 2, et. 4, ap. 17','strada, număr, bloc, scara, etaj, apartament'],['Ploiești, jud. Prahova, 100123','orașul, județul, codul poștal'],['Tel.: 07xx xxx xxx','telefonul']];
 L.forEach((l,i)=>{b+=T(40,188+i*32,17,l[0],{a:'start',b:1})});
 b+=`<line x1="30" y1="306" x2="570" y2="306" stroke="${INK}"/>`+T(40,332,15,'Greutate: 2,4 kg · Colet 1/1 · Ramburs: 120,00 lei',{a:'start',b:1,c:RD});
 const lab=(y1,ly,t,e)=>`<circle cx="578" cy="${y1}" r="4" fill="${GR}"/><polyline points="578,${y1} 610,${ly} 630,${ly}" fill="none" stroke="${GR}" stroke-width="1.5"/>`+T(636,ly-2,15,t,{a:'start',b:1})+T(636,ly+14,12,e,{a:'start',i:1,c:'#555'});
 b+=lab(56,40,'AWB-ul','the tracking number')+lab(94,92,'codul de bare','scan it')+lab(188,150,'numele destinatarului','the recipient')+lab(220,205,'adresa','see the table')+lab(252,262,'localitatea · județul · codul poștal','town · county · postcode')+lab(332,322,'greutatea · ramburs','weight · cash on delivery');
 out.tl_eticheta=K.svg(900,370,b);
}
{ // box dims
 let b=`<path d="M80,120 l90,-60 h240 l-90,60z" fill="#E6BE8A" stroke="${INK}" stroke-width="2.5"/><path d="M80,120 h240 v150 h-240z" fill="#D7A86E" stroke="${INK}" stroke-width="2.5"/><path d="M320,120 l90,-60 v150 l-90,60z" fill="#B98A50" stroke="${INK}" stroke-width="2.5"/>`;
 b+=`<path d="M80,292 h240" stroke="${RD}" stroke-width="2"/>`+T(200,314,16,'lungimea L = 60 cm',{b:1,c:RD})+`<path d="M342,286 l80,-54" stroke="${RD}" stroke-width="2"/>`+T(420,280,16,'lățimea l = 40 cm',{b:1,c:RD,a:'start'})+`<path d="M60,120 v150" stroke="${RD}" stroke-width="2"/>`+T(52,200,16,'h = 30 cm',{b:1,c:RD,a:'end'});
 b+=`<rect x="520" y="70" width="330" height="200" rx="10" fill="${LG}" stroke="${GR}"/>`;
 [['Volumul / volume:',1],['L × l × h',0],['0,60 × 0,40 × 0,30 m',0],['= 0,072 m³ (mc)',1],['Greutatea / weight: 12 kg',1],['Dimensiuni: 60 × 40 × 30 cm',0]].forEach((r,i)=>b+=T(540,102+i*30,16,r[0],{a:'start',b:r[1]}));
 out.tl_colet=K.svg(940,330,`<g transform="translate(60,0)">${b}</g>`);
}
out.tl_flux=K.steps('Drumul mărfii prin depozit / The flow of goods',[['recepția','receiving','descărcare, verificare'],['depozitarea','put-away','pe raft, la locație'],['picking-ul','picking','lista de picking'],['ambalarea','packing','cutie, bandă, etichetă'],['expedierea','dispatch','încărcare în camion'],['livrarea','delivery','la client']]);
{ // road signs
 let b=''; const cap=(cx,y,ro,en)=>T(cx,y,13.5,ro,{b:1})+T(cx,y+16,11.5,en,{i:1,c:'#555'});
 const xs=[70,200,330,460,590,720,850];
 b+=`<path d="M${xs[0]-20},30 h40 l20,20 v40 l-20,20 h-40 l-20,-20 v-40z" fill="#D32F2F" stroke="#fff" stroke-width="3"/>`+T(xs[0],78,20,'STOP',{b:1,c:'#fff'})+cap(xs[0],140,'Oprire obligatorie','Stop');
 b+=`<path d="M${xs[1]-45},30 h90 l-45,78z" fill="#fff" stroke="#D32F2F" stroke-width="9" stroke-linejoin="round"/>`+cap(xs[1],140,'Cedează trecerea','Give way');
 b+=`<circle cx="${xs[2]}" cy="70" r="40" fill="#D32F2F"/><rect x="${xs[2]-28}" y="62" width="56" height="16" fill="#fff"/>`+cap(xs[2],140,'Accesul interzis','No entry');
 b+=`<circle cx="${xs[3]}" cy="70" r="40" fill="#fff" stroke="#D32F2F" stroke-width="8"/>`+T(xs[3],82,32,'50',{b:1})+cap(xs[3],140,'Viteza maximă 50','Speed limit 50 km/h');
 b+=`<circle cx="${xs[4]}" cy="70" r="40" fill="#1565C0" stroke="#D32F2F" stroke-width="8"/><path d="M${xs[4]-26},44 l52,52 M${xs[4]+26},44 l-52,52" stroke="#D32F2F" stroke-width="8"/>`+cap(xs[4],140,'Oprirea interzisă','No stopping');
 b+=`<rect x="${xs[5]-38}" y="32" width="76" height="76" rx="6" fill="#1565C0"/>`+T(xs[5],90,52,'P',{b:1,c:'#fff'})+cap(xs[5],140,'Parcare','Parking');
 b+=`<rect x="${xs[6]-38}" y="32" width="76" height="76" rx="6" fill="#1565C0"/><path d="M${xs[6]-24},76 h36 v14 l20,-20 l-20,-20 v14 h-36z" fill="#fff"/>`+cap(xs[6],140,'Sens unic','One-way street');
 out.tl_indicatoare=K.svg(920,172,b);
}
{ // lifting
 let b=''; const man=(x,bent,ok)=>{let s=`<g transform="translate(${x},0)">`;
   if(ok) s+=`<circle cx="60" cy="40" r="14" fill="#E8B98A" ${S}/><path d="M60,54 v50 l-18,20 v40 M60,104 l18,20 v40" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><path d="M60,70 l24,40" stroke="${INK}" stroke-width="6"/><rect x="72" y="110" width="40" height="34" fill="#D7A86E" ${S}/>`;
   else s+=`<circle cx="100" cy="90" r="14" fill="#E8B98A" ${S}/><path d="M88,98 L40,90 v70 M40,90 l-4,74" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/><path d="M80,100 l14,40" stroke="${INK}" stroke-width="6"/><rect x="84" y="134" width="40" height="30" fill="#D7A86E" ${S}/>`;
   s+=`<circle cx="150" cy="40" r="20" fill="${ok?'#2E7D32':'#D32F2F'}"/>`+T(150,48,22,ok?'✓':'✗',{b:1,c:'#fff'})+T(80,196,15,ok?'CORECT — cu genunchii îndoiți, spatele drept':'GREȘIT — cu spatele îndoit',{b:1,c:ok?'#2E7D32':'#D32F2F'})+T(80,214,12.5,ok?'bend your knees, back straight, load close':'never lift with a bent back',{i:1,c:'#555'});
   return s+'</g>';};
 b+=man(200,0,1)+man(580,1,0);
 out.tl_ridicare=K.svg(900,226,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

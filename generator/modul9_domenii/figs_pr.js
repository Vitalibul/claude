const K=require('./kit');const {T,S,INK,W8,WD,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
out.pr_utilaje=K.grid([
 ['banda','conveyor belt',`<rect x="-40" y="-2" width="80" height="14" rx="7" fill="#546E7A" ${S}/><circle cx="-32" cy="5" r="5" fill="${W8}"/><circle cx="32" cy="5" r="5" fill="${W8}"/><rect x="-22" y="-20" width="16" height="16" fill="#D7A86E" ${S}/><rect x="6" y="-20" width="16" height="16" fill="#D7A86E" ${S}/><path d="M-34,14 v18 M34,14 v18" stroke="${INK}" stroke-width="4"/>`],
 ['utilajul · mașina','machine',`<rect x="-36" y="-30" width="72" height="60" rx="4" fill="#90A4AE" ${S}/><rect x="-26" y="-20" width="30" height="24" fill="#B3E5FC" ${S}/><circle cx="20" cy="-10" r="6" fill="#43A047"/><circle cx="20" cy="8" r="6" fill="${RD}"/>`],
 ['panoul de comandă','control panel',`<rect x="-34" y="-28" width="68" height="56" rx="4" fill="#ECEFF1" ${S}/><rect x="-26" y="-20" width="30" height="18" fill="#C8E6C9" ${S}/><circle cx="18" cy="-12" r="6" fill="#43A047"/><circle cx="-16" cy="14" r="6" fill="${YL}"/><circle cx="4" cy="14" r="6" fill="${BL}"/><circle cx="22" cy="14" r="6" fill="${RD}"/>`],
 ['butonul STOP','emergency stop',`<rect x="-30" y="-30" width="60" height="60" rx="6" fill="${YL}" ${S}/><circle r="20" fill="#D32F2F" ${S}/>`],
 ['înșurubătorul','power screwdriver',`<path d="M-34,-24 h44 q10,0 10,10 v4 h-54z" fill="${BL}" ${S}/><rect x="20" y="-18" width="20" height="5" fill="${W8}" ${S}/><path d="M-16,-10 h20 l-6,40 h-16z" fill="${INK}"/>`],
 ['cheia fixă','spanner',`<path d="M-30,24 L20,-18" stroke="${W8}" stroke-width="10" stroke-linecap="round"/><path d="M14,-30 a14,14 0 1,1 16,20 l-6,-6 l6,-8 l-8,-6 z" fill="${W8}" ${S}/>`],
 ['șurubelnița','screwdriver',`<g transform="rotate(-40)"><rect x="-8" y="-40" width="16" height="36" rx="6" fill="${RD}" ${S}/><rect x="-3" y="-4" width="6" height="40" fill="${W8}" ${S}/></g>`],
 ['foarfeca','scissors',`<circle cx="-18" cy="20" r="10" fill="none" stroke="${RD}" stroke-width="5"/><circle cx="18" cy="20" r="10" fill="none" stroke="${RD}" stroke-width="5"/><path d="M-12,12 L14,-36 M12,12 L-14,-36" stroke="${W8}" stroke-width="5"/>`],
 ['mașina de cusut','sewing machine',`<path d="M-36,20 h72 v10 h-72z" fill="#546E7A" ${S}/><path d="M-30,20 v-40 h56 v18 h-14 v22" fill="#ECEFF1" ${S}/><path d="M18,-2 v14" stroke="${INK}" stroke-width="3"/>`],
 ['presa','press',`<rect x="-30" y="-38" width="60" height="16" fill="#78909C" ${S}/><path d="M-26,-22 v48 M26,-22 v48" stroke="${INK}" stroke-width="6"/><rect x="-14" y="-22" width="28" height="18" fill="#B0BEC5" ${S}/><rect x="-30" y="22" width="60" height="10" fill="#78909C" ${S}/>`],
 ['fierăstrăul circular','circular saw',`<rect x="-38" y="6" width="76" height="12" fill="${WD}" ${S}/><circle cx="0" cy="4" r="22" fill="${W8}" ${S}/>`+Array.from({length:12},(_,i)=>`<path d="M0,-18 l3,-6 l3,6" fill="${W8}" transform="rotate(${i*30} 0 4)"/>`).join('')],
 ['șublerul','calliper',`<rect x="-40" y="-6" width="80" height="12" fill="${W8}" ${S}/><path d="M-40,-6 v34 h8 v-34 M-8,-6 v34 h8 v-34" fill="${W8}" ${S}/><rect x="-14" y="-14" width="22" height="12" fill="#37474F"/>`],
 ['piesa','part, component',`<path d="M-24,-24 h48 v14 h-14 v34 h-20 v-34 h-14z" fill="#B0BEC5" ${S}/><circle cx="0" cy="12" r="5" fill="#F6F8F4" ${S}/>`],
 ['cutia · containerul','box · bin',`<path d="M-34,-10 h68 l-6,36 h-56z" fill="${BL}" ${S}/><path d="M-34,-10 h68" stroke="${INK}" stroke-width="3"/>`],
 ['paletul','pallet',`<path d="M-38,-2 h76 v8 h-76z M-38,16 h76 v8 h-76z" fill="${WD}" ${S}/><path d="M-34,6 h10 v10 h-10z M-5,6 h10 v10 h-10z M24,6 h10 v10 h-10z" fill="#A0703A" ${S}/>`],
 ['căruciorul','trolley',`<rect x="-34" y="-14" width="68" height="28" fill="#90A4AE" ${S}/><path d="M34,-14 v-18" stroke="${INK}" stroke-width="4"/><circle cx="-22" cy="22" r="6" fill="${INK}"/><circle cx="22" cy="22" r="6" fill="${INK}"/>`],
],8,126,148);
out.pr_echipament=K.worker({hat:'bonnet',top:'#1976D2',glasses:1,ear:1,mask:1,gloves:'#FFFFFF',legs:'#1565C0',shoes:'#212121'},[
 [300,70,'L',50,'boneta (industria alimentară)','hair cap (food industry)'],[250,125,'L',110,'antifoanele','ear defenders'],[300,150,'L',170,'masca','mask'],[213,365,'L',360,'mănușile de protecție','protective gloves'],
 [320,121,'R',100,'ochelarii de protecție','safety glasses'],[356,270,'R',250,'halatul / salopeta','work coat / overalls'],[330,532,'R',520,'încălțămintea de protecție','safety shoes']]);
{ // calliper reading
 let b=`<rect x="40" y="80" width="760" height="40" fill="#CFD8DC" stroke="${INK}" stroke-width="2.5"/>`;
 for(let mm=0;mm<=70;mm++){const x=60+mm*10;const h=mm%10==0?22:(mm%5==0?16:10);b+=`<line x1="${x}" y1="80" x2="${x}" y2="${80+h}" stroke="${INK}" stroke-width="${mm%10==0?2:1}"/>`;if(mm%10==0)b+=T(x,117,13,mm/10,{b:1});}
 b+=`<path d="M40,80 v120 h26 v-120" fill="#B0BEC5" stroke="${INK}" stroke-width="2.5"/><path d="M314,60 h120 v60 h-120z" fill="#90A4AE" stroke="${INK}" stroke-width="2.5"/><path d="M314,120 v80 h26 v-80" fill="#B0BEC5" stroke="${INK}" stroke-width="2.5"/>`;
 b+=`<rect x="330" y="20" width="96" height="36" rx="4" fill="#C8E6C9" stroke="${INK}" stroke-width="2"/>`+T(378,46,20,'25,40',{b:1})+T(440,44,13,'mm',{a:'start',b:1});
 b+=`<rect x="66" y="150" width="248" height="40" fill="#FFCC80" stroke="${INK}" stroke-width="2"/>`+T(190,176,14,'piesa · the part',{b:1});
 b+=`<path d="M66,215 h248" stroke="${RD}" stroke-width="2"/><path d="M66,209 v12 M314,209 v12" stroke="${RD}" stroke-width="2"/>`+T(66,240,15,'25,40 mm = douăzeci și cinci virgulă patruzeci de milimetri',{b:1,c:RD,a:'start'});
 b+=`<rect x="560" y="140" width="320" height="110" rx="10" fill="${LG}" stroke="${GR}"/>`+[['Cota: 25,4 ± 0,1 mm',1],['min. 25,3 · max. 25,5',0],['25,40 → CONFORM ✓',1],['25,62 → NECONFORM ✗',1]].map((r,i)=>T(578,168+i*24,15,r[0],{a:'start',b:r[1],c:i==2?'#2E7D32':(i==3?'#C62828':INK)})).join('');
 b+=T(100,50,13,'fălcile · jaws',{i:1,c:'#555'})+T(470,40,13,'afișajul · display',{a:'start',i:1,c:'#555'});
 out.pr_subler=K.svg(900,260,b);
}
out.pr_linie=K.steps('Linia de producție / The production line',[['materia primă','raw material','din depozit'],['prelucrarea','processing','tăiere, presare, cusut'],['asamblarea','assembly','piesele împreună'],['controlul calității','quality check','conform / neconform'],['ambalarea','packing','etichetă, lot'],['depozitul','warehouse','produsul finit']]);
{ // defects
 let b=''; const part=(x,label,en,extra,ok)=>{let s=`<g transform="translate(${x},0)"><rect x="20" y="30" width="120" height="80" rx="8" fill="#B0BEC5" stroke="${INK}" stroke-width="2.5"/><circle cx="80" cy="70" r="14" fill="#F6F8F4" stroke="${INK}" stroke-width="2"/>${extra}`;
   s+=`<circle cx="136" cy="30" r="14" fill="${ok?'#2E7D32':'#C62828'}"/>`+T(136,36,16,ok?'✓':'✗',{b:1,c:'#fff'})+T(80,134,15,label,{b:1,c:ok?'#2E7D32':'#C62828'})+T(80,152,12,en,{i:1,c:'#555'})+'</g>';return s;};
 b+=part(0,'conformă','OK part','',1)+part(180,'zgâriată','scratched','<path d="M34,50 l40,24 M40,44 l40,24" stroke="#C62828" stroke-width="2.5"/>',0)+part(360,'fisurată','cracked','<path d="M110,32 l-12,20 l10,8 l-14,22" stroke="#C62828" stroke-width="3" fill="none"/>',0)+part(540,'deformată','bent, deformed','<path d="M20,30 q60,-20 120,0" stroke="#C62828" stroke-width="3" fill="none"/>',0)+part(720,'incompletă','missing part','<rect x="66" y="56" width="28" height="28" fill="#FFCDD2" stroke="#C62828" stroke-width="2" stroke-dasharray="4,3"/>',0);
 out.pr_defecte=K.svg(900,166,b);
}
{ // CLP
 let b=''; const d=(cx,inner,ro,en)=>`<g transform="translate(${cx},70)"><rect x="-38" y="-38" width="76" height="76" fill="#fff" stroke="#D32F2F" stroke-width="7" transform="rotate(45)"/>${inner}</g>`+T(cx,160,13.5,ro,{b:1})+T(cx,176,11.5,en,{i:1,c:'#555'});
 const xs=[70,212,354,496,638,780,922];
 b+=d(xs[0],`<path d="M0,-30 q18,20 8,34 q10,-4 10,-14 q14,24 -8,36 h-20 q-22,-12 -6,-40 q2,10 10,12 q-8,-14 6,-28z" fill="#000"/>`,'Inflamabil','Flammable');
 b+=d(xs[1],`<rect x="-26" y="-30" width="8" height="22" fill="#000" transform="rotate(-50 -22 -19)"/><rect x="10" y="-30" width="8" height="22" fill="#000" transform="rotate(-50 14 -19)"/><circle cx="-12" cy="-2" r="3" fill="#000"/><circle cx="24" cy="-2" r="3" fill="#000"/><rect x="-30" y="12" width="26" height="8" fill="#000"/><path d="M-22,12 l4,-6 l4,6" fill="#fff"/><path d="M8,20 v-10 q8,-6 20,0 v10z" fill="#000"/>`,'Coroziv','Corrosive');
 b+=d(xs[2],`<circle cx="0" cy="-8" r="16" fill="#000"/><circle cx="-6" cy="-10" r="4" fill="#fff"/><circle cx="6" cy="-10" r="4" fill="#fff"/><path d="M-22,10 l44,20 M22,10 l-44,20" stroke="#000" stroke-width="6"/>`,'Toxic','Toxic');
 b+=d(xs[3],`<rect x="-4" y="-28" width="8" height="34" rx="3" fill="#000"/><circle cx="0" cy="18" r="5" fill="#000"/>`,'Iritant, nociv','Irritant, harmful');
 b+=d(xs[4],`<circle cx="0" cy="-22" r="7" fill="#000"/><path d="M-16,-12 h32 v34 h-32z" fill="#000"/><path d="M-8,-6 l8,12 l8,-12 l-8,-4z" fill="#fff"/>`,'Pericol pentru sănătate','Health hazard');
 b+=d(xs[5],`<rect x="-10" y="-26" width="20" height="50" rx="8" fill="#000"/><rect x="-5" y="-32" width="10" height="8" fill="#000"/>`,'Gaz sub presiune','Gas under pressure');
 b+=d(xs[6],`<path d="M-24,20 h48" stroke="#000" stroke-width="3"/><path d="M-18,0 l6,-20 l6,20z" fill="#000"/><path d="M4,10 q10,-10 20,0 q-10,8 -20,0z" fill="#000"/>`,'Periculos pentru mediu','Environmental hazard');
 out.pr_clp=K.svg(1000,190,b);
}
{ // shifts
 let b=''; const sh=[['tura I','06:00 – 14:00','dimineața','#FFE082'],['tura a II-a','14:00 – 22:00','după-amiaza','#FFB74D'],['tura a III-a','22:00 – 06:00','noaptea','#90A4AE']];
 sh.forEach((s,i)=>{const x=20+i*296;b+=`<rect x="${x}" y="20" width="276" height="100" rx="12" fill="${s[3]}" stroke="${INK}" stroke-width="2"/>`+T(x+138,56,20,s[0],{b:1})+T(x+138,84,17,s[1],{b:1})+T(x+138,106,14,s[2],{i:1});});
 b+=T(450,146,13,'Example of a three-shift schedule — your company sets the real hours. „Lucrez în tura a doua.” · predarea-primirea turei = shift handover',{i:1,c:'#555'});
 out.pr_ture=K.svg(900,160,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

const K=require('./kit');const {T,S,INK,W8,WD,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
out.rt_magazin=K.grid([
 ['raftul','shelf',`<path d="M-34,-38 v76 M34,-38 v76" stroke="${W8}" stroke-width="5"/><path d="M-34,-12 h68 M-34,14 h68" stroke="${INK}" stroke-width="4"/>`+[[-26,-30,'#EF5350'],[-8,-30,'#FFCA28'],[10,-30,'#66BB6A'],[-26,-4,'#42A5F5'],[-8,-4,'#AB47BC'],[10,-4,'#FFA726']].map(p=>`<rect x="${p[0]}" y="${p[1]}" width="14" height="16" fill="${p[2]}" ${S}/>`).join('')],
 ['casa de marcat','cash register',`<path d="M-34,24 h68 l-6,-24 h-56z" fill="#ECEFF1" ${S}/><rect x="-16" y="-30" width="32" height="22" rx="3" fill="#37474F" ${S}/><rect x="-12" y="-26" width="24" height="12" fill="#C8E6C9"/><path d="M-4,-8 v8" stroke="${INK}" stroke-width="4"/>`],
 ['scannerul','barcode scanner',`<path d="M-24,-20 h40 l8,14 h-24 l-6,34 h-12z" fill="#37474F" ${S}/><path d="M24,-6 l14,-8 M24,-6 l14,0 M24,-6 l14,8" stroke="${RD}" stroke-width="2"/>`],
 ['terminalul POS','card terminal',`<rect x="-20" y="-34" width="40" height="68" rx="6" fill="#455A64" ${S}/><rect x="-14" y="-28" width="28" height="18" fill="#C8E6C9"/>`+[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${-14+c*10}" y="${-4+r*10}" width="8" height="7" rx="1.5" fill="#CFD8DC"/>`).join('')).join('')],
 ['cântarul','scale',`<rect x="-34" y="4" width="68" height="18" rx="3" fill="#CFD8DC" ${S}/><rect x="-12" y="-24" width="24" height="16" rx="3" fill="#C8E6C9" ${S}/><path d="M0,-8 v12" stroke="${INK}" stroke-width="3"/>`],
 ['coșul','basket',`<path d="M-32,-8 h64 l-8,36 h-48z" fill="${RD}" ${S}/><path d="M-20,-8 q20,-36 40,0" fill="none" stroke="${INK}" stroke-width="4"/>`],
 ['căruciorul','shopping trolley',`<path d="M-38,-26 h10 l10,40 h40 l8,-30 h-54" fill="none" stroke="${INK}" stroke-width="4"/><circle cx="-12" cy="24" r="5" fill="${INK}"/><circle cx="20" cy="24" r="5" fill="${INK}"/>`],
 ['eticheta de preț','price label',`<rect x="-34" y="-20" width="68" height="40" rx="3" fill="#FFF59D" ${S}/>`+T(0,6,16,'9,99',{b:1,c:RD})],
 ['etichetatorul','price gun',`<path d="M-30,-18 h44 q10,0 10,10 v10 h-34 l-8,30 h-12z" fill="${OR}" ${S}/><rect x="10" y="-26" width="20" height="10" fill="#fff" ${S}/>`],
 ['naveta · lădița','crate',`<path d="M-34,-14 h68 v34 h-68z" fill="#66BB6A" ${S}/><path d="M-26,-6 h10 v18 h-10z M-6,-6 h12 v18 h-12z M16,-6 h10 v18 h-10z" fill="#F6F8F4"/>`],
 ['vitrina frigorifică','fridge display',`<rect x="-30" y="-38" width="60" height="76" rx="4" fill="#E3F2FD" ${S}/><path d="M-30,-14 h60 M-30,10 h60 M0,-38 v76" stroke="${INK}" stroke-width="2"/>`],
 ['lada frigorifică','chest freezer',`<rect x="-38" y="-10" width="76" height="36" rx="4" fill="#E1F5FE" ${S}/><path d="M-38,-2 h76" stroke="${INK}" stroke-width="2"/>`+[0,60,120].map(a=>`<line x1="-10" y1="12" x2="10" y2="12" stroke="${BL}" stroke-width="3" transform="rotate(${a} 0 12)"/>`).join('')],
 ['transpaletul','pallet truck',`<path d="M-36,20 h50 v6 h-50z" fill="${W8}" ${S}/><path d="M10,20 v-16 h10 v22" fill="${RD}" ${S}/><path d="M16,4 l14,-40" stroke="${INK}" stroke-width="5"/><path d="M22,-40 h16" stroke="${INK}" stroke-width="6"/>`],
 ['cutterul','utility knife',`<path d="M-36,10 h44 l16,-14 h-60z" fill="${YL}" ${S}/><path d="M24,-4 l14,-6 l-4,10z" fill="${W8}" ${S}/>`],
 ['punga','bag',`<path d="M-26,-16 h52 l-4,50 h-44z" fill="#FFF8E1" ${S}/><path d="M-12,-16 q12,-24 24,0" fill="none" stroke="${INK}" stroke-width="3"/>`],
 ['bonul fiscal','receipt',`<path d="M-20,-36 h40 v66 l-6,6 l-7,-6 l-7,6 l-7,-6 l-7,6 l-6,-6z" fill="#fff" ${S}/><path d="M-12,-24 h24 M-12,-14 h24 M-12,-4 h16 M-12,14 h24" stroke="${W8}" stroke-width="3"/>`],
],8,126,148);
out.rt_echipament=K.worker({hat:'none',hair:1,top:'#E53935',badge:1,gloves:'#FFFFFF',legs:'#263238',shoes:'#212121'},[
 [300,62,'L',40,'uniforma cu sigla magazinului','uniform with the shop logo'],[345,216,'R',190,'ecusonul — numele tău','name badge'],[213,365,'L',360,'mănușile (la marfă, la frig)','gloves (goods, cold room)'],
 [300,270,'L',250,'tricoul / cămașa firmei','company T-shirt / shirt'],[320,440,'R',420,'pantalonii de lucru','work trousers'],[330,532,'R',520,'încălțămintea de protecție','safety shoes']]);
{ // price label
 let b=`<rect x="20" y="30" width="520" height="250" rx="10" fill="#FFF59D" stroke="${INK}" stroke-width="3"/>`;
 b+=T(52,72,22,'Lapte de vacă 1,5% grăsime',{a:'start',b:1})+T(52,100,16,'1 l · Producător: Ferma Exemplu',{a:'start',c:'#555'});
 b+=T(510,190,62,'7,49',{a:'end',b:1,c:RD})+T(510,222,18,'lei / buc.',{a:'end',b:1});
 b+=T(52,178,16,'Preț / l: 7,49 lei',{a:'start',b:1})+`<rect x="52" y="198" width="190" height="30" rx="4" fill="#E53935"/>`+T(147,219,16,'PROMO −20%',{b:1,c:'#fff'});
 for(let i=0;i<34;i++) b+=`<rect x="${52+i*6}" y="240" width="${i%3?2:3.5}" height="30" fill="${INK}"/>`;
 b+=T(470,268,13,'cod 5941234567890',{c:'#555'});
 const num=(x,y,n)=>`<circle cx="${x}" cy="${y}" r="12" fill="${GR}"/>`+T(x,y+5,14,n,{b:1,c:'#fff'});
 b+=num(30,66,1)+num(30,96,2)+num(385,150,3)+num(30,172,4)+num(30,214,5)+num(30,256,6);
 [['denumirea produsului','product name'],['cantitatea','quantity (1 l, 500 g)'],['prețul','price'],['prețul pe unitate (kg / l)','unit price'],['promoția','the offer'],['codul de bare','barcode']].forEach((l,i)=>{const y=52+i*42;b+=num(590,y,i+1)+T(610,y-2,15,l[0],{a:'start',b:1})+T(610,y+14,12,l[1],{a:'start',i:1,c:'#555'});});
 out.rt_eticheta=K.svg(900,320,b);
}
{ // dates
 let b='';
 const card=(x,title,sub,date,note,col)=>`<rect x="${x}" y="20" width="400" height="200" rx="12" fill="#fff" stroke="${col}" stroke-width="4"/><rect x="${x}" y="20" width="400" height="50" rx="12" fill="${col}"/>`+T(x+200,52,17,title,{b:1,c:'#fff'})+T(x+200,100,14,sub,{i:1,c:'#555'})+T(x+200,140,26,date,{b:1})+T(x+200,178,14,note[0],{b:1,c:col})+T(x+200,198,13,note[1],{i:1,c:'#555'});
 b+=card(20,'A se consuma înainte de:','use by — fresh meat, milk, fish...','12.10.2026',['După această dată: NU se mai vinde.','After this date the food is not safe.'],'#C62828');
 b+=card(460,'A se consuma de preferință înainte de:','best before — pasta, rice, biscuits...','03.2027',['Calitatea e garantată până la această dată.','Quality guaranteed until this date.'],'#1565C0');
 out.rt_date=K.svg(880,236,b);
}
{ // FIFO
 let b=`<rect x="60" y="40" width="520" height="140" fill="#ECEFF1" stroke="${INK}" stroke-width="2.5"/><path d="M60,180 h520" stroke="${INK}" stroke-width="6"/>`;
 const pk=(x,c,d)=>`<rect x="${x}" y="80" width="80" height="100" rx="6" fill="${c}" stroke="${INK}" stroke-width="2"/>`+T(x+40,136,14,d,{b:1});
 b+=pk(80,'#FFCDD2','12.10')+pk(180,'#FFCDD2','12.10')+pk(300,'#C8E6C9','20.10')+pk(400,'#C8E6C9','20.10')+pk(490,'#C8E6C9','20.10');
 b+=T(160,220,15,'ÎN FAȚĂ — the front: data mai veche',{b:1,c:'#C62828'})+T(460,220,15,'ÎN SPATE — the back: data nouă',{b:1,c:GR});
 b+=`<path d="M40,110 h-30 m10,-10 l-10,10 l10,10" stroke="${INK}" stroke-width="3" fill="none"/>`+T(24,90,13,'clientul',{c:'#555'});
 b+=`<rect x="620" y="40" width="260" height="140" rx="10" fill="${LG}" stroke="${GR}"/>`+[['Rotația mărfii (FIFO):',1],['vechiul în față,',0],['noul în spate.',0],['Primul intrat,',1],['primul ieșit.',1]].map((r,i)=>T(640,72+i*24,15,r[0],{a:'start',b:r[1]})).join('');
 out.rt_fifo=K.svg(900,236,b);
}
out.rt_casa=K.steps('La casă / At the checkout',[['salutul','greet','Bună ziua!'],['scanarea','scan the products','cântărește fructele'],['totalul','say the total','Face 57,40 lei.'],['plata','payment','cash sau card'],['bonul · restul','receipt · change','Poftiți restul.'],['la revedere','goodbye','O zi bună!']]);
{ // money
 let b=''; const notes=[[1,'#9CCC65'],[5,'#B39DDB'],[10,'#F48FB1'],[50,'#FFE082'],[100,'#90CAF9'],[200,'#BCAAA4'],[500,'#80CBC4']];
 notes.forEach((n,i)=>{const x=20+i*126;b+=`<rect x="${x}" y="20" width="112" height="60" rx="6" fill="${n[1]}" stroke="${INK}" stroke-width="2"/>`+T(x+56,58,22,n[0],{b:1})+T(x+56,98,13,n[0]===1?'un leu':`${n[0]} ${n[0]>=20?'de ':''}lei`,{b:1});});
 const coins=[1,5,10,50]; coins.forEach((c,i)=>{const x=80+i*120;b+=`<circle cx="${x}" cy="150" r="${22+i*3}" fill="${i<2?'#D7CCC8':'#E0E0E0'}" stroke="${INK}" stroke-width="2"/>`+T(x,156,15,c,{b:1})+T(x,196,13,c===1?'un ban':`${c} ${c>=20?'de ':''}bani`,{b:1});});
 b+=T(560,140,14,'1 leu = 100 de bani',{a:'start',b:1})+T(560,162,13,'bancnotele · monedele',{a:'start',i:1,c:'#555'})+T(560,182,12,'Schematic drawings, not the real notes.',{a:'start',i:1,c:'#777'});
 out.rt_bani=K.svg(900,210,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

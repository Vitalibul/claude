const F = "font-family=\"Arial, 'Liberation Sans', 'DejaVu Sans', sans-serif\"";
const DK='#1F5C45', GR='#2E7D55', LG='#E3F1E8', INK='#2B3A33';
const svg=(w,h,body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
const T=(x,y,s,txt,o={})=>`<text x="${x}" y="${y}" ${F} font-size="${s}" text-anchor="${o.a||'middle'}" fill="${o.c||INK}"${o.b?' font-weight="bold"':''}${o.i?' font-style="italic"':''}>${txt}</text>`;
const S=`stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"`;
const W8='#9AA5AE', WD='#C8914A', RD='#D9412B', YL='#F4C430', OR='#F07C1B', BL='#2F6DA3';
const out={};
const grid=(items,cols=8,cw=126,rh=148)=>{let b='';items.forEach((it,i)=>{const cx=cw/2+(i%cols)*cw, cy=56+Math.floor(i/cols)*rh;
  b+=`<circle cx="${cx}" cy="${cy}" r="50" fill="#F6F8F4"/><g transform="translate(${cx},${cy})">${it[2]}</g>`+T(cx,cy+74,13.5,it[0],{b:1})+T(cx,cy+91,12,it[1],{i:1,c:'#555'});});
  return svg(cols*cw,Math.ceil(items.length/cols)*rh+6,b);};
// ---------------- tools
const tools=[
 ['ciocanul','hammer',`<rect x="-6" y="-14" width="12" height="54" rx="4" fill="${WD}" ${S}/><path d="M-30,-34 h52 q8,0 8,8 v10 h-60z" fill="${W8}" ${S}/><path d="M22,-34 q14,6 14,20" fill="none" ${S}/>`],
 ['șurubelnița','screwdriver',`<g transform="rotate(-40)"><rect x="-8" y="-40" width="16" height="36" rx="6" fill="${RD}" ${S}/><rect x="-3" y="-4" width="6" height="36" fill="${W8}" ${S}/><path d="M-3,32 h6 l-1,8 h-4z" fill="${W8}" ${S}/></g>`],
 ['clește','pliers',`<path d="M-4,-36 l-8,30 l-14,40 M4,-36 l8,30 l14,40" fill="none" stroke="${INK}" stroke-width="6"/><path d="M-12,-6 l-14,40 M12,-6 l14,40" stroke="${RD}" stroke-width="10" stroke-linecap="round"/><circle cx="0" cy="-8" r="5" fill="${W8}" ${S}/>`],
 ['fierăstrăul','saw',`<path d="M-34,10 L30,-24 L34,-14 L-28,22z" fill="${W8}" ${S}/><path d="M-34,10 l-6,4 l0,22 l20,-8 z" fill="${WD}" ${S}/>`+Array.from({length:10},(_,i)=>`<path d="M${-26+i*6},${20-i*3.4} l3,4" stroke="${INK}" stroke-width="1.5"/>`).join('')],
 ['bormașina','drill',`<path d="M-34,-24 h44 q10,0 10,10 v4 h-54z" fill="${YL}" ${S}/><rect x="20" y="-18" width="22" height="6" fill="${W8}" ${S}/><path d="M-16,-10 h20 l-6,40 h-16z" fill="${INK}"/><rect x="-22" y="28" width="30" height="10" rx="3" fill="${YL}" ${S}/>`],
 ['flexul','angle grinder',`<rect x="-38" y="-10" width="50" height="20" rx="8" fill="#1976D2" ${S}/><circle cx="24" cy="4" r="22" fill="${W8}" ${S}/><circle cx="24" cy="4" r="5" fill="${INK}"/><path d="M12,-6 h14 v-8 h-14z" fill="#1976D2" ${S}/>`],
 ['nivela','spirit level',`<rect x="-42" y="-10" width="84" height="20" rx="4" fill="${YL}" ${S}/><rect x="-10" y="-5" width="20" height="10" rx="5" fill="#B9F6CA" ${S}/><circle cx="0" cy="0" r="3" fill="#fff"/>`],
 ['ruleta','tape measure',`<rect x="-30" y="-28" width="50" height="50" rx="12" fill="${YL}" ${S}/><circle cx="-5" cy="-3" r="10" fill="${INK}"/><path d="M20,14 h22 v8 h-22z" fill="#FFF59D" ${S}/>`],
 ['mistria','trowel',`<path d="M-34,24 L6,-14 L30,10 z" fill="${W8}" ${S}/><path d="M18,-2 l10,-18" stroke="${INK}" stroke-width="4"/><rect x="22" y="-40" width="12" height="24" rx="5" fill="${WD}" ${S} transform="rotate(30 28 -28)"/>`],
 ['drișca','float',`<rect x="-38" y="4" width="76" height="16" rx="3" fill="#FFB74D" ${S}/><path d="M-18,4 q0,-26 18,-26 q18,0 18,26" fill="none" stroke="${INK}" stroke-width="7"/>`],
 ['șpaclul','putty knife',`<path d="M-24,30 h48 l-8,-28 h-32z" fill="${W8}" ${S}/><rect x="-7" y="-36" width="14" height="38" rx="5" fill="${RD}" ${S}/>`],
 ['gletiera','notched trowel',`<path d="M-36,4 h72 v14 h-72z" fill="${W8}" ${S}/>`+Array.from({length:9},(_,i)=>`<rect x="${-34+i*8}" y="18" width="4" height="5" fill="${W8}"/>`).join('')+`<path d="M-14,4 q0,-24 14,-24 q14,0 14,24" fill="none" stroke="${INK}" stroke-width="7"/>`],
 ['pensula','paintbrush',`<rect x="-6" y="-40" width="12" height="36" rx="5" fill="${WD}" ${S}/><rect x="-14" y="-6" width="28" height="12" fill="${W8}" ${S}/><path d="M-14,6 h28 v24 q-14,8 -28,0z" fill="#E0C27A" ${S}/>`],
 ['trafaletul','paint roller',`<rect x="-34" y="-34" width="56" height="22" rx="10" fill="#FFF3E0" ${S}/><path d="M22,-23 h10 v24 h-30 v12" fill="none" stroke="${INK}" stroke-width="4"/><rect x="-6" y="12" width="12" height="28" rx="5" fill="${RD}" ${S}/>`],
 ['cutterul','utility knife',`<path d="M-36,10 h44 l16,-14 h-60z" fill="${YL}" ${S}/><path d="M24,-4 l14,-6 l-4,10z" fill="${W8}" ${S}/>`],
 ['lopata','shovel',`<rect x="-4" y="-42" width="8" height="52" fill="${WD}" ${S}/><path d="M-18,-44 h36" stroke="${INK}" stroke-width="5"/><path d="M-18,10 h36 v16 q-18,18 -36,0z" fill="${W8}" ${S}/>`],
 ['roaba','wheelbarrow',`<path d="M-36,-14 h56 l-10,24 h-36z" fill="#43A047" ${S}/><circle cx="-4" cy="24" r="10" fill="${INK}"/><path d="M20,-14 l20,-4 M-4,10 v8" stroke="${INK}" stroke-width="4"/><path d="M-26,10 l-4,22" stroke="${INK}" stroke-width="4"/>`],
 ['găleata','bucket',`<path d="M-26,-24 h52 l-6,54 h-40z" fill="#FF8A65" ${S}/><path d="M-26,-24 q26,-30 52,0" fill="none" ${S}/>`],
 ['betoniera','concrete mixer',`<path d="M-30,-6 L-8,-36 L22,-26 L28,8 L-6,20z" fill="${OR}" ${S}/><path d="M-20,20 l-10,20 M10,18 l12,22" stroke="${INK}" stroke-width="4"/><circle cx="-30" cy="40" r="5" fill="${INK}"/>`],
 ['scara','ladder',`<path d="M-20,40 L-8,-40 M20,40 L8,-40" stroke="${WD}" stroke-width="6"/>`+[-28,-8,12,32].map(y=>`<path d="M${-18+(y+40)*0.0},${y} h${36-0}" stroke="${WD}" stroke-width="5" transform="translate(${(40-y)*0.075*0},0)"/>`).join('')],
];
out.unelte=grid(tools,10,108,146);
// ---------------- materials
const bag=(c,t)=>`<path d="M-30,-30 h60 l4,62 h-68z" fill="${c}" ${S}/>`+T(0,6,12,t,{b:1});
const mats=[
 ['cimentul','cement',bag('#CFD8DC','CIMENT')],
 ['nisipul','sand',`<path d="M-40,30 Q0,-40 40,30z" fill="#E8C87A" ${S}/>`+[[-10,10],[6,0],[14,18],[-20,22]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="1.8" fill="#9C7A2E"/>`).join('')],
 ['varul','lime',bag('#FAFAFA','VAR')],
 ['BCA-ul','aerated concrete block',`<path d="M-36,-10 l20,-14 h50 l-20,14z" fill="#F5F5F5" ${S}/><path d="M-36,-10 h50 v36 h-50z" fill="#EEEEEE" ${S}/><path d="M14,-10 l20,-14 v36 l-20,14z" fill="#DDDDDD" ${S}/>`],
 ['cărămida','brick',`<path d="M-36,-4 l16,-12 h52 l-16,12z" fill="#D9774F" ${S}/><path d="M-36,-4 h52 v24 h-52z" fill="#C1502E" ${S}/><path d="M16,-4 l16,-12 v24 l-16,12z" fill="#9E3D22" ${S}/>`],
 ['polistirenul','polystyrene',`<rect x="-34" y="-22" width="64" height="44" fill="#FFFFFF" ${S}/><rect x="-28" y="-28" width="64" height="44" fill="#F7F9FF" ${S}/>`+[[-14,-12],[8,-4],[20,-18]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="2" fill="#B0BEC5"/>`).join('')],
 ['vata minerală','mineral wool',`<ellipse cx="0" cy="0" rx="36" ry="26" fill="#FFE082" ${S}/><path d="M-26,-6 q26,-16 52,0 M-30,6 q30,-12 60,0" fill="none" stroke="#C9A640" stroke-width="2"/>`],
 ['adezivul','adhesive',bag('#FFE0B2','ADEZIV')],
 ['plasa','mesh',`<rect x="-34" y="-28" width="68" height="56" fill="#FFFDE7" ${S}/>`+Array.from({length:6},(_,i)=>`<path d="M${-34+i*12},-28 v56 M-34,${-28+i*11} h68" stroke="#F9A825" stroke-width="1.5"/>`).join('')],
 ['diblurile','wall plugs / anchors',[-16,4,24].map(x=>`<g transform="translate(${x},0)"><circle cx="0" cy="-26" r="9" fill="#E0E0E0" ${S}/><rect x="-3" y="-18" width="6" height="48" fill="#E0E0E0" ${S}/></g>`).join('')],
 ['gips-cartonul','plasterboard',`<rect x="-24" y="-38" width="48" height="76" fill="#ECEFF1" ${S}/><rect x="-18" y="-32" width="48" height="76" fill="#F5F7F8" ${S}/>`],
 ['gresia','floor tiles',`<path d="M-40,20 L0,-8 L40,20 L0,40z" fill="#A1887F" ${S}/><path d="M-20,6 L20,34 M20,6 L-20,34" stroke="#6D4C41" stroke-width="2"/>`],
 ['faianța','wall tiles',`<rect x="-32" y="-32" width="64" height="64" fill="#B3E5FC" ${S}/><path d="M0,-32 v64 M-32,0 h64" stroke="#fff" stroke-width="3"/>`],
 ['vopseaua','paint',`<path d="M-28,-22 h56 v50 h-56z" fill="#90CAF9" ${S}/><ellipse cx="0" cy="-22" rx="28" ry="7" fill="#64B5F6" ${S}/>`+T(0,12,11,'LAVABILĂ',{b:1})],
 ['gletul','skim plaster (glet)',bag('#FFFFFF','GLET')],
 ['amorsa','primer',`<rect x="-24" y="-28" width="48" height="58" rx="6" fill="#C5E1A5" ${S}/><rect x="-8" y="-38" width="16" height="10" fill="#7CB342" ${S}/>`+T(0,6,11,'AMORSĂ',{b:1})],
];
out.materiale=grid(mats,8,126,148);
// ---------------- PPE person
{ let b=''; const sk='#E8B98A';
  b+=`<g ${S}><circle cx="300" cy="120" r="44" fill="${sk}"/><path d="M252,112 q0,-58 48,-58 q48,0 48,58 h10 v10 h-116 v-10z" fill="${YL}"/>
  <rect x="266" y="112" width="68" height="18" rx="8" fill="#B3E5FC" opacity=".85"/>
  <rect x="244" y="112" width="10" height="26" rx="4" fill="#E53935"/><rect x="346" y="112" width="10" height="26" rx="4" fill="#E53935"/>
  <path d="M282,142 h36 v14 q-18,10 -36,0z" fill="#fff"/>
  <path d="M232,176 h136 q26,0 30,26 l10,150 h-28 l-8,-120 v126 h-144 v-126 l-8,120 h-28 l10,-150 q4,-26 30,-26z" fill="#FF9800"/>
  <path d="M244,250 h112 M244,290 h112" stroke="#E0E0E0" stroke-width="10"/>
  <path d="M262,176 l0,180 M338,176 l0,180 M262,300 h76" stroke="#37474F" stroke-width="6" fill="none"/>
  <rect x="198" y="350" width="30" height="30" rx="8" fill="#FDD835"/><rect x="372" y="350" width="30" height="30" rx="8" fill="#FDD835"/>
  <path d="M252,358 h96 l6,160 h-44 l-6,-120 l-6,120 h-44z" fill="#455A64"/>
  <path d="M250,518 h52 v26 h-62 z" fill="#5D4037"/><path d="M298,518 h52 l10,26 h-62z" fill="#5D4037"/><path d="M332,528 h26 v16 h-26z" fill="${W8}"/></g>`;
  const lab=(x1,y1,x2,ly,ro,en,left)=>`<circle cx="${x1}" cy="${y1}" r="4" fill="${GR}"/><polyline points="${x1},${y1} ${left?x2+30:x2-30},${ly} ${x2},${ly}" fill="none" stroke="${GR}" stroke-width="1.5"/>`+T(left?x2-6:x2+6,ly-2,16,ro,{b:1,a:left?'end':'start'})+T(left?x2-6:x2+6,ly+15,12.5,en,{i:1,c:'#555',a:left?'end':'start'});
  b+=lab(300,70,150,50,'casca de protecție','safety helmet',1)+lab(250,125,150,110,'antifoanele','ear defenders',1)+lab(300,150,150,170,'masca de praf','dust mask',1)+lab(262,240,150,240,'hamul de siguranță','safety harness',1)+lab(213,365,150,360,'mănușile de protecție','work gloves',1);
  b+=lab(320,121,460,100,'ochelarii de protecție','safety glasses')+lab(356,270,460,250,'vesta reflectorizantă','hi-vis vest')+lab(330,440,460,430,'salopeta · pantalonii de lucru','overalls · work trousers')+lab(345,536,460,520,'bocancii cu bombeu metalic','safety boots (steel toecap)');
  out.echipament=svg(900,560,`<g transform="translate(110,0)">${b}</g>`);
}
// ---------------- tape measure
{ const W=900,H=250; let b=`<rect x="20" y="70" width="860" height="80" fill="#FFEB3B" stroke="${INK}" stroke-width="2.5"/>`;
  const x0=40, pxmm=8; // 100 mm across 800px: 1,20 m .. 1,30 m
  for(let mm=0;mm<=100;mm++){const x=x0+mm*pxmm; const h= mm%10==0?40:(mm%5==0?28:16); b+=`<line x1="${x}" y1="70" x2="${x}" y2="${70+h}" stroke="${INK}" stroke-width="${mm%10==0?2.2:1.2}"/>`; if(mm%10==0) b+=T(x,138,20,`${120+mm/10}`,{b:1,c:mm%100==0?'#C62828':INK});}
  b+=T(x0,64,15,'1 m 20 cm',{b:1,c:'#C62828'})+T(x0+800,64,15,'1 m 30 cm',{b:1,c:'#C62828'});
  const mark=(mm,label,sub)=>{const x=x0+mm*pxmm;return `<path d="M${x},172 v-20 m-7,8 l7,-8 l7,8" fill="none" stroke="#C62828" stroke-width="3"/>`+T(x,196,16,label,{b:1,c:'#C62828'})+T(x,216,13,sub,{i:1,c:'#555'});};
  b+=mark(25,'1,225 m','122,5 cm = 1 225 mm')+mark(50,'1,25 m','125 cm')+mark(84,'1,284 m','128,4 cm = 1 284 mm');
  b+=T(450,30,15,'The big numbers are centimetres · every small line = 1 millimetre · the middle line = 5 mm',{i:1,c:'#555'});
  out.ruleta=svg(W,H,b);
}
// ---------------- wall area
{ const W=760,H=380; const s=120, X=80, Y=40; let b=`<rect x="${X}" y="${Y}" width="${4*s}" height="${2.5*s}" fill="#FFE0B2" stroke="${INK}" stroke-width="3"/>`;
  b+=`<rect x="${X+0.5*s}" y="${Y+0.6*s}" width="${1.2*s}" height="${1*s}" fill="#B3E5FC" stroke="${INK}" stroke-width="2.5"/>`+T(X+1.1*s,Y+1.15*s,15,'fereastră',{b:1})+T(X+1.1*s,Y+1.35*s,13,'1,20 × 1,00 m',{c:'#333'});
  b+=`<rect x="${X+2.6*s}" y="${Y+0.4*s}" width="${0.9*s}" height="${2.1*s}" fill="#BCAAA4" stroke="${INK}" stroke-width="2.5"/>`+T(X+3.05*s,Y+1.4*s,15,'ușă',{b:1})+T(X+3.05*s,Y+1.6*s,13,'0,90 × 2,10 m',{c:'#333'});
  const dim=(x1,y1,x2,y2,t,vert)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#C62828" stroke-width="2"/>`+(vert?T(x1-10,(y1+y2)/2,16,t,{b:1,c:'#C62828',a:'end'}):T((x1+x2)/2,y1+24,16,t,{b:1,c:'#C62828'}));
  b+=dim(X,Y+2.5*s+14,X+4*s,Y+2.5*s+14,'lungimea / length = 4,00 m')+dim(X-14,Y,X-14,Y+2.5*s,'2,50 m',1);
  b+=T(X+4*s+20,Y+20,15,'înălțimea',{a:'start',b:1,c:'#C62828'})+T(X+4*s+20,Y+38,13,'height = 2,50 m',{a:'start',c:'#555'});
  b+=`<rect x="${X+4*s+14}" y="${Y+70}" width="176" height="190" rx="8" fill="${LG}" stroke="${GR}"/>`;
  [['perete: 4 × 2,5 = 10 m²',1],['fereastră: 1,2 × 1 = 1,2 m²',0],['ușă: 0,9 × 2,1 = 1,89 m²',0],['de vopsit / to paint:',1],['10 − 1,2 − 1,89',0],['= 6,91 m² ≈ 7 m²',1]].forEach((r,i)=>b+=T(X+4*s+24,Y+100+i*29,14,r[0],{a:'start',b:r[1]}));
  out.perete=svg(W,H,b);
}
// ---------------- masonry
{ const W=900,H=330; let b=''; const bw=100,bh=40,X=60,Y=60;
  for(let r=0;r<5;r++){const off=r%2?bw/2:0; for(let c=-1;c<6;c++){const x=X+c*bw+off; const x1=Math.max(x,X), x2=Math.min(x+bw-6,X+5*bw); if(x2>x1) b+=`<rect x="${x1}" y="${Y+(4-r)*bh}" width="${x2-x1}" height="${bh-6}" fill="#EEEEEE" stroke="${INK}" stroke-width="2"/>`;}}
  b+=`<rect x="${X}" y="${Y+5*bh-2}" width="${5*bw}" height="10" fill="#9E9E9E"/>`;
  b+=`<rect x="${X+150}" y="${Y-26}" width="200" height="22" fill="#90A4AE" stroke="${INK}" stroke-width="2"/>`;
  const lab=(x1,y1,x2,y2,t,e)=>`<circle cx="${x1}" cy="${y1}" r="4" fill="${GR}"/><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${GR}" stroke-width="1.5"/>`+T(x2+6,y2-2,15,t,{a:'start',b:1})+T(x2+6,y2+14,12,e,{a:'start',i:1,c:'#555'});
  const lab2=(x1,y1,ly,t,e)=>`<circle cx="${x1}" cy="${y1}" r="4" fill="${GR}"/><polyline points="${x1},${y1} 590,${ly} 610,${ly}" fill="none" stroke="${GR}" stroke-width="1.5"/>`+T(616,ly-2,15,t,{a:'start',b:1})+T(616,ly+14,12,e,{a:'start',i:1,c:'#555'});
  b+=lab2(X+340,Y-15,34,'buiandrugul','lintel (above a door or window)')+lab2(X+490,Y+3*bh-3,110,'rostul orizontal','bed joint (mortar / adhesive)')+lab2(X+447,Y+3*bh+17,165,'rostul vertical','vertical joint')+lab2(X+495,Y+4*bh+17,220,'rândul (de blocuri)','course / row')+lab2(X+495,Y+5*bh+3,270,'fundația · hidroizolația','foundation · damp-proof layer');
  b+=T(X+250,Y+5*bh+44,14,'Rosturile verticale sunt decalate (țesere) — the joints are staggered',{i:1,c:'#555'});
  out.zidarie=svg(W,H,b);
}
// ---------------- layers (generic cross-section)
const layers=(title,items,L='← interior',R='exterior →')=>{const W=860,H=70+items.length*44; let b=T(10,24,16,title,{a:'start',b:1,c:DK}); let x=40;
  const ws=items.map(it=>it[3]||40); items.forEach((it,i)=>{b+=`<rect x="${x}" y="40" width="${ws[i]}" height="${items.length*44}" fill="${it[2]}" stroke="${INK}" stroke-width="1.5"/>`; const cx=x+ws[i]/2, ly=62+i*44; b+=`<circle cx="${cx}" cy="${ly}" r="4" fill="${INK}"/><line x1="${cx}" y1="${ly}" x2="420" y2="${ly}" stroke="${INK}" stroke-width="1" stroke-dasharray="3,3"/>`+T(430,ly-2,15,`${i+1}. ${it[0]}`,{a:'start',b:1})+T(430,ly+15,12.5,it[1],{a:'start',i:1,c:'#555'}); x+=ws[i];});
  b+=T(40,H-6,12,L,{a:'start',c:'#777'})+T(x,H-6,12,R,{a:'end',c:'#777'}); return svg(W,H,b);};
out.fatada=layers('Straturile unei fațade termoizolate / The layers of an insulated facade',[
 ['zidăria (peretele)','the wall',"#EEEEEE",90],['adezivul','adhesive',"#FFE0B2",14],['polistirenul / vata minerală','insulation boards',"#F7F9FF",70],['diblurile','anchors (through the boards)',"#E0E0E0",8],['masa de șpaclu + plasa','base coat with mesh',"#FFF59D",14],['amorsa','primer',"#C5E1A5",8],['tencuiala decorativă','decorative render (finish)',"#FFCC80",16]]);
out.tencuiala=layers('Straturile unei tencuieli interioare / The layers of an interior plaster',[
 ['zidăria','the wall (bricks, BCA)',"#EEEEEE",110],['amorsa / șprițul','primer / scratch coat',"#C5E1A5",10],['tencuiala (grundul)','plaster (base coat)',"#E0E0E0",40],['gletul','skim coat',"#FFFFFF",8],['vopseaua lavabilă','emulsion paint',"#90CAF9",8]],'← zidăria','camera →');
// ---------------- steps row
const steps=(title,items)=>{const n=items.length,cw=Math.floor(900/n),W=cw*n,H=150;let b=T(6,22,16,title,{a:'start',b:1,c:DK});
  items.forEach((it,i)=>{const x=i*cw+6;b+=`<rect x="${x}" y="36" width="${cw-24}" height="96" rx="10" fill="${i%2?'#fff':LG}" stroke="${GR}" stroke-width="2"/><circle cx="${x+18}" cy="54" r="13" fill="${GR}"/>`+T(x+18,59,14,i+1,{b:1,c:'#fff'})+T(x+(cw-24)/2,86,14,it[0],{b:1})+T(x+(cw-24)/2,104,12,it[1],{i:1,c:'#555'})+(it[2]?T(x+(cw-24)/2,120,12,it[2],{i:1,c:'#555'}):'');
   if(i<n-1) b+=`<path d="M${x+cw-20},84 h14 m-6,-6 l6,6 l-6,6" fill="none" stroke="${GR}" stroke-width="3"/>`;});
  return svg(W,H,b);};
out.pasi_gresie=steps('Montajul gresiei și al faianței / Laying floor and wall tiles',[['suportul','prepare the base','curat, plan, uscat'],['amorsa','prime',''],['adezivul','spread with the','gletiera'],['plăcile','place the tiles','+ distanțieri (crucițe)'],['rostuirea','grout the joints','chit de rosturi'],['curățarea','clean','buretele']]);
out.pasi_zugraveli=steps('Zugrăveala / Painting a room',[['protejarea','cover floor, furniture','folie, bandă'],['reparațiile','fill the cracks','glet, șpaclu'],['șlefuirea','sand','hârtie abrazivă'],['amorsa','prime',''],['stratul 1','first coat','trafaletul'],['stratul 2','second coat','după uscare']]);
// ---------------- safety signs
{ const W=900,H=560; let b='';
  const cap=(cx,y,ro,en)=>T(cx,y,13.5,ro,{b:1})+T(cx,y+16,11.5,en,{i:1,c:'#555'});
  const person=(s=1,c='#000')=>`<g transform="scale(${s})"><circle cx="0" cy="-20" r="7" fill="${c}"/><path d="M-9,-10 h18 l-3,22 h-3 l-1,18 h-4 l-1,-18 h-3 z" fill="${c}"/></g>`;
  const PRO=(cx,cy,inner)=>`<circle cx="${cx}" cy="${cy}" r="40" fill="#fff" stroke="#D32F2F" stroke-width="9"/><g transform="translate(${cx},${cy})">${inner}</g><line x1="${cx-27}" y1="${cy-27}" x2="${cx+27}" y2="${cy+27}" stroke="#D32F2F" stroke-width="9"/>`;
  const WAR=(cx,cy,inner)=>`<path d="M${cx},${cy-44} L${cx+48},${cy+38} L${cx-48},${cy+38}z" fill="#FFD600" stroke="#000" stroke-width="5" stroke-linejoin="round"/><g transform="translate(${cx},${cy+10})">${inner}</g>`;
  const MAN=(cx,cy,inner)=>`<circle cx="${cx}" cy="${cy}" r="42" fill="#1565C0"/><g transform="translate(${cx},${cy})">${inner}</g>`;
  const SAV=(cx,cy,inner,c='#2E7D32')=>`<rect x="${cx-40}" y="${cy-40}" width="80" height="80" fill="${c}"/><g transform="translate(${cx},${cy})">${inner}</g>`;
  const row=(y,t,col)=>T(10,y,15,t,{a:'start',b:1,c:col});
  const xs=[80,230,380,530,680,830];
  b+=row(22,'INTERDICȚIE — prohibition: rotund, margine roșie, bară',  '#D32F2F');
  b+=PRO(xs[0],80,person(1.4))+cap(xs[0],140,'Accesul interzis','No entry');
  b+=PRO(xs[1],80,`<rect x="-22" y="-4" width="34" height="8" fill="#000"/><rect x="12" y="-4" width="6" height="8" fill="#D32F2F"/><path d="M16,-10 q4,-8 0,-14" stroke="#555" stroke-width="2" fill="none"/>`)+cap(xs[1],140,'Fumatul interzis','No smoking');
  b+=PRO(xs[2],80,`<rect x="-12" y="-4" width="24" height="24" rx="6" fill="#000"/><rect x="-12" y="-24" width="5" height="24" rx="2.5" fill="#000"/><rect x="-5" y="-28" width="5" height="26" rx="2.5" fill="#000"/><rect x="2" y="-26" width="5" height="24" rx="2.5" fill="#000"/><rect x="9" y="-20" width="5" height="20" rx="2.5" fill="#000"/><rect x="-22" y="0" width="12" height="5" rx="2.5" fill="#000" transform="rotate(-30 -16 2)"/>`)+cap(xs[2],140,'Nu atingeți','Do not touch');
  b+=row(186,'AVERTIZARE — warning: triunghi galben, margine neagră','#B8860B');
  b+=WAR(xs[0],246,`<path d="M4,-30 l-14,20 h10 l-8,22 l18,-26 h-10 l8,-16z" fill="#000"/>`)+cap(xs[0],306,'Pericol electric','Electrical danger');
  b+=WAR(xs[1],246,`<path d="M-24,12 h24 v-4 h-24z" fill="#000"/><circle cx="6" cy="-18" r="5" fill="#000"/><path d="M2,-12 l10,10 l-4,12 M4,-6 l-10,2" stroke="#000" stroke-width="4" fill="none"/>`)+cap(xs[1],306,'Pericol de cădere','Danger of falling');
  b+=WAR(xs[2],246,`<path d="M0,-32 v12" stroke="#000" stroke-width="3"/><path d="M-3,-20 q-4,6 3,8" stroke="#000" stroke-width="3" fill="none"/><rect x="-14" y="-10" width="28" height="18" fill="#000"/><path d="M-24,12 h48" stroke="#000" stroke-width="3" stroke-dasharray="4,3"/>`)+cap(xs[2],306,'Sarcină suspendată','Suspended load');
  b+=WAR(xs[3],246,`<rect x="-8" y="-32" width="14" height="10" fill="#000" transform="rotate(20 -1 -27)"/><path d="M-16,-26 v8 M12,-28 v8" stroke="#000" stroke-width="2"/><circle cx="0" cy="-6" r="5" fill="#000"/><path d="M-7,0 h14 l-2,16 h-10z" fill="#000"/>`)+cap(xs[3],306,'Cădere de obiecte','Falling objects');
  b+=row(350,'OBLIGAȚIE — mandatory: rotund, albastru','#1565C0');
  const white=(d)=>d.replace(/#000/g,'#fff');
  b+=MAN(xs[0],405,`<circle cx="0" cy="10" r="10" fill="#fff"/><path d="M-22,-2 q0,-26 22,-26 q22,0 22,26 h6 v6 h-56 v-6z" fill="#fff"/>`)+cap(xs[0],466,'Purtați casca','Wear a helmet');
  b+=MAN(xs[1],405,`<path d="M-16,-24 h14 v26 h20 q8,0 8,10 v6 h-42z" fill="#fff"/>`)+cap(xs[1],466,'Încălțăminte de protecție','Wear safety boots');
  b+=MAN(xs[2],405,`<path d="M-14,24 v-26 q0,-6 5,-6 v-12 q0,-5 4,-5 q4,0 4,5 v8 h2 v-12 q0,-5 4,-5 q4,0 4,5 v12 h2 v-8 q0,-5 4,-5 q4,0 4,5 v20 q0,12 -6,24z" fill="#fff"/>`)+cap(xs[2],466,'Purtați mănuși','Wear gloves');
  b+=MAN(xs[3],405,`<circle cx="-12" cy="0" r="10" fill="none" stroke="#fff" stroke-width="5"/><circle cx="12" cy="0" r="10" fill="none" stroke="#fff" stroke-width="5"/><path d="M-2,0 h4 M-22,0 h-8 M22,0 h8" stroke="#fff" stroke-width="5"/>`)+cap(xs[3],466,'Purtați ochelari','Wear eye protection');
  b+=MAN(xs[4],405,`${person(1.3,'#fff')}<path d="M-14,-6 l28,22 M14,-6 l-28,22" stroke="#fff" stroke-width="3"/><path d="M0,-30 v-8" stroke="#fff" stroke-width="3"/>`)+cap(xs[4],466,'Purtați hamul','Wear a harness');
  b+=MAN(xs[5],405,`<path d="M-20,-4 q20,-20 40,0 v8 q-20,16 -40,0z" fill="#fff"/><path d="M-20,0 l-10,-6 M20,0 l10,-6" stroke="#fff" stroke-width="3"/>`)+cap(xs[5],466,'Purtați masca','Wear a mask');
  b+=row(510,'',''); // spacer
  out.semne=svg(W,500,b);
  let c='';
  c+=T(10,22,15,'SALVARE ȘI INCENDIU — emergency (verde) · fire (roșu): pătrat',{a:'start',b:1,c:'#2E7D32'});
  c+=SAV(80,82,`<path d="M-8,-26 h16 v18 h18 v16 h-18 v18 h-16 v-18 h-18 v-16 h18z" fill="#fff"/>`)+cap(80,142,'Prim ajutor','First aid');
  c+=SAV(230,82,`${person(1.2,'#fff')}<path d="M16,-24 h14 v48 h-14" fill="none" stroke="#fff" stroke-width="4"/><path d="M-30,6 h16 m-6,-6 l6,6 l-6,6" stroke="#fff" stroke-width="3" fill="none"/>`)+cap(230,142,'Ieșire de urgență','Emergency exit');
  c+=SAV(380,82,`<rect x="-8" y="-18" width="16" height="40" rx="6" fill="#fff"/><path d="M-6,-18 v-8 h14 l8,6" stroke="#fff" stroke-width="4" fill="none"/>`,'#D32F2F')+cap(380,142,'Stingător','Fire extinguisher');
    out.semne2=svg(480,172,c);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

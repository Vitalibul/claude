const F = "font-family=\"Arial, 'Liberation Sans', 'DejaVu Sans', sans-serif\"";
const DK='#1F5C45', GR='#2E7D55', LG='#E3F1E8', INK='#2B3A33';
const svg=(w,h,body)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}</svg>`;
const T=(x,y,s,txt,o={})=>`<text x="${x}" y="${y}" ${F} font-size="${s}" text-anchor="${o.a||'middle'}" fill="${o.c||INK}"${o.b?' font-weight="bold"':''}${o.i?' font-style="italic"':''}>${txt}</text>`;
const S=`stroke="${INK}" stroke-width="2.5"`;
const out={};
const leaf=(x,y,r=0)=>`<path d="M${x},${y} q10,-14 22,-8 q-8,14 -22,8z" fill="#5BA84A" ${S} transform="rotate(${r} ${x} ${y})"/>`;
const stem=(x,y)=>`<path d="M${x},${y} q2,-10 6,-14" fill="none" stroke="#6B4A2B" stroke-width="4" stroke-linecap="round"/>`;
// each icon drawn in box centred at (0,0), radius ~38
const FR={
 'un măr':`<path d="M0,-26 C-30,-40 -44,-6 -34,14 C-26,34 -10,38 0,32 C10,38 26,34 34,14 C44,-6 30,-40 0,-26z" fill="#D9412B" ${S}/>${stem(0,-26)}${leaf(4,-34)}`,
 'o pară':`<path d="M0,-38 C-10,-38 -12,-20 -14,-10 C-30,0 -32,34 0,36 C32,34 30,0 14,-10 C12,-20 10,-38 0,-38z" fill="#B9CF4A" ${S}/>${stem(0,-38)}`,
 'o banană':`<path d="M-36,-20 C-30,26 24,40 40,8 C30,20 -10,20 -26,-24z" fill="#F4D03F" ${S}/><path d="M-36,-20 l-4,-6" ${S}/>`,
 'o portocală':`<circle r="34" fill="#F39C12" ${S}/><circle cx="-10" cy="-8" r="2" fill="#C87F0A"/><circle cx="8" cy="6" r="2" fill="#C87F0A"/><circle cx="12" cy="-14" r="2" fill="#C87F0A"/>${leaf(0,-34)}`,
 'o mandarină':`<ellipse rx="34" ry="27" cy="4" fill="#F5861F" ${S}/>${leaf(0,-22)}<circle cx="-12" cy="4" r="2" fill="#C8650A"/><circle cx="10" cy="10" r="2" fill="#C8650A"/>`,
 'o lămâie':`<path d="M-40,0 C-30,-30 30,-30 40,0 C30,30 -30,30 -40,0z" fill="#F7E14B" ${S}/>`,
 'struguri':[[-14,-18],[0,-18],[14,-18],[-7,-4],[7,-4],[-14,-4],[14,-4],[0,10],[-7,22],[7,22],[0,34]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="9" fill="#7D3C98" ${S}/>`).join('')+`<path d="M0,-28 l0,-10" stroke="#6B4A2B" stroke-width="4"/>${leaf(2,-34)}`,
 'o căpșună':`<path d="M-30,-14 C-30,20 -6,38 0,38 C6,38 30,20 30,-14 C20,-22 -20,-22 -30,-14z" fill="#E03B3B" ${S}/>`+[[-14,0],[0,-4],[14,0],[-8,14],[8,14],[0,26]].map(p=>`<ellipse cx="${p[0]}" cy="${p[1]}" rx="2" ry="3" fill="#F7E14B"/>`).join('')+`<path d="M-24,-18 l10,-10 l6,8 l8,-12 l6,12 l8,-8 l10,10z" fill="#4E9A3E" ${S}/>`,
 'cireșe':`<path d="M-14,10 C-10,-10 0,-30 10,-38 M16,14 C14,-6 12,-26 10,-38" fill="none" stroke="#4E7A2E" stroke-width="3"/><circle cx="-16" cy="20" r="15" fill="#B0172B" ${S}/><circle cx="18" cy="22" r="15" fill="#B0172B" ${S}/>${leaf(10,-38)}`,
 'o piersică':`<circle r="33" cy="4" fill="#F8A07A" ${S}/><path d="M0,-28 C-10,-10 -8,14 0,36" fill="none" stroke="#D77A55" stroke-width="3"/>${leaf(0,-28)}`,
 'o caisă':`<circle r="26" cy="6" fill="#F5A623" ${S}/><path d="M0,-18 C-8,-4 -6,18 0,32" fill="none" stroke="#C97F10" stroke-width="3"/>`,
 'o prună':`<ellipse rx="24" ry="32" cy="4" fill="#4B3C8C" ${S}/><path d="M0,-28 l3,-10" stroke="#6B4A2B" stroke-width="4"/><path d="M-10,-10 q-4,10 0,22" fill="none" stroke="#8A7CC9" stroke-width="3"/>`,
 'un pepene verde':`<path d="M-40,-4 A40,40 0 0,0 40,-4 z" fill="#2E8B3A" ${S}/><path d="M-33,-4 A33,33 0 0,0 33,-4 z" fill="#E8453C"/>`+[[-14,6],[0,12],[14,6],[-6,20],[8,22]].map(p=>`<ellipse cx="${p[0]}" cy="${p[1]}" rx="2.5" ry="4" fill="#222"/>`).join(''),
 'un pepene galben':`<ellipse rx="40" ry="30" fill="#EFD27A" ${S}/><path d="M-30,-18 q30,18 60,0 M-38,0 q38,16 76,0 M-30,18 q30,-8 60,0" fill="none" stroke="#C9A640" stroke-width="2"/>`,
 'un kiwi':`<circle r="34" fill="#8A6A3B" ${S}/><circle r="28" fill="#8BC34A"/><circle r="10" fill="#F1F8D8"/>`+Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return `<circle cx="${(17*Math.cos(a)).toFixed(1)}" cy="${(17*Math.sin(a)).toFixed(1)}" r="2" fill="#222"/>`}).join(''),
 'un ananas':`<ellipse rx="24" ry="30" cy="10" fill="#F2B632" ${S}/><path d="M-20,-6 L20,30 M-24,12 L10,38 M-14,-18 L24,14 M20,-6 L-20,30 M24,12 L-10,38 M14,-18 L-24,14" stroke="#B37D12" stroke-width="2"/><path d="M0,-20 l-14,-18 l10,6 l4,-16 l4,16 l10,-6z" fill="#4E9A3E" ${S}/>`,
};
const VG={
 'o roșie':`<circle r="32" cy="4" fill="#E53935" ${S}/><path d="M0,-26 l-12,-4 l8,-2 l-4,-8 l8,6 l8,-6 l-4,8 l8,2z" fill="#3E8E3E" ${S}/>`,
 'un castravete':`<rect x="-42" y="-14" width="84" height="28" rx="14" fill="#3E8E3E" ${S} transform="rotate(-20)"/><circle cx="-12" cy="4" r="2" fill="#B8E0A0"/><circle cx="10" cy="-6" r="2" fill="#B8E0A0"/><circle cx="24" cy="-10" r="2" fill="#B8E0A0"/>`,
 'un cartof':`<path d="M-36,4 C-40,-20 -8,-30 12,-24 C38,-18 42,10 26,24 C8,38 -32,30 -36,4z" fill="#C9A06A" ${S}/><circle cx="-12" cy="-6" r="2" fill="#7A5A30"/><circle cx="14" cy="4" r="2" fill="#7A5A30"/><circle cx="0" cy="16" r="2" fill="#7A5A30"/>`,
 'o ceapă':`<path d="M0,-38 C-4,-22 -34,-12 -32,12 C-30,34 30,34 32,12 C34,-12 4,-22 0,-38z" fill="#C8873A" ${S}/><path d="M0,-30 C-10,-10 -12,20 0,32 M0,-30 C10,-10 12,20 0,32" fill="none" stroke="#9C5F20" stroke-width="2"/>`,
 'un usturoi':`<path d="M0,-38 C-4,-22 -32,-10 -30,12 C-28,32 28,32 30,12 C32,-10 4,-22 0,-38z" fill="#F4F0E6" ${S}/><path d="M0,-28 C-12,-8 -14,20 -6,30 M0,-28 C12,-8 14,20 6,30" fill="none" stroke="#B8AE98" stroke-width="2"/>`,
 'un morcov':`<path d="M-8,-24 L8,-24 L2,38 L-2,38z" fill="#F07C1B" ${S} transform="rotate(20)"/><path d="M-4,-26 l-12,-14 M0,-26 l0,-16 M4,-26 l12,-14" stroke="#3E8E3E" stroke-width="5" stroke-linecap="round" transform="rotate(20)"/>`,
 'un ardei':`<path d="M-26,-14 C-34,20 -16,38 0,34 C16,38 34,20 26,-14 C16,-24 -16,-24 -26,-14z" fill="#E53935" ${S}/><path d="M0,-20 q0,-10 8,-16" stroke="#3E8E3E" stroke-width="5" fill="none" stroke-linecap="round"/>`,
 'un ardei iute':`<path d="M-30,-26 C-10,-20 10,0 34,36 C0,20 -24,0 -34,-18z" fill="#C62828" ${S}/><path d="M-32,-22 l-8,-10" stroke="#3E8E3E" stroke-width="5" stroke-linecap="round"/>`,
 'o varză':`<circle r="34" fill="#9CCC65" ${S}/><path d="M0,-34 C-14,-10 -14,14 0,34 M-30,-14 C-10,-6 10,-6 30,-14 M-30,14 C-10,4 10,4 30,14" fill="none" stroke="#689F38" stroke-width="2.5"/>`,
 'o vânătă':`<path d="M-8,-22 C-40,-10 -40,30 -4,36 C30,40 34,4 18,-14 C10,-24 0,-26 -8,-22z" fill="#5E2B7E" ${S}/><path d="M-10,-24 l6,-14 l6,10 l10,-6 l-2,12z" fill="#4E9A3E" ${S}/>`,
 'un dovlecel':`<rect x="-42" y="-12" width="84" height="24" rx="12" fill="#7CB342" ${S} transform="rotate(20)"/><path d="M-30,-6 L30,14" stroke="#C5E1A5" stroke-width="3" transform="rotate(0)"/>`,
 'o salată verde':`<path d="M-34,10 C-40,-10 -24,-30 0,-30 C24,-30 40,-10 34,10 C28,30 -28,30 -34,10z" fill="#AED581" ${S}/><path d="M0,-28 L0,26 M0,0 l-18,-14 M0,10 l18,-14 M0,-12 l14,-10" stroke="#7CB342" stroke-width="2.5" fill="none"/>`,
 'o conopidă':`<path d="M-36,4 L-20,34 L20,34 L36,4z" fill="#6AAE4E" ${S}/>`+[[-18,-4],[0,-10],[18,-4],[-10,-20],[10,-20],[0,4]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="13" fill="#F5F0DC" ${S}/>`).join(''),
 'ciuperci':`<path d="M-34,0 C-34,-30 34,-30 34,0z" fill="#B07A4A" ${S}/><rect x="-10" y="0" width="20" height="30" rx="6" fill="#F3E9D2" ${S}/>`,
 'mazăre':`<path d="M-40,8 C-20,-16 20,-16 40,8 C20,24 -20,24 -40,8z" fill="#7CB342" ${S}/>`+[-24,-8,8,24].map(x=>`<circle cx="${x}" cy="4" r="7" fill="#4E9A3E" ${S}/>`).join(''),
 'o ridiche':`<circle r="24" cy="8" fill="#E0445A" ${S}/><path d="M0,32 l0,10" stroke="#E0445A" stroke-width="3"/><path d="M0,-16 l-12,-20 M0,-16 l0,-22 M0,-16 l12,-20" stroke="#3E8E3E" stroke-width="5" stroke-linecap="round"/>`,
};
const grid=(items,en)=>{const cols=8,cw=126,rh=150;let b='';Object.keys(items).forEach((k,i)=>{const cx=cw/2+(i%cols)*cw, cy=58+Math.floor(i/cols)*rh;
  b+=`<circle cx="${cx}" cy="${cy}" r="50" fill="#F6F8F4"/><g transform="translate(${cx},${cy})">${items[k]}</g>`+T(cx,cy+76,14,k,{b:1})+T(cx,cy+94,12.5,en[i],{i:1,c:'#555'});});
  return svg(cols*cw,Math.ceil(Object.keys(items).length/cols)*rh+10,b);};
out.fructe=grid(FR,['apple','pear','banana','orange','mandarin','lemon','grapes','strawberry','cherries','peach','apricot','plum','watermelon','melon','kiwi','pineapple']);
out.legume=grid(VG,['tomato','cucumber','potato','onion','garlic','carrot','pepper','chilli','cabbage','aubergine','courgette','lettuce','cauliflower','mushrooms','peas','radish']);

// quantities
{ const it=[
 ['un kilogram','1 kg',`<path d="M-34,30 h68 l-8,-30 h-52z" fill="#CFD8DC" ${S}/><rect x="-22" y="-30" width="44" height="30" rx="4" fill="#fff" ${S}/>${T(0,-8,16,'1 kg',{b:1})}`],
 ['½ kilogram','jumătate = 500 g',`<path d="M-34,30 h68 l-8,-30 h-52z" fill="#CFD8DC" ${S}/>X`],
 ['200 de grame','200 g',`<path d="M-24,-20 h48 l6,52 h-60z" fill="#F3E9D2" ${S}/><path d="M-24,-20 l6,-12 h36 l6,12" fill="#E7D8B4" ${S}/>${T(0,14,15,'200 g',{b:1})}`],
 ['o bucată','one piece',`<path d="M-38,16 C-40,-14 -20,-24 0,-24 C20,-24 40,-14 38,16z" fill="#D7A15A" ${S}/><path d="M-20,-14 l6,14 M0,-18 l4,14 M18,-14 l2,14" stroke="#9C6A2A" stroke-width="3"/><rect x="-38" y="14" width="76" height="12" rx="4" fill="#C58B45" ${S}/>`],
 ['un pachet','a packet',`<rect x="-30" y="-26" width="60" height="52" rx="4" fill="#FFE082" ${S}/><rect x="-20" y="-10" width="40" height="20" fill="#fff" ${S}/>${T(0,5,12,'UNT',{b:1})}`],
 ['o sticlă','a bottle',`<path d="M-8,-40 h16 v12 q14,8 14,24 v42 h-44 v-42 q0,-16 14,-24z" fill="#F7E27E" ${S}/><rect x="-14" y="0" width="28" height="18" fill="#fff" ${S}/>${T(0,13,10,'ULEI',{b:1})}`],
 ['o cutie','a box / carton',`<path d="M-20,-24 h40 v60 h-40z" fill="#E3F2FD" ${S}/><path d="M-20,-24 l10,-14 h20 l10,14" fill="#BBDEFB" ${S}/>${T(0,10,11,'LAPTE',{b:1,c:'#1565C0'})}`],
 ['o legătură','a bunch',`<path d="M0,36 L-14,-14 M0,36 L0,-20 M0,36 L14,-14" stroke="#3E8E3E" stroke-width="4"/>${[[-16,-22],[0,-30],[16,-22],[-8,-8],[8,-8]].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="11" fill="#66BB6A" ${S}/>`).join('')}<rect x="-8" y="12" width="16" height="8" fill="#E57373"/>`],
 ];
 let b='';it.forEach((q,i)=>{const cx=63+i*126,cy=58;b+=`<circle cx="${cx}" cy="${cy}" r="50" fill="#F6F8F4"/><g transform="translate(${cx},${cy})">${q[2]}</g>`+T(cx,cy+76,14.5,q[0],{b:1})+T(cx,cy+94,12.5,q[1],{i:1,c:'#555'});});
 out.cantitati=svg(8*126,160,b);
}
// receipt + tags
{ let b=`<path d="M20,10 H330 V520 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-15,14 l-15,-14 l-10,10 z" fill="#fff" stroke="#555" stroke-width="2"/>`;
  const mono=(x,y,t,o={})=>`<text x="${x}" y="${y}" font-family="'DejaVu Sans Mono','Courier New',monospace" font-size="${o.s||13}" text-anchor="${o.a||'start'}" fill="${o.c||INK}"${o.b?' font-weight="bold"':''}>${t}</text>`;
  b+=mono(175,40,'SUPERMARKET EXEMPLU',{a:'middle',b:1,s:15})+mono(175,60,'Str. Florilor 12, Ploiești',{a:'middle',s:11})+mono(175,86,'BON FISCAL',{a:'middle',b:1,s:16});
  const L=[['PÂINE ALBĂ','1 BUC x 4,50','4,50'],['LAPTE 1,5% 1L','2 BUC x 7,90','15,80'],['OUĂ M 10 BUC','1 BUC x 13,90','13,90'],['ROȘII','0,500 KG x 9,98','4,99'],['MERE','1,240 KG x 5,49','6,81'],['ULEI 1L','1 BUC x 9,90','9,90'],['  REDUCERE -30%','','-2,97']];
  let y=116;L.forEach(r=>{b+=mono(34,y,r[0],{b:1,c:r[0].includes('REDUCERE')?'#C0392B':INK});if(r[1])b+=mono(44,y+17,r[1],{s:12,c:'#555'});b+=mono(318,r[1]?y+17:y,r[2],{a:'end',c:r[0].includes('REDUCERE')?'#C0392B':INK});y+=r[1]?40:26;});
  b+=`<line x1="32" y1="${y}" x2="318" y2="${y}" stroke="#333" stroke-dasharray="4,3"/>`+mono(34,y+26,'TOTAL LEI',{b:1,s:16})+mono(318,y+26,'52,93',{a:'end',b:1,s:16})+mono(34,y+50,'CARD',{s:13})+mono(318,y+50,'52,93',{a:'end'})+mono(175,y+84,'VĂ MULȚUMIM!',{a:'middle',s:12});
  // tags
  const tag=(x,y,w,h,fill,lines)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${INK}" stroke-width="2.5"/>`+lines.join('');
  b+=tag(370,20,250,150,'#FFF59D',[T(495,52,16,'MERE ROȘII',{b:1}),T(495,100,38,'5,49 lei',{b:1,c:'#C0392B'}),T(495,126,14,'preț / kg',{c:'#555'}),T(495,150,12,'origine: România',{c:'#555',i:1})]);
  b+=tag(370,195,250,150,'#FFCDD2',[T(495,226,16,'ULEI 1 L',{b:1}),`<text x="495" y="258" ${F} font-size="18" text-anchor="middle" fill="#777" text-decoration="line-through">9,90 lei</text><line x1="455" y1="252" x2="535" y2="252" stroke="#C0392B" stroke-width="2.5"/>`,T(495,300,36,'6,93 lei',{b:1,c:'#C0392B'}),T(495,328,16,'REDUCERE -30%',{b:1,c:'#C0392B'})]);
  b+=tag(370,370,250,110,'#C8E6C9',[T(495,412,30,'1 + 1 GRATIS',{b:1,c:DK}),T(495,448,14,'iei 2, plătești 1',{c:'#555',i:1})]);
  out.bon=svg(640,550,b);
}
// body
{ const W=720,H=620; let b='';
  const sk='#F2C9A0';
  b+=`<g ${S}><circle cx="360" cy="95" r="52" fill="${sk}"/><path d="M308,80 C310,30 410,30 412,80 C400,56 330,56 308,80z" fill="#5D4037"/>
  <rect x="340" y="143" width="40" height="25" fill="${sk}"/>
  <path d="M290,168 h140 q30,0 34,30 l8,190 h-30 l-10,-160 l-4,120 h-136 l-4,-120 l-10,160 h-30 l8,-190 q4,-30 34,-30z" fill="#64B5F6"/>
  <circle cx="264" cy="402" r="16" fill="${sk}"/><circle cx="456" cy="402" r="16" fill="${sk}"/>
  <path d="M296,348 h128 l6,70 h-140z" fill="#455A64"/>
  <path d="M290,418 h64 l-6,160 h-44z" fill="#455A64"/><path d="M366,418 h64 l-14,160 h-44z" fill="#455A64"/>
  <path d="M300,578 h52 v22 h-62z" fill="#795548"/><path d="M368,578 h52 l10,22 h-62z" fill="#795548"/></g>
  <circle cx="342" cy="92" r="4" fill="${INK}"/><circle cx="378" cy="92" r="4" fill="${INK}"/><path d="M360,98 l-5,14 h8" fill="none" ${S}/><path d="M346,124 q14,10 28,0" fill="none" ${S}/><ellipse cx="306" cy="98" rx="7" ry="12" fill="${sk}" ${S}/><ellipse cx="414" cy="98" rx="7" ry="12" fill="${sk}" ${S}/>`;
  const lab=(x1,y1,x2,ro,en,left,ly=y1)=>`<circle cx="${x1}" cy="${y1}" r="4" fill="${GR}"/><polyline points="${x1},${y1} ${left?x2+30:x2-30},${ly} ${x2},${ly}" fill="none" stroke="${GR}" stroke-width="1.5"/>`+T(left?x2-6:x2+6,ly-2,16,ro,{b:1,a:left?'end':'start'})+T(left?x2-6:x2+6,ly+15,12.5,en,{i:1,c:'#555',a:left?'end':'start'});
  b+=lab(330,48,190,'părul','hair',1,40)+lab(306,100,190,'urechea','ear',1,90)+lab(352,126,190,'gura · dinții','mouth · teeth',1,140)+lab(360,158,190,'gâtul','neck, throat',1,190)+lab(300,180,190,'umărul','shoulder',1,240)+lab(276,300,190,'brațul','arm',1,300)+lab(264,402,190,'mâna · degetele','hand · fingers',1,402);
  b+=lab(400,62,530,'capul','head',0,50)+lab(378,92,530,'ochiul · ochii','eye · eyes',0,95)+lab(362,106,530,'nasul','nose',0,140)+lab(360,220,530,'pieptul','chest',0,220)+lab(380,300,530,'burta · stomacul','belly · stomach',0,290)+lab(418,470,530,'piciorul','leg',0,460)+lab(412,520,530,'genunchiul','knee',0,515)+lab(410,592,530,'laba piciorului','foot',0,590);
  b+=`<rect x="520" y="340" width="190" height="62" rx="8" fill="${LG}" stroke="${GR}"/>`+T(615,364,15,'spatele — the back',{b:1})+T(615,386,12.5,'(behind the chest)',{i:1,c:'#555'});
  out.corp=svg(W,H,b);
}
// symptoms
{ const items=[['Am febră.','I have a fever.'],['Tușesc. / Am tuse.','I have a cough.'],['Sunt răcit(ă).','I have a cold.'],['Mă doare capul.','I have a headache.'],['Mă doare gâtul.','I have a sore throat.'],['Mă doare burta.','I have a stomach ache.']];
  let b='';items.forEach((it,i)=>{const cx=78+i*154,cy=66;let s=`<circle cx="${cx}" cy="${cy}" r="42" fill="#FFD966" ${S}/><circle cx="${cx-14}" cy="${cy-6}" r="4" fill="${INK}"/><circle cx="${cx+14}" cy="${cy-6}" r="4" fill="${INK}"/><path d="M${cx-12},${cy+22} q12,-8 24,0" fill="none" ${S}/>`;
    if(i==0) s+=`<rect x="${cx+30}" y="${cy-44}" width="10" height="44" rx="5" fill="#fff" ${S}/><circle cx="${cx+35}" cy="${cy+4}" r="9" fill="#E53935" ${S}/><rect x="${cx+32}" y="${cy-22}" width="6" height="24" fill="#E53935"/>`;
    if(i==1) s+=`<path d="M${cx+30},${cy+10} q16,-6 24,-18 M${cx+32},${cy+20} q18,0 26,-6 M${cx+30},${cy+30} q14,4 22,10" fill="none" stroke="#90A4AE" stroke-width="3" stroke-linecap="round"/>`;
    if(i==2) s+=`<path d="M${cx-4},${cy+2} q4,10 8,0" fill="none" stroke="#4A90D9" stroke-width="3"/><rect x="${cx+26}" y="${cy-10}" width="30" height="36" rx="4" fill="#fff" ${S}/><path d="M${cx+30},${cy-10} q11,-12 22,0" fill="#fff" ${S}/>`;
    if(i==3) s+=`<path d="M${cx+22},${cy-58} l-8,14 h10 l-8,14" fill="none" stroke="#E53935" stroke-width="4"/><path d="M${cx-22},${cy-58} l-8,14 h10 l-8,14" fill="none" stroke="#E53935" stroke-width="4"/>`;
    if(i==4) s+=`<rect x="${cx-16}" y="${cy+40}" width="32" height="14" rx="4" fill="#E53935" opacity=".8"/>`;
    if(i==5) s+=`<ellipse cx="${cx}" cy="${cy+66}" rx="22" ry="12" fill="#E53935" opacity=".8"/>`;
    s+=T(cx,cy+100,15,it[0],{b:1})+T(cx,cy+118,12.5,it[1],{i:1,c:'#555'});b+=s;});
  out.simptome=svg(930,200,b);
}
// health flow
{ const W=940,H=330; let b='';
  const box=(x,y,w,h,t1,t2,fill='#fff')=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${GR}" stroke-width="2.5"/>`+T(x+w/2,y+h/2-4,15,t1,{b:1})+T(x+w/2,y+h/2+16,11.5,t2,{i:1,c:'#555'});
  const arr=(x,y)=>`<path d="M${x},${y} h18 m-8,-7 l8,7 l-8,7" fill="none" stroke="${GR}" stroke-width="3"/>`;
  b+=T(10,24,17,'A. Asigurarea și medicul de familie / Insurance and the family doctor',{a:'start',b:1,c:DK});
  const r1=[['contract de muncă','employment contract'],['CASS 10% reținut','10% withheld from salary'],['ești asigurat','you are insured'],['medicul de familie','cerere + act de identitate'],['cardul de sănătate','health card']];
  r1.forEach((t,i)=>{const x=10+i*186;b+=box(x,40,160,74,t[0],t[1],i==2?'#E3F1E8':'#fff');if(i<4)b+=arr(x+162,77);});
  b+=T(10,170,17,'B. Concediul medical / Sick leave',{a:'start',b:1,c:DK});
  const r2=[['ești bolnav','you are ill'],['anunți angajatorul','tell your employer'],['medicul îți dă','certificat de concediu medical'],['îl dai la angajator','până pe 5 a lunii următoare'],['indemnizația','sick pay (conditions apply)']];
  r2.forEach((t,i)=>{const x=10+i*186;b+=box(x,186,160,74,t[0],t[1],i==3?'#FFF4D6':'#fff');if(i<4)b+=arr(x+162,223);});
  b+=T(470,300,13,'Indemnizația: cel puțin 6 luni de contribuții în ultimele 12 luni (OUG 158/2005). Suma și regulile de calcul — întrebați angajatorul.',{i:1,c:'#555'});
  out.sanatate=svg(W,H,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out));

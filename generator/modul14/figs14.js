const K=require('./kit');const {T,INK,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
const st=`stroke="${INK}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="none"`;
// ---------- emotions (A2) ----------
{ const eyes=(t)=>t==='closed'?`<path d="M-18,-8 q6,-5 12,0 M6,-8 q6,-5 12,0" ${st}/>`:t==='up'?`<circle cx="-12" cy="-10" r="3.5" fill="${INK}"/><circle cx="12" cy="-10" r="3.5" fill="${INK}"/><path d="M-20,-22 l12,4 M20,-22 l-12,4" ${st}/>`:t==='wide'?`<circle cx="-12" cy="-8" r="6" fill="#fff" stroke="${INK}" stroke-width="2"/><circle cx="12" cy="-8" r="6" fill="#fff" stroke="${INK}" stroke-width="2"/><circle cx="-12" cy="-8" r="2.5" fill="${INK}"/><circle cx="12" cy="-8" r="2.5" fill="${INK}"/>`:t==='half'?`<path d="M-18,-8 h12 M6,-8 h12" ${st}/><circle cx="-12" cy="-6" r="2.5" fill="${INK}"/><circle cx="12" cy="-6" r="2.5" fill="${INK}"/>`:t==='side'?`<circle cx="-8" cy="-8" r="3.5" fill="${INK}"/><circle cx="16" cy="-8" r="3.5" fill="${INK}"/>`:t==='sad'?`<circle cx="-12" cy="-8" r="3.5" fill="${INK}"/><circle cx="12" cy="-8" r="3.5" fill="${INK}"/><path d="M-20,-16 l10,-4 M20,-16 l-10,-4" ${st}/>`:`<circle cx="-12" cy="-8" r="3.5" fill="${INK}"/><circle cx="12" cy="-8" r="3.5" fill="${INK}"/>`;
  const F=[['mândru','proud','#FFD54F','n',`<path d="M-14,10 q14,14 28,0" ${st}/><path d="M18,22 l-4,16 l8,-4 l8,4 l-4,-16" fill="#E53935"/><circle cx="22" cy="24" r="9" fill="${YL}" stroke="${OR}" stroke-width="2.5"/>`],
   ['dezamăgit','disappointed','#B0BEC5','sad',`<path d="M-12,18 q12,-8 24,0" ${st}/>`],
   ['stresat','stressed','#FFAB91','wide',`<path d="M-14,16 l5,-4 l5,4 l5,-4 l5,4 l5,-4" ${st}/><path d="M28,-30 q6,8 0,12" stroke="#1E88E5" stroke-width="3" fill="none"/>`],
   ['ușurat','relieved','#C5E1A5','closed',`<path d="M-10,12 q10,8 20,0" ${st}/><path d="M22,6 q14,-2 16,6" stroke="#90CAF9" stroke-width="3" fill="none"/>`],
   ['jenat','embarrassed','#F8BBD0','side',`<path d="M-4,16 h14" ${st}/><ellipse cx="-20" cy="6" rx="7" ry="4" fill="#E57373" opacity=".7"/><ellipse cx="22" cy="6" rx="7" ry="4" fill="#E57373" opacity=".7"/>`],
   ['entuziasmat','excited','#FFE082','wide',`<path d="M-14,8 q14,18 28,0z" fill="#fff" ${st.replace('fill="none"','')}/><path d="M-30,-30 l6,6 M30,-30 l-6,6 M0,-44 v8" stroke="${OR}" stroke-width="3"/>`],
   ['plictisit','bored','#CFD8DC','half',`<path d="M-10,16 h20" ${st}/><text x="22" y="-24" font-family="Arial" font-size="13" font-weight="bold" fill="#607D8B">z z</text>`],
   ['recunoscător','grateful','#B2DFDB','closed',`<path d="M-12,12 q12,10 24,0" ${st}/><path d="M26,-6 c-6,-10 -18,-2 -8,8 l8,8 l8,-8 c10,-10 -2,-18 -8,-8z" fill="#E53935"/>`]];
  const cw=112;let b='';F.forEach((f,i)=>{const cx=cw/2+i*cw,cy=58;b+=`<g transform="translate(${cx},${cy})"><circle r="38" fill="${f[2]}" stroke="${INK}" stroke-width="2.4"/>${eyes(f[3])}${f[4]}</g>`+T(cx,cy+64,15,f[0],{b:1})+T(cx,cy+81,12,f[1],{i:1,c:'#555'});});
  out.emotii=K.svg(cw*8,148,b);
}
// ---------- flowers: odd / even ----------
{ const flower=(x,y,c)=>`<path d="M${x},${y} q-4,40 0,80" stroke="#43A047" stroke-width="3" fill="none"/><circle cx="${x}" cy="${y}" r="11" fill="${c}" stroke="#9E9E9E" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="4" fill="#FFF59D"/>`;
  const bunch=(cx,n,c)=>{let b='';for(let i=0;i<n;i++){const x=cx-(n-1)*9+i*18,y=50+Math.abs(i-(n-1)/2)*8;b+=flower(x,y,c);}return b+`<path d="M${cx-30},120 l30,40 l30,-40z" fill="#FFF3E0" stroke="${INK}" stroke-width="2"/>`;};
  let b=bunch(110,3,'#E53935')+bunch(260,5,'#EC407A')+T(185,190,16,'3, 5, 7...  impar = la vizită, la aniversare',{b:1,c:GR})+`<circle cx="330" cy="60" r="20" fill="${GR}"/><path d="M320,60 l7,8 l14,-16" stroke="#fff" stroke-width="4" fill="none"/>`;
  b+=bunch(560,2,'#FFFFFF')+bunch(700,4,'#FFFFFF')+T(630,190,16,'2, 4, 6...  par = numai la înmormântare',{b:1,c:RD})+`<circle cx="770" cy="60" r="20" fill="${RD}"/><path d="M760,50 l20,20 M780,50 l-20,20" stroke="#fff" stroke-width="4"/>`;
  out.flori=K.svg(820,200,b);
}
// ---------- separation of powers ----------
{ let b='';
  b+=`<rect x="300" y="8" width="300" height="54" rx="10" fill="#E3EEF8" stroke="${BL}" stroke-width="2"/>`+T(450,32,16,'POPORUL ROMÂN · alegătorii',{b:1,c:BL})+T(450,52,12.5,'the people · the voters (citizens)',{i:1,c:'#555'});
  const col=[[20,'PUTEREA LEGISLATIVĂ','legislative power','#FFF3E0',OR,[['PARLAMENTUL','Camera Deputaților + Senatul'],['ales pe 4 ani','face legile'],['vot de încredere','pentru Guvern →']]],
             [320,'PUTEREA EXECUTIVĂ','executive power','#E8F5E9',GR,[['PREȘEDINTELE','5 ani, max. 2 mandate'],['GUVERNUL','prim-ministru + miniștri'],['','aplică legile']]],
             [620,'PUTEREA JUDECĂTOREASCĂ','judicial power','#F3E5F5','#7B1FA2',[['INSTANȚELE','judecătoriile, tribunalele...'],['Înalta Curte de','Casație și Justiție'],['CSM','garantează independența']]]];
  col.forEach(c=>{const x=c[0];b+=`<rect x="${x}" y="110" width="260" height="250" rx="12" fill="${c[3]}" stroke="${c[4]}" stroke-width="2.5"/><rect x="${x}" y="110" width="260" height="50" rx="12" fill="${c[4]}"/><rect x="${x}" y="140" width="260" height="20" fill="${c[4]}"/>`+T(x+130,134,15,c[1],{b:1,c:'#fff'})+T(x+130,152,11.5,c[2],{i:1,c:'#fff'});
    c[5].forEach((r,i)=>{b+=T(x+130,196+i*56,15,r[0],{b:1})+T(x+130,215+i*56,12.5,r[1],{c:'#444'});});});
  b+=`<path d="M380,62 L170,106" stroke="${BL}" stroke-width="2.5" fill="none" marker-end="url(#a)"/><path d="M450,62 L420,106" stroke="${BL}" stroke-width="2.5" fill="none" marker-end="url(#a)"/>`;
  b+=T(222,72,12,'aleg Parlamentul',{a:'end',i:1,c:BL})+T(470,92,12,'aleg Președintele',{a:'start',i:1,c:BL});
  b+=`<path d="M280,300 h40 M580,300 h40" stroke="${INK}" stroke-width="2" stroke-dasharray="5 4"/>`+T(300,292,11,'control',{i:1})+T(600,292,11,'control',{i:1});
  b+=`<path d="M280,250 C300,250 300,250 318,250" stroke="${OR}" stroke-width="2.5" fill="none" marker-end="url(#a2)"/>`;
  b+=`<rect x="220" y="380" width="460" height="46" rx="10" fill="#FFFDE7" stroke="#F9A825" stroke-width="2"/>`+T(450,401,14.5,'CURTEA CONSTITUȚIONALĂ',{b:1,c:'#8D6E00'})+T(450,418,12,'verifică dacă legile respectă Constituția',{i:1});
  b=`<defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="${BL}"/></marker><marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10z" fill="${OR}"/></marker></defs>`+b;
  b+=T(450,448,12.5,'Constituția, art. 1 (4): separația și echilibrul puterilor',{i:1,c:'#555'});
  out.puteri=K.svg(900,456,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

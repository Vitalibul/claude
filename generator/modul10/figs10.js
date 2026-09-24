const K=require('./kit');const {T,S,INK,W8,WD,RD,YL,OR,BL,GR,LG,DK}=K;const out={};
// education system
{ let b=''; const lv=[
 ['creșa','nursery (antepreșcolar)','0 – 3 ani','#F8BBD0',''],
 ['grădinița','kindergarten: grupa mică, mijlocie, mare','3 – 6 ani','#FFE082',''],
 ['școala primară','clasa pregătitoare + clasele I – IV','6 – 11 ani','#C5E1A5',''],
 ['gimnaziul','clasele V – VIII','11 – 15 ani','#A5D6A7','Evaluarea Națională'],
 ['liceul · școala profesională','clasele IX – XII · învățământ profesional / dual','15 – 19 ani','#80CBC4','Bacalaureatul'],
 ['universitatea','licență · master · doctorat','de la 18 – 19 ani','#90CAF9','']];
 lv.forEach((l,i)=>{const y=20+(5-i)*62, x=40+i*30, w=560-i*30;
   b+=`<rect x="${x}" y="${y}" width="${w}" height="52" rx="8" fill="${l[3]}" stroke="${INK}" stroke-width="2"/>`+T(x+14,y+24,17,l[0],{a:'start',b:1})+T(x+14,y+43,12.5,l[1],{a:'start',i:1,c:'#333'})+T(x+w-12,y+32,15,l[2],{a:'end',b:1});
   if(l[4]) b+=`<rect x="${x+w+14}" y="${y-18}" width="240" height="30" rx="15" fill="#fff" stroke="${RD}" stroke-width="2"/>`+T(x+w+134,y+2,14,'examen: '+l[4],{b:1,c:RD});});
 b+=`<path d="M22,${20+5*62+50} V30 m-8,12 l8,-12 l8,12" fill="none" stroke="${GR}" stroke-width="3"/>`+T(14,190,13,'vârsta',{c:GR,b:1}).replace('<text','<text transform="rotate(-90 14 190)"');
 out.educatie=K.svg(900,400,b);
}
// map + coat of arms
{ const P=a=>a.map(p=>p.join(',')).join(' ');
  const f4=[[30,180],[40,120],[120,80],[200,55],[260,48],[270,90],[320,150],[330,230],[215,255],[170,240],[120,210]];
  const f3=[[30,180],[120,210],[170,240],[215,255],[215,318],[170,300],[110,270],[70,240]];
  const f1=[[215,255],[330,230],[380,225],[420,250],[400,330],[330,320],[250,318],[215,318]];
  const f5=[[420,250],[450,210],[470,230],[490,270],[460,330],[400,330]];
  const f2=[[260,48],[300,40],[360,60],[420,110],[450,210],[420,250],[380,225],[330,230],[320,150],[270,90]];
  const cols={1:'#90CAF9',2:'#EF9A9A',3:'#FFCC80',4:'#CE93D8',5:'#80DEEA'};
  let b=`<g transform="translate(20,20)">`;
  [[f1,1],[f2,2],[f3,3],[f4,4],[f5,5]].forEach(([p,n])=>b+=`<polygon points="${P(p)}" fill="${cols[n]}" stroke="#fff" stroke-width="3"/>`);
  const lab=(x,y,n,t)=>`<circle cx="${x}" cy="${y}" r="13" fill="${INK}"/>`+T(x,y+5,14,n,{b:1,c:'#fff'})+T(x,y+28,12.5,t,{b:1});
  b+=lab(310,270,1,'Muntenia')+lab(360,140,2,'Moldova')+lab(120,240,3,'Banat · Oltenia')+lab(190,150,4,'Transilvania')+lab(452,270,5,'Dobrogea');
  b+=T(250,378,12,'harta schematică · schematic map',{i:1,c:'#777'})+`</g>`;
  // shield
  const X=560,Y=40,W=280,H=300;
  b+=`<path d="M${X},${Y} h${W} v${H*0.62} q0,${H*0.3} -${W/2},${H*0.38} q-${W/2},-${H*0.08} -${W/2},-${H*0.38}z" fill="#fff" stroke="${INK}" stroke-width="3"/>`;
  b+=`<rect x="${X}" y="${Y}" width="${W/2}" height="${H*0.31}" fill="${cols[1]}" stroke="${INK}"/><rect x="${X+W/2}" y="${Y}" width="${W/2}" height="${H*0.31}" fill="${cols[2]}" stroke="${INK}"/>`;
  b+=`<rect x="${X}" y="${Y+H*0.31}" width="${W/2}" height="${H*0.31}" fill="${cols[3]}" stroke="${INK}"/><rect x="${X+W/2}" y="${Y+H*0.31}" width="${W/2}" height="${H*0.31}" fill="${cols[4]}" stroke="${INK}"/>`;
  b+=`<path d="M${X},${Y+H*0.62} h${W} q0,${H*0.3} -${W/2},${H*0.38} q-${W/2},-${H*0.08} -${W/2},-${H*0.38}z" fill="${cols[5]}" stroke="${INK}"/>`;
  const sym=(cx,cy,n,a,b2)=>`<circle cx="${cx-50}" cy="${cy-32}" r="12" fill="${INK}"/>`+T(cx-50,cy-27,13,n,{b:1,c:'#fff'})+T(cx,cy+2,13,a,{b:1})+T(cx,cy+20,11,b2,{i:1});
  b+=sym(X+W/4,Y+H*0.18,1,'acvila cu crucea','Țara Românească')+sym(X+3*W/4,Y+H*0.18,2,'capul de bour','Moldova')+sym(X+W/4,Y+H*0.49,3,'podul și leul','Banat și Oltenia')+sym(X+3*W/4,Y+H*0.49,4,'acvila, 7 cetăți','Transilvania')+sym(X+W/2,Y+H*0.8,5,'doi delfini','Dobrogea');
  b+=T(X+W/2,Y-14,14,'Scutul mic de pe pieptul acvilei',{b:1})+T(X+W/2,Y+H+26,12,'desen schematic · schematic drawing',{i:1,c:'#777'});
  out.stema=K.svg(900,400,b);
}
// timeline
{ const ev=[[106,'106','Dacia devine provincie romană','Dacia becomes a Roman province',0],[1600,'1600','Mihai Viteazul unește cele trei țări','Michael the Brave unites three lands',0],[1848,'1848','Revoluția: drapelul și imnul','Revolution: flag and anthem',0],[1859,'1859','Unirea Principatelor','Union of the Principalities',1],[1877,'1877','Independența','Independence',0],[1918,'1918','Marea Unire','the Great Union',1],[1947,'1947','Începe regimul comunist','communism begins',0],[1989,'1989','Revoluția din decembrie','December Revolution',0],[2004,'2004','România în NATO','Romania joins NATO',1],[2007,'2007','România în UE','Romania joins the EU',1],[2025,'2024–25','Schengen','Schengen area',0]];
  let b=''; const H=40+ev.length*38; b+=`<line x1="150" y1="20" x2="150" y2="${H-10}" stroke="${INK}" stroke-width="4"/>`;
  ev.forEach((e,i)=>{const y=40+i*38,c=e[4]?'#1565C0':RD;
    b+=`<circle cx="150" cy="${y}" r="9" fill="${c}"/>`+T(130,y+6,18,e[1],{a:'end',b:1,c})+T(172,y+2,15,e[2],{a:'start',b:1})+T(172,y+18,12,e[3],{a:'start',i:1,c:'#555'});});
  b+=`<circle cx="470" cy="60" r="8" fill="#1565C0"/>`+T(484,65,14,'recap — Module 5',{a:'start',b:1,c:'#1565C0'})+`<circle cx="470" cy="90" r="8" fill="${RD}"/>`+T(484,95,14,'new in Module 10',{a:'start',b:1,c:RD});
  out.axa=K.svg(640,40+ev.length*38,b);
}
const fs=require('fs');for(const k in out) fs.writeFileSync(`figs/${k}.svg`,out[k]);console.log(Object.keys(out).join(' '));

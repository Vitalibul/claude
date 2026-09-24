const {chromium}=require('/opt/node22/lib/node_modules/playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({deviceScaleFactor:2.5});
for(const f of fs.readdirSync('figs').filter(f=>f.endsWith('.svg'))){const s=fs.readFileSync('figs/'+f,'utf8');const m=s.match(/width="(\d+)" height="(\d+)"/);
await p.setViewportSize({width:+m[1],height:+m[2]});await p.setContent(`<html><body style="margin:0;background:#fff">${s}</body></html>`);
await p.screenshot({path:'figs/'+f.replace('.svg','.png'),clip:{x:0,y:0,width:+m[1],height:+m[2]}});}
await b.close();})();

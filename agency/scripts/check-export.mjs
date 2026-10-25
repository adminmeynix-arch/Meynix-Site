import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');
const files=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(p.endsWith('.html'))files.push(p);}}
walk(root);
const broken=[];
for(const file of files){const html=fs.readFileSync(file,'utf8');for(const m of html.matchAll(/href="(\/[^"?#]*)/g)){const target=decodeURIComponent(m[1]);const p=path.join(root,target);if(!fs.existsSync(p)&&!fs.existsSync(path.join(p,'index.html')))broken.push([file,target]);}}
if(broken.length){console.error(broken);process.exit(1);}
for(const route of ['social-integrations','claude-automation','services','custom-software','ai-solutions','crm','erp','websites','rag','mcp','automation','industries','our-approach','contact','privacy','terms'])if(!fs.existsSync(path.join(root,route,'index.html')))throw Error(`Missing route: ${route}`);
for(const file of ['sitemap.xml','robots.txt','404.html','manifest.webmanifest'])if(!fs.existsSync(path.join(root,file)))throw Error(`Missing ${file}`);
console.log(`Checked ${files.length} HTML documents: all internal paths and required routes exist.`);

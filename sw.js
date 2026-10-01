const PREFIX='sharkline-pwa-';
const CACHE=PREFIX+'v3.0.0';
const ROOT=new URL('./',self.location.href);
const FILES=["./", "./index.html", "./style.css", "./sharks.js", "./engine.js", "./app.js", "./pwa.js", "./manifest.webmanifest", "./world.svg", "./icon-180.png", "./icon-192.png", "./icon-512.png", "./basking.svg", "./blacktip.svg", "./blue.svg", "./bull.svg", "./goblin.svg", "./greatHammer.svg", "./greenland.svg", "./lemon.svg", "./mako.svg", "./megalodon.svg", "./nurse.svg", "./porbeagle.svg", "./reef.svg", "./scalloped.svg", "./sixgill.svg", "./thresher.svg", "./tiger.svg", "./whale.svg", "./white.svg", "./whitetip.svg"].map(path=>new URL(path,ROOT).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
 if(FILES.includes(url.href)||event.request.mode==='navigate')event.respondWith(caches.open(CACHE).then(async cache=>{
   const cached=await cache.match(event.request);
   if(cached)return cached;
   try{return await fetch(event.request)}catch(error){if(event.request.mode==='navigate')return cache.match(new URL('./index.html',ROOT).href);throw error;}
 }));
});

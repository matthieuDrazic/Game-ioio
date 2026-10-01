const PREFIX='sharkline-pwa-';
const CACHE=PREFIX+'v2.0.0';
const ROOT=new URL('./',self.location.href);
const FILES=["./", "./index.html", "./style.css", "./sharks.js", "./engine.js", "./app.js", "./pwa.js", "./manifest.webmanifest", "./assets/world.svg", "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png", "./assets/basking.svg", "./assets/blacktip.svg", "./assets/blue.svg", "./assets/bull.svg", "./assets/goblin.svg", "./assets/greatHammer.svg", "./assets/greenland.svg", "./assets/lemon.svg", "./assets/mako.svg", "./assets/megalodon.svg", "./assets/nurse.svg", "./assets/porbeagle.svg", "./assets/reef.svg", "./assets/scalloped.svg", "./assets/sixgill.svg", "./assets/thresher.svg", "./assets/tiger.svg", "./assets/whale.svg", "./assets/white.svg", "./assets/whitetip.svg"].map(path=>new URL(path,ROOT).href);
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

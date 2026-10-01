const VERSION='4.0.0';
const PREFIX='sharkline-pwa-';
const CACHE=PREFIX+'v'+VERSION;
const ROOT=new URL('./',self.location.href);
const FILES=["./", "./index.html", "./update.html", "./manifest.webmanifest?v=4.0.0", "./style.css?v=4.0.0", "./sharks.js?v=4.0.0", "./engine.js?v=4.0.0", "./campaign.js?v=4.0.0", "./quiz-data.js?v=4.0.0", "./app.js?v=4.0.0", "./v4-ui.js?v=4.0.0", "./pwa.js?v=4.0.0", "./basking.svg", "./blacktip.svg", "./blue.svg", "./bull.svg", "./goblin.svg", "./greatHammer.svg", "./greenland.svg", "./lemon.svg", "./mako.svg", "./megalodon.svg", "./nurse.svg", "./porbeagle.svg", "./reef.svg", "./scalloped.svg", "./sixgill.svg", "./thresher.svg", "./tiger.svg", "./whale.svg", "./white.svg", "./whitetip.svg", "./world.svg", "./icon-180.png", "./icon-192.png", "./icon-512.png"].map(path=>new URL(path,ROOT).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES))));
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
 if(url.pathname===new URL('./version.json',ROOT).pathname)return;
 if(event.request.mode==='navigate'){
  event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{
    if(!response.ok)throw Error('navigation indisponible');return response;
  }).catch(()=>caches.open(CACHE).then(cache=>cache.match(new URL('./index.html',ROOT).href))));
  return;
 }
 // Explicit version queries avoid mixing old cached scripts with new HTML.
 if(url.searchParams.has('v')&&url.searchParams.get('v')!==VERSION)return;
 if(FILES.includes(url.href))event.respondWith(caches.open(CACHE).then(async cache=>{
  const cached=await cache.match(event.request);if(cached)return cached;
  const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());return response;
 }));
});

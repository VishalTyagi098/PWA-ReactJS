const CACHE_NAME="version-1"
const urlsToCache=["index.html","offline.html"]

// To install our application
this.addEventListener('install',(e)=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache)=>{
      console.log("opened cache");
      return cache.addAll(urlsToCache);
    })
  )
})

// To display our application in offline mode
this.addEventListener("fetch",(e)=>{
  e.respondWith(
    caches.match(e.request).then((res)=>{
      return fetch(e.request).catch(()=>caches.match('offline.html'))
    })
  )
})


this.addEventListener('activate',(e)=>{
  const cacheWhiteList=[]
  cacheWhiteList.push(CACHE_NAME)
  e.waitUntil(caches.keys().then((cacheNames)=>Promise.all(
    cacheNames.map((cacheName)=>{
      if(!cacheWhiteList.includes(cacheName)){
        return caches.delete(cacheName);
      }
    })
  )))
})
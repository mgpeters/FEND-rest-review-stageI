/* All serviceworker code was based off the 'Introduction to Service Worker' class code from Udacity 09/23/18ß

*/
const staticCacheName = 'restaurant-review-offline-001';

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(staticCacheName)
      .then(function(cache){
        return cache.addAll([
          '/index.html',
          '/restaurant.html',
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/sw_reg.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json',
          '/restaurant.html?id=1',
          '/restaurant.html?id=2',
          '/restaurant.html?id=3',
          '/restaurant.html?id=4',
          '/restaurant.html?id=5',
          '/restaurant.html?id=6',
          '/restaurant.html?id=7',
          '/restaurant.html?id=8',
          '/restaurant.html?id=9',
          '/restaurant.html?id=10'
        ]).catch(function(error){
          console.log('Caches open failed: ' + error);
        });
      })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){
          return cacheName.startsWith('restaurant-review-offline-') && cacheName != staticCacheName;
        }).map(function(cacheName){
          return cache.delete(cacheName);
        })
      );
    })
  )
})

self.addEventListener('fetch', function(event){
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
        return response || fetch(event.request);
      }).catch(function(error){
      return new Response('ERROR! Not connected to the internet...', {
        status: 404,
        statusText: "No net connection"
      });
    })
  );
});

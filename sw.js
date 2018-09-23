const staticCacheName = 'restaurant-static-001';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll([
          '/index.html',
          // '/restaurant.html',
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/sw_reg.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/data/restaurants.json',
        ]).catch(error => {
          console.log('Caches open failed: ' + error);
        });
      })
  );
});
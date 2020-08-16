var cacheName = 'tommy-pwa';
var filesToCache = [
  '../',
  '../page2.html?v=2',
  '../page3.html?v=2',
  '../page4.html?v=2',
  '../css/style.css?v=2',
  '../js/superlargefile.js',
  '../js/largefile.js',
  '../js/largefile-larger.js',
  '../js/largefile-huge.js',
  '../images/97221-unsplash.jpg',
  '../images/logo_sprite_5108d_large_2x.jpg',
  '../images/IMG_8093.jpeg',
  '../images/umbrella revolution.jpg',
  '../images/Umbrella Union Poster 5.jpg',
  '../js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

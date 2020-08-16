var cacheName = 'tommy-pwa';
var filesToCache = [
  './index.html',
  './page2.html',
  './page3.html',
  './page4.html',
  './css/style.css',
  './js/superlargefile.js',
  './js/largefile.js',
  './js/largefile-larger.js',
  './js/largefile-huge2.js',
  './js/largefile-larger2.js',
  './js/largefile-huge.js',
  './images/97221-unsplash.jpg',
  './images/logo_sprite_5108d_large_2x.jpg',
  './images/IMG_8093.jpeg',
  './images/umbrella revolution.jpg',
  './images/Umbrella Union Poster 5.jpg',
  './js/main.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

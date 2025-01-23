const CACHE_NAME = 'planner-cache-v1';
const urlsToCache = [
    '/',
    '/home/index.html',
    '/asset/home/css/style.css',
    '/asset/home/js/app.js',
    '/asset/imag/imag-1.jpeg',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

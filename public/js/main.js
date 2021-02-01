// Offline Service Worker
const staticCache = 'sk-site-static-offline';
const toCache = [
    '/',
    '/img/1.png',
    '/img/2.png',
    '/img/3.png',
    '/img/4.png',
    '/img/5.png',
    '/img/6.png',
    '/img/7.png',
    '/img/8.png',
    '/img/9.png',
    '/img/10.png',
    '/img/11.png',
    '/img/12.png',
    '/img/bg.png',
    '/img/logo.png',
    '/js/main.js'
];

//Install server worker
self.addEventListener('install', function(event) {
    //Perform install steps
    event.waitUntil(
        caches.open(staticCache)
        .then(function(cache) {
            //console.log('Opened Cache');
            return cache.addAll(toCache);
        })
    );
});

//Activate event
self.addEventListener('activate', evt => {
    console.log('service worker has been activated');
})

//fetch event
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
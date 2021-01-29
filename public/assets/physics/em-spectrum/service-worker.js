// Offline Service Worker
const staticCache = 'site-static';
const toCache = [
    '/assets/2d/image/glow-gradient/glow1.png',
    '/assets/2d/image/glow-gradient/Glow02.png',
    '/assets/2d/image/congratulations.png',
    '/assets/2d/image/exit.png',
    '/assets/2d/image/gamma-ray-ui.png',
    '/assets/2d/image/infrared-ui.png',
    '/assets/2d/image/instructions.png',
    '/assets/2d/image/microwaves.png',
    '/assets/2d/image/protozoa.png',
    '/assets/2d/image/radiowaves.png',
    '/assets/2d/image/start-learning.png',
    '/assets/2d/image/ultraviolet-ui.png',
    '/assets/2d/image/visible-light-ui.png',
    '/assets/2d/image/welcome-em-2.png',
    '/assets/2d/image/image/x-ray.png',
    '/assets/3d/downhill/downhill.glb',
    '/assets/3d/em-waves/EM waves v2.glb',
    '/assets/3d/hologram/hologram.glb',
    '/assets/audio/1.mp3',
    '/assets/audio/2.mp3',
    '/assets/audio/3.mp3',
    '/assets/audio/4.mp3',
    '/assets/audio/5.mp3',
    '/assets/audio/6.mp3',
    '/assets/audio/7.mp3',
    '/assets/audio/8.mp3',
    '/assets/audio/9.mp3',
    '/assets/audio/10.mp3',
    '/main.js',
    '/main.css'
];

//Install server worker
self.addEventListener('install', function(event) {
    //Perform install steps
    event.waitUntil(
        caches.open(staticCache)
        .then(function(cache) {
            console.log('Opened Cache');
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
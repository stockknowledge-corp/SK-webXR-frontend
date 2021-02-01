// Offline Service Worker
const staticCache = 'sk-site-static-offline-em-waves';
const toCache = [
    '/',
    '/subject/physics/em-waves/main.css',
    '/subject/physics/em-waves/main.js',
    '/subject/physics/em-waves',
    '/subject/physics/em-waves/assets/2d/image/arrow.png',
    '/subject/physics/em-waves/assets/2d/image/continue.png',
    '/subject/physics/em-waves/assets/2d/image/exit.png',
    '/subject/physics/em-waves/assets/2d/image/hud0.png',
    '/subject/physics/em-waves/assets/2d/image/hud2.png',
    '/subject/physics/em-waves/assets/2d/image/hud3.png',
    '/subject/physics/em-waves/assets/2d/image/hud4.png',
    '/subject/physics/em-waves/assets/2d/image/hud5.png',
    '/subject/physics/em-waves/assets/2d/image/info-logo.png',
    '/subject/physics/em-waves/assets/2d/image/lambda.png',
    '/subject/physics/em-waves/assets/2d/image/start-learning.png',
    '/subject/physics/em-waves/assets/2d/image/welcome-physics-em.png',
    '/subject/physics/em-waves/assets/2d/glow-gradient/glow1.png',
    '/subject/physics/em-waves/assets/2d/glow-gradient/Glow02.png',
    '/subject/physics/em-waves/assets/3d/downhill/downhill.glb',
    '/subject/physics/em-waves/assets/3d/em-waves/em-waves-v2.glb',
    '/subject/physics/em-waves/assets/3d/hologram/hologram.glb',
    '/subject/physics/em-waves/assets/audio/amplitude.mp3',
    '/subject/physics/em-waves/assets/audio/em-waves.mp3',
    '/subject/physics/em-waves/assets/audio/gazeOnPoint.mp3',
    '/subject/physics/em-waves/assets/audio/period.mp3',
    '/subject/physics/em-waves/assets/audio/wavelength.mp3',
    '/subject/physics/em-waves/assets/audio/welcomephysics.mp3',
    'service-worker.js'
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
// Offline Service Worker
const staticCache = 'sk-site-static-offline-em-spectrum';
const toCache = [
    '/',
    '/subject/physics/em-spectrum/main.css',
    '/subject/physics/em-spectrum/main.js',
    '/subject/physics/em-spectrum',
    '/subject/physics/em-spectrum/assets/2d/image/congratulations.png',
    '/subject/physics/em-spectrum/assets/2d/image/exit.png',
    '/subject/physics/em-spectrum/assets/2d/image/gamma-ray-ui.png',
    '/subject/physics/em-spectrum/assets/2d/image/infrared-ui.png',
    '/subject/physics/em-spectrum/assets/2d/image/instructions.png',
    '/subject/physics/em-spectrum/assets/2d/image/microwaves.png',
    '/subject/physics/em-spectrum/assets/2d/image/radiowaves.png',
    '/subject/physics/em-spectrum/assets/2d/image/sk-loader.gif',
    '/subject/physics/em-spectrum/assets/2d/image/start-learning.png',
    '/subject/physics/em-spectrum/assets/2d/image/ultraviolet-ui.png',
    '/subject/physics/em-spectrum/assets/2d/image/visible-light-ui.png',
    '/subject/physics/em-spectrum/assets/2d/image/welcome-em-2.png',
    '/subject/physics/em-spectrum/assets/2d/image/x-ray.png',
    '/subject/physics/em-spectrum/assets/2d/glow-gradient/glow1.png',
    '/subject/physics/em-spectrum/assets/2d/glow-gradient/Glow02.png',
    '/subject/physics/em-spectrum/assets/3d/downhill/downhill.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/em-waves-v2.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/gamma-ray.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/Infrared.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/microwaves.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/radiowaves.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/ultraviolet.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/Visible.glb',
    '/subject/physics/em-spectrum/assets/3d/em-waves/xray.glb',
    '/subject/physics/em-spectrum/assets/3d/hologram/hologram.glb',
    '/subject/physics/em-spectrum/assets/audio/1.mp3',
    '/subject/physics/em-spectrum/assets/audio/2.mp3',
    '/subject/physics/em-spectrum/assets/audio/3.mp3',
    '/subject/physics/em-spectrum/assets/audio/4.mp3',
    '/subject/physics/em-spectrum/assets/audio/5.mp3',
    '/subject/physics/em-spectrum/assets/audio/6.mp3',
    '/subject/physics/em-spectrum/assets/audio/7.mp3',
    '/subject/physics/em-spectrum/assets/audio/8.mp3',
    '/subject/physics/em-spectrum/assets/audio/9.mp3',
    '/subject/physics/em-spectrum/assets/audio/10.mp3'
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
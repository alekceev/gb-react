// console.log(self)

const CACHE_NAME = 'chatapp-cache-v1';

// активация с очисткой кеша
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then(
            keyList => Promise.all(
                    keyList.map(key => {
                        if (!cacheWhiteList.includes(key)) {
                            return caches.delete(key);
                        }
                    })
                )
        ).catch(console.error)
    );
});


// Разовая операция с создание нового кэша
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => 
            fetch('/manifest.json')
                .then(res => res.json())
                .then(assets => {
                    // кэшируем нужные страницы
                    cache.addAll([
                        '',
                        '/chat/*',
                        '/profile',
                        // '/bundle.js'
                    ]);
                    console.log('cached');
                }).catch(console.error)
        ).catch(console.error)
    )
});

// При пользовательских запросах
self.addEventListener('fetch', (event) => {
    event.respondWith(caches
        .match(event.request)
        .then(result => result || fetch(event.request))
        .catch(console.error)
    )
});

self.addEventListener('push', function(event) {
    console.info('Event: Push');

    var title = 'Тут новый пуш прилетел!';

    var body = {
        'body': 'Нажми сюда, чтобы открыть',
        'tag': 'pwa',
        'icon': './images/chat-app-48-48/png'
    };

    event.waitUntil(
        self.registration.showNotification(title, body)
    );
});
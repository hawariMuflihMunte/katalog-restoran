self.addEventListener('install', (event) => {
  console.log('installing Service Worker')

  // Cache app shell
})

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker...')

  // Delete old caches
})

self.addEventListener('fetch', (event) => {
  console.log(event.request)

  event.respondWith(fetch(event.request))
  // Add/get fetch request to/from caches
})

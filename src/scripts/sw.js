import CacheHelper from "./utils/cache-helper"

const assetsToCache = [
  './',
  './icons/apple-touch-icon.png',
  './icons/icon-48x48.png',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './favicon-16x16.png',
  './favicon-32x32.png',
  './index.html',
  './app.bundle.js',
  './manifestw.json',
  './sw.bundle.js'
]

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

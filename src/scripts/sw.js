import 'regenerator-runtime'
import CacheHelper from './utils/cache-helper'

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
  './icons/favicon-32x32.png',
  './icons/favicon-16x16.png',
  './images/heros/hero.webp',
  './images/heros/hero.jpg',
  './index.html',
  './manifest.json',
  './app.bundle.js',
  './sw.bundle.js',
  // Google Fonts
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap',
  // Google Material Symbols
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,300,1,200',
  // API Base URL
  'https://restaurant-api.dicoding.dev/'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    CacheHelper.cachingAppShell([...assetsToCache])
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    CacheHelper.deleteOldCache()
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    CacheHelper.revalidateCache(event.request)
  )
})

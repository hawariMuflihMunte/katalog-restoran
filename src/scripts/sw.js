import { precacheAndRoute } from 'workbox-precaching'

// Do precaching
precacheAndRoute(self.__WB_MANIFEST)

self.addEventListener('install', () => {
  console.log('Service Worker: installed')
  self.skipWaiting()
})

self.addEventListener('push', () => {
  console.log('Service Worker: pushed')
})

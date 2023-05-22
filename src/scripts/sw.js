import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

// Do precaching
precacheAndRoute(self.__WB_MANIFEST)

registerRoute(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev'),
  new StaleWhileRevalidate({
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200]
      })]
  })
)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})

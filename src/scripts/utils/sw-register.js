import * as WorkboxWindow from 'workbox-window'

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Fitur ServiceWorker tidak didukung di web browser ini')
    return false
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js')

  try {
    await wb.register()
    console.log('Service Worker registered')
  } catch (error) {
    console.log('Failed to register service worker', error)
  }
}

export default swRegister

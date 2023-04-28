const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Fitur ServiceWorker tidak didukung di web browser ini')
    return false
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js')
    console.log('Service Worker registered')
  } catch (error) {
    console.log('Failed to register service worker', error)
  }
}

export default swRegister

// Any scripts that need to be preloaded in advance, like ads or analytics

// UV Service Worker

if (/debug/.test(window.location)) {
  console.log('Debug mode enabled')
  var eruda = document.createElement('script')
  eruda.src = 'https://cdn.jsdelivr.net/npm/eruda'
  document.head.append(eruda)

  eruda.onload = () => {
    eruda.init()
  }
}


const swAllowedHostnames = ['localhost', '127.0.0.1']

async function registerSW() {
  console.log('Starting registration...')
  if (location.protocol !== 'https:' && !swAllowedHostnames.includes(location.hostname)) throw new Error('Service workers cannot be registered without https.')

  if (!navigator.serviceWorker) throw new Error("Your browser doesn't support service workers.")

  await navigator.serviceWorker
    .register('sw.js', {
      scope: __uv$config.prefix
    })
    .then(() => {
      console.log('Registered!')
    })
}

registerSW()

// Font Awesome
const fa = document.createElement('link')
fa.href = 'https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css'
fa.rel = 'stylesheet'
fa.type = 'text/css'
document.head.appendChild(fa)

// CSS Scripts

const hover = document.createElement('link')
hover.href = 'https://cdn.jsdelivr.net/gh/ianlunn/hover/css/hover-min.css'
hover.rel = 'stylesheet'
document.head.appendChild(hover)

// Google Analytics
var googleAnalytics = document.createElement('script')
googleAnalytics.src = 'https://www.googletagmanager.com/gtag/js?id=G-66ZE075DLD'
googleAnalytics.async = true
document.head.appendChild(googleAnalytics)

window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())

gtag('config', 'G-66ZE075DLD')

// Fathom
// <script src="https://cdn.usefathom.com/script.js" data-site="FNWBNQCO" defer></script>
var fathom = document.createElement("script")
fathom.src = "https://cdn.usefathom.com/script.js"
fathom.dataset.set = "FNWBNQCO"
fathom.defer = true
document.head.appendChild(fathom)

// Ads
var ads = document.createElement("script")
ads.src = "//strodeintended.com/4e/d6/be/4ed6beda21708e4b8f45fca957964a1f.js"
ads.type = "text/javascript"
document.head.appendChild(ads)

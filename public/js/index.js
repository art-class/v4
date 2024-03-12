const setObj = function (key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function (key) {
  return JSON.parse(localStorage.getItem(key))
}

function loadcustomapp() {
  if (!getObj('customapps')) {
    setObj('customapps', [])
  }
  var name = prompt('What should this app be named? (required)')
  var url = prompt("What's this app's url? (required)")
  var icon = prompt("What's this app's icon? (optional)")
  var description = prompt("What's this app's description? (optional)")

  if (!name || !url) return alert('All required fields must be filled in')
  if (name.length > 15) return alert('App name is too long (max 30 characters)')

  fetch('https://www.uuidtools.com/api/generate/v4')
    .then((response) => response.json())
    .then((data) => {
      var customapps = getObj('customapps') || []
      customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      setObj('customapps', customapps)
      window.location.href = self.location
    })
}

if (localStorage.getItem('launchblank') && window.self !== window.top) {
  launchab()
}

function launchab() {
  const tab = window.open('about:blank', '_blank')
  const iframe = tab.document.createElement('iframe')
  const stl = iframe.style
  stl.border = stl.outline = 'none'
  stl.width = '100vw'
  stl.height = '100vh'
  stl.position = 'fixed'
  stl.left = stl.right = stl.top = stl.bottom = '0'
  iframe.src = self.location
  tab.document.body.appendChild(iframe)
  window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
}

if (window.self !== window.self) document.querySelector('#launchab').style.display = 'none'

function loadcustomgame() {
  if (!getObj('customgames')) {
    setObj('customgames', [])
  }
  var name = prompt('What should this game be named? (required)')
  var url = prompt("What's this game's url? (required)")
  var icon = prompt("What's this game's icon? (optional)")
  var description = prompt("What's this game's description? (optional)")

  if (!name || !url) return alert('All required fields must be filled in')
  if (name.length > 15) return alert('Game name is too long (max 30 characters)')

  fetch('https://www.uuidtools.com/api/generate/v4')
    .then((response) => response.json())
    .then((data) => {
      var customgames = getObj('customgames') || []
      customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      console.log(customgames)
      setObj('customgames', customgames)

      console.log(getObj('customgames'))
      //window.location.href = self.location
    })
}

function debug() {
  console.log(getObj('customapps'))
}

function clearcustomapps() {
  setObj('customapps', [])
  console.log('Removed all custom apps!')
  window.location.reload()
}

function clearcustomgames() {
  setObj('customgames', [])
  console.log('Removed all custom games!')
  window.location.reload()
}

// Themes
if (localStorage.getItem('theme')) {
  document.body.setAttribute('theme', localStorage.getItem('theme'))
} else {
  document.body.setAttribute('theme', 'main')
}

// Tab
if (localStorage.getItem('tabIcon')) {
  document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem('tabIcon')
}

if (localStorage.getItem('tabName')) {
  document.title = localStorage.getItem('tabName')
}

if (localStorage.getItem('theme')) {
  document.body.setAttribute('theme', localStorage.getItem('theme'))
}
console.log(localStorage.getItem('theme'))

// Panic
document.addEventListener('keydown', async (e) => {
  if (localStorage.getItem('panickey') && localStorage.getItem('panickey') == e.key) window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
})

// Debug

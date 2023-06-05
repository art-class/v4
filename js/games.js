games.forEach(game => {
  var card = document.createElement("div")
  var image = document.createElement("img")
  var text = document.createElement("h4")
  var descrip = document.createElement("p")
  descrip.classList.add("description")
  card.classList.add("card")
  
  if (game.image) image.src = game.image
  if (!game.image) image.src = "https://www.pngkey.com/png/full/167-1670247_white-globe-icon-png-holy-bible-new-international.png"
  if (game.description) descrip.innerHTML = game.description
  image.loading = "lazy"
  text.innerHTML = game.title
  card.appendChild(image)
  card.appendChild(text)
  //card.appendChild(descrip)
  document.querySelector("#gamecards").appendChild(card)
  
  //card.classList.add(`hvr-${effects[Math.floor(Math.random() * effects.length)]}`)
  card.classList.add("hvr-bob")
  card.addEventListener("click", () => {

    if (game.id == "customgame") return loadcustomgame() 
    window.location.href = `/load.html?game=${game.id}`
  })
})

const setObj = function(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj))
}
const getObj = function(key) {
  return JSON.parse(localStorage.getItem(key))
}

function loadcustomapp() {
  if (!getObj("customapps")) {
      setObj("customapps", [])
  }
  var name = prompt("What should this app be named? (required)")
  var url = prompt("What's this app's url? (required)")
  var icon = prompt("What's this app's icon? (optional)")
  var description = prompt("What's this app's description? (optional)")
 

  if (!name || !url) return alert("All required fields must be filled in")
  if (name.length > 15) return alert("App name is too long (max 30 characters)")

  
  fetch("https://www.uuidtools.com/api/generate/v4")
  .then(response => response.json())
  .then(data => {
      var customapps = getObj("customapps")
      customapps.push(JSON.parse(`{ "title": "${name} (Custom app)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      setObj("customapps", customapps)
      window.location.href = self.location
  })
}

function loadcustomgame() {
  if (!getObj("customgames")) {
      setObj("customgames", [])
  }
  
  var name = prompt("What should this game be named? (required)")
  var url = prompt("What's this game's url? (required)")
  var icon = prompt("What's this game's icon? (optional)")
  var description = prompt("What's this game's description? (optional)")

  if (!name || !url) return alert("All required fields must be filled in")
  if (name.length > 15) return alert("Game name is too long (max 30 characters)")

  
  fetch("https://www.uuidtools.com/api/generate/v4")
  .then(response => response.json())
  .then(data => {
      var customgames = getObj("customapps")
      customgames.push(JSON.parse(`{ "title": "${name} (Custom game)", "url": "${url}", "id": "${data[0]}", "image": "${icon}", "description": "${description}" }`))
      setObj("customapps", customgames)
      window.location.href = self.location
  })
  
  
}


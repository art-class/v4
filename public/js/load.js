const params = new URLSearchParams(window.location.search)
if (params.get("game")) {
    games.forEach(async game => {
        if (game.id != params.get("game")) return
        document.title = `${game.title} | Art Class`
        document.querySelector("#gameImage").src = game.image
        document.querySelector("#gameTitle").innerHTML = game.title
        if (game.description) document.querySelector("#gameDescription").innerHTML = game.description
        document.querySelector("#frame").src = __uv$config.prefix + __uv$config.encodeUrl(game.url)


    })
} else if (params.get("app")) {

    apps.forEach(app => {
        if (app.id != params.get("app")) return
        document.title = `${app.title} | Art Class`
        document.querySelector("#gameImage").src = app.image
        document.querySelector("#gameTitle").innerHTML = app.title
        if (app.description) document.querySelector("#gameDescription").innerHTML = app.description

        document.querySelector("#frame").src = __uv$config.prefix + __uv$config.encodeUrl(app.url);
    })
}

if (!getObj("favoritedGames")) setObj("favoritedGames", [])
if (!getObj("favoritedApps")) setObj("favoritedApps", [])

var favoritedButton = document.querySelector(".favorited")
var favoritedGames = getObj("favoritedGames")
var favoritedApps = getObj("favoritedApps")

var game = params.get("game")
var app = params.get("app")

if (favoritedGames.includes(game)) {
    favoritedButton.classList.remove("far")
    favoritedButton.classList.add("fas")
}

if (favoritedGames.includes(game)) {
    favoritedButton.classList.remove("far")
    favoritedButton.classList.add("fas")
}
function favorite() {
    if (game) {
        var index = favoritedGames.indexOf(game);
        if (index !== -1) {
            favoritedGames.splice(index, 1);
            favoritedButton.classList.remove("fas")
            favoritedButton.classList.add("far")
        } else {
            favoritedGames.push(game)
            favoritedButton.classList.remove("far")
            favoritedButton.classList.add("fas")
        }
        setObj("favoritedGames", favoritedGames);
    } else if (app) {
        var index = favoritedGames.indexOf(game);
        if (index !== -1) {
            favoritedGames.splice(index, 1);
            favoritedButton.classList.remove("fas")
            favoritedButton.classList.add("far")
        } else {
            favoritedGames.push(game)
            favoritedButton.classList.remove("far")
            favoritedButton.classList.add("fas")
        }
        setObj("favoritedGames", favoritedGames);
    }
}
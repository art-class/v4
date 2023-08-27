function setTheme(theme) {
    document.body.setAttribute("theme", theme)
    localStorage.setItem("theme", theme)
}

function setTab(name = document.querySelector('#tabname').value, icon = document.querySelector("#tabicon").value) {
    localStorage.setItem("tabName", name)
    localStorage.setItem("tabIcon", icon)

    document.title = name 
    document.querySelector("link[rel='shortcut icon']").href = icon
    if (localStorage.getItem("tabName")) document.querySelector("#tabname").value = localStorage.getItem("tabName")
    if (localStorage.getItem("tabIcon")) document.querySelector("#tabicon").value = localStorage.getItem("tabIcon")

}

var tabPresets = {
    google: {
        name: 'Google',
        icon: 'https://www.google.com/favicon.ico'
    },
    drive: {
        name: 'My Drive - Google Drive',
        icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png'
    },
    docs: {
        name: 'Google Docs',
        icon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico'
    },
    classroom: {
        name: 'Home',
        icon: 'https://ssl.gstatic.com/classroom/ic_product_classroom_32.png'
    }
}

function setTabPreset(tab) {

    setTab(tabPresets[tab].name, tabPresets[tab].icon)

}

if (localStorage.getItem("tabName")) document.querySelector("#tabname").value = localStorage.getItem("tabName")
if (localStorage.getItem("tabIcon")) document.querySelector("#tabicon").value = localStorage.getItem("tabIcon")

const themeSelect = document.getElementById('theme-select');

themeSelect.addEventListener('change', () => {
    document.body.setAttribute('theme', themeSelect.value);
    localStorage.setItem("theme", themeSelect.value)
});
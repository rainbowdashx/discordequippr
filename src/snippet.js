fetch('https://raw.githubusercontent.com/rainbowdashx/discordequippr/master/public/build/inject.js')
    .then(response => response.text())
    .then(data => {
        var style = document.createElement("script");
        style.innerHTML = data
        document.head.appendChild(style)
    }).reject(err =>console.error(err));
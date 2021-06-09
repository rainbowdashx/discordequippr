// ==UserScript==
// @name         BOTOS MAXIMUS
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  WO GPU?????!
// @author       HOLLYCHRIAS
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// @grant        none
// @updateURL    https://raw.githubusercontent.com/rainbowdashx/discordequippr/master/public/build/inject.js
// ==/UserScript==

const CSS = " __CSS__ ";

var style = document.createElement("style");
style.innerHTML = CSS;
document.head.appendChild(style);


setTimeout(() => {
    __APP__
}, 5000);
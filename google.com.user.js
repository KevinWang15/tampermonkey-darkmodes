// ==UserScript==
// @name         google.com
// @namespace    https://github.com/kevinwang15/tampermonkey-darkmodes
// @version      0.1
// @author       Ke Wang
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=google.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.body.style.filter = "invert(1)";
    document.body.children[1].style.background = "white";
    const mainElement = document.getElementById("main");
    if (mainElement) {
        mainElement.style.background = "white";
    }
})();

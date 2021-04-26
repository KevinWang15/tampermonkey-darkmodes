// ==UserScript==
// @name         github.corp.ebay.com
// @namespace    https://github.com/kevinwang15/tampermonkey-darkmodes
// @version      0.1
// @author       Ke Wang
// @match        https://github.corp.ebay.com/*
// @icon         https://www.google.com/s2/favicons?domain=github.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.body.style.filter = "invert(1)";


    const header = document.getElementsByClassName("Header")[0];
    if (header) {
        header.style.background = "#dca5aa";
    }


    const main = document.getElementsByTagName("main")[0];
    if (main) {
        main.style.background = "white";
    }

})();

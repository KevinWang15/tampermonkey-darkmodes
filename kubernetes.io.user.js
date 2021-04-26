// ==UserScript==
// @name         kubernetes.io
// @namespace    https://github.com/kevinwang15/tampermonkey-darkmodes
// @version      0.1
// @author       Ke Wang
// @match        https://kubernetes.io/*
// @icon         https://www.google.com/s2/favicons?domain=kubernetes.io
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.body.style.filter = "invert(1)";

    const tdMain = document.getElementsByClassName("td-main")[0];
    if (tdMain) {
        tdMain.style.background = "white";
    }

    const pageContentWrapper = document.getElementById("page-content-wrapper");
    if (pageContentWrapper) {
        pageContentWrapper.style.background = "white";
    }
})();

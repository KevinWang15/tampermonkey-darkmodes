// ==UserScript==
// @name         docs.google.com
// @namespace    https://github.com/kevinwang15/tampermonkey-darkmodes
// @version      0.1
// @author       Ke Wang
// @match        https://docs.google.com/*
// @icon         https://www.google.com/s2/favicons?domain=docs.google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.style.filter="invert(1)";
})();
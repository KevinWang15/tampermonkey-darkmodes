// ==UserScript==
// @name         jirap.corp.ebay.com
// @namespace    https://github.com/kevinwang15/tampermonkey-darkmodes
// @version      0.1
// @author       Ke Wang
// @match        https://jirap.corp.ebay.com/*
// @icon         https://www.google.com/s2/favicons?domain=jira.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    document.body.style.filter = "invert(1)";

    const announcementBanner = document.getElementById("announcement-banner");
    if (announcementBanner) {
        announcementBanner.style.background = "white";
    }

})();

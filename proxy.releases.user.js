// ==UserScript==
// @name         GitHub 加速 (Releases)
// @namespace    https://mogeko.me
// @version      0.1.1
// @description  通过代理为 GitHub Releases 提供加速
// @author       Mogeko
// @match        https://github.com/*/*
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @updataURL    https://github.com/Mogeko/user-script-ghproxy/raw/master/proxy.releases.user.js
// @grant        none
// ==/UserScript==

const PROXY_URL = "https://ghproxy.com/";

(function() {
    'use strict';
    const assetNodes = document.querySelectorAll(".Box--condensed a");
    assetNodes.forEach(link => {
        link.href = PROXY_URL + link.href;
    });
})();

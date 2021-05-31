// ==UserScript==
// @name         GitHub 加速 (Raw)
// @namespace    https://mogeko.me
// @version      0.1.1
// @description  通过代理为 GitHub Raw Assets 提供加速
// @author       Mogeko
// @supportURL   https://github.com/Mogeko/user-script-ghproxy/issues
// @match        https://github.com/*/*
// @exclude      https://github.com/*/*/issues*
// @exclude      https://github.com/*/*/pulls*
// @exclude      https://github.com/*/*/actions*
// @exclude      https://github.com/*/*/projects*
// @exclude      https://github.com/*/*/wiki*
// @exclude      https://github.com/*/*/security*
// @exclude      https://github.com/*/*/pulse*
// @exclude      https://github.com/*/*/settings*
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @updataURL    https://cdn.jsdelivr.net/gh/Mogeko/user-script-ghproxy@master/agentRaw/agentRaw.user.js
// @run-at       document-end
// @grant        none
// @license      MIT
// ==/UserScript==

const PROXY_URL = 'https://ghproxy.com/';

const agentRaw = proxy => {
    const rawButton = document.querySelector('#raw-url');
    if (rawButton) {
        rawButton.href = proxy + window.location.href;
    }
}

(function() {
    'use strict';
    agentRaw(PROXY_URL);
    document.addEventListener('pjax:success', () => {
        agentRaw(PROXY_URL);
    });
})();

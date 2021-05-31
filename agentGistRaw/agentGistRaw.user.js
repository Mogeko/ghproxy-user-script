// ==UserScript==
// @name         GitHub 加速 (Gist)
// @namespace    https://mogeko.me
// @version      0.1
// @description  通过代理为 GitHub Gist 的 Raw Assets 提供加速
// @author       Mogeko
// @supportURL   https://github.com/Mogeko/user-script-ghproxy/issues
// @match        https://gist.github.com/*
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @updataURL    https://cdn.jsdelivr.net/gh/Mogeko/user-script-ghproxy@master/agentRaw/agentRaw.user.js
// @run-at       document-end
// @grant        none
// @license      MIT
// ==/UserScript==

const PROXY_URL = 'https://ghproxy.com/';

const agentGistRaw = proxy => {
    const links = document
        .querySelectorAll('.file-actions a, .ml-2:nth-last-child(1) a');
    links.forEach(link => {
        link.href = proxy + link.href
    });
}

(function() {
    'use strict';
    agentGistRaw(PROXY_URL);
    document.addEventListener('pjax:success', () => {
        agentGistRaw(PROXY_URL);
    });
})();

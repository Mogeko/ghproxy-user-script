// ==UserScript==
// @name         GitHub 加速 (Releases)
// @namespace    https://mogeko.me
// @version      0.2.3
// @description  通过代理为 GitHub Releases 提供加速
// @author       Mogeko
// @supportURL   https://github.com/Mogeko/userscript-ghproxy/issues
// @match        https://github.com/*/*
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @updataURL    https://cdn.jsdelivr.net/gh/Mogeko/userscript-ghproxy@master/agentReleases/agentReleases.user.js
// @run-at       document-end
// @grant        none
// @license      MIT
// ==/UserScript==

const PROXY_URL = 'https://ghproxy.com/';

const agentReleases = proxy =>
    document.querySelectorAll('.octicon-package, .octicon-file-zip')
        .forEach(svg => {
            const link = svg.parentNode;
            link.href = proxy + link.href;
        });

(function() {
    'use strict';
    agentReleases(PROXY_URL);
    document.addEventListener('pjax:success', () => {
        agentReleases(PROXY_URL);
    });
})();

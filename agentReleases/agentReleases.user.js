// ==UserScript==
// @name         GitHub 加速 (Releases)
// @namespace    https://mogeko.me
// @version      0.2.2
// @description  通过代理为 GitHub Releases 提供加速
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
// @updataURL    https://cdn.jsdelivr.net/gh/Mogeko/user-script-ghproxy@master/agentReleases/agentReleases.user.js
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

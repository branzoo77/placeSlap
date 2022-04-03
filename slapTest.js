// ==UserScript==
// @name         Slap overlay
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Try to take over the canvas!
// @author       oralekin (+ branzoo7 )
// @match        https://hot-potato.reddit.com/embed*
// @icon         none
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
    const i = document.createElement("img");
    i.id = "slap-overlay"
        i.src = "https://i.ibb.co/pjSSHh6/Attempt1.png";
        i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function() {
                return i;
            })())
    
    setInterval(() => {
      const timestamp = new Date().getTime();
      const queryString = "?t=" + timestamp;
      i.src = "https://i.ibb.co/pjSSHh6/Attempt1.png" + queryString;
    }, 10000)
    }, false);
}
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/
// ==/UserScript==

let yandexInput = document.getElementsByName('text')[0];
let searchWord = 'Гобой';
let i = 0;

let timerId = setInterval(()=>{
       yandexInput.value += searchWord[i];
        i++;
        if (i>=searchWord.length) {
            clearInterval(timerId);
            }
    },500);



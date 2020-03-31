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
yandexInput.value = "Гобой";

let bottonYandex = document.getElementsByClassName('button__text')[0];
bottonYandex.click();

let bottonMusical = document.href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai');
bottonMusical.click();

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
let bottonYandex = document.getElementsByClassName('button__text')[0];
let i = 0;
let links = document.links;

let timerId = setInterval(()=>{
       yandexInput.value += searchWord[i];
        i++;
        if (i>=searchWord.length) {
            clearInterval(timerId);
            bottonYandex.click();[0]}
    },500);
if (location.hostname != "www.yandex.ru"){
for (let i=0; i<links.length; i++){
        if (links[i].href.indexOf('xn----7sbab5aqcbiddtdj1e1g.xn--p1ai')!=-1){
            links[i].click();
            break;
        }
}
}

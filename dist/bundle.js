!function(n){var e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return n[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(i,r,function(e){return n[e]}.bind(null,r));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=5)}([function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,i=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,o=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,e,t){var i={},r=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),o=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),a=null,d=0,l=[],s=t(0);function p(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(u(r.parts[a],e))}else{var d=[];for(a=0;a<r.parts.length;a++)d.push(u(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:d}}}}function f(n,e){for(var t=[],i={},r=0;r<n.length;r++){var o=n[r],a=e.base?o[0]+e.base:o[0],d={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(d):t.push(i[a]={id:a,parts:[d]})}return t}function c(n,e){var t=o(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===n.insertAt)i?i.nextSibling?t.insertBefore(e,i.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=o(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,r)}}function g(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function h(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),x(e,n.attrs),c(n,e),e}function x(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function u(n,e){var t,i,r,o;if(e.transform&&n.css){if(!(o=e.transform(n.css)))return function(){};n.css=o}if(e.singleton){var l=d++;t=a||(a=h(e)),i=_.bind(null,t,l,!1),r=_.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",x(e,n.attrs),c(n,e),e}(e),i=function(n,e,t){var i=t.css,r=t.sourceMap,o=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||o)&&(i=s(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),d=n.href;n.href=URL.createObjectURL(a),d&&URL.revokeObjectURL(d)}.bind(null,t,e),r=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=h(e),i=function(n,e){var t=e.css,i=e.media;i&&n.setAttribute("media",i);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){g(t)});return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=f(n,e);return p(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(d=i[a.id]).refs--,r.push(d)}n&&p(f(n,e),e);for(o=0;o<r.length;o++){var d;if(0===(d=r[o]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete i[d.id]}}}};var m=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function _(n,e,t,i){var r=t?"":i.css;if(n.styleSheet)n.styleSheet.cssText=m(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var r=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(i),o=i.sources.map(function(n){return"/*# sourceURL="+i.sourceRoot+n+" */"});return[t].concat(o).concat([r]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){(n.exports=t(2)(!1)).push([n.i,"html {\n  font-size: 13.5px;\n  font-weight: 500; }\n\nbody {\n  margin: 0;\n  font-family: 'Montserrat', sans-serif;\n  color: dimgrey;\n  text-rendering: optimizeLegibility; }\n\n* {\n  box-sizing: border-box; }\n\n.js-template {\n  display: none; }\n\nsection, article, aside, footer, header, nav {\n  display: block; }\n\n.grid__box {\n  padding: 0 15px;\n  margin: 0 auto; }\n\n.grid--topnav {\n  background: #05869b;\n  box-shadow: inset 0 -10px 10px -9px rgba(0, 0, 0, 0.5); }\n\n.grid__box--topnav {\n  padding: 0;\n  /*unseting default padding (applied through .grid__box) to use padding inside the clickable element instead*/ }\n\n.topnav {\n  display: flex; }\n  .topnav__link {\n    height: 45px;\n    padding: 0 15px;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: white; }\n    .topnav__link--myacount {\n      font-size: 0.9rem;\n      font-weight: 700; }\n  .topnav__button {\n    font-family: 'Montserrat', sans-serif;\n    margin-left: auto;\n    height: 45px;\n    background: none;\n    border: none;\n    outline: none; }\n  .topnav__arrow {\n    width: 10px;\n    margin: 2px 0 0 5px;\n    stroke: white; }\n\n.brief {\n  padding: 30px 0 0; }\n  .brief__title {\n    margin: 0 0 20px;\n    color: #313131;\n    font-size: 1.4rem;\n    font-weight: 800;\n    font-size: 1.6em; }\n  .brief__text {\n    margin: 0 0 18px;\n    line-height: 1.8rem; }\n\n.grid--guideform {\n  background: #fafafa;\n  border-bottom: 1px solid lightgrey; }\n\n.guide {\n  padding: 15px 0; }\n  .guide__title {\n    color: #313131;\n    font-size: 1.4rem;\n    font-weight: 800;\n    margin: 0 0 15px; }\n  .guide__subtitle {\n    font-size: 1.1rem;\n    font-weight: 700;\n    line-height: 1.45rem; }\n  .guide__text {\n    line-height: 1.8rem; }\n\n.guide-list {\n  margin: 0;\n  padding: 8px 0px 0px 0px;\n  list-style: none; }\n  .guide-list__item {\n    display: flex;\n    align-items: flex-start; }\n  .guide-list__l-id {\n    display: flex;\n    flex-direction: column;\n    align-self: stretch; }\n  .guide-list__number {\n    width: 50px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid dimgrey;\n    border-radius: 40px;\n    font-size: 1.22rem;\n    font-weight: 800;\n    line-height: 1rem; }\n  .guide-list__l-break {\n    flex-grow: 1;\n    min-height: 32px;\n    display: flex;\n    align-items: center; }\n  .guide-list__break {\n    margin-left: 25px;\n    height: 18px;\n    border-left: 1px solid dimgrey; }\n  .guide-list__l-text {\n    margin-bottom: 20px;\n    min-height: 50px;\n    display: flex;\n    align-items: center; }\n    .guide-list__l-text--last {\n      margin-bottom: 0px; }\n  .guide-list__text {\n    padding-left: 20px;\n    line-height: 1.4rem;\n    font-size: 0.9rem; }\n  .guide-list__strong {\n    font-weight: 700; }\n\n.form {\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  transform: translateY(30px);\n  padding: 15px 15px 0 15px;\n  background: white;\n  box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.05); }\n  .form__title {\n    color: #313131;\n    font-size: 1.4rem;\n    font-weight: 800;\n    margin: 0 0 20px 0; }\n  .form__brief {\n    margin: 0  0 20px 0; }\n  .form__l-row {\n    padding-bottom: 15px;\n    display: flex;\n    flex-direction: column; }\n    .form__l-row--double {\n      flex-direction: row; }\n  .form__label {\n    margin: 0 0 3px 1px;\n    font-size: 0.75rem;\n    font-weight: 600; }\n  .form__l-input {\n    position: relative; }\n  .form__input {\n    font-family: 'Montserrat', sans-serif;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    height: 40px;\n    width: 100%;\n    padding-left: 15px;\n    display: block;\n    outline: none; }\n    .form__input:focus {\n      border-color: #de9e20; }\n  .form__arrow {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    height: 10px;\n    width: 10px;\n    stroke: dimgrey;\n    pointer-events: none; }\n  .form__button {\n    font-family: 'Montserrat', sans-serif;\n    margin-top: 5px;\n    height: 45px;\n    display: block;\n    background-color: #10ca79;\n    border: 2px solid #3db180;\n    border-radius: 5px;\n    outline: none;\n    font-weight: 500;\n    letter-spacing: 0.5px;\n    color: white; }\n  .form__link {\n    align-self: center;\n    margin-bottom: 3px;\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 0.9rem;\n    color: #de9e20; }\n  .form__l-curso {\n    width: 60%;\n    padding-right: 10px;\n    display: flex;\n    flex-direction: column; }\n  .form__l-mensa {\n    width: 40%;\n    padding-left: 10px;\n    display: flex;\n    flex-direction: column; }\n\n.share {\n  padding: 60px 0 15px 0; }\n  .share__title {\n    color: #313131;\n    font-size: 1.4rem;\n    font-weight: 800;\n    margin: 0; }\n  .share__box {\n    padding-top: 25px;\n    padding-bottom: 20px; }\n    .share__box--first {\n      padding-top: 25px;\n      border-bottom: 1px solid lightgrey; }\n  .share__title2 {\n    font-size: 1.1rem;\n    font-weight: 700;\n    margin: 0;\n    line-height: 1.5rem; }\n  .share__link-box {\n    margin-right: 30px;\n    margin-top: 20px;\n    display: inline-flex;\n    flex-direction: column; }\n    .share__link-box--last {\n      margin-right: 0; }\n  .share__title3 {\n    margin: 0;\n    display: inline;\n    font-size: 0.9rem;\n    font-weight: 400; }\n  .share__l-link {\n    margin-top: 10px; }\n  .share__link {\n    margin-right: 10px;\n    height: 45px;\n    width: 45px;\n    display: inline-block;\n    border: 1px solid lightgrey;\n    border-radius: 35px; }\n    .share__link--last {\n      margin-right: 0; }\n  .share__form {\n    margin-bottom: 10px;\n    padding-top: 20px; }\n  .share__label {\n    margin: 0;\n    line-height: 1.6rem; }\n  .share__l-field {\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    margin-top: 5px;\n    display: flex;\n    align-items: center;\n    overflow: hidden; }\n  .share__field {\n    font-family: 'Montserrat', sans-serif;\n    flex-grow: 1;\n    height: 40px;\n    padding-left: 15px;\n    border: 1px solid white;\n    outline: none; }\n    .share__field::placeholder {\n      color: #d2d2d2; }\n    .share__field:-ms-input-placeholder {\n      color: #d2d2d2; }\n    .share__field:focus {\n      border: 1px solid #de9e20;\n      border-radius: 5px; }\n  .share__text {\n    padding-left: 15px;\n    flex-grow: 1; }\n  .share__button {\n    font-family: 'Montserrat', sans-serif;\n    height: 40px;\n    width: 72px;\n    background: #fafafa;\n    border: none;\n    outline: none;\n    border-left: 1px solid lightgrey;\n    font-weight: 600;\n    color: #de9e20; }\n  .share__tip {\n    margin: 7px 0 0 0;\n    font-size: 0.75rem;\n    font-style: italic; }\n\n.grid--header {\n  position: relative;\n  /*So the shadow casts on top of the lower element*/\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.5); }\n\n.grid__box--header {\n  padding: 0;\n  /*unseting default padding (applied through .grid__box) to use padding inside the clickable element instead*/ }\n\n.header {\n  height: 60px;\n  display: flex; }\n  .header__l-link {\n    flex-grow: 1;\n    display: flex; }\n    .header__l-link--home {\n      flex-grow: 0; }\n  .header__link {\n    padding: 0 15px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: dimgrey;\n    text-decoration: none; }\n    .header__link--help {\n      margin-right: auto;\n      border-right: 1px solid lightgray; }\n    .header__link--home {\n      padding: 0; }\n    .header__link--login {\n      margin-left: auto;\n      border-left: 1px solid lightgray; }\n  .header__help-img {\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    background-color: #de9e20; }\n  .header__home-img {\n    height: 40px;\n    width: 130px;\n    padding: 0 10px;\n    border-radius: 10px;\n    background-color: #de9e20; }\n  .header__login-img {\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    background-color: #de9e20; }\n  .header__link-text {\n    padding: 3px 0;\n    font-size: 0.9rem; }\n\n.grid--contact {\n  background: #17acc4; }\n\n.grid__box--contact {\n  padding: 0;\n  /*unseting default padding (applied through .grid__box) to use padding inside the clickable element instead*/ }\n\n.contact {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none; }\n  .contact__item {\n    display: flex;\n    flex-grow: 1;\n    flex-shrink: 0; }\n    .contact__item--phone {\n      flex-grow: 2; }\n  .contact__link {\n    padding: 0 15px;\n    flex-grow: 1;\n    width: 70px;\n    height: 70px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-decoration: none;\n    color: white;\n    border-left: 1px solid #05869b; }\n    .contact__link--phone {\n      padding-right: 5px;\n      flex-grow: 1;\n      width: auto;\n      flex-direction: row;\n      border-left: none; }\n  .contact__img {\n    margin-bottom: 5px;\n    width: 25px;\n    height: 25px;\n    border: 1px solid white;\n    border-radius: 25px; }\n    .contact__img--phone {\n      margin: 0 5px 0 0; }\n  .contact__text {\n    position: relative;\n    font-size: 0.88rem;\n    font-weight: 400; }\n    .contact__text--phone {\n      transform: none;\n      display: flex;\n      flex-direction: column; }\n    .contact__text--chat {\n      font-style: italic; }\n  .contact__phone-under-text {\n    font-size: 0.75rem;\n    font-style: italic; }\n  .contact__dot {\n    position: absolute;\n    top: 0.2rem;\n    left: -0.76rem;\n    height: 0.6rem;\n    width: 0.6rem;\n    display: inline-block;\n    border-radius: 10px; }\n    .contact__dot--phone {\n      position: static;\n      background: #dd3f4e; }\n    .contact__dot--chat {\n      background: #dd3f4e; }\n    .contact__dot--email {\n      background: #65ef80; }\n    .contact__dot--info {\n      background: #65ef80; }\n\n.grid--botnav {\n  background: #05869b; }\n\n.botnav {\n  margin: 0;\n  padding: 15px 0;\n  text-align: center;\n  font-size: 0.6rem;\n  font-weight: 400; }\n  .botnav__item {\n    display: inline; }\n    .botnav__item::before {\n      content: \" \";\n      white-space: nowrap; }\n    .botnav__item::after {\n      content: \" \";\n      background: linear-gradient(90deg, white 1px, transparent 1px);\n      white-space: normal;\n      /*\r\n\t\t\t\tWe are using this technique so the browser doesn't render the last break on each line.\r\n\t\t\t\tIt consists on using a white space as a container for the break.\r\n\t\t\t\tThe browser removes any white space left at the end of each line, therefore the break isn't rendered.\r\n\t\t\t*/ }\n  .botnav__link {\n    white-space: nowrap;\n    padding: 8px 10px 8px 10px;\n    display: inline-block;\n    font-size: 0.9rem;\n    color: white;\n    text-decoration: none; }\n\n.grid--last {\n  border-bottom: 2px solid #05869b;\n  background-color: #006f8a; }\n\n.security {\n  padding: 10px 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center; }\n  .security__img {\n    /*not using only margin bottom beacuse it may wrap*/\n    margin: 2.5px 2px;\n    flex-shrink: 0;\n    width: 40px;\n    height: 25px;\n    background: darkgray; }\n    .security__img--safe-site {\n      margin-left: 0;\n      width: 105px; }\n\n.social__list {\n  margin: 0;\n  padding: 10px 0;\n  display: flex;\n  list-style: none;\n  justify-content: center;\n  flex-wrap: wrap; }\n\n.social__item {\n  margin: 0 15px; }\n\n.social__img {\n  width: 35px;\n  height: 35px;\n  background: white;\n  border-radius: 25px; }\n\n.info {\n  margin: 0;\n  padding: 10px 0 0 0;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.5); }\n  .info__heart {\n    vertical-align: middle;\n    font-size: 1rem; }\n  .info__text {\n    margin-bottom: 10px;\n    text-align: center; }\n\n@media (min-width: 1015px) {\n  .grid__box--guideform {\n    display: flex; }\n  .guide, .form {\n    flex-basis: 50%; }\n  .form {\n    margin-left: 25px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around; }\n  .share__title {\n    padding-bottom: 15px;\n    border-bottom: 1px solid lightgrey; }\n  .share__l-boxes {\n    display: flex; }\n  .share__box {\n    flex-basis: 50%; }\n    .share__box--first {\n      border-bottom: 0; }\n    .share__box--last {\n      margin-left: 25px; }\n  .topnav {\n    white-space: nowrap; }\n    .topnav-d__l-links {\n      display: flex;\n      flex-wrap: wrap; }\n    .topnav-d__link {\n      height: 45px;\n      padding: 0 20px;\n      display: inline-flex;\n      align-items: center;\n      font-weight: 400;\n      color: white;\n      text-decoration: none; }\n      .topnav-d__link--active {\n        background: rgba(255, 255, 255, 0.2); } }\n\n@media (min-width: 1015px) {\n  .header-d__l-link {\n    flex-basis: 40%;\n    display: flex; }\n    .header-d__l-link--left {\n      margin-right: auto; }\n    .header-d__l-link--right {\n      margin-left: auto; }\n  .header-d__link {\n    flex-shrink: 0;\n    padding: 0 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: dimgrey;\n    text-decoration: none; }\n    .header-d__link--help {\n      border-right: 1px solid lightgray; }\n    .header-d__link--login {\n      margin-left: auto; }\n  .header-d__help-img {\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    background-color: #de9e20; }\n  .header-d__phone-img {\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    background-color: #de9e20; }\n  .header-d__login-img {\n    height: 25px;\n    width: 25px;\n    border-radius: 100%;\n    background-color: #de9e20; }\n  .header-d__link-text {\n    padding: 0 5px; }\n  .contact-d {\n    margin: 0;\n    padding: 30px 0;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    list-style: none; }\n    .contact-d__item {\n      flex-shrink: 0;\n      padding: 0 15px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n    .contact-d__img {\n      margin-right: 10px;\n      width: 35px;\n      height: 35px;\n      border: 1px solid #00879e;\n      border-radius: 25px; }\n    .contact-d__l-text {\n      display: flex;\n      flex-direction: column; }\n    .contact-d__link {\n      margin-bottom: 2px;\n      font-size: 1.4rem;\n      font-weight: 400;\n      color: white; }\n    .contact-d__under-text {\n      font-size: 0.9rem;\n      font-weight: 300;\n      color: white; }\n    .contact-d__dot {\n      height: 0.5rem;\n      width: 0.5rem;\n      display: inline-block;\n      border-radius: 10px; }\n      .contact-d__dot--phone {\n        position: static;\n        background: #dd3f4e; }\n      .contact-d__dot--chat {\n        background: #dd3f4e; }\n      .contact-d__dot--email {\n        background: #65ef80; }\n      .contact-d__dot--help {\n        background: #65ef80; }\n  .grid--botnav {\n    border-bottom: 2px solid #05869b; }\n  .botnav-d {\n    margin: 0;\n    padding: 50px 0;\n    display: flex;\n    justify-content: space-between;\n    list-style: none; }\n    .botnav-d__item-l1 {\n      display: unset; }\n    .botnav-d__list {\n      margin: 0;\n      padding: 0;\n      display: flex;\n      flex-direction: column;\n      list-style: none; }\n    .botnav-d__title {\n      margin: 0 0 20px;\n      font-size: 0.9rem;\n      font-weight: 600;\n      color: white; }\n    .botnav-d__item-l2 {\n      display: unset; }\n    .botnav-d__link {\n      margin-bottom: 10px;\n      display: inline-block;\n      font-size: 0.9rem;\n      font-weight: 300;\n      color: white;\n      text-decoration: none; }\n      .botnav-d__link--last {\n        margin-bottom: 0; }\n  /*media*/\n  .grid-d--media {\n    background-color: #05869b; }\n  .media-d {\n    padding: 40px 0;\n    display: flex;\n    justify-content: space-between; }\n    .media-d__box {\n      display: flex;\n      flex-direction: column; }\n    .media-d__title {\n      margin: 0 0 30px 0;\n      font-size: 0.9rem;\n      font-weight: 300;\n      color: white; }\n    .media-d__list {\n      margin: 0;\n      padding: 0;\n      display: flex;\n      align-items: center;\n      list-style: none; }\n    .media-d__link {\n      display: block;\n      background: white; }\n      .media-d__link--globo {\n        height: 35px;\n        width: 35px;\n        border-radius: 100%; }\n      .media-d__link--folha, .media-d__link--veja {\n        margin-left: 15px;\n        height: 35px;\n        width: 70px; }\n      .media-d__link--you, .media-d__link--inst, .media-d__link--twi, .media-d__link--fac {\n        margin-right: 10px;\n        height: 35px;\n        width: 35px;\n        border-radius: 100%; }\n      .media-d__link--epoca {\n        margin-right: 15px;\n        height: 50px;\n        width: 70px; }\n    .media-d__img {\n      margin-right: 10px;\n      width: 45px;\n      height: 45px;\n      border-radius: 100%; }\n      .media-d__img--selo {\n        background-color: #de9e20; }\n    .media-d__text {\n      max-width: 200px;\n      display: block;\n      font-size: 0.9rem;\n      font-weight: 300;\n      color: white; }\n    .media-d__l-content {\n      display: flex;\n      align-items: center; }\n  .grid-d--last {\n    background-color: #006f8a; }\n  .last-d {\n    padding: 20px 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    .last-d__l-text {\n      margin: 0;\n      flex-grow: 1;\n      flex-basis: 33%;\n      display: flex; }\n    .last-d__text {\n      font-size: 0.8rem;\n      color: rgba(255, 255, 255, 0.5); }\n      .last-d__text--right {\n        margin-left: auto; }\n    .last-d__heart {\n      font-size: 1rem;\n      vertical-align: middle; }\n    .last-d__security {\n      padding: 0 10px;\n      display: flex;\n      justify-content: center; }\n    .last-d__img {\n      margin-left: 4px;\n      flex-shrink: 0;\n      width: 40px;\n      height: 25px;\n      background: darkgray; }\n      .last-d__img--safe-site {\n        margin-left: 0;\n        width: 105px; } }\n\n@media (max-width: 1015px) {\n  .if-desktop {\n    display: none; } }\n\n@media (min-width: 1015px) {\n  .if-mobile {\n    display: none; }\n  .grid__box {\n    margin: 0 auto;\n    max-width: 1015px; } }\n",""])},function(n,e,t){var i=t(3);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(1)(i,r);i.locals&&(n.exports=i.locals)},function(n,e,t){t(4)}]);
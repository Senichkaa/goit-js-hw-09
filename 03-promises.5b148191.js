!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("6JpON");var i=t("h6c0i"),r=document.querySelector(".form"),c=document.querySelector('[name="delay"]'),a=document.querySelector('[name="amount"]'),l=document.querySelector('[name="step"]');function u(e,o){return new Promise((function(n,t){setTimeout((function(){Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();for(var o=Number(a.value),n=Number(l.value),t=Number(c.value),r=1;r<=o;r+=1)u(r,t).then((function(e){var o=e.position,n=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms")),console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;i.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms")),console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),t+=n}))}();
//# sourceMappingURL=03-promises.5b148191.js.map

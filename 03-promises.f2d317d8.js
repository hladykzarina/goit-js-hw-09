!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u={form:document.querySelector(".form"),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]')};function a(n,o){var t=Math.random()>.3;new Promise((function(e,r){setTimeout((function(){t?e({position:n,delay:o}):r({position:n,delay:o})}),o)})).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}u.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.delay.value),o=(Number(u.step.value),Number(u.amount.value)),t=1;t<=o;t+=1)a(t,n)}))}();
//# sourceMappingURL=03-promises.f2d317d8.js.map

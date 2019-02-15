webpackHotUpdate("index",{

/***/ "./src/main/ts/index.ts":
/*!******************************!*\
  !*** ./src/main/ts/index.ts ***!
  \******************************/
/*! exports provided: sayMyName, addValues, multiplyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sayMyName", function() { return sayMyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addValues", function() { return addValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplyValue", function() { return multiplyValue; });
/* harmony import */ var _site_images_lambi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../site/images/lambi.png */ "./src/site/images/lambi.png");
/* harmony import */ var _site_images_lambi_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_images_lambi_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _address_Name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./address/Name */ "./src/main/ts/address/Name.ts");
/* harmony import */ var _config_ConfigLog4j__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/ConfigLog4j */ "./src/main/ts/config/ConfigLog4j.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/main/ts/main.ts");




function sayMyName() {
  return "Mike";
}
/**
 * Zählt zweit Werte zusammen
 *
 *     import * as lambi from "../../site/images/lambi.png";
 *     ...
 *     const img = document.querySelector("#frontImg") as HTMLImageElement;
 *     img.src = lambi;
 *
 * @param v1 Wert 1
 * @param v2 Wert 2
 */

function addValues(v1, v2) {
  return v1 + v2;
}
function multiplyValue(v1, v2) {
  return v1 * v2;
}

function main() {
  // Retrieve a logger (you can decide to use it per class and/or module or just
  // export it in the config above etc. Your loggers - your choice!).
  // This logger will fall in the first LogGroupRule from above.
  var logger = _config_ConfigLog4j__WEBPACK_IMPORTED_MODULE_2__["loggerFactory"].getLogger("main");
  logger.info("index.ts invoked - ".concat(sayMyName()));

  document.querySelector("#tstest").onclick = function (event) {
    alert("Hi Mike, event '".concat(event.type, "' occurred!!"));
  };

  logger.info(function () {
    return "Servus Message!!!!... ".concat(Object(_main__WEBPACK_IMPORTED_MODULE_3__["giveAge9"])());
  });
  var divs = Array.from(document.getElementsByTagName("div"));
  divs.forEach(function (div) {
    div.addEventListener("click", function (evt) {
      evt = new MouseEvent("aaa");
      logger.info(JSON.stringify(evt));
    });
  }); // for(const div of divs) {
  //     div.
  // }

  var name = new _address_Name__WEBPACK_IMPORTED_MODULE_1__["Name"]("Mike", "Mitterer5");
  var appDiv = document.querySelector("#app");
  appDiv.textContent = name.fullname;
  logger.debug("Lambi: ".concat(JSON.stringify(_site_images_lambi_png__WEBPACK_IMPORTED_MODULE_0__)));
  var img = document.querySelector("#frontImg");
  img.src = _site_images_lambi_png__WEBPACK_IMPORTED_MODULE_0__;
  var body = document.querySelector("body");
  body.classList.remove("loading");
  body.classList.add("loaded"); // logger.info(`Done!!!! ${os.platform()}`);

  logger.info("Done!!!!");
}

if (typeof window !== "undefined") {
  main();
}

function everythingIsReady() {
  var logger = _config_ConfigLog4j__WEBPACK_IMPORTED_MODULE_2__["loggerFactory"].getLogger("done");
  logger.info("everythingIsReady!");
}

function domIsReady() {
  var logger = _config_ConfigLog4j__WEBPACK_IMPORTED_MODULE_2__["loggerFactory"].getLogger("done");
  logger.info("domIsReady!");
} // Mehr: https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState


var domIsReadyState = setInterval(function () {
  if (/interactive/.test(document.readyState)) {
    clearInterval(domIsReadyState);
    domIsReady(); // this is the function that gets called when everything is loaded
  }
}, 10);
var everythingLoadedState = setInterval(function () {
  if (/loaded|complete/.test(document.readyState)) {
    clearInterval(everythingLoadedState);
    everythingIsReady(); // this is the function that gets called when everything is loaded
  }
}, 10);
document.addEventListener("readystatechange"); // document.addEventListener('readystatechange', (event: ProgressEvent) => {
//     if (event != null && event.target != null && (event.target. as EventTarget).readyState != null) {
//         if ('interactive' === `${event.target.readyState}`) {
//             domIsReady();
//         }
//         else if (event.target.readyState === 'complete') {
//             everythingIsReady();
//         }
//     }
// });

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJzYXlNeU5hbWUiLCJhZGRWYWx1ZXMiLCJ2MSIsInYyIiwibXVsdGlwbHlWYWx1ZSIsIm1haW4iLCJsb2dnZXIiLCJsb2dnZXJGYWN0b3J5IiwiZ2V0TG9nZ2VyIiwiaW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJldmVudCIsImFsZXJ0IiwidHlwZSIsImdpdmVBZ2U5IiwiZGl2cyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9yRWFjaCIsImRpdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJNb3VzZUV2ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJOYW1lIiwiYXBwRGl2IiwidGV4dENvbnRlbnQiLCJmdWxsbmFtZSIsImRlYnVnIiwibGFtYmkiLCJpbWciLCJzcmMiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwiZXZlcnl0aGluZ0lzUmVhZHkiLCJkb21Jc1JlYWR5IiwiZG9tSXNSZWFkeVN0YXRlIiwic2V0SW50ZXJ2YWwiLCJ0ZXN0IiwicmVhZHlTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJldmVyeXRoaW5nTG9hZGVkU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsR0FBNkI7QUFDaEMsU0FBTyxNQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0MsU0FBVCxDQUFtQkMsRUFBbkIsRUFBK0JDLEVBQS9CLEVBQW1EO0FBQ3RELFNBQU9ELEVBQUUsR0FBR0MsRUFBWjtBQUNIO0FBRU0sU0FBU0MsYUFBVCxDQUF1QkYsRUFBdkIsRUFBbUNDLEVBQW5DLEVBQXVEO0FBQzFELFNBQU9ELEVBQUUsR0FB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aUIsR0FGNEIsQ0FFeEI7QUFDeEI7QUFDSixDQUx3QyxFQUt0QyxFQUxzQyxDQUF6QztBQU9BaEMsUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixrQkFBMUIsRSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJmaWxlIjoiaW5kZXguZGY1YmU2MzUyMDFkNWNiZDNmYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxhbWJpIGZyb20gXCIuLi8uLi9zaXRlL2ltYWdlcy9sYW1iaS5wbmdcIjtcbmltcG9ydCB7IE5hbWUgfSBmcm9tIFwiLi9hZGRyZXNzL05hbWVcIjtcbmltcG9ydCB7IGxvZ2dlckZhY3RvcnkgfSBmcm9tIFwiLi9jb25maWcvQ29uZmlnTG9nNGpcIjtcbmltcG9ydCB7IGdpdmVBZ2U5IH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F5TXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiTWlrZVwiO1xufVxuXG4vKipcbiAqIFrDpGhsdCB6d2VpdCBXZXJ0ZSB6dXNhbW1lblxuICpcbiAqICAgICBpbXBvcnQgKiBhcyBsYW1iaSBmcm9tIFwiLi4vLi4vc2l0ZS9pbWFnZXMvbGFtYmkucG5nXCI7XG4gKiAgICAgLi4uXG4gKiAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcm9udEltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICogICAgIGltZy5zcmMgPSBsYW1iaTtcbiAqXG4gKiBAcGFyYW0gdjEgV2VydCAxXG4gKiBAcGFyYW0gdjIgV2VydCAyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRWYWx1ZXModjE6IG51bWJlciwgdjI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHYxICsgdjI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVZhbHVlKHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB2MSAqIHYyO1xufVxuXG5mdW5jdGlvbiBtYWluKCk6IHZvaWQge1xuICAgIC8vIFJldHJpZXZlIGEgbG9nZ2VyICh5b3UgY2FuIGRlY2lkZSB0byB1c2UgaXQgcGVyIGNsYXNzIGFuZC9vciBtb2R1bGUgb3IganVzdFxuICAgIC8vIGV4cG9ydCBpdCBpbiB0aGUgY29uZmlnIGFib3ZlIGV0Yy4gWW91ciBsb2dnZXJzIC0geW91ciBjaG9pY2UhKS5cbiAgICAvLyBUaGlzIGxvZ2dlciB3aWxsIGZhbGwgaW4gdGhlIGZpcnN0IExvZ0dyb3VwUnVsZSBmcm9tIGFib3ZlLlxuICAgIGNvbnN0IGxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKFwibWFpblwiKTtcblxuICAgIGxvZ2dlci5pbmZvKGBpbmRleC50cyBpbnZva2VkIC0gJHtzYXlNeU5hbWUoKX1gKTtcblxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RzdGVzdFwiKSBhcyBIVE1MRWxlbWVudCkub25jbGljayA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBhbGVydChgSGkgTWlrZSwgZXZlbnQgJyR7ZXZlbnQudHlwZX0nIG9jY3VycmVkISFgKTtcbiAgICB9O1xuXG4gICAgbG9nZ2VyLmluZm8oKCkgPT4gYFNlcnZ1cyBNZXNzYWdlISEhIS4uLiAke2dpdmVBZ2U5KCl9YCk7XG5cbiAgICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSk7XG5cbiAgICBkaXZzLmZvckVhY2goKGRpdjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldnQgPSBuZXcgTW91c2VFdmVudChcImFhYVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKEpTT04uc3RyaW5naWZ5KGV2dCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcihjb25zdCBkaXYgb2YgZGl2cykge1xuICAgIC8vICAgICBkaXYuXG4gICAgLy8gfVxuXG4gICAgY29uc3QgbmFtZSA9IG5ldyBOYW1lKFwiTWlrZVwiLCBcIk1pdHRlcmVyNVwiKTtcblxuICAgIGNvbnN0IGFwcERpdiA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKSBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgYXBwRGl2LnRleHRDb250ZW50ID0gbmFtZS5mdWxsbmFtZTtcblxuICAgIGxvZ2dlci5kZWJ1ZyhgTGFtYmk6ICR7SlNPTi5zdHJpbmdpZnkobGFtYmkpfWApO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJvbnRJbWdcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICBpbWcuc3JjID0gbGFtYmk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikgYXMgSFRNTEJvZHlFbGVtZW50O1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuXG4gICAgLy8gbG9nZ2VyLmluZm8oYERvbmUhISEhICR7b3MucGxhdGZvcm0oKX1gKTtcbiAgICBsb2dnZXIuaW5mbyhgRG9uZSEhISFgKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtYWluKCk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5dGhpbmdJc1JlYWR5KCkge1xuICAgIGNvbnN0IGxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKFwiZG9uZVwiKTtcbiAgICBsb2dnZXIuaW5mbyhgZXZlcnl0aGluZ0lzUmVhZHkhYCk7XG59XG5cbmZ1bmN0aW9uIGRvbUlzUmVhZHkoKSB7XG4gICAgY29uc3QgbG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoXCJkb25lXCIpO1xuICAgIGxvZ2dlci5pbmZvKGBkb21Jc1JlYWR5IWApO1xufVxuXG4vLyBNZWhyOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRG9jdW1lbnQvcmVhZHlTdGF0ZVxuY29uc3QgZG9tSXNSZWFkeVN0YXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmICgvaW50ZXJhY3RpdmUvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChkb21Jc1JlYWR5U3RhdGUpO1xuICAgICAgICBkb21Jc1JlYWR5KCk7IC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZFxuICAgIH1cbn0sIDEwKTtcblxuY29uc3QgZXZlcnl0aGluZ0xvYWRlZFN0YXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZXZlcnl0aGluZ0xvYWRlZFN0YXRlKTtcbiAgICAgICAgZXZlcnl0aGluZ0lzUmVhZHkoKTsgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIGV2ZXJ5dGhpbmcgaXMgbG9hZGVkXG4gICAgfVxufSwgMTApO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLClcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHtcbi8vICAgICBpZiAoZXZlbnQgIT0gbnVsbCAmJiBldmVudC50YXJnZXQgIT0gbnVsbCAmJiAoZXZlbnQudGFyZ2V0LiBhcyBFdmVudFRhcmdldCkucmVhZHlTdGF0ZSAhPSBudWxsKSB7XG4vLyAgICAgICAgIGlmICgnaW50ZXJhY3RpdmUnID09PSBgJHtldmVudC50YXJnZXQucmVhZHlTdGF0ZX1gKSB7XG4vLyAgICAgICAgICAgICBkb21Jc1JlYWR5KCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbi8vICAgICAgICAgICAgIGV2ZXJ5dGhpbmdJc1JlYWR5KCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
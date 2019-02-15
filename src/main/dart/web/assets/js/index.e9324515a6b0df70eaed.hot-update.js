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
}

function unknownState(state) {
  var logger = _config_ConfigLog4j__WEBPACK_IMPORTED_MODULE_2__["loggerFactory"].getLogger("state");
  logger.info("unknownState: ".concat(state, "!"));
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
}, 10); // document.addEventListener('readystatechange', () => {
//     if (/interactive/.test(document.readyState)) {
//         domIsReady();
//     } else if (/loaded|complete/.test(document.readyState)) {
//         everythingIsReady();
//     } else {
//         unknownState(document.readyState);
//     }
// });

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJzYXlNeU5hbWUiLCJhZGRWYWx1ZXMiLCJ2MSIsInYyIiwibXVsdGlwbHlWYWx1ZSIsIm1haW4iLCJsb2dnZXIiLCJsb2dnZXJGYWN0b3J5IiwiZ2V0TG9nZ2VyIiwiaW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJldmVudCIsImFsZXJ0IiwidHlwZSIsImdpdmVBZ2U5IiwiZGl2cyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9yRWFjaCIsImRpdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJNb3VzZUV2ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJOYW1lIiwiYXBwRGl2IiwidGV4dENvbnRlbnQiLCJmdWxsbmFtZSIsImRlYnVnIiwibGFtYmkiLCJpbWciLCJzcmMiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwiZXZlcnl0aGluZ0lzUmVhZHkiLCJkb21Jc1JlYWR5IiwidW5rbm93blN0YXRlIiwic3RhdGUiLCJkb21Jc1JlYWR5U3RhdGUiLCJzZXRJbnRlcnZhbCIsInRlc3QiLCJyZWFkeVN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsImV2ZXJ5dGhpbmdMb2FkZWRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxHQUE2QjtBQUNoQyxTQUFPLE1BQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7QUFXTyxTQUFTQyxTQUFULENBQW1CQyxFQUFuQixFQUErQkMsRUFBL0IsRUFBbUQ7QUFDdEQsU0FBT0QsRUFBRSxHQUFHQyxFQUFaO0FBQ0g7QUFFTSxTQUFTQyxhQUFULENBQXVCRixFQUF2QixFQUFtQ0MsRUFBbkMsRUFB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RUFLaEMsRUFMZ0MsQ0FBbkM7QUFPQSxJQUFNUSxxQkFBcUIsR0FBR0osV0FBVyxDQUFDLFlBQU07QUFDNUMsTUFBSSxrQkFBa0JDLElBQWxCLENBQXVCdEMsUUFBUSxDQUFDdUMsVUFBaEMsQ0FBSixFQUFpRDtBQUM3Q0MsaUJBQWEsQ0FBQ0MscUJBQUQsQ0FBYjtBQUNBVCxxQkFBaUIsR0FGNEIsQ0FFeEI7QUFDeEI7QUFDSixDQUx3QyxFQUt0QyxFQUxzQyxDQUF6QyxDLENBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJmaWxlIjoiaW5kZXguZTkzMjQ1MTVhNmIwZGY3MGVhZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxhbWJpIGZyb20gXCIuLi8uLi9zaXRlL2ltYWdlcy9sYW1iaS5wbmdcIjtcbmltcG9ydCB7IE5hbWUgfSBmcm9tIFwiLi9hZGRyZXNzL05hbWVcIjtcbmltcG9ydCB7IGxvZ2dlckZhY3RvcnkgfSBmcm9tIFwiLi9jb25maWcvQ29uZmlnTG9nNGpcIjtcbmltcG9ydCB7IGdpdmVBZ2U5IH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F5TXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiTWlrZVwiO1xufVxuXG4vKipcbiAqIFrDpGhsdCB6d2VpdCBXZXJ0ZSB6dXNhbW1lblxuICpcbiAqICAgICBpbXBvcnQgKiBhcyBsYW1iaSBmcm9tIFwiLi4vLi4vc2l0ZS9pbWFnZXMvbGFtYmkucG5nXCI7XG4gKiAgICAgLi4uXG4gKiAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcm9udEltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICogICAgIGltZy5zcmMgPSBsYW1iaTtcbiAqXG4gKiBAcGFyYW0gdjEgV2VydCAxXG4gKiBAcGFyYW0gdjIgV2VydCAyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRWYWx1ZXModjE6IG51bWJlciwgdjI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHYxICsgdjI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVZhbHVlKHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB2MSAqIHYyO1xufVxuXG5mdW5jdGlvbiBtYWluKCk6IHZvaWQge1xuICAgIC8vIFJldHJpZXZlIGEgbG9nZ2VyICh5b3UgY2FuIGRlY2lkZSB0byB1c2UgaXQgcGVyIGNsYXNzIGFuZC9vciBtb2R1bGUgb3IganVzdFxuICAgIC8vIGV4cG9ydCBpdCBpbiB0aGUgY29uZmlnIGFib3ZlIGV0Yy4gWW91ciBsb2dnZXJzIC0geW91ciBjaG9pY2UhKS5cbiAgICAvLyBUaGlzIGxvZ2dlciB3aWxsIGZhbGwgaW4gdGhlIGZpcnN0IExvZ0dyb3VwUnVsZSBmcm9tIGFib3ZlLlxuICAgIGNvbnN0IGxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKFwibWFpblwiKTtcblxuICAgIGxvZ2dlci5pbmZvKGBpbmRleC50cyBpbnZva2VkIC0gJHtzYXlNeU5hbWUoKX1gKTtcblxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RzdGVzdFwiKSBhcyBIVE1MRWxlbWVudCkub25jbGljayA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBhbGVydChgSGkgTWlrZSwgZXZlbnQgJyR7ZXZlbnQudHlwZX0nIG9jY3VycmVkISFgKTtcbiAgICB9O1xuXG4gICAgbG9nZ2VyLmluZm8oKCkgPT4gYFNlcnZ1cyBNZXNzYWdlISEhIS4uLiAke2dpdmVBZ2U5KCl9YCk7XG5cbiAgICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSk7XG5cbiAgICBkaXZzLmZvckVhY2goKGRpdjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldnQgPSBuZXcgTW91c2VFdmVudChcImFhYVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKEpTT04uc3RyaW5naWZ5KGV2dCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcihjb25zdCBkaXYgb2YgZGl2cykge1xuICAgIC8vICAgICBkaXYuXG4gICAgLy8gfVxuXG4gICAgY29uc3QgbmFtZSA9IG5ldyBOYW1lKFwiTWlrZVwiLCBcIk1pdHRlcmVyNVwiKTtcblxuICAgIGNvbnN0IGFwcERpdiA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKSBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgYXBwRGl2LnRleHRDb250ZW50ID0gbmFtZS5mdWxsbmFtZTtcblxuICAgIGxvZ2dlci5kZWJ1ZyhgTGFtYmk6ICR7SlNPTi5zdHJpbmdpZnkobGFtYmkpfWApO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJvbnRJbWdcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICBpbWcuc3JjID0gbGFtYmk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikgYXMgSFRNTEJvZHlFbGVtZW50O1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuXG4gICAgLy8gbG9nZ2VyLmluZm8oYERvbmUhISEhICR7b3MucGxhdGZvcm0oKX1gKTtcbiAgICBsb2dnZXIuaW5mbyhgRG9uZSEhISFgKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtYWluKCk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5dGhpbmdJc1JlYWR5KCkge1xuICAgIGNvbnN0IGxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKFwiZG9uZVwiKTtcbiAgICBsb2dnZXIuaW5mbyhgZXZlcnl0aGluZ0lzUmVhZHkhYCk7XG59XG5cbmZ1bmN0aW9uIGRvbUlzUmVhZHkoKSB7XG4gICAgY29uc3QgbG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoXCJkb25lXCIpO1xuICAgIGxvZ2dlci5pbmZvKGBkb21Jc1JlYWR5IWApO1xufVxuXG5mdW5jdGlvbiB1bmtub3duU3RhdGUoc3RhdGU6IHN0cmluZykge1xuICAgIGNvbnN0IGxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKFwic3RhdGVcIik7XG4gICAgbG9nZ2VyLmluZm8oYHVua25vd25TdGF0ZTogJHtzdGF0ZX0hYCk7XG59XG5cbi8vIE1laHI6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9yZWFkeVN0YXRlXG5jb25zdCBkb21Jc1JlYWR5U3RhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKC9pbnRlcmFjdGl2ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgICBjbGVhckludGVydmFsKGRvbUlzUmVhZHlTdGF0ZSk7XG4gICAgICAgIGRvbUlzUmVhZHkoKTsgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIGV2ZXJ5dGhpbmcgaXMgbG9hZGVkXG4gICAgfVxufSwgMTApO1xuXG5jb25zdCBldmVyeXRoaW5nTG9hZGVkU3RhdGUgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKC9sb2FkZWR8Y29tcGxldGUvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChldmVyeXRoaW5nTG9hZGVkU3RhdGUpO1xuICAgICAgICBldmVyeXRoaW5nSXNSZWFkeSgpOyAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gZXZlcnl0aGluZyBpcyBsb2FkZWRcbiAgICB9XG59LCAxMCk7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCAoKSA9PiB7XG4vLyAgICAgaWYgKC9pbnRlcmFjdGl2ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuLy8gICAgICAgICBkb21Jc1JlYWR5KCk7XG4vLyAgICAgfSBlbHNlIGlmICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4vLyAgICAgICAgIGV2ZXJ5dGhpbmdJc1JlYWR5KCk7XG4vLyAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgdW5rbm93blN0YXRlKGRvY3VtZW50LnJlYWR5U3RhdGUpO1xuLy8gICAgIH1cbi8vIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
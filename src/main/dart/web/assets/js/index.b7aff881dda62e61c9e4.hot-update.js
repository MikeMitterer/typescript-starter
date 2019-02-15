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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJzYXlNeU5hbWUiLCJhZGRWYWx1ZXMiLCJ2MSIsInYyIiwibXVsdGlwbHlWYWx1ZSIsIm1haW4iLCJsb2dnZXIiLCJsb2dnZXJGYWN0b3J5IiwiZ2V0TG9nZ2VyIiwiaW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJldmVudCIsImFsZXJ0IiwidHlwZSIsImdpdmVBZ2U5IiwiZGl2cyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9yRWFjaCIsImRpdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJNb3VzZUV2ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJOYW1lIiwiYXBwRGl2IiwidGV4dENvbnRlbnQiLCJmdWxsbmFtZSIsImRlYnVnIiwibGFtYmkiLCJpbWciLCJzcmMiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwiZXZlcnl0aGluZ0lzUmVhZHkiLCJkb21Jc1JlYWR5IiwiZG9tSXNSZWFkeVN0YXRlIiwic2V0SW50ZXJ2YWwiLCJ0ZXN0IiwicmVhZHlTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJldmVyeXRoaW5nTG9hZGVkU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsR0FBNkI7QUFDaEMsU0FBTyxNQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0MsU0FBVCxDQUFtQkMsRUFBbkIsRUFBK0JDLEVBQS9CLEVBQW1EO0FBQ3RELFNBQU9ELEVBQUUsR0FBR0MsRUFBWjtBQUNIO0FBRU0sU0FBU0MsYUFBVCxDQUF1QkYsRUFBdkIsRUFBbUNDLEVBQW5DLEVBQXVEO0FBQzFELFNBQU9ELEVBQUUsR0FB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aUIsR0FGNEIsQ0FFeEI7QUFDeEI7QUFDSixDQUx3QyxFQUt0QyxFQUxzQyxDQUF6QyxDIiwiZmlsZSI6ImluZGV4LmI3YWZmODgxZGRhNjJlNjFjOWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsYW1iaSBmcm9tIFwiLi4vLi4vc2l0ZS9pbWFnZXMvbGFtYmkucG5nXCI7XG5pbXBvcnQgeyBOYW1lIH0gZnJvbSBcIi4vYWRkcmVzcy9OYW1lXCI7XG5pbXBvcnQgeyBsb2dnZXJGYWN0b3J5IH0gZnJvbSBcIi4vY29uZmlnL0NvbmZpZ0xvZzRqXCI7XG5pbXBvcnQgeyBnaXZlQWdlOSB9IGZyb20gXCIuL21haW5cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNheU15TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIk1pa2VcIjtcbn1cblxuLyoqXG4gKiBaw6RobHQgendlaXQgV2VydGUgenVzYW1tZW5cbiAqXG4gKiAgICAgaW1wb3J0ICogYXMgbGFtYmkgZnJvbSBcIi4uLy4uL3NpdGUvaW1hZ2VzL2xhbWJpLnBuZ1wiO1xuICogICAgIC4uLlxuICogICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJvbnRJbWdcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAqICAgICBpbWcuc3JjID0gbGFtYmk7XG4gKlxuICogQHBhcmFtIHYxIFdlcnQgMVxuICogQHBhcmFtIHYyIFdlcnQgMlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkVmFsdWVzKHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB2MSArIHYyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlWYWx1ZSh2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdjEgKiB2Mjtcbn1cblxuZnVuY3Rpb24gbWFpbigpOiB2b2lkIHtcbiAgICAvLyBSZXRyaWV2ZSBhIGxvZ2dlciAoeW91IGNhbiBkZWNpZGUgdG8gdXNlIGl0IHBlciBjbGFzcyBhbmQvb3IgbW9kdWxlIG9yIGp1c3RcbiAgICAvLyBleHBvcnQgaXQgaW4gdGhlIGNvbmZpZyBhYm92ZSBldGMuIFlvdXIgbG9nZ2VycyAtIHlvdXIgY2hvaWNlISkuXG4gICAgLy8gVGhpcyBsb2dnZXIgd2lsbCBmYWxsIGluIHRoZSBmaXJzdCBMb2dHcm91cFJ1bGUgZnJvbSBhYm92ZS5cbiAgICBjb25zdCBsb2dnZXIgPSBsb2dnZXJGYWN0b3J5LmdldExvZ2dlcihcIm1haW5cIik7XG5cbiAgICBsb2dnZXIuaW5mbyhgaW5kZXgudHMgaW52b2tlZCAtICR7c2F5TXlOYW1lKCl9YCk7XG5cbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0c3Rlc3RcIikgYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgICAgYWxlcnQoYEhpIE1pa2UsIGV2ZW50ICcke2V2ZW50LnR5cGV9JyBvY2N1cnJlZCEhYCk7XG4gICAgfTtcblxuICAgIGxvZ2dlci5pbmZvKCgpID0+IGBTZXJ2dXMgTWVzc2FnZSEhISEuLi4gJHtnaXZlQWdlOSgpfWApO1xuXG4gICAgY29uc3QgZGl2cyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikpO1xuXG4gICAgZGl2cy5mb3JFYWNoKChkaXY6IEhUTUxEaXZFbGVtZW50KSA9PiB7XG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXZ0ID0gbmV3IE1vdXNlRXZlbnQoXCJhYWFcIik7XG4gICAgICAgICAgICBsb2dnZXIuaW5mbyhKU09OLnN0cmluZ2lmeShldnQpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBmb3IoY29uc3QgZGl2IG9mIGRpdnMpIHtcbiAgICAvLyAgICAgZGl2LlxuICAgIC8vIH1cblxuICAgIGNvbnN0IG5hbWUgPSBuZXcgTmFtZShcIk1pa2VcIiwgXCJNaXR0ZXJlcjVcIik7XG5cbiAgICBjb25zdCBhcHBEaXYgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIikgYXMgSFRNTERpdkVsZW1lbnQpO1xuICAgIGFwcERpdi50ZXh0Q29udGVudCA9IG5hbWUuZnVsbG5hbWU7XG5cbiAgICBsb2dnZXIuZGVidWcoYExhbWJpOiAke0pTT04uc3RyaW5naWZ5KGxhbWJpKX1gKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zyb250SW1nXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgaW1nLnNyYyA9IGxhbWJpO1xuXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpIGFzIEhUTUxCb2R5RWxlbWVudDtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcblxuICAgIC8vIGxvZ2dlci5pbmZvKGBEb25lISEhISAke29zLnBsYXRmb3JtKCl9YCk7XG4gICAgbG9nZ2VyLmluZm8oYERvbmUhISEhYCk7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgbWFpbigpO1xufVxuXG5mdW5jdGlvbiBldmVyeXRoaW5nSXNSZWFkeSgpIHtcbiAgICBjb25zdCBsb2dnZXIgPSBsb2dnZXJGYWN0b3J5LmdldExvZ2dlcihcImRvbmVcIik7XG4gICAgbG9nZ2VyLmluZm8oYGV2ZXJ5dGhpbmdJc1JlYWR5IWApO1xufVxuXG5mdW5jdGlvbiBkb21Jc1JlYWR5KCkge1xuICAgIGNvbnN0IGxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKFwiZG9uZVwiKTtcbiAgICBsb2dnZXIuaW5mbyhgZG9tSXNSZWFkeSFgKTtcbn1cblxuLy8gTWVocjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3JlYWR5U3RhdGVcbmNvbnN0IGRvbUlzUmVhZHlTdGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoL2ludGVyYWN0aXZlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZG9tSXNSZWFkeVN0YXRlKTtcbiAgICAgICAgZG9tSXNSZWFkeSgpOyAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gZXZlcnl0aGluZyBpcyBsb2FkZWRcbiAgICB9XG59LCAxMCk7XG5cbmNvbnN0IGV2ZXJ5dGhpbmdMb2FkZWRTdGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoL2xvYWRlZHxjb21wbGV0ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgICBjbGVhckludGVydmFsKGV2ZXJ5dGhpbmdMb2FkZWRTdGF0ZSk7XG4gICAgICAgIGV2ZXJ5dGhpbmdJc1JlYWR5KCk7IC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZFxuICAgIH1cbn0sIDEwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
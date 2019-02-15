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
// const domIsReadyState = setInterval(() => {
//     if (/interactive/.test(document.readyState)) {
//         clearInterval(domIsReadyState);
//         domIsReady(); // this is the function that gets called when everything is loaded
//     }
// }, 10);
//
// const everythingLoadedState = setInterval(() => {
//     if (/loaded|complete/.test(document.readyState)) {
//         clearInterval(everythingLoadedState);
//         everythingIsReady(); // this is the function that gets called when everything is loaded
//     }
// }, 10);


document.addEventListener('readystatechange', function () {
  if (/interactive/.test(document.readyState)) {
    domIsReady();
  } else if (/loaded|complete/.test(document.readyState)) {
    everythingIsReady();
  } else {
    unknownState(document.readyState);
  }
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJzYXlNeU5hbWUiLCJhZGRWYWx1ZXMiLCJ2MSIsInYyIiwibXVsdGlwbHlWYWx1ZSIsIm1haW4iLCJsb2dnZXIiLCJsb2dnZXJGYWN0b3J5IiwiZ2V0TG9nZ2VyIiwiaW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJldmVudCIsImFsZXJ0IiwidHlwZSIsImdpdmVBZ2U5IiwiZGl2cyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9yRWFjaCIsImRpdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJNb3VzZUV2ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJOYW1lIiwiYXBwRGl2IiwidGV4dENvbnRlbnQiLCJmdWxsbmFtZSIsImRlYnVnIiwibGFtYmkiLCJpbWciLCJzcmMiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwiZXZlcnl0aGluZ0lzUmVhZHkiLCJkb21Jc1JlYWR5IiwidW5rbm93blN0YXRlIiwic3RhdGUiLCJ0ZXN0IiwicmVhZHlTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0EsU0FBVCxHQUE2QjtBQUNoQyxTQUFPLE1BQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7Ozs7QUFXTyxTQUFTQyxTQUFULENBQW1CQyxFQUFuQixFQUErQkMsRUFBL0IsRUFBbUQ7QUFDdEQsU0FBT0QsRUFBRSxHQUFHQyxFQUFaO0FBQ0g7QUFFTSxTQUFTQyxhQUFULENBQXVCRixFQUF2QixFQUFtQ0MsRUFBbkMsRUFBdUQ7QUFDMUQsU0FBT0QsRUFBRSxHQUFHQyxFQUFaO0FBQ0g7O0FBRUQsU0FBU0UsSUFBVCxHQUFzQjtBQUNsQjtBQUNBO0FB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QyxVQUFoQyxDQUFKLEVBQWlEO0FBQ3BETCxxQkFBaUI7QUFDcEIsR0FGTSxNQUVBO0FBQ0hFLGdCQUFZLENBQUNsQyxRQUFRLENBQUNxQyxVQUFWLENBQVo7QUFDSDtBQUNKLENBUkQsRSIsImZpbGUiOiJpbmRleC5jNWJkZGRhNWY0MmM2NmQ5ZDBhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGFtYmkgZnJvbSBcIi4uLy4uL3NpdGUvaW1hZ2VzL2xhbWJpLnBuZ1wiO1xuaW1wb3J0IHsgTmFtZSB9IGZyb20gXCIuL2FkZHJlc3MvTmFtZVwiO1xuaW1wb3J0IHsgbG9nZ2VyRmFjdG9yeSB9IGZyb20gXCIuL2NvbmZpZy9Db25maWdMb2c0alwiO1xuaW1wb3J0IHsgZ2l2ZUFnZTkgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXlNeU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJNaWtlXCI7XG59XG5cbi8qKlxuICogWsOkaGx0IHp3ZWl0IFdlcnRlIHp1c2FtbWVuXG4gKlxuICogICAgIGltcG9ydCAqIGFzIGxhbWJpIGZyb20gXCIuLi8uLi9zaXRlL2ltYWdlcy9sYW1iaS5wbmdcIjtcbiAqICAgICAuLi5cbiAqICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zyb250SW1nXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gKiAgICAgaW1nLnNyYyA9IGxhbWJpO1xuICpcbiAqIEBwYXJhbSB2MSBXZXJ0IDFcbiAqIEBwYXJhbSB2MiBXZXJ0IDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFZhbHVlcyh2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdjEgKyB2Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5VmFsdWUodjE6IG51bWJlciwgdjI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHYxICogdjI7XG59XG5cbmZ1bmN0aW9uIG1haW4oKTogdm9pZCB7XG4gICAgLy8gUmV0cmlldmUgYSBsb2dnZXIgKHlvdSBjYW4gZGVjaWRlIHRvIHVzZSBpdCBwZXIgY2xhc3MgYW5kL29yIG1vZHVsZSBvciBqdXN0XG4gICAgLy8gZXhwb3J0IGl0IGluIHRoZSBjb25maWcgYWJvdmUgZXRjLiBZb3VyIGxvZ2dlcnMgLSB5b3VyIGNob2ljZSEpLlxuICAgIC8vIFRoaXMgbG9nZ2VyIHdpbGwgZmFsbCBpbiB0aGUgZmlyc3QgTG9nR3JvdXBSdWxlIGZyb20gYWJvdmUuXG4gICAgY29uc3QgbG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoXCJtYWluXCIpO1xuXG4gICAgbG9nZ2VyLmluZm8oYGluZGV4LnRzIGludm9rZWQgLSAke3NheU15TmFtZSgpfWApO1xuXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHN0ZXN0XCIpIGFzIEhUTUxFbGVtZW50KS5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGFsZXJ0KGBIaSBNaWtlLCBldmVudCAnJHtldmVudC50eXBlfScgb2NjdXJyZWQhIWApO1xuICAgIH07XG5cbiAgICBsb2dnZXIuaW5mbygoKSA9PiBgU2VydnVzIE1lc3NhZ2UhISEhLi4uICR7Z2l2ZUFnZTkoKX1gKTtcblxuICAgIGNvbnN0IGRpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpKTtcblxuICAgIGRpdnMuZm9yRWFjaCgoZGl2OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBNb3VzZUV2ZW50KFwiYWFhXCIpO1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8oSlNPTi5zdHJpbmdpZnkoZXZ0KSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yKGNvbnN0IGRpdiBvZiBkaXZzKSB7XG4gICAgLy8gICAgIGRpdi5cbiAgICAvLyB9XG5cbiAgICBjb25zdCBuYW1lID0gbmV3IE5hbWUoXCJNaWtlXCIsIFwiTWl0dGVyZXI1XCIpO1xuXG4gICAgY29uc3QgYXBwRGl2ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpIGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICBhcHBEaXYudGV4dENvbnRlbnQgPSBuYW1lLmZ1bGxuYW1lO1xuXG4gICAgbG9nZ2VyLmRlYnVnKGBMYW1iaTogJHtKU09OLnN0cmluZ2lmeShsYW1iaSl9YCk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcm9udEltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGltZy5zcmMgPSBsYW1iaTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSBhcyBIVE1MQm9keUVsZW1lbnQ7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG5cbiAgICAvLyBsb2dnZXIuaW5mbyhgRG9uZSEhISEgJHtvcy5wbGF0Zm9ybSgpfWApO1xuICAgIGxvZ2dlci5pbmZvKGBEb25lISEhIWApO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1haW4oKTtcbn1cblxuZnVuY3Rpb24gZXZlcnl0aGluZ0lzUmVhZHkoKSB7XG4gICAgY29uc3QgbG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoXCJkb25lXCIpO1xuICAgIGxvZ2dlci5pbmZvKGBldmVyeXRoaW5nSXNSZWFkeSFgKTtcbn1cblxuZnVuY3Rpb24gZG9tSXNSZWFkeSgpIHtcbiAgICBjb25zdCBsb2dnZXIgPSBsb2dnZXJGYWN0b3J5LmdldExvZ2dlcihcImRvbmVcIik7XG4gICAgbG9nZ2VyLmluZm8oYGRvbUlzUmVhZHkhYCk7XG59XG5cbmZ1bmN0aW9uIHVua25vd25TdGF0ZShzdGF0ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgbG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoXCJzdGF0ZVwiKTtcbiAgICBsb2dnZXIuaW5mbyhgdW5rbm93blN0YXRlOiAke3N0YXRlfSFgKTtcbn1cblxuLy8gTWVocjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L3JlYWR5U3RhdGVcbi8vIGNvbnN0IGRvbUlzUmVhZHlTdGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICBpZiAoL2ludGVyYWN0aXZlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4vLyAgICAgICAgIGNsZWFySW50ZXJ2YWwoZG9tSXNSZWFkeVN0YXRlKTtcbi8vICAgICAgICAgZG9tSXNSZWFkeSgpOyAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gZXZlcnl0aGluZyBpcyBsb2FkZWRcbi8vICAgICB9XG4vLyB9LCAxMCk7XG4vL1xuLy8gY29uc3QgZXZlcnl0aGluZ0xvYWRlZFN0YXRlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuLy8gICAgIGlmICgvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4vLyAgICAgICAgIGNsZWFySW50ZXJ2YWwoZXZlcnl0aGluZ0xvYWRlZFN0YXRlKTtcbi8vICAgICAgICAgZXZlcnl0aGluZ0lzUmVhZHkoKTsgLy8gdGhpcyBpcyB0aGUgZnVuY3Rpb24gdGhhdCBnZXRzIGNhbGxlZCB3aGVuIGV2ZXJ5dGhpbmcgaXMgbG9hZGVkXG4vLyAgICAgfVxuLy8gfSwgMTApO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICgvaW50ZXJhY3RpdmUvLnRlc3QoZG9jdW1lbnQucmVhZHlTdGF0ZSkpIHtcbiAgICAgICAgZG9tSXNSZWFkeSgpO1xuICAgIH0gZWxzZSBpZiAoL2xvYWRlZHxjb21wbGV0ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgICBldmVyeXRoaW5nSXNSZWFkeSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHVua25vd25TdGF0ZShkb2N1bWVudC5yZWFkeVN0YXRlKTtcbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
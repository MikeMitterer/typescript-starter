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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJzYXlNeU5hbWUiLCJhZGRWYWx1ZXMiLCJ2MSIsInYyIiwibXVsdGlwbHlWYWx1ZSIsIm1haW4iLCJsb2dnZXIiLCJsb2dnZXJGYWN0b3J5IiwiZ2V0TG9nZ2VyIiwiaW5mbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJldmVudCIsImFsZXJ0IiwidHlwZSIsImdpdmVBZ2U5IiwiZGl2cyIsIkFycmF5IiwiZnJvbSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZm9yRWFjaCIsImRpdiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldnQiLCJNb3VzZUV2ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJOYW1lIiwiYXBwRGl2IiwidGV4dENvbnRlbnQiLCJmdWxsbmFtZSIsImRlYnVnIiwibGFtYmkiLCJpbWciLCJzcmMiLCJib2R5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwid2luZG93IiwiZXZlcnl0aGluZ0lzUmVhZHkiLCJkb21Jc1JlYWR5IiwiZG9tSXNSZWFkeVN0YXRlIiwic2V0SW50ZXJ2YWwiLCJ0ZXN0IiwicmVhZHlTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJldmVyeXRoaW5nTG9hZGVkU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLFNBQVQsR0FBNkI7QUFDaEMsU0FBTyxNQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0MsU0FBVCxDQUFtQkMsRUFBbkIsRUFBK0JDLEVBQS9CLEVBQW1EO0FBQ3RELFNBQU9ELEVBQUUsR0FBR0MsRUFBWjtBQUNIO0FBRU0sU0FBU0MsYUFBVCxDQUF1QkYsRUFBdkIsRUFBbUNDLEVBQW5DLEVBQXVEO0FBQzFELFNBQU9ELEVBQUUsR0FB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LENBRXhCO0FBQ3hCO0FBQ0osQ0FMd0MsRUFLdEMsRUFMc0MsQ0FBekMsQyIsImZpbGUiOiJpbmRleC5hN2JlMTU3ZTAwZWEwZTE5MTJkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGFtYmkgZnJvbSBcIi4uLy4uL3NpdGUvaW1hZ2VzL2xhbWJpLnBuZ1wiO1xuaW1wb3J0IHsgTmFtZSB9IGZyb20gXCIuL2FkZHJlc3MvTmFtZVwiO1xuaW1wb3J0IHsgbG9nZ2VyRmFjdG9yeSB9IGZyb20gXCIuL2NvbmZpZy9Db25maWdMb2c0alwiO1xuaW1wb3J0IHsgZ2l2ZUFnZTkgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXlNeU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJNaWtlXCI7XG59XG5cbi8qKlxuICogWsOkaGx0IHp3ZWl0IFdlcnRlIHp1c2FtbWVuXG4gKlxuICogICAgIGltcG9ydCAqIGFzIGxhbWJpIGZyb20gXCIuLi8uLi9zaXRlL2ltYWdlcy9sYW1iaS5wbmdcIjtcbiAqICAgICAuLi5cbiAqICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zyb250SW1nXCIpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gKiAgICAgaW1nLnNyYyA9IGxhbWJpO1xuICpcbiAqIEBwYXJhbSB2MSBXZXJ0IDFcbiAqIEBwYXJhbSB2MiBXZXJ0IDJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFZhbHVlcyh2MTogbnVtYmVyLCB2MjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdjEgKyB2Mjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5VmFsdWUodjE6IG51bWJlciwgdjI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHYxICogdjI7XG59XG5cbmZ1bmN0aW9uIG1haW4oKTogdm9pZCB7XG4gICAgLy8gUmV0cmlldmUgYSBsb2dnZXIgKHlvdSBjYW4gZGVjaWRlIHRvIHVzZSBpdCBwZXIgY2xhc3MgYW5kL29yIG1vZHVsZSBvciBqdXN0XG4gICAgLy8gZXhwb3J0IGl0IGluIHRoZSBjb25maWcgYWJvdmUgZXRjLiBZb3VyIGxvZ2dlcnMgLSB5b3VyIGNob2ljZSEpLlxuICAgIC8vIFRoaXMgbG9nZ2VyIHdpbGwgZmFsbCBpbiB0aGUgZmlyc3QgTG9nR3JvdXBSdWxlIGZyb20gYWJvdmUuXG4gICAgY29uc3QgbG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoXCJtYWluXCIpO1xuXG4gICAgbG9nZ2VyLmluZm8oYGluZGV4LnRzIGludm9rZWQgLSAke3NheU15TmFtZSgpfWApO1xuXG4gICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHN0ZXN0XCIpIGFzIEhUTUxFbGVtZW50KS5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgICAgIGFsZXJ0KGBIaSBNaWtlLCBldmVudCAnJHtldmVudC50eXBlfScgb2NjdXJyZWQhIWApO1xuICAgIH07XG5cbiAgICBsb2dnZXIuaW5mbygoKSA9PiBgU2VydnVzIE1lc3NhZ2UhISEhLi4uICR7Z2l2ZUFnZTkoKX1gKTtcblxuICAgIGNvbnN0IGRpdnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpKTtcblxuICAgIGRpdnMuZm9yRWFjaCgoZGl2OiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2dCA9IG5ldyBNb3VzZUV2ZW50KFwiYWFhXCIpO1xuICAgICAgICAgICAgbG9nZ2VyLmluZm8oSlNPTi5zdHJpbmdpZnkoZXZ0KSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gZm9yKGNvbnN0IGRpdiBvZiBkaXZzKSB7XG4gICAgLy8gICAgIGRpdi5cbiAgICAvLyB9XG5cbiAgICBjb25zdCBuYW1lID0gbmV3IE5hbWUoXCJNaWtlXCIsIFwiTWl0dGVyZXI1XCIpO1xuXG4gICAgY29uc3QgYXBwRGl2ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpIGFzIEhUTUxEaXZFbGVtZW50KTtcbiAgICBhcHBEaXYudGV4dENvbnRlbnQgPSBuYW1lLmZ1bGxuYW1lO1xuXG4gICAgbG9nZ2VyLmRlYnVnKGBMYW1iaTogJHtKU09OLnN0cmluZ2lmeShsYW1iaSl9YCk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcm9udEltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIGltZy5zcmMgPSBsYW1iaTtcblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSBhcyBIVE1MQm9keUVsZW1lbnQ7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG5cbiAgICAvLyBsb2dnZXIuaW5mbyhgRG9uZSEhISEgJHtvcy5wbGF0Zm9ybSgpfWApO1xuICAgIGxvZ2dlci5pbmZvKGBEb25lISEhIWApO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIG1haW4oKTtcbn1cblxuZnVuY3Rpb24gZXZlcnl0aGluZ0lzUmVhZHkoKSB7XG4gICAgY29uc3QgbG9nZ2VyID0gbG9nZ2VyRmFjdG9yeS5nZXRMb2dnZXIoXCJkb25lXCIpO1xuICAgIGxvZ2dlci5pbmZvKGBldmVyeXRoaW5nSXNSZWFkeSFgKTtcbn1cblxuZnVuY3Rpb24gZG9tSXNSZWFkeSgpIHtcbiAgICBjb25zdCBsb2dnZXIgPSBsb2dnZXJGYWN0b3J5LmdldExvZ2dlcihcImRvbmVcIik7XG4gICAgbG9nZ2VyLmluZm8oYGRvbUlzUmVhZHkhYCk7XG59XG5cbmNvbnN0IGRvbUlzUmVhZHlTdGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoL2ludGVyYWN0aXZlLy50ZXN0KGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoZG9tSXNSZWFkeVN0YXRlKTtcbiAgICAgICAgZG9tSXNSZWFkeSgpOyAvLyB0aGlzIGlzIHRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIHdoZW4gZXZlcnl0aGluZyBpcyBsb2FkZWRcbiAgICB9XG59LCAxMCk7XG5cbmNvbnN0IGV2ZXJ5dGhpbmdMb2FkZWRTdGF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoL2xvYWRlZHxjb21wbGV0ZS8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkge1xuICAgICAgICBjbGVhckludGVydmFsKGV2ZXJ5dGhpbmdMb2FkZWRTdGF0ZSk7XG4gICAgICAgIGV2ZXJ5dGhpbmdJc1JlYWR5KCk7IC8vIHRoaXMgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgZ2V0cyBjYWxsZWQgd2hlbiBldmVyeXRoaW5nIGlzIGxvYWRlZFxuICAgIH1cbn0sIDEwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
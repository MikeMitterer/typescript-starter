webpackHotUpdate("index",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Name, sayMyName, addValues, multiplyValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_ts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/ts/index */ "./src/main/ts/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sayMyName", function() { return _main_ts_index__WEBPACK_IMPORTED_MODULE_0__["sayMyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addValues", function() { return _main_ts_index__WEBPACK_IMPORTED_MODULE_0__["addValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "multiplyValue", function() { return _main_ts_index__WEBPACK_IMPORTED_MODULE_0__["multiplyValue"]; });

/* harmony import */ var _main_ts_address_Name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/ts/address/Name */ "./src/main/ts/address/Name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return _main_ts_address_Name__WEBPACK_IMPORTED_MODULE_1__["Name"]; });





// tslint:disable-next-line
window.MyLib = {
  Name: _main_ts_address_Name__WEBPACK_IMPORTED_MODULE_1__["Name"],
  addValues: _main_ts_index__WEBPACK_IMPORTED_MODULE_0__["addValues"],
  // main: mainToExport,
  sayMyName: _main_ts_index__WEBPACK_IMPORTED_MODULE_0__["sayMyName"]
};

/***/ }),

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

  var name = new _address_Name__WEBPACK_IMPORTED_MODULE_1__["Name"]("Mike", "Mitterer4");
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4vdHMvaW5kZXgudHMiXSwibmFtZXMiOlsid2luZG93IiwiTXlMaWIiLCJOYW1lIiwiTmFtZVRvRXhwb3J0IiwiYWRkVmFsdWVzIiwiYWRkVmFsdWVzVG9FeHBvcnQiLCJzYXlNeU5hbWUiLCJzYXlNeU5hbWVUb0V4cG9ydCIsInYxIiwidjIiLCJtdWx0aXBseVZhbHVlIiwibWFpbiIsImxvZ2dlciIsImxvZ2dlckZhY3RvcnkiLCJnZXRMb2dnZXIiLCJpbmZvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25jbGljayIsImV2ZW50IiwiYWxlcnQiLCJ0eXBlIiwiZ2l2ZUFnZTkiLCJkaXZzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJmb3JFYWNoIiwiZGl2IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2dCIsIk1vdXNlRXZlbnQiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZSIsImFwcERpdiIsInRleHRDb250ZW50IiwiZnVsbG5hbWUiLCJkZWJ1ZyIsImxhbWJpIiwiaW1nIiwic3JjIiwiYm9keSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQWlCQTtBQUNDQSxNQUFELENBQWdCQyxLQUFoQixHQUF3QjtBQUNwQkMsTUFBSSxFQUFFQywwREFEYztBQUVwQkMsV0FBUyxFQUFFQyx3REFGUztBQUdwQjtBQUNBQyxXQUFTLEVBQUVDLHdEQUFpQkE7QUFKUixDQUF4QixDOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTRCxTQUFULEdBQTZCO0FBQ2hDLFNBQU8sTUFBUDtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7OztBQVdPLFNBQVNGLFNBQVQsQ0FBbUJJLEVBQW5CLEVBQStCQyxFQUEvQixFQUFtRDtBQUN0RCxTQUFPRCxFQUFFLEdBQUdDLEVBQVo7QUFDSDtBQUVNLFNBQVNDLGFBQVQsQ0FBdUJGLEVBQXZCLEVBQW1DQyxFQUFuQyxFQUF1RDtBQUMxRCxTQUFPRCxFQUFFLEdBQUdDLEVBQVo7QUFDSDs7QUFFRCxTQUFTRSxJQUFULEdBQXNCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsaUVBQWEsQ0FBQ0MsU0FBZCxDQUF3QixNQUF4QixDQUFmO0FBRUFGLFFBQU0sQ0FBQ0csSUFBUCw4QkFBa0NULFNBQVMsRUFBM0M7O0FBRUNVLFVBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFELENBQW1EQyxPQUFuRCxHQUE2RCxVQUFDQyxLQUFELEVBQTZCO0FBQ3RGQyxTQUFLLDJCQUFvQkQsS0FBSyxDQUFDRSxJQUExQixrQkFBTDtBQUNILEdBRkQ7O0FBSUFULFFBQU0sQ0FBQ0csSUFBUCxDQUFZO0FBQUEsMkNBQStCTyxzREFBUSxFQUF2QztBQUFBLEdBQVo7QUFFQSxNQUFNQyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXVCxRQUFRLENBQUNVLG9CQUFULENBQThCLEtBQTlCLENBQVgsQ0FBYjtBQUVBSCxNQUFJLENBQUNJLE9BQUwsQ0FBYSxVQUFDQyxHQUFELEVBQXlCO0FBQ2xDQSxPQUFHLENBQUNDLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFVBQUNDLEdBQUQsRUFBcUI7QUFDL0NBLFNBQUcsR0FBRyxJQUFJQyxVQUFKLENBQWUsS0FBZixDQUFOO0FBQ0FuQixZQUFNLENBQUNHLElBQVAsQ0FBWWlCLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxHQUFmLENBQVo7QUFDSCxLQUhEO0FBSUgsR0FMRCxFQWhCa0IsQ0F1QmxCO0FBQ0E7QUFDQTs7QUFFQSxNQUFNSSxJQUFJLEdBQUcsSUFBSWhDLGtEQUFKLENBQVMsTUFBVCxFQUFpQixXQUFqQixDQUFiO0FBRUEsTUFBTWlDLE1BQU0sR0FBSW5CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFoQjtBQUNBa0IsUUFBTSxDQUFDQyxXQUFQLEdBQXFCRixJQUFJLENBQUNHLFFBQTFCO0FBRUF6QixRQUFNLENBQUMwQixLQUFQLGtCQUF1Qk4sSUFBSSxDQUFDQyxTQUFMLENBQWVNLG1EQUFmLENBQXZCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQVo7QUFDQXVCLEtBQUcsQ0FBQ0MsR0FBSixHQUFVRixtREFBVjtBQUVBLE1BQU1HLElBQUksR0FBRzFCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0F5QixNQUFJLENBQUNDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixTQUF0QjtBQUNBRixNQUFJLENBQUNDLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixRQUFuQixFQXRDa0IsQ0F3Q2xCOztBQUNBakMsUUFBTSxDQUFDRyxJQUFQO0FBQ0g7O0FBRUQsSUFBSSxPQUFPZixNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQy9CVyxNQUFJO0FBQ1AsQyIsImZpbGUiOiJpbmRleC41NzI2NThkMWRlY2Y5YmY5NzRiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vbWFpbi90cy9pbmRleFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vbWFpbi90cy9hZGRyZXNzL05hbWVcIjtcblxuaW1wb3J0IHsgTmFtZSBhcyBOYW1lVG9FeHBvcnQgfSBmcm9tIFwiLi9tYWluL3RzL2FkZHJlc3MvTmFtZVwiO1xuXG5pbXBvcnQge1xuICAgIGFkZFZhbHVlcyBhcyBhZGRWYWx1ZXNUb0V4cG9ydCxcbiAgICAvLyBtYWluIGFzIG1haW5Ub0V4cG9ydCxcbiAgICBzYXlNeU5hbWUgYXMgc2F5TXlOYW1lVG9FeHBvcnQsXG59IGZyb20gXCIuL21haW4vdHMvaW5kZXhcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIG5hbWVzcGFjZSBNeUxpYiB7XG4gICAgICAgIGV4cG9ydCB0eXBlIE5hbWUgPSBOYW1lVG9FeHBvcnQ7XG4gICAgICAgIGV4cG9ydCBjb25zdCBOYW1lOiB0eXBlb2YgTmFtZVRvRXhwb3J0O1xuXG4gICAgICAgIGV4cG9ydCBjb25zdCBhZGRWYWx1ZXM6IHR5cGVvZiBhZGRWYWx1ZXNUb0V4cG9ydDtcbiAgICAgICAgLy8gZXhwb3J0IGNvbnN0IG1haW46IHR5cGVvZiBtYWluVG9FeHBvcnQ7XG4gICAgICAgIGV4cG9ydCBjb25zdCBzYXlNeU5hbWU6IHR5cGVvZiBzYXlNeU5hbWVUb0V4cG9ydDtcbiAgICB9XG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuKHdpbmRvdyBhcyBhbnkpLk15TGliID0ge1xuICAgIE5hbWU6IE5hbWVUb0V4cG9ydCxcbiAgICBhZGRWYWx1ZXM6IGFkZFZhbHVlc1RvRXhwb3J0LFxuICAgIC8vIG1haW46IG1haW5Ub0V4cG9ydCxcbiAgICBzYXlNeU5hbWU6IHNheU15TmFtZVRvRXhwb3J0LFxufTtcbiIsImltcG9ydCAqIGFzIGxhbWJpIGZyb20gXCIuLi8uLi9zaXRlL2ltYWdlcy9sYW1iaS5wbmdcIjtcbmltcG9ydCB7IE5hbWUgfSBmcm9tIFwiLi9hZGRyZXNzL05hbWVcIjtcbmltcG9ydCB7IGxvZ2dlckZhY3RvcnkgfSBmcm9tIFwiLi9jb25maWcvQ29uZmlnTG9nNGpcIjtcbmltcG9ydCB7IGdpdmVBZ2U5IH0gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2F5TXlOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiTWlrZVwiO1xufVxuXG4vKipcbiAqIFrDpGhsdCB6d2VpdCBXZXJ0ZSB6dXNhbW1lblxuICpcbiAqICAgICBpbXBvcnQgKiBhcyBsYW1iaSBmcm9tIFwiLi4vLi4vc2l0ZS9pbWFnZXMvbGFtYmkucG5nXCI7XG4gKiAgICAgLi4uXG4gKiAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmcm9udEltZ1wiKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICogICAgIGltZy5zcmMgPSBsYW1iaTtcbiAqXG4gKiBAcGFyYW0gdjEgV2VydCAxXG4gKiBAcGFyYW0gdjIgV2VydCAyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRWYWx1ZXModjE6IG51bWJlciwgdjI6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHYxICsgdjI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVZhbHVlKHYxOiBudW1iZXIsIHYyOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiB2MSAqIHYyO1xufVxuXG5mdW5jdGlvbiBtYWluKCk6IHZvaWQge1xuICAgIC8vIFJldHJpZXZlIGEgbG9nZ2VyICh5b3UgY2FuIGRlY2lkZSB0byB1c2UgaXQgcGVyIGNsYXNzIGFuZC9vciBtb2R1bGUgb3IganVzdFxuICAgIC8vIGV4cG9ydCBpdCBpbiB0aGUgY29uZmlnIGFib3ZlIGV0Yy4gWW91ciBsb2dnZXJzIC0geW91ciBjaG9pY2UhKS5cbiAgICAvLyBUaGlzIGxvZ2dlciB3aWxsIGZhbGwgaW4gdGhlIGZpcnN0IExvZ0dyb3VwUnVsZSBmcm9tIGFib3ZlLlxuICAgIGNvbnN0IGxvZ2dlciA9IGxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKFwibWFpblwiKTtcblxuICAgIGxvZ2dlci5pbmZvKGBpbmRleC50cyBpbnZva2VkIC0gJHtzYXlNeU5hbWUoKX1gKTtcblxuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RzdGVzdFwiKSBhcyBIVE1MRWxlbWVudCkub25jbGljayA9IChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgICBhbGVydChgSGkgTWlrZSwgZXZlbnQgJyR7ZXZlbnQudHlwZX0nIG9jY3VycmVkISFgKTtcbiAgICB9O1xuXG4gICAgbG9nZ2VyLmluZm8oKCkgPT4gYFNlcnZ1cyBNZXNzYWdlISEhIS4uLiAke2dpdmVBZ2U5KCl9YCk7XG5cbiAgICBjb25zdCBkaXZzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSk7XG5cbiAgICBkaXZzLmZvckVhY2goKGRpdjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldnQgPSBuZXcgTW91c2VFdmVudChcImFhYVwiKTtcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKEpTT04uc3RyaW5naWZ5KGV2dCkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGZvcihjb25zdCBkaXYgb2YgZGl2cykge1xuICAgIC8vICAgICBkaXYuXG4gICAgLy8gfVxuXG4gICAgY29uc3QgbmFtZSA9IG5ldyBOYW1lKFwiTWlrZVwiLCBcIk1pdHRlcmVyNFwiKTtcblxuICAgIGNvbnN0IGFwcERpdiA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKSBhcyBIVE1MRGl2RWxlbWVudCk7XG4gICAgYXBwRGl2LnRleHRDb250ZW50ID0gbmFtZS5mdWxsbmFtZTtcblxuICAgIGxvZ2dlci5kZWJ1ZyhgTGFtYmk6ICR7SlNPTi5zdHJpbmdpZnkobGFtYmkpfWApO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJvbnRJbWdcIikgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICBpbWcuc3JjID0gbGFtYmk7XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikgYXMgSFRNTEJvZHlFbGVtZW50O1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIik7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuXG4gICAgLy8gbG9nZ2VyLmluZm8oYERvbmUhISEhICR7b3MucGxhdGZvcm0oKX1gKTtcbiAgICBsb2dnZXIuaW5mbyhgRG9uZSEhISFgKTtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBtYWluKCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
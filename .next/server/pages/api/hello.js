"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./database/conn.js":
/*!**************************!*\
  !*** ./database/conn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    try {\n        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        if (connection.readyState == 1) {\n            console.log(\"Database connected\");\n        }\n    } catch (errors) {\n        return Promise.reject(errors);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb25uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLFVBQVk7SUFDL0IsSUFBSTtRQUNGLE1BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQUcsTUFBTUYsdURBQWdCLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUVuRSxJQUFJSixXQUFXSyxVQUFVLElBQUksR0FBRztZQUM5QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNILEVBQUUsT0FBT0MsUUFBUTtRQUNmLE9BQU9DLFFBQVFDLE1BQU0sQ0FBQ0Y7SUFDeEI7QUFDRjtBQUVBLGlFQUFlVCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J1ZC1uZXh0LXRhaWx3aW5kLy4vZGF0YWJhc2UvY29ubi5qcz9lYzljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IGNvbm5lY3RNb25nbyA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJJKTtcblxuICAgIGlmIChjb25uZWN0aW9uLnJlYWR5U3RhdGUgPT0gMSkge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3RlZCcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3JzKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9ycyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nbztcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3RNb25nbyIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSIsInJlYWR5U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JzIiwiUHJvbWlzZSIsInJlamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./database/conn.js\n");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/conn */ \"(api)/./database/conn.js\");\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    (0,_database_conn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    res.status(200).json({\n        name: \"John Doe\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2RUFBNkU7QUFFOUI7QUFFaEMsU0FBU0MsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeENILDBEQUFZQTtJQUNaRyxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE1BQU07SUFBVztBQUMxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3J1ZC1uZXh0LXRhaWx3aW5kLy4vcGFnZXMvYXBpL2hlbGxvLmpzPzFmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuaW1wb3J0IGNvbm5lY3RNb25nbyBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb25uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25uZWN0TW9uZ28oKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pO1xufVxuIl0sIm5hbWVzIjpbImNvbm5lY3RNb25nbyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();
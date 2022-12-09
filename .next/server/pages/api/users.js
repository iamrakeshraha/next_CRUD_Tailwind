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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
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

/***/ "(api)/./database/controller.js":
/*!********************************!*\
  !*** ./database/controller.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getUsers)\n/* harmony export */ });\nasync function getUsers(req, res) {\n    //   console.log('getUsers');\n    try {\n        res.status(200).json({\n            user: \"GET Request\"\n        });\n    } catch (error) {\n        res.status(404).json({\n            error: \"Error while fatching data\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYXRhYmFzZS9jb250cm9sbGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxTQUFTQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQyw2QkFBNkI7SUFDN0IsSUFBSTtRQUNGQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE1BQU07UUFBYztJQUM3QyxFQUFFLE9BQU9DLE9BQU87UUFDZEosSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxPQUFPO1FBQTRCO0lBQzVEO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NydWQtbmV4dC10YWlsd2luZC8uL2RhdGFiYXNlL2NvbnRyb2xsZXIuanM/MzUwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRVc2VycyhyZXEsIHJlcykge1xuICAvLyAgIGNvbnNvbGUubG9nKCdnZXRVc2VycycpO1xuICB0cnkge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdXNlcjogJ0dFVCBSZXF1ZXN0JyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnRXJyb3Igd2hpbGUgZmF0Y2hpbmcgZGF0YScgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRVc2VycyIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJ1c2VyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./database/controller.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _database_conn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../database/conn */ \"(api)/./database/conn.js\");\n/* harmony import */ var _database_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../database/controller */ \"(api)/./database/controller.js\");\n\n\nfunction handler(req, res) {\n    (0,_database_conn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().catch(()=>res.status(405).json({\n            error: \"MongoDB connection error\"\n        }));\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            (0,_database_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req, res);\n        //   break;\n        case \"POST\":\n            res.status(200).json({\n                method,\n                name: \"POST Method\"\n            });\n            break;\n        case \"PUT\":\n            res.status(200).json({\n                method,\n                name: \"PUT Method\"\n            });\n            break;\n        case \"DELETE\":\n            res.status(200).json({\n                method,\n                name: \"DELETE Method\"\n            });\n        default:\n            res.setHeader(\"Allow\", [\n                \"GET\",\n                \"POST\",\n                \"PUT\",\n                \"DELETE\"\n            ]);\n            res.status(405).end(`method ${method} not Allow`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBQ0U7QUFFckMsU0FBU0UsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeENKLDBEQUFZQSxHQUFHSyxLQUFLLENBQUMsSUFDbkJELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEyQjtJQUczRCxNQUFNLEVBQUVDLE9BQU0sRUFBRSxHQUFHTjtJQUVuQixPQUFRTTtRQUNOLEtBQUs7WUFDSFIsZ0VBQVFBLENBQUNFLEtBQUtDO1FBQ2hCLFdBQVc7UUFDWCxLQUFLO1lBQ0hBLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVFO2dCQUFRQyxNQUFNO1lBQWM7WUFDbkQsS0FBTTtRQUNSLEtBQUs7WUFDSE4sSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUU7Z0JBQVFDLE1BQU07WUFBYTtZQUNsRCxLQUFNO1FBQ1IsS0FBSztZQUNITixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRTtnQkFBUUMsTUFBTTtZQUFnQjtRQUN2RDtZQUNFTixJQUFJTyxTQUFTLENBQUMsU0FBUztnQkFBQztnQkFBTztnQkFBUTtnQkFBTzthQUFTO1lBQ3ZEUCxJQUFJRSxNQUFNLENBQUMsS0FBS00sR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNwRDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcnVkLW5leHQtdGFpbHdpbmQvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanM/MWQ4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IGdldFVzZXJzIGZyb20gJy4uLy4uLy4uL2RhdGFiYXNlL2NvbnRyb2xsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbm5lY3RNb25nbygpLmNhdGNoKCgpID0+XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcicgfSlcbiAgKTtcblxuICBjb25zdCB7IG1ldGhvZCB9ID0gcmVxO1xuXG4gIHN3aXRjaCAobWV0aG9kKSB7XG4gICAgY2FzZSAnR0VUJzpcbiAgICAgIGdldFVzZXJzKHJlcSwgcmVzKTtcbiAgICAvLyAgIGJyZWFrO1xuICAgIGNhc2UgJ1BPU1QnOlxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXRob2QsIG5hbWU6ICdQT1NUIE1ldGhvZCcgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQVVQnOlxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXRob2QsIG5hbWU6ICdQVVQgTWV0aG9kJyB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1ldGhvZCwgbmFtZTogJ0RFTEVURSBNZXRob2QnIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJywgJ1BPU1QnLCAnUFVUJywgJ0RFTEVURSddKTtcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYG1ldGhvZCAke21ldGhvZH0gbm90IEFsbG93YCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJnZXRVc2VycyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjYXRjaCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1ldGhvZCIsIm5hbWUiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();
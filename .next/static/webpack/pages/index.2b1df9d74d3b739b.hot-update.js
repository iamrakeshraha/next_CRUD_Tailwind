"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/helper.js":
/*!***********************!*\
  !*** ./lib/helper.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": function() { return /* binding */ addUser; },\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; },\n/* harmony export */   \"getuser\": function() { return /* binding */ getuser; }\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:3000\";\n//all users\nconst getUsers = async ()=>{\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/users\"));\n    const data = await response.json();\n    return data;\n};\n//single user\nconst getuser = async (userId)=>{\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/\").concat(userId));\n    const data = await response.json();\n    return data;\n};\n//post a new user\nasync function addUser(formData) {\n    const Options = {\n        method: \"POST\",\n        header: \"Content-Type: application\",\n        body: JSON.stringify(formData)\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGVscGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFdBQVc7QUFFakIsV0FBVztBQUNKLE1BQU1DLFdBQVcsVUFBWTtJQUNsQyxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sR0FBWSxPQUFUSCxVQUFTO0lBQ3pDLE1BQU1JLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtJQUVoQyxPQUFPRDtBQUNULEVBQUU7QUFFRixhQUFhO0FBQ04sTUFBTUUsVUFBVSxPQUFPQyxTQUFXO0lBQ3ZDLE1BQU1MLFdBQVcsTUFBTUMsTUFBTSxHQUFtQkksT0FBaEJQLFVBQVMsU0FBYyxPQUFQTztJQUNoRCxNQUFNSCxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFFaEMsT0FBT0Q7QUFDVCxFQUFFO0FBRUYsaUJBQWlCO0FBQ1YsZUFBZUksUUFBUUMsUUFBUSxFQUFFO0lBQ3RDLE1BQU1DLFVBQVU7UUFDZEMsUUFBUTtRQUNSQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047SUFDdkI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9oZWxwZXIuanM/OTU1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xuXG4vL2FsbCB1c2Vyc1xuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9hcGkvdXNlcnNgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cbi8vc2luZ2xlIHVzZXJcbmV4cG9ydCBjb25zdCBnZXR1c2VyID0gYXN5bmMgKHVzZXJJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS9hcGkvJHt1c2VySWR9YCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vL3Bvc3QgYSBuZXcgdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFVzZXIoZm9ybURhdGEpIHtcbiAgY29uc3QgT3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXI6ICdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gIH07XG59XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJnZXRVc2VycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImdldHVzZXIiLCJ1c2VySWQiLCJhZGRVc2VyIiwiZm9ybURhdGEiLCJPcHRpb25zIiwibWV0aG9kIiwiaGVhZGVyIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/helper.js\n"));

/***/ })

});
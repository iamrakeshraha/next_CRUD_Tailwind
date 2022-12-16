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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": function() { return /* binding */ addUser; },\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; },\n/* harmony export */   \"getuser\": function() { return /* binding */ getuser; },\n/* harmony export */   \"updateUser\": function() { return /* binding */ updateUser; }\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:3000\";\n//all users\nconst getUsers = async ()=>{\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/users\"));\n    const data = await response.json();\n    return data;\n};\n//single user\nconst getuser = async (userId)=>{\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/\").concat(userId));\n    const data = await response.json();\n    return data;\n};\n//post a new user\nasync function addUser(formData) {\n    try {\n        const Options = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        };\n        const response = await fetch(\"\".concat(BASE_URL, \"/api/users\"), Options);\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        return error;\n    }\n}\n//update user\nasync function updateUser(userId, formData) {\n    const Options = {\n        method: \"PUT\",\n        headers: {\n            \"Content-type\": \"application/json\"\n        },\n        body: JSON.stringify(formData)\n    };\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/users/\").concat(userId), Options);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGVscGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBRWpCLFdBQVc7QUFDSixNQUFNQyxXQUFXLFVBQVk7SUFDbEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVEgsVUFBUztJQUN6QyxNQUFNSSxPQUFPLE1BQU1GLFNBQVNHLElBQUk7SUFFaEMsT0FBT0Q7QUFDVCxFQUFFO0FBRUYsYUFBYTtBQUNOLE1BQU1FLFVBQVUsT0FBT0MsU0FBVztJQUN2QyxNQUFNTCxXQUFXLE1BQU1DLE1BQU0sR0FBbUJJLE9BQWhCUCxVQUFTLFNBQWMsT0FBUE87SUFDaEQsTUFBTUgsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBRWhDLE9BQU9EO0FBQ1QsRUFBRTtBQUVGLGlCQUFpQjtBQUNWLGVBQWVJLFFBQVFDLFFBQVEsRUFBRTtJQUN0QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVTtZQUNkQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNOO1FBQ3ZCO1FBRUEsTUFBTVAsV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVEgsVUFBUyxlQUFhVTtRQUN0RCxNQUFNTixPQUFPLE1BQU1GLFNBQVNHLElBQUk7UUFFaEMsT0FBT0Q7SUFDVCxFQUFFLE9BQU9ZLE9BQU87UUFDZCxPQUFPQTtJQUNUO0FBQ0YsQ0FBQztBQUVELGFBQWE7QUFDTixlQUFlQyxXQUFXVixNQUFNLEVBQUVFLFFBQVEsRUFBRTtJQUNqRCxNQUFNQyxVQUFVO1FBQ2RDLFFBQVE7UUFDUkMsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtRQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtJQUN2QjtJQUVBLE1BQU1QLFdBQVcsTUFBTUMsTUFBTSxHQUF5QkksT0FBdEJQLFVBQVMsZUFBb0IsT0FBUE8sU0FBVUc7QUFDbEUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvaGVscGVyLmpzPzk1NTMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcblxuLy9hbGwgdXNlcnNcbmV4cG9ydCBjb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3VzZXJzYCk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vL3NpbmdsZSB1c2VyXG5leHBvcnQgY29uc3QgZ2V0dXNlciA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBpLyR7dXNlcklkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuLy9wb3N0IGEgbmV3IHVzZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRVc2VyKGZvcm1EYXRhKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgT3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS91c2Vyc2AsIE9wdGlvbnMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbn1cblxuLy91cGRhdGUgdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVzZXIodXNlcklkLCBmb3JtRGF0YSkge1xuICBjb25zdCBPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS91c2Vycy8ke3VzZXJJZH1gLCBPcHRpb25zKTtcbn1cbiJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsImdldFVzZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiZ2V0dXNlciIsInVzZXJJZCIsImFkZFVzZXIiLCJmb3JtRGF0YSIsIk9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsInVwZGF0ZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/helper.js\n"));

/***/ })

});
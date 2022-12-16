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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUser\": function() { return /* binding */ addUser; },\n/* harmony export */   \"deleteUser\": function() { return /* binding */ deleteUser; },\n/* harmony export */   \"getUsers\": function() { return /* binding */ getUsers; },\n/* harmony export */   \"getuser\": function() { return /* binding */ getuser; },\n/* harmony export */   \"updateUser\": function() { return /* binding */ updateUser; }\n/* harmony export */ });\nconst BASE_URL = \"http://localhost:3000\";\n//all users\nconst getUsers = async ()=>{\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/users\"));\n    const res = await response.json();\n    return res;\n};\n//single user\nconst getuser = async (userId)=>{\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/\").concat(userId));\n    const res = await response.json();\n    return res;\n};\n//post a new user\nasync function addUser(formData) {\n    try {\n        const Options = {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(formData)\n        };\n        const response = await fetch(\"\".concat(BASE_URL, \"/api/users\"), Options);\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        return error;\n    }\n}\n//update user\nasync function updateUser(userId, formData) {\n    const Options = {\n        method: \"PUT\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(formData)\n    };\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/users/\").concat(userId), Options);\n    const data = await response.json();\n    return data;\n}\n//delete user\nconst deleteUser = async (userId)=>{\n    const Options = {\n        method: \"DELETE\"\n    };\n    const response = await fetch(\"\".concat(BASE_URL, \"/api/users/\").concat(userId), Options);\n    const data = JSON.stringify(response);\n    return data;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvaGVscGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTUEsV0FBVztBQUVqQixXQUFXO0FBQ0osTUFBTUMsV0FBVyxVQUFZO0lBQ2xDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRILFVBQVM7SUFDekMsTUFBTUksTUFBTSxNQUFNRixTQUFTRyxJQUFJO0lBRS9CLE9BQU9EO0FBQ1QsRUFBRTtBQUVGLGFBQWE7QUFDTixNQUFNRSxVQUFVLE9BQU9DLFNBQVc7SUFDdkMsTUFBTUwsV0FBVyxNQUFNQyxNQUFNLEdBQW1CSSxPQUFoQlAsVUFBUyxTQUFjLE9BQVBPO0lBQ2hELE1BQU1ILE1BQU0sTUFBTUYsU0FBU0csSUFBSTtJQUUvQixPQUFPRDtBQUNULEVBQUU7QUFFRixpQkFBaUI7QUFDVixlQUFlSSxRQUFRQyxRQUFRLEVBQUU7SUFDdEMsSUFBSTtRQUNGLE1BQU1DLFVBQVU7WUFDZEMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDTjtRQUN2QjtRQUVBLE1BQU1QLFdBQVcsTUFBTUMsTUFBTSxHQUFZLE9BQVRILFVBQVMsZUFBYVU7UUFDdEQsTUFBTU0sT0FBTyxNQUFNZCxTQUFTRyxJQUFJO1FBRWhDLE9BQU9XO0lBQ1QsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT0E7SUFDVDtBQUNGLENBQUM7QUFFRCxhQUFhO0FBQ04sZUFBZUMsV0FBV1gsTUFBTSxFQUFFRSxRQUFRLEVBQUU7SUFDakQsTUFBTUMsVUFBVTtRQUNkQyxRQUFRO1FBQ1JDLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7UUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047SUFDdkI7SUFFQSxNQUFNUCxXQUFXLE1BQU1DLE1BQU0sR0FBeUJJLE9BQXRCUCxVQUFTLGVBQW9CLE9BQVBPLFNBQVVHO0lBQ2hFLE1BQU1NLE9BQU8sTUFBTWQsU0FBU0csSUFBSTtJQUVoQyxPQUFPVztBQUNULENBQUM7QUFFRCxhQUFhO0FBQ04sTUFBTUcsYUFBYSxPQUFPWixTQUFXO0lBQzFDLE1BQU1HLFVBQVU7UUFDZEMsUUFBUTtJQUNWO0lBRUEsTUFBTVQsV0FBVyxNQUFNQyxNQUFNLEdBQXlCSSxPQUF0QlAsVUFBUyxlQUFvQixPQUFQTyxTQUFVRztJQUNoRSxNQUFNTSxPQUFPRixLQUFLQyxTQUFTLENBQUNiO0lBRTVCLE9BQU9jO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9saWIvaGVscGVyLmpzPzk1NTMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcblxuLy9hbGwgdXNlcnNcbmV4cG9ydCBjb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3VzZXJzYCk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gcmVzO1xufTtcblxuLy9zaW5nbGUgdXNlclxuZXhwb3J0IGNvbnN0IGdldHVzZXIgPSBhc3luYyAodXNlcklkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS8ke3VzZXJJZH1gKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiByZXM7XG59O1xuXG4vL3Bvc3QgYSBuZXcgdXNlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFVzZXIoZm9ybURhdGEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBPcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKSxcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3VzZXJzYCwgT3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG4vL3VwZGF0ZSB1c2VyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VySWQsIGZvcm1EYXRhKSB7XG4gIGNvbnN0IE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gIH07XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vYXBpL3VzZXJzLyR7dXNlcklkfWAsIE9wdGlvbnMpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vL2RlbGV0ZSB1c2VyXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh1c2VySWQpID0+IHtcbiAgY29uc3QgT3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICB9O1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L2FwaS91c2Vycy8ke3VzZXJJZH1gLCBPcHRpb25zKTtcbiAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJnZXRVc2VycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZ2V0dXNlciIsInVzZXJJZCIsImFkZFVzZXIiLCJmb3JtRGF0YSIsIk9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZXJyb3IiLCJ1cGRhdGVVc2VyIiwiZGVsZXRlVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/helper.js\n"));

/***/ })

});
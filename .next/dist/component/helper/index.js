"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.encode = encode;
exports.decode = decode;
function encode(data) {
    return window.btoa(data);
}

function decode(data) {
    return window.atob(data);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudFxcaGVscGVyXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJlbmNvZGUiLCJkYXRhIiwid2luZG93IiwiYnRvYSIsImRlY29kZSIsImF0b2IiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQU8sQUFBUztRQUlULEFBQVM7QUFKVCxnQkFBQSxBQUFnQixNQUFNLEFBQ3pCO1dBQU8sT0FBQSxBQUFPLEtBQWQsQUFBTyxBQUFZLEFBQ3RCO0FBRUQ7O0FBQU8sZ0JBQUEsQUFBZ0IsTUFBTSxBQUN6QjtXQUFPLE9BQUEsQUFBTyxLQUFkLEFBQU8sQUFBWSxBQUN0QiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9ha2FzaC9EZXNrdG9wL2Jsb2NrY2hhaW4taW50ZXJuL0Jsb2NrY2hhaW4tUmV2aWV3LUVuZ2luZSJ9
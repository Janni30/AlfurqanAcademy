"use strict";
(() => {
var exports = {};
exports.id = 45;
exports.ids = [45];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2824:
/***/ ((module) => {

module.exports = require("next/server");

/***/ }),

/***/ 5040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ ConnectDB)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ConnectDB = async ()=>{
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect("mongodb+srv://Janani:Jananimk30@cluster0.o7e2b.mongodb.net/blog-app");
    console.log("DB Connected");
};


/***/ }),

/***/ 1877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DELETE": () => (/* binding */ DELETE),
  "GET": () => (/* binding */ GET),
  "POST": () => (/* binding */ POST)
});

// EXTERNAL MODULE: ./lib/config/db.js
var db = __webpack_require__(5040);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./lib/models/EmailModel.js

const Schema = new (external_mongoose_default()).Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
const EmailModel = (external_mongoose_default()).models.email || external_mongoose_default().model("email", Schema);
/* harmony default export */ const models_EmailModel = (EmailModel);

// EXTERNAL MODULE: external "next/server"
var server_ = __webpack_require__(2824);
;// CONCATENATED MODULE: ./pages/api/email/route.js



const LoadDB = async ()=>{
    await (0,db/* ConnectDB */.n)();
};
LoadDB();
async function POST(request) {
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get("email")}`
    };
    await models_EmailModel.create(emailData);
    return server_.NextResponse.json({
        success: true,
        msg: "Email Subscribed"
    });
}
async function GET(request) {
    const emails = await models_EmailModel.find({});
    return server_.NextResponse.json({
        emails
    });
}
async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    await models_EmailModel.findByIdAndDelete(id);
    return server_.NextResponse.json({
        success: true,
        msg: "Email Deleted"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1877));
module.exports = __webpack_exports__;

})();
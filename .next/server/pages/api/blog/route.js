"use strict";
(() => {
var exports = {};
exports.id = 8228;
exports.ids = [8228];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 2824:
/***/ ((module) => {

module.exports = require("next/server");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

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

/***/ 9179:
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
;// CONCATENATED MODULE: ./lib/models/BlogModel.js

const Schema = new (external_mongoose_default()).Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    authorImg: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
const BlogModel = (external_mongoose_default()).models.blog || external_mongoose_default().model("blog", Schema);
/* harmony default export */ const models_BlogModel = (BlogModel);

;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
;// CONCATENATED MODULE: ./pages/api/blog/route.js


const { NextResponse  } = __webpack_require__(2824);

const fs = __webpack_require__(7147);
const LoadDB = async ()=>{
    await (0,db/* ConnectDB */.n)();
};
LoadDB();
// API Endpoint to get all blogs
async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await models_BlogModel.findById(blogId);
        return NextResponse.json(blog);
    } else {
        const blogs = await models_BlogModel.find({});
        return NextResponse.json({
            blogs
        });
    }
}
// API Endpoint For Uploading Blogs
async function POST(request) {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get("image");
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
    await (0,promises_namespaceObject.writeFile)(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;
    const blogData = {
        title: `${formData.get("title")}`,
        description: `${formData.get("description")}`,
        category: `${formData.get("category")}`,
        author: `${formData.get("author")}`,
        image: `${imgUrl}`,
        authorImg: `${formData.get("authorImg")}`
    };
    await models_BlogModel.create(blogData);
    console.log("Blog Saved");
    return NextResponse.json({
        success: true,
        msg: "Blog Added"
    });
}
// Creating API Endpoint to delete Blog
async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    const blog = await models_BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`, ()=>{});
    await models_BlogModel.findByIdAndDelete(id);
    return NextResponse.json({
        msg: "Blog Deleted"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9179));
module.exports = __webpack_exports__;

})();
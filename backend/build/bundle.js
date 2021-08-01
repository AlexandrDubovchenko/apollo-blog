/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ \"./src/schema/index.js\");\n\n\n // The resolvers\n\nvar resolvers = {\n  Query: {}\n}; // Put together a schema\n\nvar server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  schema: _schema__WEBPACK_IMPORTED_MODULE_2__.default,\n  resolvers: resolvers,\n  context: function context(_ref) {\n    var req = _ref.req,\n        res = _ref.res;\n    return {\n      req: req,\n      res: res\n    };\n  }\n}); // Start the server\n\nserver.listen().then(function (_ref2) {\n  var url = _ref2.url;\n  mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect('mongodb://localhost:27017/reddit-clone', {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  });\n  var db = (mongoose__WEBPACK_IMPORTED_MODULE_1___default().connection);\n  db.on('error', console.error.bind(console, 'connection error:'));\n  db.once('open', function () {\n    console.log('db connected');\n  });\n  console.log(\"\\uD83D\\uDE80  Server ready at \".concat(url));\n});\n\n//# sourceURL=webpack://graphql-backend/./src/index.js?");

/***/ }),

/***/ "./src/models/Comment.js":
/*!*******************************!*\
  !*** ./src/models/Comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommentSchema\": () => (/* binding */ CommentSchema),\n/* harmony export */   \"Comment\": () => (/* binding */ Comment),\n/* harmony export */   \"CommentTC\": () => (/* binding */ CommentTC)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-compose-mongoose */ \"graphql-compose-mongoose\");\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subscriptions */ \"./src/subscriptions.js\");\n\n\n\nvar CommentSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  author: {\n    type: String\n  },\n  body: {\n    type: String\n  },\n  date: {\n    type: Date,\n    \"default\": Date.now\n  },\n  attachedToId: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.ObjectId,\n  comments: {\n    type: [mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.ObjectId],\n    ref: 'Comment'\n  }\n});\nCommentSchema.pre('save', function (next) {\n  _subscriptions__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish(_subscriptions__WEBPACK_IMPORTED_MODULE_2__.subscriptionsEvents.COMMENT_CREATED, this);\n  next();\n});\nvar Comment = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Comment', CommentSchema);\nvar CommentTC = (0,graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__.composeWithMongoose)(Comment);\n\n//# sourceURL=webpack://graphql-backend/./src/models/Comment.js?");

/***/ }),

/***/ "./src/models/Post.js":
/*!****************************!*\
  !*** ./src/models/Post.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostSchema\": () => (/* binding */ PostSchema),\n/* harmony export */   \"Post\": () => (/* binding */ Post),\n/* harmony export */   \"PostTC\": () => (/* binding */ PostTC)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-compose-mongoose */ \"graphql-compose-mongoose\");\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subscriptions */ \"./src/subscriptions.js\");\n\n\n\nvar PostSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  title: {\n    type: String\n  },\n  author: {\n    type: String\n  },\n  body: {\n    type: String\n  },\n  date: {\n    type: Date,\n    \"default\": Date.now\n  },\n  comments: {\n    type: [mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.ObjectId],\n    ref: 'Comment'\n  }\n});\nPostSchema.pre('save', function (next) {\n  _subscriptions__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish(_subscriptions__WEBPACK_IMPORTED_MODULE_2__.subscriptionsEvents.POST_CREATED, this);\n  next();\n});\nvar Post = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Post', PostSchema);\nvar PostTC = (0,graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__.composeWithMongoose)(Post);\n\n//# sourceURL=webpack://graphql-backend/./src/models/Post.js?");

/***/ }),

/***/ "./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserSchema\": () => (/* binding */ UserSchema),\n/* harmony export */   \"User\": () => (/* binding */ User),\n/* harmony export */   \"UserTC\": () => (/* binding */ UserTC)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-compose-mongoose */ \"graphql-compose-mongoose\");\n/* harmony import */ var graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: true\n  },\n  password: {\n    type: String\n  },\n  googleId: {\n    type: String\n  }\n});\nvar User = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema);\nvar UserTC = (0,graphql_compose_mongoose__WEBPACK_IMPORTED_MODULE_1__.composeWithMongoose)(User);\n\n//# sourceURL=webpack://graphql-backend/./src/models/User.js?");

/***/ }),

/***/ "./src/resolvers/auth.js":
/*!*******************************!*\
  !*** ./src/resolvers/auth.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"register\": () => (/* binding */ register),\n/* harmony export */   \"getUser\": () => (/* binding */ getUser),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"refreshToken\": () => (/* binding */ refreshToken),\n/* harmony export */   \"authGoogle\": () => (/* binding */ authGoogle)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-compose */ \"graphql-compose\");\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_compose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ \"./src/models/User.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! google-auth-library */ \"google-auth-library\");\n/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(google_auth_library__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar oAuth2Client = new google_auth_library__WEBPACK_IMPORTED_MODULE_6__.OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SERCRET);\nvar SECRET = \"TEST\";\nvar InputTC = graphql_compose__WEBPACK_IMPORTED_MODULE_2__.schemaComposer.createObjectTC(\"\\n  type Input {\\n    accessToken: String!\\n  }\\n\");\nvar InputITC = (0,graphql_compose__WEBPACK_IMPORTED_MODULE_2__.toInputObjectType)(InputTC);\nvar register = graphql_compose__WEBPACK_IMPORTED_MODULE_2__.schemaComposer.createResolver({\n  name: 'register',\n  type: \"type Auth { accessToken: String, refreshToken: String }\",\n  args: {\n    email: 'String!',\n    password: 'String!'\n  },\n  resolve: function () {\n    var _resolve = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {\n      var _ref$args, email, password, user;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _ref$args = _ref.args, email = _ref$args.email, password = _ref$args.password;\n              _context.prev = 1;\n              user = new _models_User__WEBPACK_IMPORTED_MODULE_3__.User({\n                email: email,\n                password: password\n              });\n              _context.next = 5;\n              return user.save();\n\n            case 5:\n              return _context.abrupt(\"return\", {\n                accessToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: email\n                }, SECRET, {\n                  expiresIn: 100000\n                }),\n                refreshToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: email\n                }, SECRET, {\n                  expiresIn: '60d'\n                })\n              });\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              return _context.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.ForbiddenError('User already exist'));\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    function resolve(_x) {\n      return _resolve.apply(this, arguments);\n    }\n\n    return resolve;\n  }()\n});\nvar getUser = graphql_compose__WEBPACK_IMPORTED_MODULE_2__.schemaComposer.createResolver({\n  name: 'getUser',\n  type: \"type User { email: String, _id: MongoID }\",\n  args: {\n    accessToken: 'String!'\n  },\n  resolve: function () {\n    var _resolve2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref2) {\n      var accessToken, _jwt$decode, email, user;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              accessToken = _ref2.args.accessToken;\n              _jwt$decode = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(accessToken), email = _jwt$decode.email;\n              _context2.prev = 2;\n              _context2.next = 5;\n              return _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                email: email\n              }).exec();\n\n            case 5:\n              user = _context2.sent;\n\n              if (!user) {\n                _context2.next = 8;\n                break;\n              }\n\n              return _context2.abrupt(\"return\", {\n                _id: user.id,\n                email: user.email\n              });\n\n            case 8:\n              return _context2.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.AuthenticationError('User does not exist'));\n\n            case 11:\n              _context2.prev = 11;\n              _context2.t0 = _context2[\"catch\"](2);\n              return _context2.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.AuthenticationError(_context2.t0));\n\n            case 14:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[2, 11]]);\n    }));\n\n    function resolve(_x2) {\n      return _resolve2.apply(this, arguments);\n    }\n\n    return resolve;\n  }()\n});\nvar login = graphql_compose__WEBPACK_IMPORTED_MODULE_2__.schemaComposer.createResolver({\n  name: 'login',\n  type: \"type Auth { accessToken: String, refreshToken: String }\",\n  args: {\n    email: 'String!',\n    password: 'String!'\n  },\n  resolve: function () {\n    var _resolve3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(_ref3) {\n      var _ref3$args, email, password, user;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _ref3$args = _ref3.args, email = _ref3$args.email, password = _ref3$args.password;\n              _context3.prev = 1;\n              _context3.next = 4;\n              return _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                email: email\n              }).exec();\n\n            case 4:\n              user = _context3.sent;\n\n              if (!(user && user.password === password)) {\n                _context3.next = 7;\n                break;\n              }\n\n              return _context3.abrupt(\"return\", {\n                accessToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: email\n                }, SECRET, {\n                  expiresIn: 100000\n                }),\n                refreshToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: email\n                }, SECRET, {\n                  expiresIn: '60d'\n                })\n              });\n\n            case 7:\n              return _context3.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.ForbiddenError('Wrong email or password'));\n\n            case 10:\n              _context3.prev = 10;\n              _context3.t0 = _context3[\"catch\"](1);\n              return _context3.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.ForbiddenError(_context3.t0));\n\n            case 13:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[1, 10]]);\n    }));\n\n    function resolve(_x3) {\n      return _resolve3.apply(this, arguments);\n    }\n\n    return resolve;\n  }()\n});\nvar refreshToken = graphql_compose__WEBPACK_IMPORTED_MODULE_2__.schemaComposer.createResolver({\n  name: 'refreshToken',\n  type: \"type Auth { accessToken: String, refreshToken: String }\",\n  args: {\n    refreshToken: 'String!'\n  },\n  resolve: function () {\n    var _resolve4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(_ref4) {\n      var refreshToken, _jwt$decode2, id, email, user;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              refreshToken = _ref4.args.refreshToken;\n              _context4.prev = 1;\n              _jwt$decode2 = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(refreshToken), id = _jwt$decode2.id, email = _jwt$decode2.email;\n              user = _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findById(id);\n\n              if (!user) {\n                _context4.next = 6;\n                break;\n              }\n\n              return _context4.abrupt(\"return\", {\n                accessToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: id,\n                  email: email\n                }, SECRET, {\n                  expiresIn: 100000\n                }),\n                refreshToken: refreshToken\n              });\n\n            case 6:\n              return _context4.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.ForbiddenError('User not found'));\n\n            case 9:\n              _context4.prev = 9;\n              _context4.t0 = _context4[\"catch\"](1);\n              return _context4.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.ForbiddenError(_context4.t0));\n\n            case 12:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[1, 9]]);\n    }));\n\n    function resolve(_x4) {\n      return _resolve4.apply(this, arguments);\n    }\n\n    return resolve;\n  }()\n});\nvar authGoogle = graphql_compose__WEBPACK_IMPORTED_MODULE_2__.schemaComposer.createResolver({\n  name: 'authGoogle',\n  type: \"type Auth { accessToken: String, refreshToken: String }\",\n  args: {\n    input: InputITC\n  },\n  resolve: function () {\n    var _resolve5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee5(_ref5) {\n      var args, _ref5$context, res, req, next, data, payload, user, newUserData, newUser;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              args = _ref5.args, _ref5$context = _ref5.context, res = _ref5$context.res, req = _ref5$context.req, next = _ref5$context.next;\n              _context5.prev = 1;\n              _context5.next = 4;\n              return oAuth2Client.verifyIdToken({\n                idToken: args.input.accessToken,\n                audience: process.env.CLIENT_ID\n              });\n\n            case 4:\n              data = _context5.sent;\n              payload = data.getPayload();\n              _context5.next = 8;\n              return _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                googleId: payload.sub\n              });\n\n            case 8:\n              user = _context5.sent;\n              console.log(user);\n\n              if (!user) {\n                _context5.next = 12;\n                break;\n              }\n\n              return _context5.abrupt(\"return\", {\n                accessToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: user.email\n                }, SECRET, {\n                  expiresIn: 100000\n                }),\n                refreshToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: user.email\n                }, SECRET, {\n                  expiresIn: '60d'\n                })\n              });\n\n            case 12:\n              newUserData = {\n                email: payload.email,\n                googleId: payload.sub\n              };\n              newUser = new _models_User__WEBPACK_IMPORTED_MODULE_3__.User(newUserData);\n              _context5.next = 16;\n              return newUser.save();\n\n            case 16:\n              console.log(newUserData);\n              return _context5.abrupt(\"return\", {\n                accessToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: payload.email\n                }, SECRET, {\n                  expiresIn: 100000\n                }),\n                refreshToken: jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign({\n                  id: user.id,\n                  email: payload.email\n                }, SECRET, {\n                  expiresIn: '60d'\n                })\n              });\n\n            case 20:\n              _context5.prev = 20;\n              _context5.t0 = _context5[\"catch\"](1);\n              return _context5.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_5__.ForbiddenError(_context5.t0 === null || _context5.t0 === void 0 ? void 0 : _context5.t0.message));\n\n            case 23:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5, null, [[1, 20]]);\n    }));\n\n    function resolve(_x5) {\n      return _resolve5.apply(this, arguments);\n    }\n\n    return resolve;\n  }()\n});\n\n//# sourceURL=webpack://graphql-backend/./src/resolvers/auth.js?");

/***/ }),

/***/ "./src/resolvers/comment.js":
/*!**********************************!*\
  !*** ./src/resolvers/comment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCreate\": () => (/* binding */ commentCreate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-compose */ \"graphql-compose\");\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_compose__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Comment */ \"./src/models/Comment.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Post */ \"./src/models/Post.js\");\n/* harmony import */ var _types_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../types/enums */ \"./src/types/enums.js\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar commentCreate = graphql_compose__WEBPACK_IMPORTED_MODULE_4__.schemaComposer.createResolver({\n  type: \"type CommentTC { record: \".concat(_models_Comment__WEBPACK_IMPORTED_MODULE_5__.CommentTC.getType(), \" }\"),\n  name: 'commentCreate',\n  args: {\n    record: _models_Comment__WEBPACK_IMPORTED_MODULE_5__.CommentTC.getInputType(),\n    attachToId: 'MongoID!',\n    attachToType: \"\".concat(_types_enums__WEBPACK_IMPORTED_MODULE_7__.ThreadsETC.getTypeName(), \"!\")\n  },\n  resolve: function () {\n    var _resolve = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref) {\n      var _ref$args, record, attachToType, attachToId, comment;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _ref$args = _ref.args, record = _ref$args.record, attachToType = _ref$args.attachToType, attachToId = _ref$args.attachToId;\n              _context.prev = 1;\n              comment = new _models_Comment__WEBPACK_IMPORTED_MODULE_5__.Comment(_objectSpread(_objectSpread({}, record), {}, {\n                attachedToId: attachToId\n              }));\n              _context.next = 5;\n              return comment.save();\n\n            case 5:\n              _context.t0 = attachToType;\n              _context.next = _context.t0 === _types_enums__WEBPACK_IMPORTED_MODULE_7__.ThreadsEnum.POST ? 8 : _context.t0 === _types_enums__WEBPACK_IMPORTED_MODULE_7__.ThreadsEnum.COMMENT ? 10 : 12;\n              break;\n\n            case 8:\n              _context.next = 10;\n              return _models_Post__WEBPACK_IMPORTED_MODULE_6__.Post.updateOne({\n                _id: attachToId\n              }, {\n                $push: {\n                  comments: comment\n                }\n              });\n\n            case 10:\n              _context.next = 12;\n              return _models_Comment__WEBPACK_IMPORTED_MODULE_5__.Comment.updateOne({\n                _id: attachToId\n              }, {\n                $push: {\n                  comments: comment\n                }\n              });\n\n            case 12:\n              return _context.abrupt(\"return\", {\n                record: _models_Comment__WEBPACK_IMPORTED_MODULE_5__.Comment.findById(comment.id)\n              });\n\n            case 15:\n              _context.prev = 15;\n              _context.t1 = _context[\"catch\"](1);\n              return _context.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_3__.UserInputError(_context.t1));\n\n            case 18:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 15]]);\n    }));\n\n    function resolve(_x) {\n      return _resolve.apply(this, arguments);\n    }\n\n    return resolve;\n  }()\n});\n\n//# sourceURL=webpack://graphql-backend/./src/resolvers/comment.js?");

/***/ }),

/***/ "./src/resolvers/post.js":
/*!*******************************!*\
  !*** ./src/resolvers/post.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postCreate\": () => (/* binding */ postCreate)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-compose */ \"graphql-compose\");\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_compose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Post */ \"./src/models/Post.js\");\n\n\n\n\n\nvar postCreate = graphql_compose__WEBPACK_IMPORTED_MODULE_3__.schemaComposer.createResolver({\n  type: \"type PostTC { record: \".concat(_models_Post__WEBPACK_IMPORTED_MODULE_4__.PostTC.getType(), \" }\"),\n  name: 'postCreate',\n  args: {\n    record: _models_Post__WEBPACK_IMPORTED_MODULE_4__.PostTC.getInputType()\n  },\n  resolve: function () {\n    var _resolve = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {\n      var record, post;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              record = _ref.args.record;\n              _context.prev = 1;\n              post = new _models_Post__WEBPACK_IMPORTED_MODULE_4__.Post(record);\n              _context.next = 5;\n              return post.save();\n\n            case 5:\n              return _context.abrupt(\"return\", {\n                record: _models_Post__WEBPACK_IMPORTED_MODULE_4__.Post.findById(post.id)\n              });\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              return _context.abrupt(\"return\", new apollo_server__WEBPACK_IMPORTED_MODULE_2__.UserInputError(_context.t0));\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    function resolve(_x) {\n      return _resolve.apply(this, arguments);\n    }\n\n    return resolve;\n  }()\n});\n\n//# sourceURL=webpack://graphql-backend/./src/resolvers/post.js?");

/***/ }),

/***/ "./src/schema/auth.js":
/*!****************************!*\
  !*** ./src/schema/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authMutation\": () => (/* binding */ authMutation),\n/* harmony export */   \"authQuery\": () => (/* binding */ authQuery)\n/* harmony export */ });\n/* harmony import */ var _resolvers_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolvers/auth */ \"./src/resolvers/auth.js\");\n\nvar authQuery = {\n  getUser: _resolvers_auth__WEBPACK_IMPORTED_MODULE_0__.getUser\n};\nvar authMutation = {\n  register: _resolvers_auth__WEBPACK_IMPORTED_MODULE_0__.register,\n  login: _resolvers_auth__WEBPACK_IMPORTED_MODULE_0__.login,\n  refreshToken: _resolvers_auth__WEBPACK_IMPORTED_MODULE_0__.refreshToken,\n  authGoogle: _resolvers_auth__WEBPACK_IMPORTED_MODULE_0__.authGoogle\n};\n\n\n//# sourceURL=webpack://graphql-backend/./src/schema/auth.js?");

/***/ }),

/***/ "./src/schema/comment.js":
/*!*******************************!*\
  !*** ./src/schema/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentQuery\": () => (/* binding */ commentQuery),\n/* harmony export */   \"commentMutation\": () => (/* binding */ commentMutation),\n/* harmony export */   \"commentSubscription\": () => (/* binding */ commentSubscription)\n/* harmony export */ });\n/* harmony import */ var _resolvers_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../resolvers/comment */ \"./src/resolvers/comment.js\");\n/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Comment */ \"./src/models/Comment.js\");\n/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subscriptions */ \"./src/subscriptions.js\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar commentQuery = {\n  commentById: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('findById'),\n  commentByIds: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('findByIds'),\n  commentOne: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('findOne'),\n  commentMany: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('findMany'),\n  commentCount: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('count'),\n  commentConnection: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('connection'),\n  commentPagination: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('pagination')\n};\nvar commentMutation = {\n  commentCreate: _resolvers_comment__WEBPACK_IMPORTED_MODULE_0__.commentCreate,\n  commentCreateMany: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('createMany'),\n  commentUpdateById: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('updateById'),\n  commentUpdateOne: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('updateOne'),\n  commentUpdateMany: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('updateMany'),\n  commentRemoveById: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('removeById'),\n  commentRemoveOne: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('removeOne'),\n  commentRemoveMany: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('removeMany')\n};\nvar commentSubscription = {\n  commentCreated: {\n    type: _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC,\n    args: {\n      id: 'ID!'\n    },\n    resolve: function resolve(_id) {\n      return _models_Comment__WEBPACK_IMPORTED_MODULE_1__.Comment.findById(_id);\n    },\n    subscribe: (0,apollo_server__WEBPACK_IMPORTED_MODULE_3__.withFilter)(function () {\n      return _subscriptions__WEBPACK_IMPORTED_MODULE_2__.pubsub.asyncIterator([_subscriptions__WEBPACK_IMPORTED_MODULE_2__.subscriptionsEvents.COMMENT_CREATED]);\n    }, function (payload, variables) {\n      return payload.attachedToId.toString() === variables.id;\n    })\n  }\n};\n_models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.addRelation('comments', {\n  resolver: function resolver() {\n    return _models_Comment__WEBPACK_IMPORTED_MODULE_1__.CommentTC.getResolver('findByIds');\n  },\n  prepareArgs: {\n    _ids: function _ids(source) {\n      return source.comments || [];\n    }\n  },\n  projection: {\n    comments: true\n  }\n});\n\n\n//# sourceURL=webpack://graphql-backend/./src/schema/comment.js?");

/***/ }),

/***/ "./src/schema/index.js":
/*!*****************************!*\
  !*** ./src/schema/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-compose */ \"graphql-compose\");\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_compose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth */ \"./src/schema/auth.js\");\n/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ \"./src/schema/comment.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post */ \"./src/schema/post.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar schemaComposer = new graphql_compose__WEBPACK_IMPORTED_MODULE_1__.SchemaComposer();\nschemaComposer.Query.addFields(_objectSpread(_objectSpread(_objectSpread({}, _post__WEBPACK_IMPORTED_MODULE_5__.postQuery), _comment__WEBPACK_IMPORTED_MODULE_4__.commentQuery), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.userAccess)(_objectSpread({}, _auth__WEBPACK_IMPORTED_MODULE_3__.authQuery))));\nschemaComposer.Mutation.addFields(_objectSpread(_objectSpread({}, _auth__WEBPACK_IMPORTED_MODULE_3__.authMutation), (0,_utils__WEBPACK_IMPORTED_MODULE_2__.userAccess)(_objectSpread(_objectSpread({}, _post__WEBPACK_IMPORTED_MODULE_5__.postMutation), _comment__WEBPACK_IMPORTED_MODULE_4__.commentMutation))));\nschemaComposer.Subscription.addFields(_objectSpread(_objectSpread({}, _comment__WEBPACK_IMPORTED_MODULE_4__.commentSubscription), _post__WEBPACK_IMPORTED_MODULE_5__.postSubscription));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (schemaComposer.buildSchema());\n\n//# sourceURL=webpack://graphql-backend/./src/schema/index.js?");

/***/ }),

/***/ "./src/schema/post.js":
/*!****************************!*\
  !*** ./src/schema/post.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postQuery\": () => (/* binding */ postQuery),\n/* harmony export */   \"postMutation\": () => (/* binding */ postMutation),\n/* harmony export */   \"postSubscription\": () => (/* binding */ postSubscription)\n/* harmony export */ });\n/* harmony import */ var _models_Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Comment */ \"./src/models/Comment.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Post */ \"./src/models/Post.js\");\n/* harmony import */ var _resolvers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resolvers/post */ \"./src/resolvers/post.js\");\n/* harmony import */ var _subscriptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../subscriptions */ \"./src/subscriptions.js\");\n\n\n\n\nvar postQuery = {\n  postById: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('findById'),\n  postByIds: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('findByIds'),\n  postOne: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('findOne'),\n  postMany: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('findMany'),\n  postCount: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('count'),\n  postConnection: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('connection'),\n  postPagination: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('pagination')\n};\nvar postMutation = {\n  postCreateOne: _resolvers_post__WEBPACK_IMPORTED_MODULE_2__.postCreate,\n  postCreateMany: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('createMany'),\n  postUpdateById: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('updateById'),\n  postUpdateOne: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('updateOne'),\n  postUpdateMany: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('updateMany'),\n  postRemoveById: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('removeById'),\n  postRemoveOne: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('removeOne'),\n  postRemoveMany: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.getResolver('removeMany')\n};\nvar postSubscription = {\n  postCreated: {\n    type: _models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC,\n    resolve: function resolve(_id) {\n      return _models_Post__WEBPACK_IMPORTED_MODULE_1__.Post.findById(_id);\n    },\n    subscribe: function subscribe() {\n      return _subscriptions__WEBPACK_IMPORTED_MODULE_3__.pubsub.asyncIterator([_subscriptions__WEBPACK_IMPORTED_MODULE_3__.subscriptionsEvents.POST_CREATED]);\n    }\n  }\n};\n_models_Post__WEBPACK_IMPORTED_MODULE_1__.PostTC.addRelation('comments', {\n  resolver: function resolver() {\n    return _models_Comment__WEBPACK_IMPORTED_MODULE_0__.CommentTC.getResolver('findByIds');\n  },\n  prepareArgs: {\n    _ids: function _ids(source) {\n      return source.comments || [];\n    }\n  },\n  projection: {\n    comments: true\n  }\n});\n\n\n//# sourceURL=webpack://graphql-backend/./src/schema/post.js?");

/***/ }),

/***/ "./src/subscriptions.js":
/*!******************************!*\
  !*** ./src/subscriptions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pubsub\": () => (/* binding */ pubsub),\n/* harmony export */   \"subscriptionsEvents\": () => (/* binding */ subscriptionsEvents)\n/* harmony export */ });\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n\nvar pubsub = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.PubSub();\nvar subscriptionsEvents = {\n  COMMENT_CREATED: 'COMMENT_CREATED',\n  POST_CREATED: 'POST_CREATED'\n};\n\n\n//# sourceURL=webpack://graphql-backend/./src/subscriptions.js?");

/***/ }),

/***/ "./src/types/enums.js":
/*!****************************!*\
  !*** ./src/types/enums.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ThreadsEnum\": () => (/* binding */ ThreadsEnum),\n/* harmony export */   \"ThreadsETC\": () => (/* binding */ ThreadsETC)\n/* harmony export */ });\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-compose */ \"graphql-compose\");\n/* harmony import */ var graphql_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_compose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ThreadsEnum = {\n  POST: \"POST\",\n  COMMENT: \"COMMENT\"\n};\nvar ThreadsETC = graphql_compose__WEBPACK_IMPORTED_MODULE_0__.schemaComposer.createEnumTC({\n  name: 'ThreadsEnum',\n  values: {\n    POST: {\n      value: ThreadsEnum.POST\n    },\n    COMMENT: {\n      value: ThreadsEnum.COMMENT\n    }\n  }\n});\n\n//# sourceURL=webpack://graphql-backend/./src/types/enums.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userAccess\": () => (/* binding */ userAccess)\n/* harmony export */ });\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar SECRET = \"TEST\";\nfunction userAccess(resolvers) {\n  Object.keys(resolvers).forEach(function (k) {\n    resolvers[k] = resolvers[k].wrapResolve(function (next) {\n      return function (rp) {\n        var token = rp.context.req.headers.authorization;\n\n        if (!token) {\n          return new apollo_server__WEBPACK_IMPORTED_MODULE_0__.AuthenticationError('You should be logged in, to have access to this action.');\n        }\n\n        try {\n          if (!jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, SECRET)) {\n            return new apollo_server__WEBPACK_IMPORTED_MODULE_0__.AuthenticationError('You should be logged in, to have access to this action.');\n          }\n        } catch (error) {\n          return new apollo_server__WEBPACK_IMPORTED_MODULE_0__.AuthenticationError('You should be logged in, to have access to this action.');\n        }\n\n        return next(rp);\n      };\n    });\n  });\n  return resolvers;\n}\n\n//# sourceURL=webpack://graphql-backend/./src/utils.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("apollo-server");

/***/ }),

/***/ "google-auth-library":
/*!**************************************!*\
  !*** external "google-auth-library" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ }),

/***/ "graphql-compose":
/*!**********************************!*\
  !*** external "graphql-compose" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-compose");

/***/ }),

/***/ "graphql-compose-mongoose":
/*!*******************************************!*\
  !*** external "graphql-compose-mongoose" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("graphql-compose-mongoose");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
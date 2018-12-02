(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    font-size: 22px;\r\n    line-height: 44px;\r\n    margin-top: 0;\r\n}\r\n\r\nmat-card {\r\n    margin-bottom: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjs7QUFFRDtJQUNJLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <p [@fadeIn]=\"isShow ? 'show' : ''\" [@moveUp]=\"isShow ? 'show' : ''\">\n    Topstitch Games is sewing up Treadnauts in Seattle, Washington.\n    Our mantra: focused, inventive games with craftsmanship that shows.\n    We have also developed a handful of high-tech games for private clients.\n  </p>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(el, document) {
        this.el = el;
        this.document = document;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.getBoundingClientRect().top;
        this.isShow = componentPosition < this.document.documentElement.clientHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AboutComponent.prototype, "checkScroll", null);
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('moveUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["moveUp"], {
                            params: { time: '1s', start: '20px', end: '0px' }
                        })
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["fade"])
                    ]),
                ]),
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Document])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fade, moveUp, slideDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveUp", function() { return moveUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideDown", function() { return slideDown; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '{{ start }}' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '{{ end }}' }))
], { params: { time: '1.5s', start: 0, end: 1 } });
var moveUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        position: "relative",
        top: '{{ start }}',
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        top: '{{ end }}'
    }))
], { params: { time: '0.5s ease-out', start: '40px', end: '0px' } });
var slideDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animation"])([
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ maxHeight: '0' }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('{{ time }}', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ maxHeight: '200px' }))
], { params: { time: '2s ease-in' } });


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _snakeybus_snakeybus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snakeybus/snakeybus.component */ "./src/app/snakeybus/snakeybus.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // Add your component here
 // Add your component here
//This is my case 
var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'snakeybus', component: _snakeybus_snakeybus_component__WEBPACK_IMPORTED_MODULE_3__["SnakeybusComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n#banner {\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin-bottom: 50px;\r\n    /* background-color: gray; */\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\r\n    position: relative;\r\n}\r\n\r\n#banner-caption {\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: -1;\r\n    font-size: 48px;\r\n    margin: 20px;\r\n    color: white;\r\n}\r\n\r\n#banner-caption div {\r\n    background-image: url(\"/assets/images/logo.png\");\r\n    background-size: cover;\r\n    width: 120px;\r\n}\r\n\r\nmat-divider {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n#banner-image{\r\n    background-image: url(\"/assets/images/snakeybus_screen3.png\");\r\n    top: 0;\r\n}\r\n\r\n#shadow {\r\n    bottom: 0;\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\r\n}\r\n\r\n#banner-image, #shadow {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n#current-work {\r\n    position: relative;\r\n    color: #353535;\r\n}\r\n\r\n#toolbar {\r\n    color: white;\r\n    background: none;\r\n}\r\n\r\n.section-tag {\r\n    max-width: 110px;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    color: white;\r\n    text-align: center;\r\n    background-color: #353535;\r\n    margin-bottom: 50px;\r\n    font-size: 14px;\r\n\r\n}\r\n\r\n.section-title {\r\n    width: 96%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 50px;\r\n}\r\n\r\n#past-games {\r\n    /* float: left; */\r\n    overflow: auto;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n#devs {\r\n    overflow: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLDBGQUEwRjtJQUMxRixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSw4REFBOEQ7SUFDOUQsT0FBTztDQUNWOztBQUVEO0lBQ0ksVUFBVTtJQUNWLHdGQUF3RjtDQUMzRjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixnQkFBZ0I7O0NBRW5COztBQUVEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNiYW5uZXItY2FwdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2Jhbm5lci1jYXB0aW9uIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuI2Jhbm5lci1pbWFnZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3NuYWtleWJ1c19zY3JlZW4zLnBuZ1wiKTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuI3NoYWRvdyB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAxKSk7XHJcbn1cclxuXHJcbiNiYW5uZXItaW1hZ2UsICNzaGFkb3cge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4jY3VycmVudC13b3JrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNvbG9yOiAjMzUzNTM1O1xyXG59XHJcblxyXG4jdG9vbGJhciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uc2VjdGlvbi10YWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbiNwYXN0LWdhbWVzIHtcclxuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI2RldnMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div id = \"banner\">\n\n  <mat-toolbar id = \"toolbar\">\n    <span>stovetop</span>\n    <span class = \"spacer\"></span>\n    <button mat-button>Current Work</button>\n    <button mat-button>About</button>\n    <button mat-button>Games</button>\n    <button mat-button>Contact</button>\n  </mat-toolbar>\n  <div id = \"banner-image\"></div>\n  <div id = \"shadow\"></div>\n  <div id = \"banner-caption\">\n    <div></div>\n    Stovetop Studios\n  </div>\n</div>\n\n<div class = \"section-title\">\n  <mat-divider></mat-divider>\n  <div class = \"section-tag\">WORKING ON</div>\n  <div id = \"current-work\">\n      <app-game-card [isDemo] = \"true\"></app-game-card>\n    </div>\n</div>\n\n<div class = \"section-title\">\n  <mat-divider></mat-divider>\n  <div class = \"section-tag\">GAMES</div>\n  <div id = \"past-games\">\n    <app-past-games></app-past-games>\n  </div>\n</div>\n\n<div class = \"section-title\">\n    <mat-divider></mat-divider>\n    <div class = \"section-tag\">ABOUT</div>\n    <app-about></app-about>\n    <div id = \"devs\">\n        <app-dev-card name = \"Frank Han\" role = \"Primary Programmer\"></app-dev-card>\n        <app-dev-card name = \"Jeff Zhu\" role = \"Primary Technical Artist\"></app-dev-card>\n    </div>\n</div> -->\n\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'stovetop';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-card/game-card.component */ "./src/app/game-card/game-card.component.ts");
/* harmony import */ var _past_games_past_games_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./past-games/past-games.component */ "./src/app/past-games/past-games.component.ts");
/* harmony import */ var _dev_card_dev_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dev-card/dev-card.component */ "./src/app/dev-card/dev-card.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _game_showcase_game_showcase_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game-showcase/game-showcase.component */ "./src/app/game-showcase/game-showcase.component.ts");
/* harmony import */ var _snakeybus_snakeybus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./snakeybus/snakeybus.component */ "./src/app/snakeybus/snakeybus.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _section_head_section_head_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./section-head/section-head.component */ "./src/app/section-head/section-head.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./screenshot/screenshot.component */ "./src/app/screenshot/screenshot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _game_card_game_card_component__WEBPACK_IMPORTED_MODULE_5__["GameCardComponent"],
                _past_games_past_games_component__WEBPACK_IMPORTED_MODULE_6__["PastGamesComponent"],
                _dev_card_dev_card_component__WEBPACK_IMPORTED_MODULE_7__["DevCardComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _game_showcase_game_showcase_component__WEBPACK_IMPORTED_MODULE_11__["GameShowcaseComponent"],
                _snakeybus_snakeybus_component__WEBPACK_IMPORTED_MODULE_12__["SnakeybusComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
                _section_head_section_head_component__WEBPACK_IMPORTED_MODULE_14__["SectionHeadComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_15__["GalleryComponent"],
                _screenshot_screenshot_component__WEBPACK_IMPORTED_MODULE_16__["ScreenshotComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n#banner {\r\n    width: 100%;\r\n    height: 100vh;\r\n    margin-bottom: 50px;\r\n    /* background-color: gray; */\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\r\n    position: relative;\r\n}\r\n\r\nbutton {\r\n    font-size: 16px;\r\n}\r\n\r\n#logo {\r\n    font-size: 20px;\r\n}\r\n\r\n.center {\r\n    text-align: center;\r\n}\r\n\r\n#banner-caption {\r\n    z-index: 1;\r\n    font-size: 48px;\r\n    color: white;\r\n}\r\n\r\n.banner-caption-bottom {\r\n    position: absolute;\r\n    margin: 20px;\r\n    bottom: 0;\r\n}\r\n\r\n.banner-caption-center {\r\n    background: rgba(0,0,0,0.8);\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 20px 60px;\r\n    border: 1px solid white;\r\n    margin-top: 32vh;\r\n}\r\n\r\n#banner-caption div {\r\n    background-image: url(\"/assets/images/logo.png\");\r\n    background-size: cover;\r\n    width: 120px;\r\n}\r\n\r\n#banner-image{\r\n    background-image: url(\"/assets/images/snakeybus_screen3.png\");\r\n    top: 0;\r\n}\r\n\r\n#shadow {\r\n    bottom: 0;\r\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));\r\n}\r\n\r\n#banner-image, #shadow {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    position: absolute;\r\n    z-index: -1;\r\n}\r\n\r\n#toolbar {\r\n    color: white;\r\n    background: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QiwwRkFBMEY7SUFDMUYsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0NBQ2I7O0FBRUQ7SUFDSSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxpREFBaUQ7SUFDakQsdUJBQXVCO0lBQ3ZCLGFBQWE7Q0FDaEI7O0FBR0Q7SUFDSSw4REFBOEQ7SUFDOUQsT0FBTztDQUNWOztBQUVEO0lBQ0ksVUFBVTtJQUNWLHdGQUF3RjtDQUMzRjs7QUFFRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4jYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5OyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwKSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNiYW5uZXItY2FwdGlvbiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmFubmVyLWNhcHRpb24tYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmJhbm5lci1jYXB0aW9uLWNlbnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOCk7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHggNjBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMzJ2aDtcclxufVxyXG5cclxuI2Jhbm5lci1jYXB0aW9uIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcblxyXG4jYmFubmVyLWltYWdle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvc25ha2V5YnVzX3NjcmVlbjMucG5nXCIpO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4jc2hhZG93IHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDEpKTtcclxufVxyXG5cclxuI2Jhbm5lci1pbWFnZSwgI3NoYWRvdyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiN0b29sYmFyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id = \"banner\" [className]=\"isTitleCenter ? 'center' : ''\">\n\n    <mat-toolbar id = \"toolbar\">\n      <button id = \"logo\" (click)=\"scroll('')\" mat-button>stovetop</button>\n      <span class = \"spacer\"></span>\n      <button (click)=\"scroll('current')\" mat-button>Current Work</button>\n      <button (click)=\"scroll('about')\" mat-button>About</button>\n      <button (click)=\"scroll('games')\" mat-button>Games</button>\n      <button (click)=\"scroll('contact')\" mat-button>Contact</button>\n    </mat-toolbar>\n    <div id = \"banner-image\"></div>\n    <div id = \"shadow\"></div>\n    <div id = \"banner-caption\" [className]=\"isTitleCenter ? 'banner-caption-center' : 'banner-caption-bottom'\">\n      {{title}}\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BannerComponent = /** @class */ (function () {
    function BannerComponent(document) {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent.prototype.scroll = function (elementId) {
        var el = document.getElementById(elementId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        else {
            window.location.href = "/#" + elementId;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BannerComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BannerComponent.prototype, "isTitleCenter", void 0);
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/dev-card/dev-card.component.css":
/*!*************************************************!*\
  !*** ./src/app/dev-card/dev-card.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    /* overflow: hidden; */\r\n    height: 300px;\r\n    max-width: 300px;\r\n    padding: 0;\r\n    float: left;\r\n    margin-right: 20px;\r\n    width: 25%;\r\n}\r\n\r\n.headshot {\r\n    width: 60%;\r\n    height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-image: url(\"http://chittagongit.com//images/chef-icon-free/chef-icon-free-14.jpg\");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    margin-bottom: 10px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2LWNhcmQvZGV2LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4RkFBOEY7SUFDOUYsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9COztDQUV2QiIsImZpbGUiOiJzcmMvYXBwL2Rldi1jYXJkL2Rldi1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG4uaGVhZHNob3Qge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9jaGl0dGFnb25naXQuY29tLy9pbWFnZXMvY2hlZi1pY29uLWZyZWUvY2hlZi1pY29uLWZyZWUtMTQuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dev-card/dev-card.component.html":
/*!**************************************************!*\
  !*** ./src/app/dev-card/dev-card.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card>\n  <div class = \"headshot\"></div>\n  <mat-card-header>\n    <mat-card-title>{{name}}</mat-card-title>\n    <mat-card-subtitle>{{role}}</mat-card-subtitle>\n  </mat-card-header>\n</mat-card>"

/***/ }),

/***/ "./src/app/dev-card/dev-card.component.ts":
/*!************************************************!*\
  !*** ./src/app/dev-card/dev-card.component.ts ***!
  \************************************************/
/*! exports provided: DevCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevCardComponent", function() { return DevCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DevCardComponent = /** @class */ (function () {
    function DevCardComponent() {
    }
    DevCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DevCardComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DevCardComponent.prototype, "role", void 0);
    DevCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dev-card',
            template: __webpack_require__(/*! ./dev-card.component.html */ "./src/app/dev-card/dev-card.component.html"),
            styles: [__webpack_require__(/*! ./dev-card.component.css */ "./src/app/dev-card/dev-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevCardComponent);
    return DevCardComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <app-screenshot *ngFor = \"let image of images\" [image] = \"basePath + image\"></app-screenshot>\n</div>\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleryComponent.prototype, "basePath", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GalleryComponent.prototype, "images", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/game-card/game-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/game-card/game-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".game-actions {\r\n    position: absolute;\r\n    bottom: 10px;\r\n}\r\n\r\n.game-actions button {\r\n    margin-right: 10px;\r\n}\r\n\r\n.game-info {\r\n    margin: 20px 0 0 20px;\r\n    float: left;\r\n    max-width: 40%;\r\n}\r\n\r\n.game-card {\r\n    overflow: auto;\r\n    padding: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\nmat-card-title {\r\n    font-size: 32px;\r\n}\r\n\r\nmat-card-subtitle {\r\n    font-size: 18x;\r\n}\r\n\r\nmat-card-content {\r\n    font-size: 20px;\r\n}\r\n\r\nimg {\r\n    float: left;\r\n    width: 550px;\r\n    height: 350px;\r\n    margin: 0;\r\n    border-top-right-radius: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1jYXJkL2dhbWUtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGVBQWU7Q0FDbEI7O0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCxVQUFVO0lBQ1YsMkJBQTJCO0NBQzlCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1jYXJkL2dhbWUtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWUtYWN0aW9ucyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5nYW1lLWFjdGlvbnMgYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uZ2FtZS1pbmZvIHtcclxuICAgIG1hcmdpbjogMjBweCAwIDAgMjBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWF4LXdpZHRoOiA0MCU7XHJcbn1cclxuLmdhbWUtY2FyZCB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbn1cclxubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNTUwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/game-card/game-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/game-card/game-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card  class=\"game-card\">\n    <img mat-card-image src=\"/assets/images/snakeybus_screen3.png\">\n    <div  class = \"game-info\">\n        <div [@fadeIn]=\"isShow ? 'show' : ''\" [@moveUp]=\"isShow ? 'show' : ''\">\n        <!-- <div [@fadeIn]=\"isShow ? 'show' : ''\"> -->\n        <mat-card-title>SnakeyBus</mat-card-title>\n        <mat-card-subtitle>Release Q4 2018</mat-card-subtitle>\n        <mat-card-content>\n            <p >\n              The length of your bus grows as you pick up more people! Snake thorugh the city streets and avoid crashing into yourself.\n            </p>\n        </mat-card-content>\n      </div>\n        <div class = \"game-actions\">\n          <a href = \"/snakeybus\">\n          <button mat-flat-button color=\"primary\">READ MORE</button>\n        </a>\n        <a href = \"/snakeybus#play-test\" #featured>\n          <button *ngIf=\"isDemo\" mat-flat-button color=\"primary\">PLAY TEST</button>\n        </a>\n        </div>\n\n    </div>\n    \n  </mat-card>"

/***/ }),

/***/ "./src/app/game-card/game-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/game-card/game-card.component.ts ***!
  \**************************************************/
/*! exports provided: GameCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCardComponent", function() { return GameCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var GameCardComponent = /** @class */ (function () {
    function GameCardComponent(el, document) {
        this.el = el;
        this.document = document;
    }
    GameCardComponent.prototype.ngOnInit = function () {
    };
    GameCardComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.getBoundingClientRect().top;
        this.isShow = componentPosition < this.document.documentElement.clientHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GameCardComponent.prototype, "isDemo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], GameCardComponent.prototype, "scrollPos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('featured'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GameCardComponent.prototype, "card", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GameCardComponent.prototype, "checkScroll", null);
    GameCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-card',
            template: __webpack_require__(/*! ./game-card.component.html */ "./src/app/game-card/game-card.component.html"),
            styles: [__webpack_require__(/*! ./game-card.component.css */ "./src/app/game-card/game-card.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('moveUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["moveUp"])
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["fade"])
                    ]),
                ]),
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Document])
    ], GameCardComponent);
    return GameCardComponent;
}());



/***/ }),

/***/ "./src/app/game-showcase/game-showcase.component.css":
/*!***********************************************************!*\
  !*** ./src/app/game-showcase/game-showcase.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtc2hvd2Nhc2UvZ2FtZS1zaG93Y2FzZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/game-showcase/game-showcase.component.html":
/*!************************************************************!*\
  !*** ./src/app/game-showcase/game-showcase.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  game-showcase works!\n</p>\n"

/***/ }),

/***/ "./src/app/game-showcase/game-showcase.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/game-showcase/game-showcase.component.ts ***!
  \**********************************************************/
/*! exports provided: GameShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameShowcaseComponent", function() { return GameShowcaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameShowcaseComponent = /** @class */ (function () {
    function GameShowcaseComponent() {
    }
    GameShowcaseComponent.prototype.ngOnInit = function () {
    };
    GameShowcaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game-showcase',
            template: __webpack_require__(/*! ./game-showcase.component.html */ "./src/app/game-showcase/game-showcase.component.html"),
            styles: [__webpack_require__(/*! ./game-showcase.component.css */ "./src/app/game-showcase/game-showcase.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameShowcaseComponent);
    return GameShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-divider {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n#current-work {\r\n    position: relative;\r\n    color: #353535;\r\n}\r\n\r\n#past-games {\r\n    /* float: left; */\r\n    overflow: auto;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n#devs {\r\n    overflow: auto;\r\n}\r\n\r\n#current-work, #past-games, #devs, #contact-card {\r\n    width: 96%;\r\n    margin: 0 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGl2aWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbiNjdXJyZW50LXdvcmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICMzNTM1MzU7XHJcbn1cclxuXHJcbiNwYXN0LWdhbWVzIHtcclxuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuI2RldnMge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNjdXJyZW50LXdvcmssICNwYXN0LWdhbWVzLCAjZGV2cywgI2NvbnRhY3QtY2FyZCB7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner [isTitleCenter] = \"false\" title = \"Stovetop Studios\">Snakeybus</app-banner>\n\n<app-section-head tag = \"WORKING ON\" id = \"current\"></app-section-head>\n<div id = \"current-work\">\n  <app-game-card [isDemo] = \"true\"></app-game-card>\n</div>\n\n<app-section-head tag = \"GAMES\" id = \"games\"></app-section-head>\n<div id = \"past-games\">\n  <app-past-games></app-past-games>\n</div>\n\n<app-section-head tag = \"ABOUT\" id = \"about\"></app-section-head>\n<div id = \"devs\">\n  <app-about></app-about>\n  <app-dev-card name = \"Frank Han\" role = \"Primary Programmer\"></app-dev-card>\n  <app-dev-card name = \"Jeff Zhu\" role = \"Primary Technical Artist\"></app-dev-card>\n</div>\n\n<app-section-head tag = \"contact\" id = \"contact\"></app-section-head>\n<div id = \"contact-card\"><mat-card >contact@stovetop.io </mat-card></div> \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MainComponent = /** @class */ (function () {
    function MainComponent(el, document) {
        this.el = el;
        this.document = document;
    }
    MainComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        // console.log(scrollPosition);
    };
    MainComponent.prototype.ngOnInit = function () {
        // console.log(this.el.nativeElement.getBoundingClientRect());
        // console.log(this.document.body.scrollTop);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainComponent.prototype, "checkScroll", null);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Document])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/past-games/past-games.component.css":
/*!*****************************************************!*\
  !*** ./src/app/past-games/past-games.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    position: relative;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    float: left;\r\n    margin-right: 20px;\r\n    width: 25%;\r\n}\r\n\r\n.card-image {\r\n    height: 250px;\r\n    width: 100%;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.microwave {\r\n    background-image: url(\"/assets/images/microwave_1.jpg\");\r\n}\r\n\r\n.orbital {\r\n    background-image: url(\"/assets/images/orbital_1.gif\");\r\n    \r\n}\r\n\r\n.card button {\r\n    margin: 0 20px 10px 20px;\r\n}\r\n\r\nmat-card-actions {\r\n    text-align: right;\r\n}\r\n\r\n/* mat-card-header {\r\n    position: absolute;\r\n    top: 14;\r\n    color: white;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzdC1nYW1lcy9wYXN0LWdhbWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksd0RBQXdEO0NBQzNEOztBQUVEO0lBQ0ksc0RBQXNEOztDQUV6RDs7QUFFRDtJQUNJLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFDRDs7OztJQUlJIiwiZmlsZSI6InNyYy9hcHAvcGFzdC1nYW1lcy9wYXN0LWdhbWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWljcm93YXZlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL21pY3Jvd2F2ZV8xLmpwZ1wiKTtcclxufVxyXG5cclxuLm9yYml0YWwge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvb3JiaXRhbF8xLmdpZlwiKTtcclxuICAgIFxyXG59XHJcblxyXG4uY2FyZCBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIDIwcHggMTBweCAyMHB4O1xyXG59XHJcblxyXG5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi8qIG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/past-games/past-games.component.html":
/*!******************************************************!*\
  !*** ./src/app/past-games/past-games.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n  <!-- <img mat-card-image src=\"/assets/images/microwave_1.jpg\"> -->\n  <div class = \"card-image microwave\" ></div>\n  <mat-card-header [@fadeIn]=\"isShow ? 'show' : ''\" [@moveUp]=\"isShow ? 'show' : ''\">\n    <mat-card-title>Microwave</mat-card-title>\n    <mat-card-subtitle>Global Game Jam 2017</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button color=\"primary\">NOT AVAILABLE</button>\n  </mat-card-actions>\n</mat-card>\n<mat-card class=\"card\">\n    <!-- <img mat-card-image src=\"/assets/images/orbital_1.gif\"> -->\n    <div class = \"card-image orbital\"></div>\n    <mat-card-header [@fadeIn]=\"isShow ? 'show' : ''\" [@moveUp]=\"isShow ? 'show' : ''\">\n      <mat-card-title>Orbital Defense</mat-card-title>\n      <mat-card-subtitle>TBD</mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-actions>\n      <button mat-button color=\"primary\">NOT AVAILABLE</button>\n    </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./src/app/past-games/past-games.component.ts":
/*!****************************************************!*\
  !*** ./src/app/past-games/past-games.component.ts ***!
  \****************************************************/
/*! exports provided: PastGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastGamesComponent", function() { return PastGamesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PastGamesComponent = /** @class */ (function () {
    function PastGamesComponent(el, document) {
        this.el = el;
        this.document = document;
    }
    PastGamesComponent.prototype.ngOnInit = function () {
    };
    PastGamesComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.getBoundingClientRect().top;
        this.isShow = componentPosition < this.document.documentElement.clientHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PastGamesComponent.prototype, "checkScroll", null);
    PastGamesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-past-games',
            template: __webpack_require__(/*! ./past-games.component.html */ "./src/app/past-games/past-games.component.html"),
            styles: [__webpack_require__(/*! ./past-games.component.css */ "./src/app/past-games/past-games.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('moveUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["moveUp"], {
                            params: { time: '1s', start: '50px', end: '0px' }
                        })
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["fade"])
                    ]),
                ]),
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Document])
    ], PastGamesComponent);
    return PastGamesComponent;
}());



/***/ }),

/***/ "./src/app/screenshot/screenshot.component.css":
/*!*****************************************************!*\
  !*** ./src/app/screenshot/screenshot.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    width: 300px;\r\n    height: 300px;\r\n    margin-bottom: 60px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding: 0;\r\n    flex: 1;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NyZWVuc2hvdC9zY3JlZW5zaG90LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtJQUNwQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsUUFBUTtDQUNYIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVuc2hvdC9zY3JlZW5zaG90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/screenshot/screenshot.component.html":
/*!******************************************************!*\
  !*** ./src/app/screenshot/screenshot.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z8\" [ngStyle]=\"{ 'background-image': 'url(' + image + ')'}\"></mat-card>\r\n"

/***/ }),

/***/ "./src/app/screenshot/screenshot.component.ts":
/*!****************************************************!*\
  !*** ./src/app/screenshot/screenshot.component.ts ***!
  \****************************************************/
/*! exports provided: ScreenshotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenshotComponent", function() { return ScreenshotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenshotComponent = /** @class */ (function () {
    function ScreenshotComponent() {
    }
    ScreenshotComponent.prototype.ngOnInit = function () {
        console.log(this.image);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ScreenshotComponent.prototype, "image", void 0);
    ScreenshotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-screenshot',
            template: __webpack_require__(/*! ./screenshot.component.html */ "./src/app/screenshot/screenshot.component.html"),
            styles: [__webpack_require__(/*! ./screenshot.component.css */ "./src/app/screenshot/screenshot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreenshotComponent);
    return ScreenshotComponent;
}());



/***/ }),

/***/ "./src/app/section-head/section-head.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-head/section-head.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-tag {\r\n    position: absolute;\r\n    display: inline-block;\r\n    padding: 10px;\r\n    color: white;\r\n    /* color: #353535; */\r\n    text-align: center;\r\n    background-color: #353535;\r\n    /* background-color: #673ab7; */\r\n    font-size: 14px;\r\n\r\n}\r\n\r\n.section-title {\r\n    width: 96%;\r\n    margin: 50px auto 80px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi1oZWFkL3NlY3Rpb24taGVhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLGdDQUFnQztJQUNoQyxnQkFBZ0I7O0NBRW5COztBQUVEO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtDQUMvQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb24taGVhZC9zZWN0aW9uLWhlYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uLXRhZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLyogY29sb3I6ICMzNTM1MzU7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNTM1O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzY3M2FiNzsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0byA4MHB4IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/section-head/section-head.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-head/section-head.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"section-title\">\n    <mat-divider></mat-divider>\n    <div class = \"section-tag\" [@moveUp]=\"isShow ? 'show' : ''\">{{tag}}</div>\n</div>"

/***/ }),

/***/ "./src/app/section-head/section-head.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-head/section-head.component.ts ***!
  \********************************************************/
/*! exports provided: SectionHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionHeadComponent", function() { return SectionHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SectionHeadComponent = /** @class */ (function () {
    function SectionHeadComponent(el, document) {
        this.el = el;
        this.document = document;
    }
    SectionHeadComponent.prototype.ngOnInit = function () { };
    SectionHeadComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.getBoundingClientRect().top;
        this.isShow = componentPosition < this.document.documentElement.clientHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SectionHeadComponent.prototype, "tag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SectionHeadComponent.prototype, "checkScroll", null);
    SectionHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-head',
            template: __webpack_require__(/*! ./section-head.component.html */ "./src/app/section-head/section-head.component.html"),
            styles: [__webpack_require__(/*! ./section-head.component.css */ "./src/app/section-head/section-head.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('moveUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["slideDown"])
                    ]),
                ]),
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Document])
    ], SectionHeadComponent);
    return SectionHeadComponent;
}());



/***/ }),

/***/ "./src/app/snakeybus/snakeybus.component.css":
/*!***************************************************!*\
  !*** ./src/app/snakeybus/snakeybus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin: 0 auto;\r\n    width: 96%;\r\n}\r\n\r\n#play-test {\r\n    margin-top: 20px;\r\n    font-size: 22px;\r\n    color: #2C2F33;\r\n    overflow: auto;\r\n    padding: 5%;\r\n}\r\n\r\n#play-test h2 {\r\n    color: #7289DA;\r\n}\r\n\r\n.right {\r\n    text-align: right;\r\n    float: right;\r\n    width: 45%;\r\n}\r\n\r\n.left {\r\n    width: 45%;\r\n    float: left;\r\n}\r\n\r\n#discord {\r\n    background-image: url(\"/assets/images/discord-logo.png\");\r\n    width: 400px;\r\n    height: 150px;\r\n    background-color: #7289DA;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    border-radius: 4px;\r\n    display: inline-block;\r\n}\r\n\r\n#discord:hover {\r\n    background-color: #5667a3;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25ha2V5YnVzL3NuYWtleWJ1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0NBQ2Y7O0FBR0Q7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmOztBQUNEO0lBQ0kseURBQXlEO0lBQ3pELGFBQWE7SUFDYixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvc25ha2V5YnVzL3NuYWtleWJ1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5NiU7XHJcbn1cclxuXHJcbiNwbGF5LXRlc3Qge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMkMyRjMzO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuXHJcbiNwbGF5LXRlc3QgaDIge1xyXG4gICAgY29sb3I6ICM3Mjg5REE7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4jZGlzY29yZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9kaXNjb3JkLWxvZ28ucG5nXCIpO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Mjg5REE7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4jZGlzY29yZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY2N2EzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/snakeybus/snakeybus.component.html":
/*!****************************************************!*\
  !*** ./src/app/snakeybus/snakeybus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner [isTitleCenter] = \"true\" title = \"Snakeybus\"></app-banner>\r\n<app-section-head tag = \"WORK IN PROGRESS\"></app-section-head>\r\n<div class = \"container\">\r\n    <mat-card id = \"play-test\" >\r\n        <div class = \"left\" [@fadeIn]=\"isShow ? 'show' : ''\" [@moveUp]=\"isShow ? 'show' : ''\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum nec urna quis condimentum. Nullam nunc enim, imperdiet a dignissim a, sollicitudin et ex. Quisque ullamcorper pulvinar rhoncus. Ut non ante venenatis, euismod lorem ut, pellentesque justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus accumsan neque, eget mollis tortor tincidunt sed. Quisque laoreet dignissim dolor eget porttitor. Nunc non velit et est accumsan dictum quis feugiat leo. Vivamus et elit lorem. Vivamus arcu orci, sagittis ac ex at, pellentesque dictum libero. Vivamus convallis ipsum sem, non rutrum ante eleifend et. Praesent nec tristique erat, ac porta sapien. Phasellus at velit id nibh condimentum volutpat ut at magna\r\n        </div>\r\n        <div class = \"right\">\r\n            <h2>PLAY TEST</h2>\r\n            <p>\r\n                Interested in helping out? Join the community on discord!\r\n            </p>\r\n            <div id = \"discord\"></div>\r\n        </div>\r\n    </mat-card>\r\n</div>\r\n<app-section-head tag = \"SCREENSHOTS\"></app-section-head>\r\n<div class = \"container\">\r\n    <app-gallery [basePath] = \"imageBasePath\" [images] = \"images\"></app-gallery>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/snakeybus/snakeybus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/snakeybus/snakeybus.component.ts ***!
  \**************************************************/
/*! exports provided: SnakeybusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeybusComponent", function() { return SnakeybusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations */ "./src/app/animations.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _assets_data_snakeybus_images_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/data/snakeybus-images.json */ "./src/assets/data/snakeybus-images.json");
var _assets_data_snakeybus_images_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/data/snakeybus-images.json */ "./src/assets/data/snakeybus-images.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SnakeybusComponent = /** @class */ (function () {
    function SnakeybusComponent(el, document) {
        this.el = el;
        this.document = document;
        this.imageBasePath = '../../assets/images/snakeybus/';
    }
    SnakeybusComponent.prototype.ngOnInit = function () {
        this.images = _assets_data_snakeybus_images_json__WEBPACK_IMPORTED_MODULE_4__["images"];
    };
    SnakeybusComponent.prototype.checkScroll = function () {
        var componentPosition = this.el.nativeElement.getBoundingClientRect().top;
        this.isShow = componentPosition < this.document.documentElement.clientHeight;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SnakeybusComponent.prototype, "checkScroll", null);
    SnakeybusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snakeybus',
            template: __webpack_require__(/*! ./snakeybus.component.html */ "./src/app/snakeybus/snakeybus.component.html"),
            styles: [__webpack_require__(/*! ./snakeybus.component.css */ "./src/app/snakeybus/snakeybus.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('moveUp', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["moveUp"])
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(_animations__WEBPACK_IMPORTED_MODULE_2__["fade"])
                    ]),
                ]),
            ]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], Document])
    ], SnakeybusComponent);
    return SnakeybusComponent;
}());



/***/ }),

/***/ "./src/assets/data/snakeybus-images.json":
/*!***********************************************!*\
  !*** ./src/assets/data/snakeybus-images.json ***!
  \***********************************************/
/*! exports provided: images, default */
/***/ (function(module) {

module.exports = {"images":["elevation.png","miami_thumbnail.png","paris_screenshot.png","snake-trail.gif","transit_bus.gif"]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\frank\Documents\stovetop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
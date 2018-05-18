(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/angular-pimg/fesm5/angular-pimg.js":
/*!*************************************************!*\
  !*** ./dist/angular-pimg/fesm5/angular-pimg.js ***!
  \*************************************************/
/*! exports provided: AngularPimgService, AngularPimgComponent, AngularPimgModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPimgService", function() { return AngularPimgService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPimgComponent", function() { return AngularPimgComponent$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPimgModule", function() { return AngularPimgModule$$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return AngularPimgOptions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularPimgOptions = /** @class */ (function () {
    function AngularPimgOptions() {
        this.className = 'pimg';
        this.fetchOnDemand = false;
        this.placeholderClassName = 'pimg__thumbnail';
        this.dataSaver = {
            wrapperClassName: "pimg_wrapper",
            buttonClassName: "pimg_btn"
        };
    }
    return AngularPimgOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularPimgService = /** @class */ (function () {
    function AngularPimgService(config) {
        this._className = '';
        this._placeholderClassName = 'pimg__placeholder';
        this._fetchOnDemand = false;
        this._dataSaver = {
            wrapperClassName: 'pimg_wrapper',
            buttonClassName: 'pimg_btn'
        };
        if (config)
            this.setConfig(config);
    }
    Object.defineProperty(AngularPimgService.prototype, "wrapperClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this._dataSaver === 'object' ? this._dataSaver.wrapperClassName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularPimgService.prototype, "buttonClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this._dataSaver === 'object' ? this._dataSaver.buttonClassName : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularPimgService.prototype, "className", {
        get: /**
         * @return {?}
         */
        function () {
            return this._className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularPimgService.prototype, "placeholderClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholderClassName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularPimgService.prototype, "dataSaver", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dataSaver;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularPimgService.prototype, "fetchOnDemand", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fetchOnDemand;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} __0
     * @return {?}
     */
    AngularPimgService.prototype.setConfig = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _b = _a.className, className = _b === void 0 ? 'pimg' : _b, _c = _a.dataSaver, dataSaver = _c === void 0 ? false : _c, _d = _a.fetchOnDemand, fetchOnDemand = _d === void 0 ? false : _d, _e = _a.placeholderClassName;
        this._className = className;
        this._fetchOnDemand = fetchOnDemand;
        if (typeof dataSaver === 'object') {
            this._dataSaver = dataSaver;
        }
        else if (dataSaver === false) {
            this._dataSaver = dataSaver;
        }
    };
    AngularPimgService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularPimgService.ctorParameters = function () { return [
        { type: AngularPimgOptions, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    /** @nocollapse */ AngularPimgService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularPimgService_Factory() { return new AngularPimgService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(AngularPimgOptions, 8)); }, token: AngularPimgService, providedIn: "root" });
    return AngularPimgService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularPimgComponent$$1 = /** @class */ (function () {
    function AngularPimgComponent$$1(domSanitizer, options) {
        this.domSanitizer = domSanitizer;
        this.options = options;
        this.onFetched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.wrapperClassName = '';
        this.buttonClassName = '';
        this.isObject = function (x) { return typeof x === 'object'; };
        this.isUndefined = function (x) { return typeof x === 'undefined'; };
        // Set the default configuration options if option is not present
        if (this.isUndefined(this.fetchOnDemand)) {
            this.fetchOnDemand = this.options.fetchOnDemand;
        }
        if (this.isUndefined(this.placeholderClassName)) {
            this.placeholderClassName = this.options.placeholderClassName;
        }
        if (this.isUndefined(this.dataSaver)) ;
        if (this.isObject(this.dataSaver)) {
            this.setFetchOnDemand();
            // set buttonClassName and wrapperClassName
            this.buttonClassName = this.dataSaver.wrapperClassName;
        }
        // Setting up
        if (this.dataSaver) {
            this.delayed = true;
        }
        else if (this.fetchOnDemand) {
            this.loading = true;
            this.setFetchOnDemand();
        }
        else {
            this.fetchImage();
        }
        if (this.src && this.src.includes('cloudinary')) {
            this.placeholder =
                this.placeholder || this.src.replace('/upload/', '/upload/c_thumb,w_30/');
        }
        this.classes = this.class + " " + this.placeholderClassName + " ";
    }
    /**
     * @return {?}
     */
    AngularPimgComponent$$1.prototype.setFetchOnDemand = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ observer = new IntersectionObserver(function (entries) {
            var /** @type {?} */ image = entries[0];
            if (image.isIntersecting) {
                _this.fetchImage();
                _this.delayed = false;
                observer.disconnect();
            }
        });
        observer.observe(null);
    };
    /**
     * @return {?}
     */
    AngularPimgComponent$$1.prototype.fetchImage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fetch(this.src)
            .then(function (res) { return res.blob(); })
            .then(function (res) {
            _this.blob = _this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
            _this.loading = false;
            _this.delayed = false;
            _this.onFetched.emit();
        })
            .catch(function (err) {
            _this.onError.emit(err);
        });
    };
    /**
     * @return {?}
     */
    AngularPimgComponent$$1.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    AngularPimgComponent$$1.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular-pimg',
                    template: "<div *ngIf=\"dataSaver && loading; else loadingContent\" [ngClass]=\"dataSaver.wrapperClassName\">\n  <img [ngClass]=\"classes\" [src]=\"placeholder\" />\n  <button [ngClass]=\"dataSaver.buttonClassName\" (click)=\"fetchImage()\">\n    Load image\n  </button>\n</div>\n<ng-template #loadingContent>\n  <img [ngClass]=\"classes\" [src]=\"placeholder\" />\n</ng-template>\n<img *ngIf=\"!dataSaver || !loading\" [ngClass]=\"classes\" [src]=\"blob\" />",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    AngularPimgComponent$$1.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: AngularPimgService, },
    ]; };
    AngularPimgComponent$$1.propDecorators = {
        "dataSaver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fetchOnDemand": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholderClassName": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "class": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onFetched": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "onError": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AngularPimgComponent$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularPimgModule$$1 = /** @class */ (function () {
    function AngularPimgModule$$1(parentModule) {
        if (parentModule) {
            throw new Error("The Angular Pimg Module is already loaded. Import it only in your AppModule");
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    AngularPimgModule$$1.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: AngularPimgModule$$1,
            providers: [
                { provide: AngularPimgService, useValue: options }
            ]
        };
    };
    AngularPimgModule$$1.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [AngularPimgComponent$$1],
                    exports: [AngularPimgComponent$$1]
                },] },
    ];
    /** @nocollapse */
    AngularPimgModule$$1.ctorParameters = function () { return [
        { type: AngularPimgModule$$1, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
    ]; };
    return AngularPimgModule$$1;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2NvbmZpZy1vcHRpb25zLnRzIiwibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcGltZy9saWIvYW5ndWxhci1waW1nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQW5ndWxhclBpbWdPcHRpb25zIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmcgPSAncGltZyc7XG4gIGZldGNoT25EZW1hbmQ6IGJvb2xlYW4gPSBmYWxzZTsgIFxuICBwbGFjZWhvbGRlckNsYXNzTmFtZTogc3RyaW5nID0gJ3BpbWdfX3RodW1ibmFpbCc7XG4gIGRhdGFTYXZlcjogYm9vbGVhbiB8IHsgd3JhcHBlckNsYXNzTmFtZTogc3RyaW5nLCBidXR0b25DbGFzc05hbWU6IHN0cmluZyB9ID0ge1xuICAgIHdyYXBwZXJDbGFzc05hbWU6IFwicGltZ193cmFwcGVyXCIsXG4gICAgYnV0dG9uQ2xhc3NOYW1lOiBcInBpbWdfYnRuXCJcbiAgfVxufSIsImltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyV2FpdEJhcnJpZXIgfSBmcm9tICdibG9ja2luZy1wcm94eS9idWlsdC9saWIvYW5ndWxhcl93YWl0X2JhcnJpZXInO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdPcHRpb25zIH0gZnJvbSAnLi9jb25maWctb3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nU2VydmljZSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nID0gJyc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyQ2xhc3NOYW1lOiBzdHJpbmcgPSAncGltZ19fcGxhY2Vob2xkZXInO1xuICBwcml2YXRlIF9mZXRjaE9uRGVtYW5kOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2RhdGFTYXZlcjogYm9vbGVhbiB8IHsgd3JhcHBlckNsYXNzTmFtZTogc3RyaW5nLCBidXR0b25DbGFzc05hbWU6IHN0cmluZyB9ID0ge1xuICAgIHdyYXBwZXJDbGFzc05hbWU6ICdwaW1nX3dyYXBwZXInLFxuICAgIGJ1dHRvbkNsYXNzTmFtZTogJ3BpbWdfYnRuJ1xuICB9XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIGNvbmZpZzogQW5ndWxhclBpbWdPcHRpb25zKSB7XG4gICAgaWYgKGNvbmZpZykgdGhpcy5zZXRDb25maWcoY29uZmlnKVxuICB9XG5cbiAgZ2V0IHdyYXBwZXJDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2RhdGFTYXZlciA9PT0gJ29iamVjdCcgPyB0aGlzLl9kYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZSA6ICcnXG4gIH1cbiAgXG4gIGdldCBidXR0b25DbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2RhdGFTYXZlciA9PT0gJ29iamVjdCcgPyB0aGlzLl9kYXRhU2F2ZXIuYnV0dG9uQ2xhc3NOYW1lIDogJydcbiAgfVxuXG4gIGdldCBjbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lXG4gIH1cblxuICBnZXQgcGxhY2Vob2xkZXJDbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXJDbGFzc05hbWVcbiAgfVxuXG4gIGdldCBkYXRhU2F2ZXIoKTogYm9vbGVhbiB8IHsgd3JhcHBlckNsYXNzTmFtZTogc3RyaW5nLCBidXR0b25DbGFzc05hbWU6IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNhdmVyXG4gIH1cblxuICBnZXQgZmV0Y2hPbkRlbWFuZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmV0Y2hPbkRlbWFuZFxuICB9XG5cbiAgc2V0Q29uZmlnKHtcbiAgICBjbGFzc05hbWUgPSAncGltZycsXG4gICAgZGF0YVNhdmVyID0gZmFsc2UsXG4gICAgZmV0Y2hPbkRlbWFuZCA9IGZhbHNlLFxuICAgIHBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gJ3BpbWdfX3BsYWNlaG9sZGVyJyxcbiAgfTogQW5ndWxhclBpbWdPcHRpb25zKSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gICAgdGhpcy5fZmV0Y2hPbkRlbWFuZCA9IGZldGNoT25EZW1hbmRcbiAgICBpZiAodHlwZW9mIGRhdGFTYXZlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuX2RhdGFTYXZlciA9IGRhdGFTYXZlclxuICAgIH0gZWxzZSBpZiAoZGF0YVNhdmVyID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5fZGF0YVNhdmVyID0gZGF0YVNhdmVyXG4gICAgfVxuXG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ1NlcnZpY2UgfSBmcm9tICcuLi9wdWJsaWNfYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW5ndWxhci1waW1nJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwiZGF0YVNhdmVyICYmIGxvYWRpbmc7IGVsc2UgbG9hZGluZ0NvbnRlbnRcIiBbbmdDbGFzc109XCJkYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZVwiPlxuICA8aW1nIFtuZ0NsYXNzXT1cImNsYXNzZXNcIiBbc3JjXT1cInBsYWNlaG9sZGVyXCIgLz5cbiAgPGJ1dHRvbiBbbmdDbGFzc109XCJkYXRhU2F2ZXIuYnV0dG9uQ2xhc3NOYW1lXCIgKGNsaWNrKT1cImZldGNoSW1hZ2UoKVwiPlxuICAgIExvYWQgaW1hZ2VcbiAgPC9idXR0b24+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ0NvbnRlbnQ+XG4gIDxpbWcgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIFtzcmNdPVwicGxhY2Vob2xkZXJcIiAvPlxuPC9uZy10ZW1wbGF0ZT5cbjxpbWcgKm5nSWY9XCIhZGF0YVNhdmVyIHx8ICFsb2FkaW5nXCIgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIFtzcmNdPVwiYmxvYlwiIC8+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUGltZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGFTYXZlcjogeyB3cmFwcGVyQ2xhc3NOYW1lOiBzdHJpbmcsIGJ1dHRvbkNsYXNzTmFtZTogc3RyaW5nIH0gJiBmYWxzZVxuICBASW5wdXQoKSBzcmM6IHN0cmluZ1xuICBASW5wdXQoKSBmZXRjaE9uRGVtYW5kOiBib29sZWFuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmdcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJDbGFzc05hbWU6IHN0cmluZ1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nXG4gIEBPdXRwdXQoKSBvbkZldGNoZWQ6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBAT3V0cHV0KCkgb25FcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgd3JhcHBlckNsYXNzTmFtZTogc3RyaW5nID0gJydcbiAgYnV0dG9uQ2xhc3NOYW1lOiBzdHJpbmcgPSAnJ1xuICBibG9iOiBTYWZlVXJsXG4gIGRlbGF5ZWQ6IGJvb2xlYW5cbiAgbG9hZGluZzogYm9vbGVhblxuICBjbGFzc2VzOiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIG9wdGlvbnM6IEFuZ3VsYXJQaW1nU2VydmljZSkge1xuICAgIC8vIFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9wdGlvbnMgaWYgb3B0aW9uIGlzIG5vdCBwcmVzZW50XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5mZXRjaE9uRGVtYW5kKSkge1xuICAgICAgdGhpcy5mZXRjaE9uRGVtYW5kID0gdGhpcy5vcHRpb25zLmZldGNoT25EZW1hbmRcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXJDbGFzc05hbWVcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5kYXRhU2F2ZXIpKSB7XG4gICAgICAvLyB0aGlzLmRhdGFTYXZlciA9IHRoaXMub3B0aW9ucy5kYXRhU2F2ZXJcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5kYXRhU2F2ZXIpKSB7XG4gICAgICB0aGlzLnNldEZldGNoT25EZW1hbmQoKVxuICAgICAgLy8gc2V0IGJ1dHRvbkNsYXNzTmFtZSBhbmQgd3JhcHBlckNsYXNzTmFtZVxuICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSB0aGlzLmRhdGFTYXZlci53cmFwcGVyQ2xhc3NOYW1lXG4gICAgfVxuXG4gICAgLy8gU2V0dGluZyB1cFxuXHRcdGlmICh0aGlzLmRhdGFTYXZlcikge1xuXHRcdFx0dGhpcy5kZWxheWVkID0gdHJ1ZVxuXHRcdH0gZWxzZSBpZiAodGhpcy5mZXRjaE9uRGVtYW5kKSB7XG5cdFx0XHR0aGlzLmxvYWRpbmcgPSB0cnVlXG5cdFx0XHR0aGlzLnNldEZldGNoT25EZW1hbmQoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmZldGNoSW1hZ2UoKVxuXHRcdH1cbiAgICBpZiAodGhpcy5zcmMgJiYgdGhpcy5zcmMuaW5jbHVkZXMoJ2Nsb3VkaW5hcnknKSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5zcmMucmVwbGFjZSgnL3VwbG9hZC8nLCAnL3VwbG9hZC9jX3RodW1iLHdfMzAvJylcblxuICAgIH1cbiAgICB0aGlzLmNsYXNzZXMgPSBgJHt0aGlzLmNsYXNzfSAke3RoaXMucGxhY2Vob2xkZXJDbGFzc05hbWV9IGBcbiAgfVxuXG4gIHNldEZldGNoT25EZW1hbmQoKSB7XG4gICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgbGV0IGltYWdlID0gZW50cmllc1swXVxuICAgICAgaWYgKGltYWdlLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hJbWFnZSgpXG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlXG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgfVxuICAgIH0pXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShudWxsKVxuICB9XG5cbiAgZmV0Y2hJbWFnZSgpIHtcbiAgICBmZXRjaCh0aGlzLnNyYylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuYmxvYigpKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5ibG9iID0gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybChVUkwuY3JlYXRlT2JqZWN0VVJMKHJlcykpXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlXG4gICAgICAgIHRoaXMub25GZXRjaGVkLmVtaXQoKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLm9uRXJyb3IuZW1pdChlcnIpXG4gICAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBpc09iamVjdCA9IHggPT4gdHlwZW9mIHggPT09ICdvYmplY3QnXG4gIGlzVW5kZWZpbmVkID0geCA9PiB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCdcblxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nQ29tcG9uZW50IH0gZnJvbSAnLi9hbmd1bGFyLXBpbWcuY29tcG9uZW50JztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nU2VydmljZSB9IGZyb20gJy4uL3B1YmxpY19hcGknO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdPcHRpb25zIH0gZnJvbSAnLi9jb25maWctb3B0aW9ucyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0FuZ3VsYXJQaW1nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0FuZ3VsYXJQaW1nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUGltZ01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQW5ndWxhclBpbWdNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgQW5ndWxhciBQaW1nIE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IG9ubHkgaW4geW91ciBBcHBNb2R1bGVcIilcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucz86IFBhcnRpYWw8QW5ndWxhclBpbWdPcHRpb25zPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhclBpbWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBBbmd1bGFyUGltZ1NlcnZpY2UsIHVzZVZhbHVlOiBvcHRpb25zIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBbmd1bGFyUGltZ0NvbXBvbmVudCIsIkFuZ3VsYXJQaW1nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUE7O3lCQUNzQixNQUFNOzZCQUNELEtBQUs7b0NBQ0MsaUJBQWlCO3lCQUM2QjtZQUMzRSxnQkFBZ0IsRUFBRSxjQUFjO1lBQ2hDLGVBQWUsRUFBRSxVQUFVO1NBQzVCOzs2QkFQSDtJQVFDOzs7Ozs7QUNSRDtJQWVFLDRCQUF3QjswQkFQSyxFQUFFO3FDQUNTLG1CQUFtQjs4QkFDekIsS0FBSzswQkFDK0M7WUFDcEYsZ0JBQWdCLEVBQUUsY0FBYztZQUNoQyxlQUFlLEVBQUUsVUFBVTtTQUM1QjtRQUVDLElBQUksTUFBTTtZQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7S0FDbkM7SUFFRCxzQkFBSSxnREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7U0FDbkY7OztPQUFBO0lBRUQsc0JBQUksK0NBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFBO1NBQ2xGOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUE7U0FDdkI7OztPQUFBO0lBRUQsc0JBQUksb0RBQW9COzs7O1FBQXhCO1lBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUE7U0FDbEM7OztPQUFBO0lBRUQsc0JB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

/***/ }),

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>angular pimg</h1>\n\n<angular-pimg\nsrc=\"{{'https://cdn-images-1.medium.com/max/800/1*9vbVT2n-mI_ls0wVIdFMLQ.jpeg' }}\"\n>\n</angular-pimg>"

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
        this.title = 'app';
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
/* harmony import */ var angular_pimg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-pimg */ "./dist/angular-pimg/fesm5/angular-pimg.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_pimg__WEBPACK_IMPORTED_MODULE_2__["AngularPimgModule"].forRoot({ dataSaver: true })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ekene/code/personal-projects/libraries/angular-pimg-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
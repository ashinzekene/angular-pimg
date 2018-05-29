(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/angular-pimg/fesm5/angular-pimg.js":
/*!*************************************************!*\
  !*** ./dist/angular-pimg/fesm5/angular-pimg.js ***!
  \*************************************************/
/*! exports provided: AngularPimgService, AngularPimgComponent, AngularPimgModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPimgService", function() { return AngularPimgService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPimgComponent", function() { return AngularPimgComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPimgModule", function() { return AngularPimgModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularPimgService = /** @class */ (function () {
    function AngularPimgService(options) {
        this._placeholderClassName = 'pimg__placeholder';
        this._fetchOnDemand = false;
        this._buttonClassName = 'pimg_btn';
        this._wrapperClassName = 'pimg_wrapper';
        if (options) {
            this.setConfig(options);
        }
    }
    Object.defineProperty(AngularPimgService.prototype, "wrapperClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._wrapperClassName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AngularPimgService.prototype, "buttonClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._buttonClassName;
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
        var className = _a.className, dataSaver = _a.dataSaver, fetchOnDemand = _a.fetchOnDemand, placeholderClassName = _a.placeholderClassName;
        this._className = typeof className !== 'undefined' ? className : this.className;
        this._fetchOnDemand = typeof fetchOnDemand !== 'undefined' ? fetchOnDemand : this.fetchOnDemand;
        this._placeholderClassName = typeof placeholderClassName !== 'undefined' ? placeholderClassName : this.placeholderClassName;
        if (typeof dataSaver === 'undefined') {
            return;
        }
        if (typeof dataSaver === 'object') {
            this._buttonClassName = dataSaver.buttonClassName;
            this._wrapperClassName = dataSaver.wrapperClassName;
        }
        else {
            this._dataSaver = true; // dataSaver is true
        }
    };
    AngularPimgService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularPimgService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['Options',] },] },
    ]; };
    /** @nocollapse */ AngularPimgService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function AngularPimgService_Factory() { return new AngularPimgService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])("Options", 8)); }, token: AngularPimgService, providedIn: "root" });
    return AngularPimgService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularPimgComponent = /** @class */ (function () {
    function AngularPimgComponent(el, domSanitizer, options) {
        this.el = el;
        this.domSanitizer = domSanitizer;
        this.options = options;
        this.style = { display: 'block' };
        this.fetched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.wrapperClassName = '';
        this.buttonClassName = '';
        this.blob = '';
        this.isIntersecting = false;
        this.isObject = function (x) { return typeof x === 'object'; };
        this.isUndefined = function (x) { return typeof x === 'undefined'; };
        this.insertInput();
        this.setUp();
    }
    /**
     * @return {?}
     */
    AngularPimgComponent.prototype.setFetchOnDemand = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var /** @type {?} */ observer = new IntersectionObserver(function (entries) {
            var /** @type {?} */ image = entries[0];
            if (image.isIntersecting && !_this.isIntersecting) {
                _this.fetchImage();
                _this.isIntersecting = true;
                console.log('Called by intersection API');
                _this.delayed = false;
                observer.disconnect();
            }
        });
        observer.observe(this.el.nativeElement);
    };
    /**
     * @return {?}
     */
    AngularPimgComponent.prototype.fetchImage = /**
     * @return {?}
     */
    function () {
        var _this = this;
        fetch(this.src)
            .then(function (res) { return res.blob(); })
            .then(function (res) {
            console.log(res);
            _this.blob = _this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
            _this.loading = false;
            _this.isIntersecting = false;
            _this.delayed = false;
            _this.fetched.emit();
        })
            .catch(function (err) {
            _this.error.emit(err);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AngularPimgComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var /** @type {?} */ props = ['src', 'fetchOnDemand', 'placeholder', 'placeholderClassName', 'className', 'style'];
        var _loop_1 = function (prop) {
            if (props.findIndex(function (val) { return val === prop; }) > 0 && !this_1.isUndefined(changes[prop].currentValue)) {
                console.log(prop + " is not undefined. It has changed");
                this_1[prop] = changes[prop].currentValue;
            }
            else {
                if (prop === 'dataSaver' && this_1.isObject(changes[prop])) {
                    this_1.buttonClassName = changes[prop].currentValue.buttonClassName;
                    this_1.placeholderClassName = changes[prop].currentValue.placeholderClassName;
                }
            }
        };
        var this_1 = this;
        for (var /** @type {?} */ prop in changes) {
            _loop_1(prop);
        }
        this.setUp();
        // changes.dataSaver ? newValues.dataSaver = changes.dataSaver.currentValue : null;
        // changes.src ? newValues.src = changes.src.currentValue : null;
        // changes.fetchOnDemand ? newValues.fetchOnDemand = changes.fetchOnDemand.currentValue : null;
        // changes.placeholder ? newValues.placeholder = changes.placeholder.currentValue : null;
        // changes.placeholderClassName ? newValues.placeholderClassName = changes.placeholderClassName.currentValue : null;
        // changes.class ? newValues.class = changes.class.currentValue : null;
        // changes.style ? newValues.style = changes.style.currentValue : null;
    };
    /**
     * @return {?}
     */
    AngularPimgComponent.prototype.insertInput = /**
     * @return {?}
     */
    function () {
        // Called on initialization; Set the default configuration options if option is not present
        console.log('Config options', this.options);
        if (this.isUndefined(this.fetchOnDemand)) {
            this.fetchOnDemand = this.options.fetchOnDemand;
        }
        if (this.isUndefined(this.placeholderClassName)) {
            this.placeholderClassName = this.options.placeholderClassName;
        }
        if (this.isUndefined(this.dataSaver)) {
            this.dataSaver = this.options.dataSaver;
        }
        if (this.isUndefined(this.className)) {
            this.className = this.options.className;
        }
        if (this.isObject(this.dataSaver)) {
            // set buttonClassName and wrapperClassName
            this.buttonClassName = this.dataSaver.buttonClassName;
            this.wrapperClassName = this.dataSaver.wrapperClassName;
        }
        else {
            this.buttonClassName = this.options.buttonClassName;
            this.wrapperClassName = this.options.wrapperClassName;
        }
    };
    /**
     * @return {?}
     */
    AngularPimgComponent.prototype.setUp = /**
     * @return {?}
     */
    function () {
        if (this.dataSaver) {
            this.delayed = true;
        }
        else if (this.fetchOnDemand) {
            this.loading = true;
            this.setFetchOnDemand();
        }
        else {
            this.fetchImage();
            console.log('Fetching image, due to config', this.dataSaver);
        }
        if (this.src && this.src.includes('cloudinary')) {
            this.placeholder =
                this.placeholder || this.src.replace('/upload/', '/upload/c_thumb,w_30/');
        }
        this.classes = this.className + " " + this.placeholderClassName;
    };
    AngularPimgComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'angular-pimg',
                    template: "<div [ngClass]=\"wrapperClassName\" *ngIf=\"(dataSaver && loading) || delayed; else loadingContent\">\n  <img [ngClass]=\"classes\" [ngStyle]=\"style\" [src]=\"placeholder\" />\n  <button [ngClass]=\"buttonClassName\" (click)=\"fetchImage()\">\n    Load image\n  </button>\n</div>\n<ng-template #loadingContent>\n  <img *ngIf=\"loading; else otherContent\" [ngClass]=\"placeholderClassName\" [ngStyle]=\"style\" [src]=\"placeholder\" />\n  <ng-template #otherContent>\n    <img [ngStyle]=\"style\" [ngClass]=\"classes\" [src]=\"blob\" />\n  </ng-template>\n</ng-template>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    AngularPimgComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], },
        { type: AngularPimgService, },
    ]; };
    AngularPimgComponent.propDecorators = {
        "dataSaver": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fetchOnDemand": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "placeholderClassName": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "className": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "style": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "fetched": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "error": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return AngularPimgComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AngularPimgModule = /** @class */ (function () {
    function AngularPimgModule(parentModule) {
        if (parentModule) {
            throw new Error('The Angular Pimg Module is already loaded. Import it only in your AppModule');
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    AngularPimgModule.forRoot = /**
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        return {
            ngModule: AngularPimgModule,
            providers: [
                AngularPimgService,
                { provide: 'Options', useValue: options }
            ]
        };
    };
    AngularPimgModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [AngularPimgComponent],
                    exports: [AngularPimgComponent]
                },] },
    ];
    /** @nocollapse */
    AngularPimgModule.ctorParameters = function () { return [
        { type: AngularPimgModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
    ]; };
    return AngularPimgModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcGltZy9saWIvYW5ndWxhci1waW1nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyQ2xhc3NOYW1lID0gJ3BpbWdfX3BsYWNlaG9sZGVyJztcbiAgcHJpdmF0ZSBfZmV0Y2hPbkRlbWFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kYXRhU2F2ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2J1dHRvbkNsYXNzTmFtZSA9ICdwaW1nX2J0bic7XG4gIHByaXZhdGUgX3dyYXBwZXJDbGFzc05hbWUgPSAncGltZ193cmFwcGVyJztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdPcHRpb25zJykgb3B0aW9uczogQW5ndWxhclBpbWdPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3cmFwcGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZXJDbGFzc05hbWU7XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldCBjbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IGRhdGFTYXZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNhdmVyO1xuICB9XG5cbiAgZ2V0IGZldGNoT25EZW1hbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoT25EZW1hbmQ7XG4gIH1cblxuICBzZXRDb25maWcoeyBjbGFzc05hbWUsIGRhdGFTYXZlciwgZmV0Y2hPbkRlbWFuZCwgcGxhY2Vob2xkZXJDbGFzc05hbWUgfTogUGFydGlhbDxBbmd1bGFyUGltZ09wdGlvbnM+KSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBjbGFzc05hbWUgOiB0aGlzLmNsYXNzTmFtZTtcbiAgICB0aGlzLl9mZXRjaE9uRGVtYW5kID0gdHlwZW9mIGZldGNoT25EZW1hbmQgIT09ICd1bmRlZmluZWQnID8gZmV0Y2hPbkRlbWFuZCA6IHRoaXMuZmV0Y2hPbkRlbWFuZDtcbiAgICB0aGlzLl9wbGFjZWhvbGRlckNsYXNzTmFtZSA9IHR5cGVvZiBwbGFjZWhvbGRlckNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBwbGFjZWhvbGRlckNsYXNzTmFtZSA6IHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgaWYgKHR5cGVvZiBkYXRhU2F2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YVNhdmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5fYnV0dG9uQ2xhc3NOYW1lID0gZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX3dyYXBwZXJDbGFzc05hbWUgPSBkYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YVNhdmVyID0gdHJ1ZTsgLy8gZGF0YVNhdmVyIGlzIHRydWVcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXBpbWcnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwid3JhcHBlckNsYXNzTmFtZVwiICpuZ0lmPVwiKGRhdGFTYXZlciAmJiBsb2FkaW5nKSB8fCBkZWxheWVkOyBlbHNlIGxvYWRpbmdDb250ZW50XCI+XG4gIDxpbWcgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW3NyY109XCJwbGFjZWhvbGRlclwiIC8+XG4gIDxidXR0b24gW25nQ2xhc3NdPVwiYnV0dG9uQ2xhc3NOYW1lXCIgKGNsaWNrKT1cImZldGNoSW1hZ2UoKVwiPlxuICAgIExvYWQgaW1hZ2VcbiAgPC9idXR0b24+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ0NvbnRlbnQ+XG4gIDxpbWcgKm5nSWY9XCJsb2FkaW5nOyBlbHNlIG90aGVyQ29udGVudFwiIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NOYW1lXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbc3JjXT1cInBsYWNlaG9sZGVyXCIgLz5cbiAgPG5nLXRlbXBsYXRlICNvdGhlckNvbnRlbnQ+XG4gICAgPGltZyBbbmdTdHlsZV09XCJzdHlsZVwiIFtuZ0NsYXNzXT1cImNsYXNzZXNcIiBbc3JjXT1cImJsb2JcIiAvPlxuICA8L25nLXRlbXBsYXRlPlxuPC9uZy10ZW1wbGF0ZT5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YVNhdmVyOiBhbnk7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBmZXRjaE9uRGVtYW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuICBAT3V0cHV0KCkgZmV0Y2hlZDogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB3cmFwcGVyQ2xhc3NOYW1lID0gJyc7XG4gIGJ1dHRvbkNsYXNzTmFtZSA9ICcnO1xuICBibG9iOiBTYWZlVXJsID0gJyc7XG4gIGRlbGF5ZWQ6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGNsYXNzZXM6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0ludGVyc2VjdGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgb3B0aW9uczogQW5ndWxhclBpbWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbnNlcnRJbnB1dCgpO1xuICAgIHRoaXMuc2V0VXAoKTtcbiAgfVxuXG4gIHNldEZldGNoT25EZW1hbmQoKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IGVudHJpZXNbMF07XG4gICAgICBpZiAoaW1hZ2UuaXNJbnRlcnNlY3RpbmcgJiYgIXRoaXMuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5mZXRjaEltYWdlKCk7XG4gICAgICAgIHRoaXMuaXNJbnRlcnNlY3RpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGVkIGJ5IGludGVyc2VjdGlvbiBBUEknKTtcbiAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBmZXRjaEltYWdlKCkge1xuICAgIGZldGNoKHRoaXMuc3JjKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB0aGlzLmJsb2IgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKFVSTC5jcmVhdGVPYmplY3RVUkwocmVzKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZldGNoZWQuZW1pdCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IG5ld1ZhbHVlczogYW55ID0ge307XG4gICAgY29uc3QgcHJvcHMgPSBbJ3NyYycsICdmZXRjaE9uRGVtYW5kJywgJ3BsYWNlaG9sZGVyJywgJ3BsYWNlaG9sZGVyQ2xhc3NOYW1lJywgJ2NsYXNzTmFtZScsICdzdHlsZSddO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAocHJvcHMuZmluZEluZGV4KHZhbCA9PiB2YWwgPT09IHByb3ApID4gMCAmJiAhdGhpcy5pc1VuZGVmaW5lZChjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJvcH0gaXMgbm90IHVuZGVmaW5lZC4gSXQgaGFzIGNoYW5nZWRgKTtcbiAgICAgICAgdGhpc1twcm9wXSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdkYXRhU2F2ZXInICYmIHRoaXMuaXNPYmplY3QoY2hhbmdlc1twcm9wXSkpIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gY2hhbmdlc1twcm9wXS5jdXJyZW50VmFsdWUucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRVcCgpO1xuICAgIC8vIGNoYW5nZXMuZGF0YVNhdmVyID8gbmV3VmFsdWVzLmRhdGFTYXZlciA9IGNoYW5nZXMuZGF0YVNhdmVyLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5zcmMgPyBuZXdWYWx1ZXMuc3JjID0gY2hhbmdlcy5zcmMuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLmZldGNoT25EZW1hbmQgPyBuZXdWYWx1ZXMuZmV0Y2hPbkRlbWFuZCA9IGNoYW5nZXMuZmV0Y2hPbkRlbWFuZC5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMucGxhY2Vob2xkZXIgPyBuZXdWYWx1ZXMucGxhY2Vob2xkZXIgPSBjaGFuZ2VzLnBsYWNlaG9sZGVyLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA/IG5ld1ZhbHVlcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA9IGNoYW5nZXMucGxhY2Vob2xkZXJDbGFzc05hbWUuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLmNsYXNzID8gbmV3VmFsdWVzLmNsYXNzID0gY2hhbmdlcy5jbGFzcy5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMuc3R5bGUgPyBuZXdWYWx1ZXMuc3R5bGUgPSBjaGFuZ2VzLnN0eWxlLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gIH1cblxuICBpbnNlcnRJbnB1dCgpIHtcbiAgICAvLyBDYWxsZWQgb24gaW5pdGlhbGl6YXRpb247IFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9wdGlvbnMgaWYgb3B0aW9uIGlzIG5vdCBwcmVzZW50XG4gICAgY29uc29sZS5sb2coJ0NvbmZpZyBvcHRpb25zJywgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLmZldGNoT25EZW1hbmQpKSB7XG4gICAgICB0aGlzLmZldGNoT25EZW1hbmQgPSB0aGlzLm9wdGlvbnMuZmV0Y2hPbkRlbWFuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMuZGF0YVNhdmVyKSkge1xuICAgICAgdGhpcy5kYXRhU2F2ZXIgPSB0aGlzLm9wdGlvbnMuZGF0YVNhdmVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLmNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5kYXRhU2F2ZXIpKSB7XG4gICAgICAvLyBzZXQgYnV0dG9uQ2xhc3NOYW1lIGFuZCB3cmFwcGVyQ2xhc3NOYW1lXG4gICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IHRoaXMuZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMud3JhcHBlckNsYXNzTmFtZSA9IHRoaXMuZGF0YVNhdmVyLndyYXBwZXJDbGFzc05hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnV0dG9uQ2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMud3JhcHBlckNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy53cmFwcGVyQ2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIHNldFVwKCkge1xuICAgIGlmICh0aGlzLmRhdGFTYXZlcikge1xuICAgICAgdGhpcy5kZWxheWVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmV0Y2hPbkRlbWFuZCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0RmV0Y2hPbkRlbWFuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZldGNoSW1hZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBpbWFnZSwgZHVlIHRvIGNvbmZpZycsIHRoaXMuZGF0YVNhdmVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjLmluY2x1ZGVzKCdjbG91ZGluYXJ5JykpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPVxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyIHx8IHRoaXMuc3JjLnJlcGxhY2UoJy91cGxvYWQvJywgJy91cGxvYWQvY190aHVtYix3XzMwLycpO1xuICAgIH1cbiAgICB0aGlzLmNsYXNzZXMgPSBgJHt0aGlzLmNsYXNzTmFtZX0gJHt0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lfWA7XG4gIH1cblxuICBpc09iamVjdCA9IHggPT4gdHlwZW9mIHggPT09ICdvYmplY3QnO1xuICBpc1VuZGVmaW5lZCA9IHggPT4gdHlwZW9mIHggPT09ICd1bmRlZmluZWQnO1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ0NvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1waW1nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLW9wdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyUGltZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyUGltZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFuZ3VsYXJQaW1nTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgQW5ndWxhciBQaW1nIE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IG9ubHkgaW4geW91ciBBcHBNb2R1bGUnKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucz86IFBhcnRpYWw8QW5ndWxhclBpbWdPcHRpb25zPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhclBpbWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQW5ndWxhclBpbWdTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdPcHRpb25zJywgdXNlVmFsdWU6IG9wdGlvbnMgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0lBY0UsNEJBQTJDO3FDQU5YLG1CQUFtQjs4QkFDMUIsS0FBSztnQ0FFSCxVQUFVO2lDQUNULGNBQWM7UUFHeEMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxzQkFBSSxnREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUMvQjs7O09BQUE7SUFFRCxzQkFBSSwrQ0FBZTs7OztRQUFuQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7OztPQUFBO0lBRUQsc0JBQUksb0RBQW9COzs7O1FBQXhCO1lBQ0UsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDbkM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4Qjs7O09BQUE7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

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

module.exports = "<h1>angular pimg</h1>\n<div class=\"row\">\n  <div class=\"form-group col-md-7 col-lg-5\">\n    <input type=\"text\" [(ngModel)]=\"srcSha\" class=\"form-control\">\n    <button class=\"btn btn-secondary\" (click)=\"changeSrc()\">Oya Load am</button>\n  </div>\n</div>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<angular-pimg\n  [src]=\"src\" [style]=\"{ width: '100px'}\">\n</angular-pimg>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<angular-pimg\n  [src]=\"src\" \n  [style]=\"{ width: '300px'}\"\n  [dataSaver]=\"{placeholderClassName:'my-placeholder', buttonClassName:'my-btn-o'}\">\n</angular-pimg>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<angular-pimg\n  [src]=\"src\" \n  [dataSaver]=\"false\"\n  [style]=\"{ width: '300px'}\">\n</angular-pimg>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<angular-pimg\n  [src]=\"src\" \n  [style]=\"{ width: '310px'}\">\n</angular-pimg>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<angular-pimg\n  [src]=\"src\" \n  [dataSaver]=\"false\"\n  [style]=\"{ width: '320px'}\">\n</angular-pimg>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<angular-pimg\n  [src]=\"'https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60'\"\n  [placeholder]=\"'http://res.cloudinary.com/ashinzekene/image/upload/c_scale,q_25,w_30/v1511573958/frontstack/abuja.jpg'\"\n  [style]=\"{ width: '400px'}\"\n  [dataSaver]=\"true\">\n</angular-pimg>\n\n<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n  praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis perspiciatis\n  perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias quos consectetur\n  aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus corporis adipisci\n  ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima architecto labore\n  optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem saepe ex?\n  Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate vero\n  dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis explicabo\n  qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n<angular-pimg\n  [src]=\"src\" [style]=\"{ width: '350px'}\">\n</angular-pimg>"

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
        this.srcSha = '';
        this.src = 'http://res.cloudinary.com/ashinzekene/image/upload/c_scale,h_536,q_25,w_1056/v1511573958/frontstack/abuja.jpg';
    }
    AppComponent.prototype.changeSrc = function () {
        this.src = this.srcSha;
    };
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_pimg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-pimg */ "./dist/angular-pimg/fesm5/angular-pimg.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pimgOptions = {
    fetchOnDemand: true,
    className: 'img',
    dataSaver: { wrapperClassName: 'wrapper', buttonClassName: 'my-btn' }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_pimg__WEBPACK_IMPORTED_MODULE_3__["AngularPimgModule"].forRoot(pimgOptions)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
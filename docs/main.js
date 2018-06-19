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
        console.log('setting config');
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
        this._dataSaver = true; // dataSaver is true
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
        console.log('datasaver', this.dataSaver, this.options.dataSaver);
        if (this.isObject(this.dataSaver)) {
            // set buttonClassName and wrapperClassName
            this.dataSaver = true;
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



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcGltZy9saWIvYW5ndWxhci1waW1nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyQ2xhc3NOYW1lID0gJ3BpbWdfX3BsYWNlaG9sZGVyJztcbiAgcHJpdmF0ZSBfZmV0Y2hPbkRlbWFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kYXRhU2F2ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2J1dHRvbkNsYXNzTmFtZSA9ICdwaW1nX2J0bic7XG4gIHByaXZhdGUgX3dyYXBwZXJDbGFzc05hbWUgPSAncGltZ193cmFwcGVyJztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdPcHRpb25zJykgb3B0aW9uczogQW5ndWxhclBpbWdPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3cmFwcGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZXJDbGFzc05hbWU7XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldCBjbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IGRhdGFTYXZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNhdmVyO1xuICB9XG5cbiAgZ2V0IGZldGNoT25EZW1hbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoT25EZW1hbmQ7XG4gIH1cblxuICBzZXRDb25maWcoeyBjbGFzc05hbWUsIGRhdGFTYXZlciwgZmV0Y2hPbkRlbWFuZCwgcGxhY2Vob2xkZXJDbGFzc05hbWUgfTogUGFydGlhbDxBbmd1bGFyUGltZ09wdGlvbnM+KSB7XG4gICAgY29uc29sZS5sb2coJ3NldHRpbmcgY29uZmlnJyk7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBjbGFzc05hbWUgOiB0aGlzLmNsYXNzTmFtZTtcbiAgICB0aGlzLl9mZXRjaE9uRGVtYW5kID0gdHlwZW9mIGZldGNoT25EZW1hbmQgIT09ICd1bmRlZmluZWQnID8gZmV0Y2hPbkRlbWFuZCA6IHRoaXMuZmV0Y2hPbkRlbWFuZDtcbiAgICB0aGlzLl9wbGFjZWhvbGRlckNsYXNzTmFtZSA9IHR5cGVvZiBwbGFjZWhvbGRlckNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBwbGFjZWhvbGRlckNsYXNzTmFtZSA6IHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgaWYgKHR5cGVvZiBkYXRhU2F2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YVNhdmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5fYnV0dG9uQ2xhc3NOYW1lID0gZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX3dyYXBwZXJDbGFzc05hbWUgPSBkYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9XG4gICAgdGhpcy5fZGF0YVNhdmVyID0gdHJ1ZTsgLy8gZGF0YVNhdmVyIGlzIHRydWVcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nU2VydmljZSB9IGZyb20gJy4vYW5ndWxhci1waW1nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdPcHRpb25zIH0gZnJvbSAnLi9jb25maWctb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXItcGltZycsXG4gIHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJ3cmFwcGVyQ2xhc3NOYW1lXCIgKm5nSWY9XCIoZGF0YVNhdmVyICYmIGxvYWRpbmcpIHx8IGRlbGF5ZWQ7IGVsc2UgbG9hZGluZ0NvbnRlbnRcIj5cbiAgPGltZyBbbmdDbGFzc109XCJjbGFzc2VzXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbc3JjXT1cInBsYWNlaG9sZGVyXCIgLz5cbiAgPGJ1dHRvbiBbbmdDbGFzc109XCJidXR0b25DbGFzc05hbWVcIiAoY2xpY2spPVwiZmV0Y2hJbWFnZSgpXCI+XG4gICAgTG9hZCBpbWFnZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICNsb2FkaW5nQ29udGVudD5cbiAgPGltZyAqbmdJZj1cImxvYWRpbmc7IGVsc2Ugb3RoZXJDb250ZW50XCIgW25nQ2xhc3NdPVwicGxhY2Vob2xkZXJDbGFzc05hbWVcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtzcmNdPVwicGxhY2Vob2xkZXJcIiAvPlxuICA8bmctdGVtcGxhdGUgI290aGVyQ29udGVudD5cbiAgICA8aW1nIFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIFtzcmNdPVwiYmxvYlwiIC8+XG4gIDwvbmctdGVtcGxhdGU+XG48L25nLXRlbXBsYXRlPmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkYXRhU2F2ZXI6IGFueTtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZldGNoT25EZW1hbmQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogYW55ID0geyBkaXNwbGF5OiAnYmxvY2snIH07XG4gIEBPdXRwdXQoKSBmZXRjaGVkOiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHdyYXBwZXJDbGFzc05hbWUgPSAnJztcbiAgYnV0dG9uQ2xhc3NOYW1lID0gJyc7XG4gIGJsb2I6IFNhZmVVcmwgPSAnJztcbiAgZGVsYXllZDogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgY2xhc3Nlczogc3RyaW5nO1xuICBwcml2YXRlIGlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBvcHRpb25zOiBBbmd1bGFyUGltZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmluc2VydElucHV0KCk7XG4gICAgdGhpcy5zZXRVcCgpO1xuICB9XG5cbiAgc2V0RmV0Y2hPbkRlbWFuZCgpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gZW50cmllc1swXTtcbiAgICAgIGlmIChpbWFnZS5pc0ludGVyc2VjdGluZyAmJiAhdGhpcy5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLmZldGNoSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pc0ludGVyc2VjdGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgZmV0Y2hJbWFnZSgpIHtcbiAgICBmZXRjaCh0aGlzLnNyYylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuYmxvYigpKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5ibG9iID0gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybChVUkwuY3JlYXRlT2JqZWN0VVJMKHJlcykpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ludGVyc2VjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mZXRjaGVkLmVtaXQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBuZXdWYWx1ZXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHByb3BzID0gWydzcmMnLCAnZmV0Y2hPbkRlbWFuZCcsICdwbGFjZWhvbGRlcicsICdwbGFjZWhvbGRlckNsYXNzTmFtZScsICdjbGFzc05hbWUnLCAnc3R5bGUnXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKHByb3BzLmZpbmRJbmRleCh2YWwgPT4gdmFsID09PSBwcm9wKSA+IDAgJiYgIXRoaXMuaXNVbmRlZmluZWQoY2hhbmdlc1twcm9wXS5jdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHRoaXNbcHJvcF0gPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9wID09PSAnZGF0YVNhdmVyJyAmJiB0aGlzLmlzT2JqZWN0KGNoYW5nZXNbcHJvcF0pKSB7XG4gICAgICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZS5idXR0b25DbGFzc05hbWU7XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlLnBsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0VXAoKTtcbiAgICAvLyBjaGFuZ2VzLmRhdGFTYXZlciA/IG5ld1ZhbHVlcy5kYXRhU2F2ZXIgPSBjaGFuZ2VzLmRhdGFTYXZlci5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMuc3JjID8gbmV3VmFsdWVzLnNyYyA9IGNoYW5nZXMuc3JjLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5mZXRjaE9uRGVtYW5kID8gbmV3VmFsdWVzLmZldGNoT25EZW1hbmQgPSBjaGFuZ2VzLmZldGNoT25EZW1hbmQuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLnBsYWNlaG9sZGVyID8gbmV3VmFsdWVzLnBsYWNlaG9sZGVyID0gY2hhbmdlcy5wbGFjZWhvbGRlci5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPyBuZXdWYWx1ZXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPSBjaGFuZ2VzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5jbGFzcyA/IG5ld1ZhbHVlcy5jbGFzcyA9IGNoYW5nZXMuY2xhc3MuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLnN0eWxlID8gbmV3VmFsdWVzLnN0eWxlID0gY2hhbmdlcy5zdHlsZS5jdXJyZW50VmFsdWUgOiBudWxsO1xuICB9XG5cbiAgaW5zZXJ0SW5wdXQoKSB7XG4gICAgLy8gQ2FsbGVkIG9uIGluaXRpYWxpemF0aW9uOyBTZXQgdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBvcHRpb25zIGlmIG9wdGlvbiBpcyBub3QgcHJlc2VudFxuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMuZmV0Y2hPbkRlbWFuZCkpIHtcbiAgICAgIHRoaXMuZmV0Y2hPbkRlbWFuZCA9IHRoaXMub3B0aW9ucy5mZXRjaE9uRGVtYW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lKSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlckNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5kYXRhU2F2ZXIpKSB7XG4gICAgICB0aGlzLmRhdGFTYXZlciA9IHRoaXMub3B0aW9ucy5kYXRhU2F2ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMuY2xhc3NOYW1lKSkge1xuICAgICAgdGhpcy5jbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZGF0YXNhdmVyJywgdGhpcy5kYXRhU2F2ZXIsIHRoaXMub3B0aW9ucy5kYXRhU2F2ZXIpO1xuICAgIGlmICh0aGlzLmlzT2JqZWN0KHRoaXMuZGF0YVNhdmVyKSkge1xuICAgICAgLy8gc2V0IGJ1dHRvbkNsYXNzTmFtZSBhbmQgd3JhcHBlckNsYXNzTmFtZVxuICAgICAgdGhpcy5kYXRhU2F2ZXIgPSB0cnVlO1xuICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSB0aGlzLmRhdGFTYXZlci5idXR0b25DbGFzc05hbWU7XG4gICAgICB0aGlzLndyYXBwZXJDbGFzc05hbWUgPSB0aGlzLmRhdGFTYXZlci53cmFwcGVyQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy5idXR0b25DbGFzc05hbWU7XG4gICAgICB0aGlzLndyYXBwZXJDbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBzZXRVcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhU2F2ZXIpIHtcbiAgICAgIHRoaXMuZGVsYXllZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZldGNoT25EZW1hbmQpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNldEZldGNoT25EZW1hbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mZXRjaEltYWdlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYy5pbmNsdWRlcygnY2xvdWRpbmFyeScpKSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID1cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLnNyYy5yZXBsYWNlKCcvdXBsb2FkLycsICcvdXBsb2FkL2NfdGh1bWIsd18zMC8nKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc2VzID0gYCR7dGhpcy5jbGFzc05hbWV9ICR7dGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZX1gO1xuICB9XG5cbiAgaXNPYmplY3QgPSB4ID0+IHR5cGVvZiB4ID09PSAnb2JqZWN0JztcbiAgaXNVbmRlZmluZWQgPSB4ID0+IHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJztcblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXBpbWcuc2VydmljZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclBpbWdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhclBpbWdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBbmd1bGFyUGltZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIEFuZ3VsYXIgUGltZyBNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBvbmx5IGluIHlvdXIgQXBwTW9kdWxlJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM/OiBQYXJ0aWFsPEFuZ3VsYXJQaW1nT3B0aW9ucz4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJQaW1nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFuZ3VsYXJQaW1nU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnT3B0aW9ucycsIHVzZVZhbHVlOiBvcHRpb25zIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQWNFLDRCQUEyQztxQ0FOWCxtQkFBbUI7OEJBQzFCLEtBQUs7Z0NBRUgsVUFBVTtpQ0FDVCxjQUFjO1FBR3hDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QjtLQUNGO0lBRUQsc0JBQUksZ0RBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7U0FDL0I7OztPQUFBO0lBRUQsc0JBQUksK0NBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5Qjs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFvQjs7OztRQUF4QjtZQUNFLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO1NBQ25DOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7OztPQUFBO0lBRUQsc0JBQUksNkNBQWE7Ozs7UUFBakI7WUFDRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUI7OztPQUFBOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxFQUEwRjtZQUF4Rix3QkFBUyxFQUFFLHdCQUFTLEVBQUUsZ0NBQWEsRUFBRSw4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

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

module.exports = ".image-text {\n  padding: 10px;\n  border-radius: 10px;\n  margin: 0 30px;\n  box-shadow: 0px 3px 8px 3px rgba(0, 0, 0, 0.3);\n  background-color: #112243;\n  color: #CCCCCC;\n  word-wrap: break-word;\n  line-height: 1.6;\n  font-family: 'Consolas' ,'Courier New', Courier, monospace\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header mb-3 px-3 py-5 bg-primary\">\n  <h1 class=\"my-5 text-center text-white\">Angular Pimg</h1>\n</div>\n<div class=\"container\">\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <angular-pimg [src]=\"src2\" [style]=\"{ width: '300px'}\" [dataSaver]=\"{placeholderClassName:'my-placeholder', buttonClassName:'my-btn-o'}\">\n      </angular-pimg>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"image-text\">{{ images[0] }}</div>\n    </div>\n  </div>\n\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <angular-pimg [src]=\"src2\" [fetchOnDemand]='true' [style]=\"{ width: '180px'}\">\n      </angular-pimg>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"image-text\">{{ images[1] }}</div>\n    </div>\n  </div>\n\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <angular-pimg [src]=\"src2\" [fetchOnDemand]='true' [style]=\"{ width: '180px'}\">\n      </angular-pimg>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"image-text\">{{ images[2] }}</div>\n    </div>\n  </div>\n\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <angular-pimg [src]=\"src2\" [fetchOnDemand]='true' [style]=\"{ width: '410px'}\">\n      </angular-pimg>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"image-text\">{{ images[3] }}</div>\n    </div>\n  </div>\n\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <angular-pimg [src]=\"src2\" [dataSaver]=\"false\" [fetchOnDemand]=\"true\" [style]=\"{ width: '320px'}\">\n      </angular-pimg>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"image-text\">{{ images[4] }}</div>\n    </div>\n  </div>\n\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n  <div class=\"row\">\n    <div class=\"col-6\">\n      <angular-pimg [src]=\"src1\" [placeholder]=\"'https://res.cloudinary.com/ashinzekene/image/upload/c_scale,q_25,w_30/v1511573958/frontstack/abuja.jpg'\"\n        [style]=\"{ width: '400px'}\">\n      </angular-pimg>`\n    </div>\n    <div class=\"col-6\">\n      <div class=\"image-text\">{{ images[5] }}</div>\n    </div>\n  </div>\n\n  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam a, facere sed, repudiandae maiores ea eligendi\n    praesentium totam nesciunt perspiciatis alias aliquam necessitatibus sunt error eum hic cumque officiis? Maxime quis\n    perspiciatis perferendis eius accusamus error omnis atque doloribus, ullam est tenetur. Ullam excepturi tempora molestias\n    quos consectetur aperiam fugit quas earum ipsa, laudantium iste omnis nisi provident illum! Esse, accusantium eos temporibus\n    corporis adipisci ut tenetur at harum cupiditate commodi nemo cumque fuga vero odit quas eius sint nesciunt nobis, minima\n    architecto labore optio eveniet atque! Id, sed! Officiis vitae expedita, velit qui assumenda rem voluptate deleniti voluptatem\n    saepe ex? Tenetur omnis, ducimus beatae, consequuntur ad similique aut, optio unde inventore sequi eius iure nemo cupiditate\n    vero dignissimos. Suscipit laborum placeat id reprehenderit quis! Nam possimus iure porro placeat ea, quia blanditiis\n    explicabo qui ad expedita laudantium deleniti ipsum! Autem ut mollitia saepe doloribus esse sunt facere consequatur.</div>\n  <div class=\"row my-3\">\n    <div class=\"col-6\">\n      <angular-pimg [src]=\"src2\" [fetchOnDemand]=\"true\" [style]=\"{ width: '350px'}\" [dataSaver]=\"false\">\n      </angular-pimg>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"image-text\">{{ images[6] }}</div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images */ "./src/app/images.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.images = _images__WEBPACK_IMPORTED_MODULE_1__["images"];
        // tslint:disable-next-line:max-line-length
        this.src1 = 'https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60';
        this.src2 = 'http://res.cloudinary.com/ashinzekene/image/upload/c_scale,h_536,q_25,w_1056/v1511573958/frontstack/abuja.jpg';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_pimg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-pimg */ "./dist/angular-pimg/fesm5/angular-pimg.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _escaped_html_escaped_html_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./escaped-html/escaped-html.component */ "./src/app/escaped-html/escaped-html.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var pimgOptions = {
    className: 'img',
    dataSaver: { wrapperClassName: 'wrapper', buttonClassName: 'my-btn' }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _escaped_html_escaped_html_component__WEBPACK_IMPORTED_MODULE_5__["EscapedHtmlComponent"],
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

/***/ "./src/app/escaped-html/escaped-html.component.css":
/*!*********************************************************!*\
  !*** ./src/app/escaped-html/escaped-html.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/escaped-html/escaped-html.component.html":
/*!**********************************************************!*\
  !*** ./src/app/escaped-html/escaped-html.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/escaped-html/escaped-html.component.ts":
/*!********************************************************!*\
  !*** ./src/app/escaped-html/escaped-html.component.ts ***!
  \********************************************************/
/*! exports provided: EscapedHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapedHtmlComponent", function() { return EscapedHtmlComponent; });
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

var EscapedHtmlComponent = /** @class */ (function () {
    function EscapedHtmlComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.bgColor = 'rgb(1, 10, 42)';
        this.color = '#ccc';
    }
    EscapedHtmlComponent.prototype.ngOnInit = function () {
        this.el.nativeElement.style.backgroundColor = this.bgColor;
        this.el.nativeElement.style.color = this.color;
        this.el.nativeElement.style.padding = '20px';
        this.el.nativeElement.style.borderRadius = '10px';
    };
    EscapedHtmlComponent.prototype.ngAfterViewInit = function () {
        var input = this.el.nativeElement.innerHTML;
        this.el.nativeElement.textContent = input.replace(/\s_ngcontent-c0=""/g, '');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EscapedHtmlComponent.prototype, "bgColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EscapedHtmlComponent.prototype, "color", void 0);
    EscapedHtmlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-escaped-html',
            template: __webpack_require__(/*! ./escaped-html.component.html */ "./src/app/escaped-html/escaped-html.component.html"),
            styles: [__webpack_require__(/*! ./escaped-html.component.css */ "./src/app/escaped-html/escaped-html.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], EscapedHtmlComponent);
    return EscapedHtmlComponent;
}());



/***/ }),

/***/ "./src/app/images.ts":
/*!***************************!*\
  !*** ./src/app/images.ts ***!
  \***************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
// tslint:disable
var images = [
    "<angular-pimg \n    [src]=\"https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60\" \n    [style]=\"{ width: '300px'}\" \n    [dataSaver]=\"{placeholderClassName:'my-placeholder', buttonClassName:'my-btn-o'}\">\n  </angular-pimg>",
    "<angular-pimg \n    [src]=\"https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60\"\n    [fetchOnDemand]='true'\n    [style]=\"{ width: '180px'}\">\n  </angular-pimg>",
    "<angular-pimg \n    [src]=\"https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60\"\n    [fetchOnDemand]='true'\n    [style]=\"{ width: '180px'}\">\n  </angular-pimg>",
    "<angular-pimg \n    [src]=\"https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60\"\n    [fetchOnDemand]='true'\n    [style]=\"{ width: '410px'}\">\n  </angular-pimg>",
    "<angular-pimg \n    [src]=\"https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60\" [dataSaver]=\"false\"\n    [fetchOnDemand]=\"true\"\n    [style]=\"{ width: '320px'}\">\n  </angular-pimg>",
    "<angular-pimg \n    [src]=\"http://res.cloudinary.com/ashinzekene/image/upload/c_scale,h_536,q_25,w_1056/v1511573958/frontstack/abuja.jpg\"\n    [placeholder]=\"'http://res.cloudinary.com/ashinzekene/image/upload/c_scale,q_25,w_30/v1511573958/frontstack/abuja.jpg'\"\n    [style]=\"{ width: '400px'}\">\n  </angular-pimg>",
    "<angular-pimg \n    [src]=\"https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60\"\n    [fetchOnDemand]=\"true\"\n    [dataSaver]=\"false\"\n    [style]=\"{ width: '350px'}\">\n  </angular-pimg>"
];


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
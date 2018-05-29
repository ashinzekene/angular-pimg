(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('angular-pimg', ['exports', '@angular/core', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global['angular-pimg'] = {}),global.ng.core,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,i0,platformBrowser,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularPimgService = (function () {
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
             */ function () {
                return this._wrapperClassName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AngularPimgService.prototype, "buttonClassName", {
            get: /**
             * @return {?}
             */ function () {
                return this._buttonClassName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AngularPimgService.prototype, "className", {
            get: /**
             * @return {?}
             */ function () {
                return this._className;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AngularPimgService.prototype, "placeholderClassName", {
            get: /**
             * @return {?}
             */ function () {
                return this._placeholderClassName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AngularPimgService.prototype, "dataSaver", {
            get: /**
             * @return {?}
             */ function () {
                return this._dataSaver;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AngularPimgService.prototype, "fetchOnDemand", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        AngularPimgService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: ['Options',] },] },
            ];
        };
        /** @nocollapse */ AngularPimgService.ngInjectableDef = i0.defineInjectable({ factory: function AngularPimgService_Factory() { return new AngularPimgService(i0.inject("Options", 8)); }, token: AngularPimgService, providedIn: "root" });
        return AngularPimgService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularPimgComponent = (function () {
        function AngularPimgComponent(el, domSanitizer, options) {
            this.el = el;
            this.domSanitizer = domSanitizer;
            this.options = options;
            this.style = { display: 'block' };
            this.fetched = new i0.EventEmitter();
            this.error = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'angular-pimg',
                        template: "<div [ngClass]=\"wrapperClassName\" *ngIf=\"(dataSaver && loading) || delayed; else loadingContent\">\n  <img [ngClass]=\"classes\" [ngStyle]=\"style\" [src]=\"placeholder\" />\n  <button [ngClass]=\"buttonClassName\" (click)=\"fetchImage()\">\n    Load image\n  </button>\n</div>\n<ng-template #loadingContent>\n  <img *ngIf=\"loading; else otherContent\" [ngClass]=\"placeholderClassName\" [ngStyle]=\"style\" [src]=\"placeholder\" />\n  <ng-template #otherContent>\n    <img [ngStyle]=\"style\" [ngClass]=\"classes\" [src]=\"blob\" />\n  </ng-template>\n</ng-template>",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        AngularPimgComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef, },
                { type: platformBrowser.DomSanitizer, },
                { type: AngularPimgService, },
            ];
        };
        AngularPimgComponent.propDecorators = {
            "dataSaver": [{ type: i0.Input },],
            "src": [{ type: i0.Input },],
            "fetchOnDemand": [{ type: i0.Input },],
            "placeholder": [{ type: i0.Input },],
            "placeholderClassName": [{ type: i0.Input },],
            "className": [{ type: i0.Input },],
            "style": [{ type: i0.Input },],
            "fetched": [{ type: i0.Output },],
            "error": [{ type: i0.Output },],
        };
        return AngularPimgComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var AngularPimgModule = (function () {
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
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [AngularPimgComponent],
                        exports: [AngularPimgComponent]
                    },] },
        ];
        /** @nocollapse */
        AngularPimgModule.ctorParameters = function () {
            return [
                { type: AngularPimgModule, decorators: [{ type: i0.Optional }, { type: i0.SkipSelf },] },
            ];
        };
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

    exports.AngularPimgService = AngularPimgService;
    exports.AngularPimgComponent = AngularPimgComponent;
    exports.AngularPimgModule = AngularPimgModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYW5ndWxhci1waW1nL2xpYi9hbmd1bGFyLXBpbWcuc2VydmljZS50cyIsIm5nOi8vYW5ndWxhci1waW1nL2xpYi9hbmd1bGFyLXBpbWcuY29tcG9uZW50LnRzIiwibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdPcHRpb25zIH0gZnJvbSAnLi9jb25maWctb3B0aW9ucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nU2VydmljZSB7XG4gIHByaXZhdGUgX2NsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9wbGFjZWhvbGRlckNsYXNzTmFtZSA9ICdwaW1nX19wbGFjZWhvbGRlcic7XG4gIHByaXZhdGUgX2ZldGNoT25EZW1hbmQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGF0YVNhdmVyOiBib29sZWFuO1xuICBwcml2YXRlIF9idXR0b25DbGFzc05hbWUgPSAncGltZ19idG4nO1xuICBwcml2YXRlIF93cmFwcGVyQ2xhc3NOYW1lID0gJ3BpbWdfd3JhcHBlcic7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdCgnT3B0aW9ucycpIG9wdGlvbnM6IEFuZ3VsYXJQaW1nT3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICB0aGlzLnNldENvbmZpZyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBnZXQgd3JhcHBlckNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl93cmFwcGVyQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IGJ1dHRvbkNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9idXR0b25DbGFzc05hbWU7XG4gIH1cblxuICBnZXQgY2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NsYXNzTmFtZTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlckNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlckNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldCBkYXRhU2F2ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGFTYXZlcjtcbiAgfVxuXG4gIGdldCBmZXRjaE9uRGVtYW5kKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mZXRjaE9uRGVtYW5kO1xuICB9XG5cbiAgc2V0Q29uZmlnKHsgY2xhc3NOYW1lLCBkYXRhU2F2ZXIsIGZldGNoT25EZW1hbmQsIHBsYWNlaG9sZGVyQ2xhc3NOYW1lIH06IFBhcnRpYWw8QW5ndWxhclBpbWdPcHRpb25zPikge1xuICAgIHRoaXMuX2NsYXNzTmFtZSA9IHR5cGVvZiBjbGFzc05hbWUgIT09ICd1bmRlZmluZWQnID8gY2xhc3NOYW1lIDogdGhpcy5jbGFzc05hbWU7XG4gICAgdGhpcy5fZmV0Y2hPbkRlbWFuZCA9IHR5cGVvZiBmZXRjaE9uRGVtYW5kICE9PSAndW5kZWZpbmVkJyA/IGZldGNoT25EZW1hbmQgOiB0aGlzLmZldGNoT25EZW1hbmQ7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXJDbGFzc05hbWUgPSB0eXBlb2YgcGxhY2Vob2xkZXJDbGFzc05hbWUgIT09ICd1bmRlZmluZWQnID8gcGxhY2Vob2xkZXJDbGFzc05hbWUgOiB0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICAgIGlmICh0eXBlb2YgZGF0YVNhdmVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRhdGFTYXZlciA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHRoaXMuX2J1dHRvbkNsYXNzTmFtZSA9IGRhdGFTYXZlci5idXR0b25DbGFzc05hbWU7XG4gICAgICB0aGlzLl93cmFwcGVyQ2xhc3NOYW1lID0gZGF0YVNhdmVyLndyYXBwZXJDbGFzc05hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RhdGFTYXZlciA9IHRydWU7IC8vIGRhdGFTYXZlciBpcyB0cnVlXG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXBpbWcuc2VydmljZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYW5ndWxhci1waW1nJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IFtuZ0NsYXNzXT1cIndyYXBwZXJDbGFzc05hbWVcIiAqbmdJZj1cIihkYXRhU2F2ZXIgJiYgbG9hZGluZykgfHwgZGVsYXllZDsgZWxzZSBsb2FkaW5nQ29udGVudFwiPlxuICA8aW1nIFtuZ0NsYXNzXT1cImNsYXNzZXNcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtzcmNdPVwicGxhY2Vob2xkZXJcIiAvPlxuICA8YnV0dG9uIFtuZ0NsYXNzXT1cImJ1dHRvbkNsYXNzTmFtZVwiIChjbGljayk9XCJmZXRjaEltYWdlKClcIj5cbiAgICBMb2FkIGltYWdlXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG48bmctdGVtcGxhdGUgI2xvYWRpbmdDb250ZW50PlxuICA8aW1nICpuZ0lmPVwibG9hZGluZzsgZWxzZSBvdGhlckNvbnRlbnRcIiBbbmdDbGFzc109XCJwbGFjZWhvbGRlckNsYXNzTmFtZVwiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW3NyY109XCJwbGFjZWhvbGRlclwiIC8+XG4gIDxuZy10ZW1wbGF0ZSAjb3RoZXJDb250ZW50PlxuICAgIDxpbWcgW25nU3R5bGVdPVwic3R5bGVcIiBbbmdDbGFzc109XCJjbGFzc2VzXCIgW3NyY109XCJibG9iXCIgLz5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvbmctdGVtcGxhdGU+YCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUGltZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRhdGFTYXZlcjogYW55O1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgZmV0Y2hPbkRlbWFuZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiBhbnkgPSB7IGRpc3BsYXk6ICdibG9jaycgfTtcbiAgQE91dHB1dCgpIGZldGNoZWQ6IEV2ZW50RW1pdHRlcjxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGVycm9yOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgd3JhcHBlckNsYXNzTmFtZSA9ICcnO1xuICBidXR0b25DbGFzc05hbWUgPSAnJztcbiAgYmxvYjogU2FmZVVybCA9ICcnO1xuICBkZWxheWVkOiBib29sZWFuO1xuICBsb2FkaW5nOiBib29sZWFuO1xuICBjbGFzc2VzOiBzdHJpbmc7XG4gIHByaXZhdGUgaXNJbnRlcnNlY3RpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIGRvbVNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIG9wdGlvbnM6IEFuZ3VsYXJQaW1nU2VydmljZSkge1xuICAgIHRoaXMuaW5zZXJ0SW5wdXQoKTtcbiAgICB0aGlzLnNldFVwKCk7XG4gIH1cblxuICBzZXRGZXRjaE9uRGVtYW5kKCkge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgY29uc3QgaW1hZ2UgPSBlbnRyaWVzWzBdO1xuICAgICAgaWYgKGltYWdlLmlzSW50ZXJzZWN0aW5nICYmICF0aGlzLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hJbWFnZSgpO1xuICAgICAgICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NhbGxlZCBieSBpbnRlcnNlY3Rpb24gQVBJJyk7XG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgZmV0Y2hJbWFnZSgpIHtcbiAgICBmZXRjaCh0aGlzLnNyYylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuYmxvYigpKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgdGhpcy5ibG9iID0gdGhpcy5kb21TYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFVybChVUkwuY3JlYXRlT2JqZWN0VVJMKHJlcykpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0ludGVyc2VjdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mZXRjaGVkLmVtaXQoKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhpcy5lcnJvci5lbWl0KGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBuZXdWYWx1ZXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHByb3BzID0gWydzcmMnLCAnZmV0Y2hPbkRlbWFuZCcsICdwbGFjZWhvbGRlcicsICdwbGFjZWhvbGRlckNsYXNzTmFtZScsICdjbGFzc05hbWUnLCAnc3R5bGUnXTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKHByb3BzLmZpbmRJbmRleCh2YWwgPT4gdmFsID09PSBwcm9wKSA+IDAgJiYgIXRoaXMuaXNVbmRlZmluZWQoY2hhbmdlc1twcm9wXS5jdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3Byb3B9IGlzIG5vdCB1bmRlZmluZWQuIEl0IGhhcyBjaGFuZ2VkYCk7XG4gICAgICAgIHRoaXNbcHJvcF0gPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwcm9wID09PSAnZGF0YVNhdmVyJyAmJiB0aGlzLmlzT2JqZWN0KGNoYW5nZXNbcHJvcF0pKSB7XG4gICAgICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZS5idXR0b25DbGFzc05hbWU7XG4gICAgICAgICAgdGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlLnBsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0VXAoKTtcbiAgICAvLyBjaGFuZ2VzLmRhdGFTYXZlciA/IG5ld1ZhbHVlcy5kYXRhU2F2ZXIgPSBjaGFuZ2VzLmRhdGFTYXZlci5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMuc3JjID8gbmV3VmFsdWVzLnNyYyA9IGNoYW5nZXMuc3JjLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5mZXRjaE9uRGVtYW5kID8gbmV3VmFsdWVzLmZldGNoT25EZW1hbmQgPSBjaGFuZ2VzLmZldGNoT25EZW1hbmQuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLnBsYWNlaG9sZGVyID8gbmV3VmFsdWVzLnBsYWNlaG9sZGVyID0gY2hhbmdlcy5wbGFjZWhvbGRlci5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPyBuZXdWYWx1ZXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPSBjaGFuZ2VzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5jbGFzcyA/IG5ld1ZhbHVlcy5jbGFzcyA9IGNoYW5nZXMuY2xhc3MuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLnN0eWxlID8gbmV3VmFsdWVzLnN0eWxlID0gY2hhbmdlcy5zdHlsZS5jdXJyZW50VmFsdWUgOiBudWxsO1xuICB9XG5cbiAgaW5zZXJ0SW5wdXQoKSB7XG4gICAgLy8gQ2FsbGVkIG9uIGluaXRpYWxpemF0aW9uOyBTZXQgdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBvcHRpb25zIGlmIG9wdGlvbiBpcyBub3QgcHJlc2VudFxuICAgIGNvbnNvbGUubG9nKCdDb25maWcgb3B0aW9ucycsIHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5mZXRjaE9uRGVtYW5kKSkge1xuICAgICAgdGhpcy5mZXRjaE9uRGVtYW5kID0gdGhpcy5vcHRpb25zLmZldGNoT25EZW1hbmQ7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWUpKSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLmRhdGFTYXZlcikpIHtcbiAgICAgIHRoaXMuZGF0YVNhdmVyID0gdGhpcy5vcHRpb25zLmRhdGFTYXZlcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5jbGFzc05hbWUpKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzT2JqZWN0KHRoaXMuZGF0YVNhdmVyKSkge1xuICAgICAgLy8gc2V0IGJ1dHRvbkNsYXNzTmFtZSBhbmQgd3JhcHBlckNsYXNzTmFtZVxuICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSB0aGlzLmRhdGFTYXZlci5idXR0b25DbGFzc05hbWU7XG4gICAgICB0aGlzLndyYXBwZXJDbGFzc05hbWUgPSB0aGlzLmRhdGFTYXZlci53cmFwcGVyQ2xhc3NOYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy5idXR0b25DbGFzc05hbWU7XG4gICAgICB0aGlzLndyYXBwZXJDbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9XG4gIH1cblxuICBzZXRVcCgpIHtcbiAgICBpZiAodGhpcy5kYXRhU2F2ZXIpIHtcbiAgICAgIHRoaXMuZGVsYXllZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZldGNoT25EZW1hbmQpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnNldEZldGNoT25EZW1hbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mZXRjaEltYWdlKCk7XG4gICAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgaW1hZ2UsIGR1ZSB0byBjb25maWcnLCB0aGlzLmRhdGFTYXZlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYy5pbmNsdWRlcygnY2xvdWRpbmFyeScpKSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID1cbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLnNyYy5yZXBsYWNlKCcvdXBsb2FkLycsICcvdXBsb2FkL2NfdGh1bWIsd18zMC8nKTtcbiAgICB9XG4gICAgdGhpcy5jbGFzc2VzID0gYCR7dGhpcy5jbGFzc05hbWV9ICR7dGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZX1gO1xuICB9XG5cbiAgaXNPYmplY3QgPSB4ID0+IHR5cGVvZiB4ID09PSAnb2JqZWN0JztcbiAgaXNVbmRlZmluZWQgPSB4ID0+IHR5cGVvZiB4ID09PSAndW5kZWZpbmVkJztcblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXBpbWcuc2VydmljZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclBpbWdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhclBpbWdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBbmd1bGFyUGltZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIEFuZ3VsYXIgUGltZyBNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBvbmx5IGluIHlvdXIgQXBwTW9kdWxlJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM/OiBQYXJ0aWFsPEFuZ3VsYXJQaW1nT3B0aW9ucz4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJQaW1nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFuZ3VsYXJQaW1nU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnT3B0aW9ucycsIHVzZVZhbHVlOiBvcHRpb25zIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIk9wdGlvbmFsIiwiSW5qZWN0IiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiRWxlbWVudFJlZiIsIkRvbVNhbml0aXplciIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJTa2lwU2VsZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBY0UsNEJBQTJDO3lDQU5YLG1CQUFtQjtrQ0FDMUIsS0FBSztvQ0FFSCxVQUFVO3FDQUNULGNBQWM7WUFHeEMsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN6QjtTQUNGO1FBRUQsc0JBQUksZ0RBQWdCOzs7Z0JBQXBCO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQy9COzs7V0FBQTtRQUVELHNCQUFJLCtDQUFlOzs7Z0JBQW5CO2dCQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO2FBQzlCOzs7V0FBQTtRQUVELHNCQUFJLHlDQUFTOzs7Z0JBQWI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO2FB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
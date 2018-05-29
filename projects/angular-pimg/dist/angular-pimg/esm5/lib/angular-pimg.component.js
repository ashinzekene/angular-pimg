/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularPimgService } from './angular-pimg.service';
var AngularPimgComponent = /** @class */ (function () {
    function AngularPimgComponent(el, domSanitizer, options) {
        this.el = el;
        this.domSanitizer = domSanitizer;
        this.options = options;
        this.style = { display: 'block' };
        this.fetched = new EventEmitter();
        this.error = new EventEmitter();
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
        var /** @type {?} */ newValues = {};
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
        { type: Component, args: [{
                    selector: 'angular-pimg',
                    template: "<div [ngClass]=\"wrapperClassName\" *ngIf=\"(dataSaver && loading) || delayed; else loadingContent\">\n  <img [ngClass]=\"classes\" [ngStyle]=\"style\" [src]=\"placeholder\" />\n  <button [ngClass]=\"buttonClassName\" (click)=\"fetchImage()\">\n    Load image\n  </button>\n</div>\n<ng-template #loadingContent>\n  <img *ngIf=\"loading; else otherContent\" [ngClass]=\"placeholderClassName\" [ngStyle]=\"style\" [src]=\"placeholder\" />\n  <ng-template #otherContent>\n    <img [ngStyle]=\"style\" [ngClass]=\"classes\" [src]=\"blob\" />\n  </ng-template>\n</ng-template>",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    AngularPimgComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: DomSanitizer, },
        { type: AngularPimgService, },
    ]; };
    AngularPimgComponent.propDecorators = {
        "dataSaver": [{ type: Input },],
        "src": [{ type: Input },],
        "fetchOnDemand": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "placeholderClassName": [{ type: Input },],
        "className": [{ type: Input },],
        "style": [{ type: Input },],
        "fetched": [{ type: Output },],
        "error": [{ type: Output },],
    };
    return AngularPimgComponent;
}());
export { AngularPimgComponent };
function AngularPimgComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularPimgComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularPimgComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    AngularPimgComponent.propDecorators;
    /** @type {?} */
    AngularPimgComponent.prototype.dataSaver;
    /** @type {?} */
    AngularPimgComponent.prototype.src;
    /** @type {?} */
    AngularPimgComponent.prototype.fetchOnDemand;
    /** @type {?} */
    AngularPimgComponent.prototype.placeholder;
    /** @type {?} */
    AngularPimgComponent.prototype.placeholderClassName;
    /** @type {?} */
    AngularPimgComponent.prototype.className;
    /** @type {?} */
    AngularPimgComponent.prototype.style;
    /** @type {?} */
    AngularPimgComponent.prototype.fetched;
    /** @type {?} */
    AngularPimgComponent.prototype.error;
    /** @type {?} */
    AngularPimgComponent.prototype.wrapperClassName;
    /** @type {?} */
    AngularPimgComponent.prototype.buttonClassName;
    /** @type {?} */
    AngularPimgComponent.prototype.blob;
    /** @type {?} */
    AngularPimgComponent.prototype.delayed;
    /** @type {?} */
    AngularPimgComponent.prototype.loading;
    /** @type {?} */
    AngularPimgComponent.prototype.classes;
    /** @type {?} */
    AngularPimgComponent.prototype.isIntersecting;
    /** @type {?} */
    AngularPimgComponent.prototype.isObject;
    /** @type {?} */
    AngularPimgComponent.prototype.isUndefined;
    /** @type {?} */
    AngularPimgComponent.prototype.el;
    /** @type {?} */
    AngularPimgComponent.prototype.domSanitizer;
    /** @type {?} */
    AngularPimgComponent.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGltZy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXBpbWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFlBQVksRUFBVyxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQXFDMUQsOEJBQW9CLEVBQWMsRUFBVSxZQUEwQixFQUFVLE9BQTJCO1FBQXZGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQW9CO3FCQVhyRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7dUJBQ0YsSUFBSSxZQUFZLEVBQUU7cUJBQ3JCLElBQUksWUFBWSxFQUFFO2dDQUNwQyxFQUFFOytCQUNILEVBQUU7b0JBQ0osRUFBRTs4QkFJTyxLQUFLO3dCQXVHbkIsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQXJCLENBQXFCOzJCQUN2QixVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLFdBQVcsRUFBeEIsQ0FBd0I7UUFyR3pDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZDs7OztJQUVELCtDQUFnQjs7O0lBQWhCO1FBQUEsaUJBWUM7UUFYQyxxQkFBTSxRQUFRLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxVQUFBLE9BQU87WUFDL0MscUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxL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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXBpbWcnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwid3JhcHBlckNsYXNzTmFtZVwiICpuZ0lmPVwiKGRhdGFTYXZlciAmJiBsb2FkaW5nKSB8fCBkZWxheWVkOyBlbHNlIGxvYWRpbmdDb250ZW50XCI+XG4gIDxpbWcgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW3NyY109XCJwbGFjZWhvbGRlclwiIC8+XG4gIDxidXR0b24gW25nQ2xhc3NdPVwiYnV0dG9uQ2xhc3NOYW1lXCIgKGNsaWNrKT1cImZldGNoSW1hZ2UoKVwiPlxuICAgIExvYWQgaW1hZ2VcbiAgPC9idXR0b24+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ0NvbnRlbnQ+XG4gIDxpbWcgKm5nSWY9XCJsb2FkaW5nOyBlbHNlIG90aGVyQ29udGVudFwiIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NOYW1lXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbc3JjXT1cInBsYWNlaG9sZGVyXCIgLz5cbiAgPG5nLXRlbXBsYXRlICNvdGhlckNvbnRlbnQ+XG4gICAgPGltZyBbbmdTdHlsZV09XCJzdHlsZVwiIFtuZ0NsYXNzXT1cImNsYXNzZXNcIiBbc3JjXT1cImJsb2JcIiAvPlxuICA8L25nLXRlbXBsYXRlPlxuPC9uZy10ZW1wbGF0ZT5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YVNhdmVyOiBhbnk7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBmZXRjaE9uRGVtYW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuICBAT3V0cHV0KCkgZmV0Y2hlZDogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB3cmFwcGVyQ2xhc3NOYW1lID0gJyc7XG4gIGJ1dHRvbkNsYXNzTmFtZSA9ICcnO1xuICBibG9iOiBTYWZlVXJsID0gJyc7XG4gIGRlbGF5ZWQ6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGNsYXNzZXM6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0ludGVyc2VjdGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgb3B0aW9uczogQW5ndWxhclBpbWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbnNlcnRJbnB1dCgpO1xuICAgIHRoaXMuc2V0VXAoKTtcbiAgfVxuXG4gIHNldEZldGNoT25EZW1hbmQoKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IGVudHJpZXNbMF07XG4gICAgICBpZiAoaW1hZ2UuaXNJbnRlcnNlY3RpbmcgJiYgIXRoaXMuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5mZXRjaEltYWdlKCk7XG4gICAgICAgIHRoaXMuaXNJbnRlcnNlY3RpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGVkIGJ5IGludGVyc2VjdGlvbiBBUEknKTtcbiAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBmZXRjaEltYWdlKCkge1xuICAgIGZldGNoKHRoaXMuc3JjKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB0aGlzLmJsb2IgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKFVSTC5jcmVhdGVPYmplY3RVUkwocmVzKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZldGNoZWQuZW1pdCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IG5ld1ZhbHVlczogYW55ID0ge307XG4gICAgY29uc3QgcHJvcHMgPSBbJ3NyYycsICdmZXRjaE9uRGVtYW5kJywgJ3BsYWNlaG9sZGVyJywgJ3BsYWNlaG9sZGVyQ2xhc3NOYW1lJywgJ2NsYXNzTmFtZScsICdzdHlsZSddO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAocHJvcHMuZmluZEluZGV4KHZhbCA9PiB2YWwgPT09IHByb3ApID4gMCAmJiAhdGhpcy5pc1VuZGVmaW5lZChjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJvcH0gaXMgbm90IHVuZGVmaW5lZC4gSXQgaGFzIGNoYW5nZWRgKTtcbiAgICAgICAgdGhpc1twcm9wXSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdkYXRhU2F2ZXInICYmIHRoaXMuaXNPYmplY3QoY2hhbmdlc1twcm9wXSkpIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gY2hhbmdlc1twcm9wXS5jdXJyZW50VmFsdWUucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRVcCgpO1xuICAgIC8vIGNoYW5nZXMuZGF0YVNhdmVyID8gbmV3VmFsdWVzLmRhdGFTYXZlciA9IGNoYW5nZXMuZGF0YVNhdmVyLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5zcmMgPyBuZXdWYWx1ZXMuc3JjID0gY2hhbmdlcy5zcmMuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLmZldGNoT25EZW1hbmQgPyBuZXdWYWx1ZXMuZmV0Y2hPbkRlbWFuZCA9IGNoYW5nZXMuZmV0Y2hPbkRlbWFuZC5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMucGxhY2Vob2xkZXIgPyBuZXdWYWx1ZXMucGxhY2Vob2xkZXIgPSBjaGFuZ2VzLnBsYWNlaG9sZGVyLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA/IG5ld1ZhbHVlcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA9IGNoYW5nZXMucGxhY2Vob2xkZXJDbGFzc05hbWUuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLmNsYXNzID8gbmV3VmFsdWVzLmNsYXNzID0gY2hhbmdlcy5jbGFzcy5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMuc3R5bGUgPyBuZXdWYWx1ZXMuc3R5bGUgPSBjaGFuZ2VzLnN0eWxlLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gIH1cblxuICBpbnNlcnRJbnB1dCgpIHtcbiAgICAvLyBDYWxsZWQgb24gaW5pdGlhbGl6YXRpb247IFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9wdGlvbnMgaWYgb3B0aW9uIGlzIG5vdCBwcmVzZW50XG4gICAgY29uc29sZS5sb2coJ0NvbmZpZyBvcHRpb25zJywgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLmZldGNoT25EZW1hbmQpKSB7XG4gICAgICB0aGlzLmZldGNoT25EZW1hbmQgPSB0aGlzLm9wdGlvbnMuZmV0Y2hPbkRlbWFuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMuZGF0YVNhdmVyKSkge1xuICAgICAgdGhpcy5kYXRhU2F2ZXIgPSB0aGlzLm9wdGlvbnMuZGF0YVNhdmVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLmNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5kYXRhU2F2ZXIpKSB7XG4gICAgICAvLyBzZXQgYnV0dG9uQ2xhc3NOYW1lIGFuZCB3cmFwcGVyQ2xhc3NOYW1lXG4gICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IHRoaXMuZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMud3JhcHBlckNsYXNzTmFtZSA9IHRoaXMuZGF0YVNhdmVyLndyYXBwZXJDbGFzc05hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnV0dG9uQ2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMud3JhcHBlckNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy53cmFwcGVyQ2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIHNldFVwKCkge1xuICAgIGlmICh0aGlzLmRhdGFTYXZlcikge1xuICAgICAgdGhpcy5kZWxheWVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmV0Y2hPbkRlbWFuZCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0RmV0Y2hPbkRlbWFuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZldGNoSW1hZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBpbWFnZSwgZHVlIHRvIGNvbmZpZycsIHRoaXMuZGF0YVNhdmVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjLmluY2x1ZGVzKCdjbG91ZGluYXJ5JykpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPVxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyIHx8IHRoaXMuc3JjLnJlcGxhY2UoJy91cGxvYWQvJywgJy91cGxvYWQvY190aHVtYix3XzMwLycpO1xuICAgIH1cbiAgICB0aGlzLmNsYXNzZXMgPSBgJHt0aGlzLmNsYXNzTmFtZX0gJHt0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lfWA7XG4gIH1cblxuICBpc09iamVjdCA9IHggPT4gdHlwZW9mIHggPT09ICdvYmplY3QnO1xuICBpc1VuZGVmaW5lZCA9IHggPT4gdHlwZW9mIHggPT09ICd1bmRlZmluZWQnO1xuXG59XG4iXX0=
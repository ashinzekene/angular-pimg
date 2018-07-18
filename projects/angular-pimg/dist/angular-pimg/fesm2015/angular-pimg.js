import { Injectable, Optional, Inject, NgModule, SkipSelf, Component, Input, Output, EventEmitter, ElementRef, defineInjectable, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularPimgService {
    /**
     * @param {?} options
     */
    constructor(options) {
        this._placeholderClassName = 'pimg__placeholder';
        this._fetchOnDemand = false;
        this._buttonClassName = 'pimg_btn';
        this._wrapperClassName = 'pimg_wrapper';
        if (options) {
            this.setConfig(options);
        }
    }
    /**
     * @return {?}
     */
    get wrapperClassName() {
        return this._wrapperClassName;
    }
    /**
     * @return {?}
     */
    get buttonClassName() {
        return this._buttonClassName;
    }
    /**
     * @return {?}
     */
    get className() {
        return this._className;
    }
    /**
     * @return {?}
     */
    get placeholderClassName() {
        return this._placeholderClassName;
    }
    /**
     * @return {?}
     */
    get dataSaver() {
        return this._dataSaver;
    }
    /**
     * @return {?}
     */
    get fetchOnDemand() {
        return this._fetchOnDemand;
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    setConfig({ className, dataSaver, fetchOnDemand, placeholderClassName }) {
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
    }
}
AngularPimgService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
AngularPimgService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['Options',] },] },
];
/** @nocollapse */ AngularPimgService.ngInjectableDef = defineInjectable({ factory: function AngularPimgService_Factory() { return new AngularPimgService(inject("Options", 8)); }, token: AngularPimgService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularPimgComponent {
    /**
     * @param {?} el
     * @param {?} domSanitizer
     * @param {?} options
     */
    constructor(el, domSanitizer, options) {
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
        this.isObject = x => typeof x === 'object';
        this.isUndefined = x => typeof x === 'undefined';
        this.insertInput();
        this.setUp();
    }
    /**
     * @return {?}
     */
    setFetchOnDemand() {
        const /** @type {?} */ observer = new IntersectionObserver(entries => {
            const /** @type {?} */ image = entries[0];
            if (image.isIntersecting && !this.isIntersecting) {
                this.fetchImage();
                this.isIntersecting = true;
                console.log('Called by intersection API');
                this.delayed = false;
                observer.disconnect();
            }
        });
        observer.observe(this.el.nativeElement);
    }
    /**
     * @return {?}
     */
    fetchImage() {
        fetch(this.src)
            .then(res => res.blob())
            .then(res => {
            console.log(res);
            this.blob = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
            this.loading = false;
            this.isIntersecting = false;
            this.delayed = false;
            this.fetched.emit();
        })
            .catch(err => {
            this.error.emit(err);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const /** @type {?} */ props = ['src', 'fetchOnDemand', 'placeholder', 'placeholderClassName', 'className', 'style'];
        for (const /** @type {?} */ prop in changes) {
            if (props.findIndex(val => val === prop) > 0 && !this.isUndefined(changes[prop].currentValue)) {
                console.log(`${prop} is not undefined. It has changed`);
                this[prop] = changes[prop].currentValue;
            }
            else {
                if (prop === 'dataSaver' && this.isObject(changes[prop])) {
                    this.buttonClassName = changes[prop].currentValue.buttonClassName;
                    this.placeholderClassName = changes[prop].currentValue.placeholderClassName;
                }
            }
        }
        this.setUp();
        // changes.dataSaver ? newValues.dataSaver = changes.dataSaver.currentValue : null;
        // changes.src ? newValues.src = changes.src.currentValue : null;
        // changes.fetchOnDemand ? newValues.fetchOnDemand = changes.fetchOnDemand.currentValue : null;
        // changes.placeholder ? newValues.placeholder = changes.placeholder.currentValue : null;
        // changes.placeholderClassName ? newValues.placeholderClassName = changes.placeholderClassName.currentValue : null;
        // changes.class ? newValues.class = changes.class.currentValue : null;
        // changes.style ? newValues.style = changes.style.currentValue : null;
    }
    /**
     * @return {?}
     */
    insertInput() {
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
    }
    /**
     * @return {?}
     */
    setUp() {
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
        this.classes = `${this.className} ${this.placeholderClassName}`;
    }
}
AngularPimgComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-pimg',
                template: `<div [ngClass]="wrapperClassName" *ngIf="(dataSaver && loading) || delayed; else loadingContent">
  <img [ngClass]="classes" [ngStyle]="style" [src]="placeholder" />
  <button [ngClass]="buttonClassName" (click)="fetchImage()">
    Load image
  </button>
</div>
<ng-template #loadingContent>
  <img *ngIf="loading; else otherContent" [ngClass]="placeholderClassName" [ngStyle]="style" [src]="placeholder" />
  <ng-template #otherContent>
    <img [ngStyle]="style" [ngClass]="classes" [src]="blob" />
  </ng-template>
</ng-template>`,
                styles: []
            },] },
];
/** @nocollapse */
AngularPimgComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: DomSanitizer, },
    { type: AngularPimgService, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AngularPimgModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('The Angular Pimg Module is already loaded. Import it only in your AppModule');
        }
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: AngularPimgModule,
            providers: [
                AngularPimgService,
                { provide: 'Options', useValue: options }
            ]
        };
    }
}
AngularPimgModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [AngularPimgComponent],
                exports: [AngularPimgComponent]
            },] },
];
/** @nocollapse */
AngularPimgModule.ctorParameters = () => [
    { type: AngularPimgModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { AngularPimgService, AngularPimgComponent, AngularPimgModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXBpbWcvbGliL2FuZ3VsYXItcGltZy5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItcGltZy9saWIvYW5ndWxhci1waW1nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyQ2xhc3NOYW1lID0gJ3BpbWdfX3BsYWNlaG9sZGVyJztcbiAgcHJpdmF0ZSBfZmV0Y2hPbkRlbWFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kYXRhU2F2ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2J1dHRvbkNsYXNzTmFtZSA9ICdwaW1nX2J0bic7XG4gIHByaXZhdGUgX3dyYXBwZXJDbGFzc05hbWUgPSAncGltZ193cmFwcGVyJztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdPcHRpb25zJykgb3B0aW9uczogQW5ndWxhclBpbWdPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3cmFwcGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZXJDbGFzc05hbWU7XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldCBjbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IGRhdGFTYXZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNhdmVyO1xuICB9XG5cbiAgZ2V0IGZldGNoT25EZW1hbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoT25EZW1hbmQ7XG4gIH1cblxuICBzZXRDb25maWcoeyBjbGFzc05hbWUsIGRhdGFTYXZlciwgZmV0Y2hPbkRlbWFuZCwgcGxhY2Vob2xkZXJDbGFzc05hbWUgfTogUGFydGlhbDxBbmd1bGFyUGltZ09wdGlvbnM+KSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBjbGFzc05hbWUgOiB0aGlzLmNsYXNzTmFtZTtcbiAgICB0aGlzLl9mZXRjaE9uRGVtYW5kID0gdHlwZW9mIGZldGNoT25EZW1hbmQgIT09ICd1bmRlZmluZWQnID8gZmV0Y2hPbkRlbWFuZCA6IHRoaXMuZmV0Y2hPbkRlbWFuZDtcbiAgICB0aGlzLl9wbGFjZWhvbGRlckNsYXNzTmFtZSA9IHR5cGVvZiBwbGFjZWhvbGRlckNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBwbGFjZWhvbGRlckNsYXNzTmFtZSA6IHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgaWYgKHR5cGVvZiBkYXRhU2F2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YVNhdmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5fYnV0dG9uQ2xhc3NOYW1lID0gZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX3dyYXBwZXJDbGFzc05hbWUgPSBkYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YVNhdmVyID0gdHJ1ZTsgLy8gZGF0YVNhdmVyIGlzIHRydWVcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhbmd1bGFyLXBpbWcnLFxuICB0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwid3JhcHBlckNsYXNzTmFtZVwiICpuZ0lmPVwiKGRhdGFTYXZlciAmJiBsb2FkaW5nKSB8fCBkZWxheWVkOyBlbHNlIGxvYWRpbmdDb250ZW50XCI+XG4gIDxpbWcgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCIgW3NyY109XCJwbGFjZWhvbGRlclwiIC8+XG4gIDxidXR0b24gW25nQ2xhc3NdPVwiYnV0dG9uQ2xhc3NOYW1lXCIgKGNsaWNrKT1cImZldGNoSW1hZ2UoKVwiPlxuICAgIExvYWQgaW1hZ2VcbiAgPC9idXR0b24+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZ0NvbnRlbnQ+XG4gIDxpbWcgKm5nSWY9XCJsb2FkaW5nOyBlbHNlIG90aGVyQ29udGVudFwiIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NOYW1lXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbc3JjXT1cInBsYWNlaG9sZGVyXCIgLz5cbiAgPG5nLXRlbXBsYXRlICNvdGhlckNvbnRlbnQ+XG4gICAgPGltZyBbbmdTdHlsZV09XCJzdHlsZVwiIFtuZ0NsYXNzXT1cImNsYXNzZXNcIiBbc3JjXT1cImJsb2JcIiAvPlxuICA8L25nLXRlbXBsYXRlPlxuPC9uZy10ZW1wbGF0ZT5gLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZGF0YVNhdmVyOiBhbnk7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBmZXRjaE9uRGVtYW5kOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6IGFueSA9IHsgZGlzcGxheTogJ2Jsb2NrJyB9O1xuICBAT3V0cHV0KCkgZmV0Y2hlZDogRXZlbnRFbWl0dGVyPG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZXJyb3I6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB3cmFwcGVyQ2xhc3NOYW1lID0gJyc7XG4gIGJ1dHRvbkNsYXNzTmFtZSA9ICcnO1xuICBibG9iOiBTYWZlVXJsID0gJyc7XG4gIGRlbGF5ZWQ6IGJvb2xlYW47XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGNsYXNzZXM6IHN0cmluZztcbiAgcHJpdmF0ZSBpc0ludGVyc2VjdGluZyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHByaXZhdGUgb3B0aW9uczogQW5ndWxhclBpbWdTZXJ2aWNlKSB7XG4gICAgdGhpcy5pbnNlcnRJbnB1dCgpO1xuICAgIHRoaXMuc2V0VXAoKTtcbiAgfVxuXG4gIHNldEZldGNoT25EZW1hbmQoKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IGVudHJpZXNbMF07XG4gICAgICBpZiAoaW1hZ2UuaXNJbnRlcnNlY3RpbmcgJiYgIXRoaXMuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5mZXRjaEltYWdlKCk7XG4gICAgICAgIHRoaXMuaXNJbnRlcnNlY3RpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2FsbGVkIGJ5IGludGVyc2VjdGlvbiBBUEknKTtcbiAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBmZXRjaEltYWdlKCkge1xuICAgIGZldGNoKHRoaXMuc3JjKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5ibG9iKCkpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB0aGlzLmJsb2IgPSB0aGlzLmRvbVNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0VXJsKFVSTC5jcmVhdGVPYmplY3RVUkwocmVzKSk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVsYXllZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZldGNoZWQuZW1pdCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aGlzLmVycm9yLmVtaXQoZXJyKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnN0IG5ld1ZhbHVlczogYW55ID0ge307XG4gICAgY29uc3QgcHJvcHMgPSBbJ3NyYycsICdmZXRjaE9uRGVtYW5kJywgJ3BsYWNlaG9sZGVyJywgJ3BsYWNlaG9sZGVyQ2xhc3NOYW1lJywgJ2NsYXNzTmFtZScsICdzdHlsZSddO1xuICAgIGZvciAoY29uc3QgcHJvcCBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAocHJvcHMuZmluZEluZGV4KHZhbCA9PiB2YWwgPT09IHByb3ApID4gMCAmJiAhdGhpcy5pc1VuZGVmaW5lZChjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJvcH0gaXMgbm90IHVuZGVmaW5lZC4gSXQgaGFzIGNoYW5nZWRgKTtcbiAgICAgICAgdGhpc1twcm9wXSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb3AgPT09ICdkYXRhU2F2ZXInICYmIHRoaXMuaXNPYmplY3QoY2hhbmdlc1twcm9wXSkpIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgICAgICB0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gY2hhbmdlc1twcm9wXS5jdXJyZW50VmFsdWUucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRVcCgpO1xuICAgIC8vIGNoYW5nZXMuZGF0YVNhdmVyID8gbmV3VmFsdWVzLmRhdGFTYXZlciA9IGNoYW5nZXMuZGF0YVNhdmVyLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5zcmMgPyBuZXdWYWx1ZXMuc3JjID0gY2hhbmdlcy5zcmMuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLmZldGNoT25EZW1hbmQgPyBuZXdWYWx1ZXMuZmV0Y2hPbkRlbWFuZCA9IGNoYW5nZXMuZmV0Y2hPbkRlbWFuZC5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMucGxhY2Vob2xkZXIgPyBuZXdWYWx1ZXMucGxhY2Vob2xkZXIgPSBjaGFuZ2VzLnBsYWNlaG9sZGVyLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA/IG5ld1ZhbHVlcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA9IGNoYW5nZXMucGxhY2Vob2xkZXJDbGFzc05hbWUuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLmNsYXNzID8gbmV3VmFsdWVzLmNsYXNzID0gY2hhbmdlcy5jbGFzcy5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMuc3R5bGUgPyBuZXdWYWx1ZXMuc3R5bGUgPSBjaGFuZ2VzLnN0eWxlLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gIH1cblxuICBpbnNlcnRJbnB1dCgpIHtcbiAgICAvLyBDYWxsZWQgb24gaW5pdGlhbGl6YXRpb247IFNldCB0aGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIG9wdGlvbnMgaWYgb3B0aW9uIGlzIG5vdCBwcmVzZW50XG4gICAgY29uc29sZS5sb2coJ0NvbmZpZyBvcHRpb25zJywgdGhpcy5vcHRpb25zKTtcbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLmZldGNoT25EZW1hbmQpKSB7XG4gICAgICB0aGlzLmZldGNoT25EZW1hbmQgPSB0aGlzLm9wdGlvbnMuZmV0Y2hPbkRlbWFuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMuZGF0YVNhdmVyKSkge1xuICAgICAgdGhpcy5kYXRhU2F2ZXIgPSB0aGlzLm9wdGlvbnMuZGF0YVNhdmVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLmNsYXNzTmFtZSkpIHtcbiAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNPYmplY3QodGhpcy5kYXRhU2F2ZXIpKSB7XG4gICAgICAvLyBzZXQgYnV0dG9uQ2xhc3NOYW1lIGFuZCB3cmFwcGVyQ2xhc3NOYW1lXG4gICAgICB0aGlzLmJ1dHRvbkNsYXNzTmFtZSA9IHRoaXMuZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMud3JhcHBlckNsYXNzTmFtZSA9IHRoaXMuZGF0YVNhdmVyLndyYXBwZXJDbGFzc05hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYnV0dG9uQ2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMud3JhcHBlckNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy53cmFwcGVyQ2xhc3NOYW1lO1xuICAgIH1cbiAgfVxuXG4gIHNldFVwKCkge1xuICAgIGlmICh0aGlzLmRhdGFTYXZlcikge1xuICAgICAgdGhpcy5kZWxheWVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZmV0Y2hPbkRlbWFuZCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2V0RmV0Y2hPbkRlbWFuZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZldGNoSW1hZ2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBpbWFnZSwgZHVlIHRvIGNvbmZpZycsIHRoaXMuZGF0YVNhdmVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICYmIHRoaXMuc3JjLmluY2x1ZGVzKCdjbG91ZGluYXJ5JykpIHtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPVxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyIHx8IHRoaXMuc3JjLnJlcGxhY2UoJy91cGxvYWQvJywgJy91cGxvYWQvY190aHVtYix3XzMwLycpO1xuICAgIH1cbiAgICB0aGlzLmNsYXNzZXMgPSBgJHt0aGlzLmNsYXNzTmFtZX0gJHt0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lfWA7XG4gIH1cblxuICBpc09iamVjdCA9IHggPT4gdHlwZW9mIHggPT09ICdvYmplY3QnO1xuICBpc1VuZGVmaW5lZCA9IHggPT4gdHlwZW9mIHggPT09ICd1bmRlZmluZWQnO1xuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ0NvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1waW1nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLW9wdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyUGltZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyUGltZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFuZ3VsYXJQaW1nTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgQW5ndWxhciBQaW1nIE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IG9ubHkgaW4geW91ciBBcHBNb2R1bGUnKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucz86IFBhcnRpYWw8QW5ndWxhclBpbWdPcHRpb25zPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhclBpbWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQW5ndWxhclBpbWdTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdPcHRpb25zJywgdXNlVmFsdWU6IG9wdGlvbnMgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBY0UsWUFBMkM7cUNBTlgsbUJBQW1COzhCQUMxQixLQUFLO2dDQUVILFVBQVU7aUNBQ1QsY0FBYztRQUd4QyxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7S0FDRjs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0tBQy9COzs7O0lBRUQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSSxvQkFBb0I7UUFDdEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7SUFFRCxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDNUI7Ozs7O0lBRUQsU0FB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
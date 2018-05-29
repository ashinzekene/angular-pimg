/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularPimgService } from './angular-pimg.service';
export class AngularPimgComponent {
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
        const /** @type {?} */ newValues = {};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGltZy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXBpbWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUE0QixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFlBQVksRUFBVyxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBbUI1RCxNQUFNOzs7Ozs7SUFrQkosWUFBb0IsRUFBYyxFQUFVLFlBQTBCLEVBQVUsT0FBMkI7UUFBdkYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7cUJBWHJGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTt1QkFDRixJQUFJLFlBQVksRUFBRTtxQkFDckIsSUFBSSxZQUFZLEVBQUU7Z0NBQ3BDLEVBQUU7K0JBQ0gsRUFBRTtvQkFDSixFQUFFOzhCQUlPLEtBQUs7d0JBdUduQixDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVE7MkJBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssV0FBVztRQXJHekMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNkOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsdUJBQU0sUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEQsdUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLENBQUMs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U2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nU2VydmljZSB9IGZyb20gJy4vYW5ndWxhci1waW1nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdPcHRpb25zIH0gZnJvbSAnLi9jb25maWctb3B0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FuZ3VsYXItcGltZycsXG4gIHRlbXBsYXRlOiBgPGRpdiBbbmdDbGFzc109XCJ3cmFwcGVyQ2xhc3NOYW1lXCIgKm5nSWY9XCIoZGF0YVNhdmVyICYmIGxvYWRpbmcpIHx8IGRlbGF5ZWQ7IGVsc2UgbG9hZGluZ0NvbnRlbnRcIj5cbiAgPGltZyBbbmdDbGFzc109XCJjbGFzc2VzXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbc3JjXT1cInBsYWNlaG9sZGVyXCIgLz5cbiAgPGJ1dHRvbiBbbmdDbGFzc109XCJidXR0b25DbGFzc05hbWVcIiAoY2xpY2spPVwiZmV0Y2hJbWFnZSgpXCI+XG4gICAgTG9hZCBpbWFnZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuPG5nLXRlbXBsYXRlICNsb2FkaW5nQ29udGVudD5cbiAgPGltZyAqbmdJZj1cImxvYWRpbmc7IGVsc2Ugb3RoZXJDb250ZW50XCIgW25nQ2xhc3NdPVwicGxhY2Vob2xkZXJDbGFzc05hbWVcIiBbbmdTdHlsZV09XCJzdHlsZVwiIFtzcmNdPVwicGxhY2Vob2xkZXJcIiAvPlxuICA8bmctdGVtcGxhdGUgI290aGVyQ29udGVudD5cbiAgICA8aW1nIFtuZ1N0eWxlXT1cInN0eWxlXCIgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiIFtzcmNdPVwiYmxvYlwiIC8+XG4gIDwvbmctdGVtcGxhdGU+XG48L25nLXRlbXBsYXRlPmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBkYXRhU2F2ZXI6IGFueTtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZldGNoT25EZW1hbmQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogYW55ID0geyBkaXNwbGF5OiAnYmxvY2snIH07XG4gIEBPdXRwdXQoKSBmZXRjaGVkOiBFdmVudEVtaXR0ZXI8bnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBlcnJvcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHdyYXBwZXJDbGFzc05hbWUgPSAnJztcbiAgYnV0dG9uQ2xhc3NOYW1lID0gJyc7XG4gIGJsb2I6IFNhZmVVcmwgPSAnJztcbiAgZGVsYXllZDogYm9vbGVhbjtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgY2xhc3Nlczogc3RyaW5nO1xuICBwcml2YXRlIGlzSW50ZXJzZWN0aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBkb21TYW5pdGl6ZXI6IERvbVNhbml0aXplciwgcHJpdmF0ZSBvcHRpb25zOiBBbmd1bGFyUGltZ1NlcnZpY2UpIHtcbiAgICB0aGlzLmluc2VydElucHV0KCk7XG4gICAgdGhpcy5zZXRVcCgpO1xuICB9XG5cbiAgc2V0RmV0Y2hPbkRlbWFuZCgpIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gZW50cmllc1swXTtcbiAgICAgIGlmIChpbWFnZS5pc0ludGVyc2VjdGluZyAmJiAhdGhpcy5pc0ludGVyc2VjdGluZykge1xuICAgICAgICB0aGlzLmZldGNoSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5pc0ludGVyc2VjdGluZyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDYWxsZWQgYnkgaW50ZXJzZWN0aW9uIEFQSScpO1xuICAgICAgICB0aGlzLmRlbGF5ZWQgPSBmYWxzZTtcbiAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGZldGNoSW1hZ2UoKSB7XG4gICAgZmV0Y2godGhpcy5zcmMpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmJsb2IoKSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIHRoaXMuYmxvYiA9IHRoaXMuZG9tU2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTChyZXMpKTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNJbnRlcnNlY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZWxheWVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZmV0Y2hlZC5lbWl0KCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnIpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgbmV3VmFsdWVzOiBhbnkgPSB7fTtcbiAgICBjb25zdCBwcm9wcyA9IFsnc3JjJywgJ2ZldGNoT25EZW1hbmQnLCAncGxhY2Vob2xkZXInLCAncGxhY2Vob2xkZXJDbGFzc05hbWUnLCAnY2xhc3NOYW1lJywgJ3N0eWxlJ107XG4gICAgZm9yIChjb25zdCBwcm9wIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChwcm9wcy5maW5kSW5kZXgodmFsID0+IHZhbCA9PT0gcHJvcCkgPiAwICYmICF0aGlzLmlzVW5kZWZpbmVkKGNoYW5nZXNbcHJvcF0uY3VycmVudFZhbHVlKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtwcm9wfSBpcyBub3QgdW5kZWZpbmVkLiBJdCBoYXMgY2hhbmdlZGApO1xuICAgICAgICB0aGlzW3Byb3BdID0gY2hhbmdlc1twcm9wXS5jdXJyZW50VmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2RhdGFTYXZlcicgJiYgdGhpcy5pc09iamVjdChjaGFuZ2VzW3Byb3BdKSkge1xuICAgICAgICAgIHRoaXMuYnV0dG9uQ2xhc3NOYW1lID0gY2hhbmdlc1twcm9wXS5jdXJyZW50VmFsdWUuYnV0dG9uQ2xhc3NOYW1lO1xuICAgICAgICAgIHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWUgPSBjaGFuZ2VzW3Byb3BdLmN1cnJlbnRWYWx1ZS5wbGFjZWhvbGRlckNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldFVwKCk7XG4gICAgLy8gY2hhbmdlcy5kYXRhU2F2ZXIgPyBuZXdWYWx1ZXMuZGF0YVNhdmVyID0gY2hhbmdlcy5kYXRhU2F2ZXIuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLnNyYyA/IG5ld1ZhbHVlcy5zcmMgPSBjaGFuZ2VzLnNyYy5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMuZmV0Y2hPbkRlbWFuZCA/IG5ld1ZhbHVlcy5mZXRjaE9uRGVtYW5kID0gY2hhbmdlcy5mZXRjaE9uRGVtYW5kLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5wbGFjZWhvbGRlciA/IG5ld1ZhbHVlcy5wbGFjZWhvbGRlciA9IGNoYW5nZXMucGxhY2Vob2xkZXIuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgICAvLyBjaGFuZ2VzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lID8gbmV3VmFsdWVzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lID0gY2hhbmdlcy5wbGFjZWhvbGRlckNsYXNzTmFtZS5jdXJyZW50VmFsdWUgOiBudWxsO1xuICAgIC8vIGNoYW5nZXMuY2xhc3MgPyBuZXdWYWx1ZXMuY2xhc3MgPSBjaGFuZ2VzLmNsYXNzLmN1cnJlbnRWYWx1ZSA6IG51bGw7XG4gICAgLy8gY2hhbmdlcy5zdHlsZSA/IG5ld1ZhbHVlcy5zdHlsZSA9IGNoYW5nZXMuc3R5bGUuY3VycmVudFZhbHVlIDogbnVsbDtcbiAgfVxuXG4gIGluc2VydElucHV0KCkge1xuICAgIC8vIENhbGxlZCBvbiBpbml0aWFsaXphdGlvbjsgU2V0IHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBpZiBvcHRpb24gaXMgbm90IHByZXNlbnRcbiAgICBjb25zb2xlLmxvZygnQ29uZmlnIG9wdGlvbnMnLCB0aGlzLm9wdGlvbnMpO1xuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMuZmV0Y2hPbkRlbWFuZCkpIHtcbiAgICAgIHRoaXMuZmV0Y2hPbkRlbWFuZCA9IHRoaXMub3B0aW9ucy5mZXRjaE9uRGVtYW5kO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0aGlzLnBsYWNlaG9sZGVyQ2xhc3NOYW1lKSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlckNsYXNzTmFtZSA9IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlckNsYXNzTmFtZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGhpcy5kYXRhU2F2ZXIpKSB7XG4gICAgICB0aGlzLmRhdGFTYXZlciA9IHRoaXMub3B0aW9ucy5kYXRhU2F2ZXI7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzVW5kZWZpbmVkKHRoaXMuY2xhc3NOYW1lKSkge1xuICAgICAgdGhpcy5jbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMuY2xhc3NOYW1lO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc09iamVjdCh0aGlzLmRhdGFTYXZlcikpIHtcbiAgICAgIC8vIHNldCBidXR0b25DbGFzc05hbWUgYW5kIHdyYXBwZXJDbGFzc05hbWVcbiAgICAgIHRoaXMuYnV0dG9uQ2xhc3NOYW1lID0gdGhpcy5kYXRhU2F2ZXIuYnV0dG9uQ2xhc3NOYW1lO1xuICAgICAgdGhpcy53cmFwcGVyQ2xhc3NOYW1lID0gdGhpcy5kYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5idXR0b25DbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMuYnV0dG9uQ2xhc3NOYW1lO1xuICAgICAgdGhpcy53cmFwcGVyQ2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLndyYXBwZXJDbGFzc05hbWU7XG4gICAgfVxuICB9XG5cbiAgc2V0VXAoKSB7XG4gICAgaWYgKHRoaXMuZGF0YVNhdmVyKSB7XG4gICAgICB0aGlzLmRlbGF5ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mZXRjaE9uRGVtYW5kKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZXRGZXRjaE9uRGVtYW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmV0Y2hJbWFnZSgpO1xuICAgICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIGltYWdlLCBkdWUgdG8gY29uZmlnJywgdGhpcy5kYXRhU2F2ZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcmMgJiYgdGhpcy5zcmMuaW5jbHVkZXMoJ2Nsb3VkaW5hcnknKSkge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9XG4gICAgICAgIHRoaXMucGxhY2Vob2xkZXIgfHwgdGhpcy5zcmMucmVwbGFjZSgnL3VwbG9hZC8nLCAnL3VwbG9hZC9jX3RodW1iLHdfMzAvJyk7XG4gICAgfVxuICAgIHRoaXMuY2xhc3NlcyA9IGAke3RoaXMuY2xhc3NOYW1lfSAke3RoaXMucGxhY2Vob2xkZXJDbGFzc05hbWV9YDtcbiAgfVxuXG4gIGlzT2JqZWN0ID0geCA9PiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG4gIGlzVW5kZWZpbmVkID0geCA9PiB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCc7XG5cbn1cbiJdfQ==
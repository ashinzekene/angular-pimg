/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import * as i0 from "@angular/core";
export class AngularPimgService {
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
/** @nocollapse */ AngularPimgService.ngInjectableDef = i0.defineInjectable({ factory: function AngularPimgService_Factory() { return new AngularPimgService(i0.inject("Options", 8)); }, token: AngularPimgService, providedIn: "root" });
function AngularPimgService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularPimgService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularPimgService.ctorParameters;
    /** @type {?} */
    AngularPimgService.prototype._className;
    /** @type {?} */
    AngularPimgService.prototype._placeholderClassName;
    /** @type {?} */
    AngularPimgService.prototype._fetchOnDemand;
    /** @type {?} */
    AngularPimgService.prototype._dataSaver;
    /** @type {?} */
    AngularPimgService.prototype._buttonClassName;
    /** @type {?} */
    AngularPimgService.prototype._wrapperClassName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBpbWcvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1waW1nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNN0QsTUFBTTs7OztJQVFKLFlBQTJDO3FDQU5YLG1CQUFtQjs4QkFDMUIsS0FBSztnQ0FFSCxVQUFVO2lDQUNULGNBQWM7UUFHeEMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7S0FDRjs7OztJQUVELElBQUksZ0JBQWdCO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7S0FDL0I7Ozs7SUFFRCxJQUFJLGVBQWU7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztLQUM5Qjs7OztJQUVELElBQUksU0FBUztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSSxvQkFBb0I7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztLQUNuQzs7OztJQUVELElBQUksU0FBUztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCOzs7O0lBRUQsSUFBSSxhQUFhO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7S0FDNUI7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQStCO1FBQ2xHLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDaEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLGFBQWEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsT0FBTyxvQkFBb0IsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDNUgsRUFBRSxDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUM7U0FDUjtRQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUM7WUFDbEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztTQUNyRDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEI7S0FDRjs7O1lBdERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FTYyxRQUFRLFlBQUksTUFBTSxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyQ2xhc3NOYW1lID0gJ3BpbWdfX3BsYWNlaG9sZGVyJztcbiAgcHJpdmF0ZSBfZmV0Y2hPbkRlbWFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kYXRhU2F2ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2J1dHRvbkNsYXNzTmFtZSA9ICdwaW1nX2J0bic7XG4gIHByaXZhdGUgX3dyYXBwZXJDbGFzc05hbWUgPSAncGltZ193cmFwcGVyJztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdPcHRpb25zJykgb3B0aW9uczogQW5ndWxhclBpbWdPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3cmFwcGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZXJDbGFzc05hbWU7XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldCBjbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IGRhdGFTYXZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNhdmVyO1xuICB9XG5cbiAgZ2V0IGZldGNoT25EZW1hbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoT25EZW1hbmQ7XG4gIH1cblxuICBzZXRDb25maWcoeyBjbGFzc05hbWUsIGRhdGFTYXZlciwgZmV0Y2hPbkRlbWFuZCwgcGxhY2Vob2xkZXJDbGFzc05hbWUgfTogUGFydGlhbDxBbmd1bGFyUGltZ09wdGlvbnM+KSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBjbGFzc05hbWUgOiB0aGlzLmNsYXNzTmFtZTtcbiAgICB0aGlzLl9mZXRjaE9uRGVtYW5kID0gdHlwZW9mIGZldGNoT25EZW1hbmQgIT09ICd1bmRlZmluZWQnID8gZmV0Y2hPbkRlbWFuZCA6IHRoaXMuZmV0Y2hPbkRlbWFuZDtcbiAgICB0aGlzLl9wbGFjZWhvbGRlckNsYXNzTmFtZSA9IHR5cGVvZiBwbGFjZWhvbGRlckNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBwbGFjZWhvbGRlckNsYXNzTmFtZSA6IHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgaWYgKHR5cGVvZiBkYXRhU2F2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YVNhdmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5fYnV0dG9uQ2xhc3NOYW1lID0gZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX3dyYXBwZXJDbGFzc05hbWUgPSBkYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YVNhdmVyID0gdHJ1ZTsgLy8gZGF0YVNhdmVyIGlzIHRydWVcbiAgICB9XG4gIH1cblxufVxuIl19
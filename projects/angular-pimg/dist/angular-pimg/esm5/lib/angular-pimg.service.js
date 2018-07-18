/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, Optional, Inject } from '@angular/core';
import * as i0 from "@angular/core";
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    AngularPimgService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: ['Options',] },] },
    ]; };
    /** @nocollapse */ AngularPimgService.ngInjectableDef = i0.defineInjectable({ factory: function AngularPimgService_Factory() { return new AngularPimgService(i0.inject("Options", 8)); }, token: AngularPimgService, providedIn: "root" });
    return AngularPimgService;
}());
export { AngularPimgService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBpbWcvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1waW1nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0lBYzNELDRCQUEyQztxQ0FOWCxtQkFBbUI7OEJBQzFCLEtBQUs7Z0NBRUgsVUFBVTtpQ0FDVCxjQUFjO1FBR3hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxzQkFBSSxnREFBZ0I7Ozs7UUFBcEI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1NBQy9COzs7T0FBQTtJQUVELHNCQUFJLCtDQUFlOzs7O1FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5Qjs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBUzs7OztRQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7OztPQUFBO0lBRUQsc0JBQUksb0RBQW9COzs7O1FBQXhCO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBUzs7OztRQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7OztPQUFBO0lBRUQsc0JBQUksNkNBQWE7Ozs7UUFBakI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUM1Qjs7O09BQUE7Ozs7O0lBRUQsc0NBQVM7Ozs7SUFBVCxVQUFVLEVBQTBGO1lBQXhGLHdCQUFTLEVBQUUsd0JBQVMsRUFBRSxnQ0FBYSxFQUFFLDhDQUFvQjtRQUNuRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxhQUFhLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sb0JBQW9CLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQzVILEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxDQUFDO1NBQ1I7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7U0FDckQ7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO0tBQ0Y7O2dCQXRERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dEQVNjLFFBQVEsWUFBSSxNQUFNLFNBQUMsU0FBUzs7OzZCQWQzQzs7U0FNYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyQ2xhc3NOYW1lID0gJ3BpbWdfX3BsYWNlaG9sZGVyJztcbiAgcHJpdmF0ZSBfZmV0Y2hPbkRlbWFuZCA9IGZhbHNlO1xuICBwcml2YXRlIF9kYXRhU2F2ZXI6IGJvb2xlYW47XG4gIHByaXZhdGUgX2J1dHRvbkNsYXNzTmFtZSA9ICdwaW1nX2J0bic7XG4gIHByaXZhdGUgX3dyYXBwZXJDbGFzc05hbWUgPSAncGltZ193cmFwcGVyJztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KCdPcHRpb25zJykgb3B0aW9uczogQW5ndWxhclBpbWdPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuc2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIGdldCB3cmFwcGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3dyYXBwZXJDbGFzc05hbWU7XG4gIH1cblxuICBnZXQgYnV0dG9uQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2J1dHRvbkNsYXNzTmFtZTtcbiAgfVxuXG4gIGdldCBjbGFzc05hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyQ2xhc3NOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyQ2xhc3NOYW1lO1xuICB9XG5cbiAgZ2V0IGRhdGFTYXZlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0YVNhdmVyO1xuICB9XG5cbiAgZ2V0IGZldGNoT25EZW1hbmQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZldGNoT25EZW1hbmQ7XG4gIH1cblxuICBzZXRDb25maWcoeyBjbGFzc05hbWUsIGRhdGFTYXZlciwgZmV0Y2hPbkRlbWFuZCwgcGxhY2Vob2xkZXJDbGFzc05hbWUgfTogUGFydGlhbDxBbmd1bGFyUGltZ09wdGlvbnM+KSB7XG4gICAgdGhpcy5fY2xhc3NOYW1lID0gdHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBjbGFzc05hbWUgOiB0aGlzLmNsYXNzTmFtZTtcbiAgICB0aGlzLl9mZXRjaE9uRGVtYW5kID0gdHlwZW9mIGZldGNoT25EZW1hbmQgIT09ICd1bmRlZmluZWQnID8gZmV0Y2hPbkRlbWFuZCA6IHRoaXMuZmV0Y2hPbkRlbWFuZDtcbiAgICB0aGlzLl9wbGFjZWhvbGRlckNsYXNzTmFtZSA9IHR5cGVvZiBwbGFjZWhvbGRlckNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBwbGFjZWhvbGRlckNsYXNzTmFtZSA6IHRoaXMucGxhY2Vob2xkZXJDbGFzc05hbWU7XG4gICAgaWYgKHR5cGVvZiBkYXRhU2F2ZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZGF0YVNhdmVyID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5fYnV0dG9uQ2xhc3NOYW1lID0gZGF0YVNhdmVyLmJ1dHRvbkNsYXNzTmFtZTtcbiAgICAgIHRoaXMuX3dyYXBwZXJDbGFzc05hbWUgPSBkYXRhU2F2ZXIud3JhcHBlckNsYXNzTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGF0YVNhdmVyID0gdHJ1ZTsgLy8gZGF0YVNhdmVyIGlzIHRydWVcbiAgICB9XG4gIH1cblxufVxuIl19
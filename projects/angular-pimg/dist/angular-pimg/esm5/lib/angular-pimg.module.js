/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularPimgComponent } from './angular-pimg.component';
import { AngularPimgService } from './angular-pimg.service';
import { CommonModule } from '@angular/common';
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [AngularPimgComponent],
                    exports: [AngularPimgComponent]
                },] },
    ];
    /** @nocollapse */
    AngularPimgModule.ctorParameters = function () { return [
        { type: AngularPimgModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
    ]; };
    return AngularPimgModule;
}());
export { AngularPimgModule };
function AngularPimgModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularPimgModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularPimgModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGltZy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXBpbWcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFVN0MsMkJBQW9DO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO1NBQ2hHO0tBQ0Y7Ozs7O0lBQ00seUJBQU87Ozs7SUFBZCxVQUFlLE9BQXFDO1FBQ2xELE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULGtCQUFrQjtnQkFDbEIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7YUFDMUM7U0FDRixDQUFDO0tBQ0g7O2dCQXJCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7b0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2lCQUNoQzs7OztnQkFDWSxpQkFBaUIsdUJBQ2YsUUFBUSxZQUFJLFFBQVE7OzRCQWRuQzs7U0FhYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ0NvbXBvbmVudCB9IGZyb20gJy4vYW5ndWxhci1waW1nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ1NlcnZpY2UgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFuZ3VsYXJQaW1nT3B0aW9ucyB9IGZyb20gJy4vY29uZmlnLW9wdGlvbnMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyUGltZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBbmd1bGFyUGltZ0NvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBpbWdNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEFuZ3VsYXJQaW1nTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgQW5ndWxhciBQaW1nIE1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IG9ubHkgaW4geW91ciBBcHBNb2R1bGUnKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZvclJvb3Qob3B0aW9ucz86IFBhcnRpYWw8QW5ndWxhclBpbWdPcHRpb25zPik6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5ndWxhclBpbWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQW5ndWxhclBpbWdTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdPcHRpb25zJywgdXNlVmFsdWU6IG9wdGlvbnMgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularPimgComponent } from './angular-pimg.component';
import { AngularPimgService } from './angular-pimg.service';
import { CommonModule } from '@angular/common';
export class AngularPimgModule {
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
function AngularPimgModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    AngularPimgModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    AngularPimgModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1waW1nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGltZy8iLCJzb3VyY2VzIjpbImxpYi9hbmd1bGFyLXBpbWcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVMvQyxNQUFNOzs7O0lBQ0osWUFBb0M7UUFDbEMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUM7U0FDaEc7S0FDRjs7Ozs7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQXFDO1FBQ2xELE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsU0FBUyxFQUFFO2dCQUNULGtCQUFrQjtnQkFDbEIsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUU7YUFDMUM7U0FDRixDQUFDO0tBQ0g7OztZQXJCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3BDLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ2hDOzs7O1lBQ1ksaUJBQWlCLHVCQUNmLFFBQVEsWUFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdDb21wb25lbnQgfSBmcm9tICcuL2FuZ3VsYXItcGltZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQW5ndWxhclBpbWdTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXBpbWcuc2VydmljZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGltZ09wdGlvbnMgfSBmcm9tICcuL2NvbmZpZy1vcHRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQW5ndWxhclBpbWdDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhclBpbWdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQaW1nTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBbmd1bGFyUGltZ01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIEFuZ3VsYXIgUGltZyBNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBvbmx5IGluIHlvdXIgQXBwTW9kdWxlJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KG9wdGlvbnM/OiBQYXJ0aWFsPEFuZ3VsYXJQaW1nT3B0aW9ucz4pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFuZ3VsYXJQaW1nTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFuZ3VsYXJQaW1nU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAnT3B0aW9ucycsIHVzZVZhbHVlOiBvcHRpb25zIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iXX0=
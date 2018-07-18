import { ModuleWithProviders } from '@angular/core';
import { AngularPimgOptions } from './config-options';
export declare class AngularPimgModule {
    constructor(parentModule: AngularPimgModule);
    static forRoot(options?: Partial<AngularPimgOptions>): ModuleWithProviders;
}

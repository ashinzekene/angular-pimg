import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { AngularPimgComponent } from './angular-pimg.component';
import { AngularPimgOptions } from './config-options';
import { CommonModule } from '@angular/common';
import { AngularPimgService } from '../public_api';
import { config } from 'rxjs';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularPimgComponent],
  exports: [AngularPimgComponent]
})
export class AngularPimgModule {
  constructor(@Optional() @SkipSelf() parentModule: AngularPimgModule) {
    if (parentModule) {
      throw new Error("The Angular Pimg Module is already loaded. Import it only in your AppModule")
    }
  }
  static forRoot(options?: Partial<AngularPimgOptions>): ModuleWithProviders {
    return {
      ngModule: AngularPimgModule,
      providers: [
         { provide: AngularPimgService, useFactory: (options: Partial<AngularPimgOptions>) => new AngularPimgService(options), deps: [ options ]}
      ]
    }
  }
}

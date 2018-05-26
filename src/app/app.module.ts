import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularPimgModule } from './lib/angular-pimg.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularPimgModule.forRoot({
      fetchOnDemand: true,
      className: 'img',
      dataSaver: { wrapperClassName: 'wrapper', buttonClassName: 'my-btn' }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

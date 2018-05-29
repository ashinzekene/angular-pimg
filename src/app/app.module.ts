import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularPimgModule } from 'angular-pimg';

import { AppComponent } from './app.component';

const pimgOptions = {
  fetchOnDemand: true,
  className: 'img',
  dataSaver: { wrapperClassName: 'wrapper', buttonClassName: 'my-btn' }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularPimgModule.forRoot(pimgOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

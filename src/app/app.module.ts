import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularPimgModule } from 'angular-pimg';

import { AppComponent } from './app.component';
import { EscapedHtmlComponent } from './escaped-html/escaped-html.component';

const pimgOptions = {
  className: 'img',
  dataSaver: { wrapperClassName: 'wrapper', buttonClassName: 'my-btn' }
};

@NgModule({
  declarations: [
    AppComponent,
    EscapedHtmlComponent,
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

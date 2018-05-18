import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularPimgModule } from 'angular-pimg';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularPimgModule.forRoot({ dataSaver: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

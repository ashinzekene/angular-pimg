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
    AngularPimgModule.forRoot({ dataSaver: { wrapperClassName: "anything", buttonClassName: "btn btn-primary" } })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

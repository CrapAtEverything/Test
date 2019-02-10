import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WrestlerGetComponent } from './wrestler-get/wrestler-get.component';
import { WrestlerPushComponent } from './wrestler-push/wrestler-push.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WrestlerGetComponent,
    WrestlerPushComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

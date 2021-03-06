import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ColorPickerPopoverPageModule} from './color-popover/color-picker-popover.module'
import {ColorPickerPopoverPage} from './color-popover/color-picker-popover.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ColorPickerPopoverPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ColorPickerPopoverPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    ColorPickerPopoverPage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

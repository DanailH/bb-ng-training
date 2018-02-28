import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Icon components
import { ClearSvgComponent } from './icons/clear-svg/clearSvg.component';
import { CloudsSvgComponent } from './icons/clouds-svg/cloudsSvg.component';
import { FogSvgComponent } from './icons/fog-svg/fogSvg.component';
import { SnowSvgComponent } from './icons/snow-svg/snowSvg.component';
import { StormSvgComponent } from './icons/storm-svg/stormSvg.component';
import { WindySvgComponent } from './icons/windy-svg/windySvg.component';


@NgModule({
  declarations: [
    AppComponent,
    ClearSvgComponent,
    CloudsSvgComponent,
    FogSvgComponent,
    SnowSvgComponent,
    StormSvgComponent,
    WindySvgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

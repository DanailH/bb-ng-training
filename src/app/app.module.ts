import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { weatherReducer } from './reducers/weather';
import { forecastReducer } from './reducers/forecast';
 
import { AppComponent } from './app.component';
// Icon components
import { ClearSvgComponent } from './icons/clear-svg/clearSvg.component';
import { CloudsSvgComponent } from './icons/clouds-svg/cloudsSvg.component';
import { FogSvgComponent } from './icons/fog-svg/fogSvg.component';
import { SnowSvgComponent } from './icons/snow-svg/snowSvg.component';
import { StormSvgComponent } from './icons/storm-svg/stormSvg.component';
import { WindySvgComponent } from './icons/windy-svg/windySvg.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    ClearSvgComponent,
    CloudsSvgComponent,
    FogSvgComponent,
    SnowSvgComponent,
    StormSvgComponent,
    WindySvgComponent,
    SearchComponent,
    WeatherComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      weatherReducer,
      forecastReducer,
    }),
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

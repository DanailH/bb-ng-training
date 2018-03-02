import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { weatherReducer } from './reducers/weather';
import { forecastReducer } from './reducers/forecast';
 
import { AppComponent } from './app.component';
import { SvgComponent } from './icons/svg.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
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

import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../service/weather.service';
import { pipe } from 'rxjs';
import { TemperatureConverterPipe} from '../shared/temperature-converter.pipe';
import { WeatherData } from '../models/weather-data';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  weatherData:WeatherData;
  capital:string;
  selectedVal: "metric";
  constructor(private route:ActivatedRoute,
              private weatherService:WeatherService) 
              {

              }

  ngOnInit(): void {
    //this.weatherData.isDay = true;
    this.capital = this.route.snapshot.paramMap.get('capital');
    this.getWeatherData(this.capital);
    //this.selectedVal = "metric";
    //Navigate to wetaher comp
  }

  getWeatherData(capital) {
    this.weatherService.getWeatherItemsByCity(capital)
    .subscribe((data)=> {
      this.setWeatherMap(data);
      console.log('Weather  data :', data)     
    });
  }

  onUnitsChange(change: MatButtonToggleChange){
   // this.toggle = change.value;
    console.log('Toggle view data :', change.value)    
    //this.getWeatherForecastByUnits() 
    this.weatherService.getWeatherForecastByUnits(this.capital,change.value)
    .subscribe((data)=> {
      this.setWeatherMap(data);
      console.log('Weather  data for units: :' + change.value +" is :", data)     
    });
  }
 
  setWeatherMap(data) {
    this.weatherData = data;
    
    console.log('Weather  data for is :', data) ;
    let sunSetTime = new Date(this.weatherData.sys.sunset *1000);
    this.weatherData.sunset_time = sunSetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weatherData.isDay = (currentDate.getTime() > sunSetTime.getTime());
    
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../service/weather.service';
import { pipe } from 'rxjs';
import { TemperatureConverterPipe} from '../shared/temperature-converter.pipe';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather:any;
  capital:string;
  constructor(private route:ActivatedRoute,
              private weatherService:WeatherService) 
              {

              }

  ngOnInit(): void {
    this.capital = this.route.snapshot.paramMap.get('capital');
    this.getWeatherData(this.capital);
    //Navigate to wetaher comp
  }
  getWeatherData(capital) {
    this.weatherService.getWeatherItemsByCity(capital)
    .subscribe((data)=> 
      this.weather = data
      //console.log('Weather  data :', data)     
    );

  }
 

}

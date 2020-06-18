import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { CountryComponent } from '../country/country.component';
import { of} from 'rxjs';
import { WeatherData } from '../models/weather-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  constructor(private http: HttpClient) {
    
  }

  countries:Country[] =  [
    {name : 'India', alpha3Code:'Ind', capital:'Delhi' },
    {name : 'United kingdom', alpha3Code:'UK', capital:'London' },
    {name : 'USA', alpha3Code:'US', capital:'New York' },
    {name : 'Afghanistan', alpha3Code:'AFS', capital:'Alban' },
    {name : 'Germany', alpha3Code:'GER', capital:'Berlin' },
    {name : 'France', alpha3Code:'FRA', capital:'Paris' },
    {name : 'Italy', alpha3Code:'ITA', capital:'Rome' },
  ];

  getAllCountries():Observable<Country[]> {
       return this.http.get<Country[]>(environment.countryBaseUrl);
  }
  
  getWeatherItemsByCity(cityName:string):Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherBaseUrl +
      'weather?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
  }

  getWeatherForecast(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherBaseUrl +
      'forecast?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
  }

  getWeatherForecastByUnits(cityName: string,unit:string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherBaseUrl +
      'forecast?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + unit
    )
  }
  private handleError(error: any) {   
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
    
  }
  getAllCountries():Observable<any>{
    return this.http.get(
      environment.countryBaseUrl
    ) 

  }
  getWeatherItemsByCity(cityName:string):Observable<any> {
    return this.http.get(
      environment.weatherBaseUrl +
      'weather?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
  }

  getWeatherForecast(cityName: string): Observable<any> {
    return this.http.get(
      environment.weatherBaseUrl +
      'forecast?q=' + cityName +
      '&appid=' + environment.appId +
      '&units=' + environment.units
    )
    
    
  }
  private handleError(error: any) {   
    let errMsg: string;
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

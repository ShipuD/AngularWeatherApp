import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../models/country';
import { CountryComponent } from '../country/country.component';
import { of} from 'rxjs';

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
       let country = this.http.get<Country[]>(environment.countryBaseUrl);
        //console.log('Service1 :' + country[0]);
        //console.log('Service2 :' + country[0].name);
        console.log('Service3 :' + country);
        
        return (country);

    //return of(this.countries);
                   // .subscribe(c => {c as  Country[]})
                    //.map((res:Response) => <Country[]> res.json());
                   //  .pipe(
                       //map((data:any) => data),
                   //    map(r=>r) = new Country(name,alpha3Code,capital));
  //};
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

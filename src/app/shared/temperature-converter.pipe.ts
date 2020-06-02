import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

   // Return temperature
   transform(value: number,unit:string): number {
    switch(unit){
      case "c":
        return value;
        break;
      case "f":
        return this.celsiusToFahrenheit(value);
        break;
      default:
       return value;
    }
  }

  // Convert celsius temp to fahrenheit
  celsiusToFahrenheit(value: number){
     return value * 9/5 + 32;
  }

}

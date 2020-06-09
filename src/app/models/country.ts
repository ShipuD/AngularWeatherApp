export class Country implements ICountry{  
  
    constructor(name:string, alpha3Code: string,    
        capital: string) {
            this.name = name,
            this.capital = capital,
            this.alpha3Code = alpha3Code
    }    
    name: string;
    alpha3Code: string;
    capital: string;
}
export interface ICountry{
    name: string;
    alpha3Code: string;    
    capital: string;
}
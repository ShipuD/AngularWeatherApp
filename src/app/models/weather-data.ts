// export class WeatherItem {
//     temperature: string;
//     percipitaion: string;
//     wind: string;
//     description:string;
//     icon:string;
// }


export interface WeatherData {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
    isDay: boolean;
    sunset_time: string;
}



    export interface Coord {
        lon: number;
        lat: number;
    }

    export interface Weather {
        id: number;
        main: string;
        description: string;
        icon: string;
    }

    export interface Main {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    }

    export interface Wind {
        speed: number;
        deg: number;
        gust: number;
    }

    export interface Clouds {
        all: number;
    }

    export interface Sys {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
    }




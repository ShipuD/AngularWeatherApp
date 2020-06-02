import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { WeatherComponent } from './weather/weather.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes =   [
  { path: '', component: CountryComponent},  
  { path: 'weather/:capital', component: WeatherComponent},  
  { path :'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Country } from '../models/country';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { Router } from '@angular/router';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  displayedColumns = ['name', 'alpha3Code', 'capital'];
  
  countries:Country[] = [];
  //selectdCountries:Country[] = [];
  //  [
  //   {name : 'India', alpha3Code:'Ind', capital:'Delhi' },
  //   {name : 'United kingdom', alpha3Code:'UK', capital:'London' },
  //   {name : 'USA', alpha3Code:'US', capital:'New York' }
  // ];
 
  dataSource: MatTableDataSource<Country>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private weatherService:WeatherService,
              private router: Router ) {        
       // this.dataSource = new MatTableDataSource(this.countries);
  }

  ngOnInit(): void {
     this.getAllCountries();
    //this.dataSource = new MatTableDataSource(this.countries);
    
  }

  getAllCountries()  {
  
         this.weatherService.getAllCountries()
          .subscribe(res => {
            this.countries = res.map(item => {
             // console.log("getAllCountries:", item);
              
              return  new Country(item.name,
                                item.alpha3Code,
                                item.capital);
            });
            
          },
          ()=> {},
          ()=> {
            console.log("Completed", this.countries);
            this.dataSource = new MatTableDataSource(this.countries);          
          }
          );
        };
   
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
    //setTimeout(() => this.dataSource.paginator = this.paginator);
   
    //this.dataSource = new MatTableDataSource(this.countries);
    //this.getAllCountries();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  onSelect(capital:string){
    this.router.navigate(['/weather',capital])
  }

}

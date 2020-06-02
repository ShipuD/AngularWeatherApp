import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Country } from '../models/country';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  
  countries:Country[];
  displayedColumns = ['name', 'alpha3Code', 'capital'];
  dataSource: MatTableDataSource<Country>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private weatherService:WeatherService,
      private router: Router ) {
        this.dataSource = new MatTableDataSource(this.countries);
  }

  ngOnInit(): void {
    this.getAllCountries();
    
  }
  getAllCountries() {
  
     this.weatherService.getAllCountries()
      .subscribe((data)=> {
      this.countries = data;
      this.dataSource = new MatTableDataSource(data)
    },
      error => console.log('Could not load countries.')
    );    
  };
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

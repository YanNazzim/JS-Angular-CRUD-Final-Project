import { Component, OnInit } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrl: './census-list.component.css'
})
export class CensusListComponent implements OnInit{
  censusRecords: any[] = []; // define the data structure based on schema
  errorOccurred = false;
  errorMessage = '';

  constructor(private censusService: CensusService) { }

  ngOnInit(): void {
    this.fetchCensusRecords();
  }

  fetchCensusRecords(): void {
    this.censusService.getCensus().subscribe(
      (data: any[]) => {
        this.censusRecords = data;
      },
      (      error: any) => {
        this.errorOccurred = true
       this.errorMessage = 'Error fetching Census Records. Please try again later'
       console.error('Error fetching Census Records: ', error);
      }
    );
  }
}

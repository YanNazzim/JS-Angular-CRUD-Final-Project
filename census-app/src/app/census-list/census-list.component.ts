import { Component, OnInit } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {
  censusRecords: any[] = [];

  constructor(private censusService: CensusService) { }

  ngOnInit(): void {
    this.censusRecords = this.censusService.getCensus();
  }
}

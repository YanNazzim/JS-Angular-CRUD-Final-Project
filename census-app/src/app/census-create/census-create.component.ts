import { Component } from '@angular/core';
import { CensusService } from '../census.service';

@Component({
  selector: 'app-census-create',
  templateUrl: './census-create.component.html',
  styleUrls: ['./census-create.component.css']
})
export class CensusCreateComponent {
  newRecord: any = {}; // Object to store new record details

  constructor(private censusService: CensusService) { }

  createRecord(): void {
    this.censusService.createCensus(this.newRecord);
    this.newRecord = {}; // Clear the object after adding
  }
}

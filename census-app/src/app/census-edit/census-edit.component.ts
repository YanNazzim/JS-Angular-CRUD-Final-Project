import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CensusService } from './census.service';

@Component({
  selector: 'app-census-edit',
  templateUrl: './census-edit.component.html',
  styleUrls: ['./census-edit.component.css']
})
export class CensusEditComponent implements OnInit {
  recordId: number;
  recordData: any = {}; // Object to store existing record details

  constructor(
    private route: ActivatedRoute,
    private censusService: CensusService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recordId = +params['id']; // Get record ID from route parameters
      this.loadRecordData();
    });
  }

  loadRecordData(): void {
    // Get the record details from the CensusService based on ID
    // Replace the getCensusRecordById method with the service method that fetches record by ID
    this.recordData = this.censusService.getCensusRecordById(this.recordId);
  }

  updateRecord(): void {
    // Update the record using CensusService
    this.censusService.updateCensus(this.recordData, this.recordId);
    // Redirect or perform any necessary actions after updating the record
  }
}

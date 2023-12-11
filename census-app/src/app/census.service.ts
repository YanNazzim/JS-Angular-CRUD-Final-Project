import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CensusService {
  private censusRecords: any[] = []; // Replace with actual data fetched from the backend

  constructor() { }

  // Fetch all Census records
  getCensus(): any[] {
    return this.censusRecords;
  }

  // Add new Census record
  createCensus(newRecord: any): void {
    this.censusRecords.push(newRecord);
  }

  // Update a Census record
  updateCensus(updatedRecord: any, index: number): void {
    this.censusRecords[index] = updatedRecord;
  }

  // Delete a Census record
  deleteCensus(index: number): void {
    this.censusRecords.splice(index, 1);
  }
}

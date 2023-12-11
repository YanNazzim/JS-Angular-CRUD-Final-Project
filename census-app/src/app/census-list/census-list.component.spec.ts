import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusListComponent } from './census-list.component';

describe('CensusListComponent', () => {
  let component: CensusListComponent;
  let fixture: ComponentFixture<CensusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CensusListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusEditComponent } from './census-edit.component';

describe('CensusEditComponent', () => {
  let component: CensusEditComponent;
  let fixture: ComponentFixture<CensusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CensusEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensusCreateComponent } from './census-create.component';

describe('CensusCreateComponent', () => {
  let component: CensusCreateComponent;
  let fixture: ComponentFixture<CensusCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CensusCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CensusCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

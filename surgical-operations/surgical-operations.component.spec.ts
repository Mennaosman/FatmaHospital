import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgicalOperationsComponent } from './surgical-operations.component';

describe('SurgicalOperationsComponent', () => {
  let component: SurgicalOperationsComponent;
  let fixture: ComponentFixture<SurgicalOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurgicalOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SurgicalOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

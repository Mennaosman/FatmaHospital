import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSectionComponent } from './internal-section.component';

describe('InternalSectionComponent', () => {
  let component: InternalSectionComponent;
  let fixture: ComponentFixture<InternalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InternalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

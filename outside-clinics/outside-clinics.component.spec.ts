import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideClinicsComponent } from './outside-clinics.component';

describe('OutsideClinicsComponent', () => {
  let component: OutsideClinicsComponent;
  let fixture: ComponentFixture<OutsideClinicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutsideClinicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutsideClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

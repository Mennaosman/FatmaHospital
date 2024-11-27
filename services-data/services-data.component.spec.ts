import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDataComponent } from './services-data.component';

describe('ServicesDataComponent', () => {
  let component: ServicesDataComponent;
  let fixture: ComponentFixture<ServicesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServicesDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

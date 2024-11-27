import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHosbitalComponent } from './about-hosbital.component';

describe('AboutHosbitalComponent', () => {
  let component: AboutHosbitalComponent;
  let fixture: ComponentFixture<AboutHosbitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutHosbitalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutHosbitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

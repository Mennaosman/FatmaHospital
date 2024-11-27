import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatheterizationComponent } from './catheterization.component';

describe('CatheterizationComponent', () => {
  let component: CatheterizationComponent;
  let fixture: ComponentFixture<CatheterizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatheterizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatheterizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

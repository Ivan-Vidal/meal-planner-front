import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealPlanViewComponent } from './meal-plan-view.component';

describe('MealPlanViewComponent', () => {
  let component: MealPlanViewComponent;
  let fixture: ComponentFixture<MealPlanViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealPlanViewComponent]
    });
    fixture = TestBed.createComponent(MealPlanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

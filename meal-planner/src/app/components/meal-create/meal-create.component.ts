import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meal, MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-create',
  templateUrl: './meal-create.component.html',
  styleUrls: ['./meal-create.component.scss']
})
export class MealCreateComponent {
  meal: Meal = {
    day: '',
    mealType: '',
    recipes: '',
    portions: 1,
    notes: ''
  };

  constructor(private mealService: MealService, private router: Router) {}

  createMeal(): void {
    this.mealService.createMeal(this.meal).subscribe(() => {
      this.router.navigate(['/meals']);
    });
  }

  cancel(): void {
    this.router.navigate(['/meals']);
  }
}

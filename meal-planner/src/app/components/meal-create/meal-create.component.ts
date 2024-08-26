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

  isLoading: boolean = false;

  constructor(private mealService: MealService, private router: Router) {}

  createMeal(): void {
    this.isLoading = true; // Define como true antes da chamada
    this.mealService.createMeal(this.meal).subscribe(
      () => {
        this.isLoading = false; // Define como false quando a chamada é concluída
        this.router.navigate(['/meals']);
      },
      error => {
        console.error('Erro ao criar refeição', error);
        this.isLoading = false; // Define como false em caso de erro
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/meals']);
  }
}

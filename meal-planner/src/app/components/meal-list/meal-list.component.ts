import { Component, OnInit } from '@angular/core';
import { Meal, MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.scss']
})
export class MealListComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
    });
  }

  deleteMeal(id: number): void {
    this.mealService.deleteMeal(id).subscribe(() => {
      this.meals = this.meals.filter(meal => meal.id !== id);
    });
  }
}

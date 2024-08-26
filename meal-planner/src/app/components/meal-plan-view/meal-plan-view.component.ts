import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-plan-view',
  templateUrl: './meal-plan-view.component.html',
  styleUrls: ['./meal-plan-view.component.scss']
})
export class MealPlanViewComponent implements OnInit {
  meals: any[] = [];
  filteredMeals: any[] = [];
  filterCriteria: string = '';
  showDeletePopup: boolean = false;
  mealToDelete: any = null;

  constructor(private mealService: MealService) {}
  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
      this.filteredMeals = this.meals;
    });
  }

  // Abre o popup de confirmação
  openDeletePopup(meal: any) {
    this.mealToDelete = meal;
    this.showDeletePopup = true;
  }

  // Fecha o popup de confirmação
  closeDeletePopup() {
    this.showDeletePopup = false;
    this.mealToDelete = null;
  }

  // Confirma e executa a deleção da refeição
  confirmDelete() {
    if (this.mealToDelete) {
      this.deleteMeal(this.mealToDelete.id);
      this.closeDeletePopup();
    }
  }

  // Lógica para deletar a refeição
  deleteMeal(id: number): void {
    this.mealService.deleteMeal(id).subscribe(() => {
      this.meals = this.meals.filter(meal => meal.id !== id);
      this.filteredMeals = this.meals;
    });
  }

  filterMeals(criteria: string): void {
    if (!criteria) {
      this.filteredMeals = this.meals;
    } else {
      this.filteredMeals = this.meals.filter(meal =>
        meal.mealType.toLowerCase().includes(criteria.toLowerCase()) ||
        meal.day.toLowerCase().includes(criteria.toLowerCase())
      );
    }
  }
    clearFilter(): void {
    this.filterCriteria = '';
    this.filteredMeals = this.meals;
  }
}

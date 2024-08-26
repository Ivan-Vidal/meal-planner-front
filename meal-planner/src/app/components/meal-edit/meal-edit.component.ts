import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal, MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-edit',
  templateUrl: './meal-edit.component.html',
  styleUrls: ['./meal-edit.component.scss']
})
export class MealEditComponent implements OnInit {
  meal: Meal = {
    day: '',
    mealType: '',
    recipes: '',
    portions: 1,
    notes: ''
  };
  isLoading: boolean = false;

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.mealService.getMeal(id).subscribe(data => {
      this.meal = data;
    });
  }

  updateMeal(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.isLoading = true; // Define como true antes da chamada
    this.mealService.updateMeal(id, this.meal).subscribe(
      () => {
        this.isLoading = false; // Define como false quando a chamada é concluída
        this.router.navigate(['/meals']);
      },
      error => {
        console.error('Erro ao atualizar refeição', error);
        this.isLoading = false; // Define como false em caso de erro
      }
    );
  }
  cancel(): void {
    this.router.navigate(['/meals']);
  }
  
}

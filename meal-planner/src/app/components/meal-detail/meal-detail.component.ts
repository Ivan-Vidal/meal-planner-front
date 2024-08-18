import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal, MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.scss']
})
export class MealDetailComponent implements OnInit {
  meal: Meal | undefined;

  constructor(
    private route: ActivatedRoute,
    private mealService: MealService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.mealService.getMeal(id).subscribe(data => {
      this.meal = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/meals']);
  }

  editMeal(): void {
    this.router.navigate(['/meals', this.meal?.id, 'edit']);
  }
}

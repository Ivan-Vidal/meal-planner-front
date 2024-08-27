import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Meal {
  id?: number;
  day: string;
  mealType: string;
  recipes: string;
  portions: number;
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${this.apiUrl}/meals`);
  }

  getMeal(id: number): Observable<Meal> {
    return this.http.get<Meal>(`${this.apiUrl}/meals/${id}`);
  }

  createMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(`${this.apiUrl}/mealsCreate`, meal);
  }

  updateMeal(id: number, meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.apiUrl}/meals/${id}`, meal);
  }

  deleteMeal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/meals/${id}`);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealCreateComponent } from './components/meal-create/meal-create.component';
import { MealEditComponent } from './components/meal-edit/meal-edit.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';
import { MealPlanViewComponent } from './components/meal-plan-view/meal-plan-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  // { path: 'meals', component: MealListComponent },
  { path: 'meals/new', component: MealCreateComponent },
  { path: 'meals/:id/edit', component: MealEditComponent },
  { path: 'meals/:id', component: MealDetailComponent },
  { path: 'meals', component: MealPlanViewComponent },
  { path: '**', redirectTo: '/meals' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

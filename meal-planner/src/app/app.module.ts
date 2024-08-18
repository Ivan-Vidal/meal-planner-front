import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealCreateComponent } from './components/meal-create/meal-create.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealEditComponent } from './components/meal-edit/meal-edit.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';
import { MealPlanViewComponent } from './components/meal-plan-view/meal-plan-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MealCreateComponent,
    MealListComponent,
    MealEditComponent,
    MealDetailComponent,
    MealPlanViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

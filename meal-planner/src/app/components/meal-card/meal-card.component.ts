import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss']
})
export class MealCardComponent {
  @Input() meal: any;
  @Output() deleteMeal = new EventEmitter<void>();

  openDeletePopup(meal: any) {
    this.deleteMeal.emit(meal);
  }
}

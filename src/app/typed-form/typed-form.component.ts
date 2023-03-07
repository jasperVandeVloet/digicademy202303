import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

export type Meal = {
  name: string;
  category: Category
  price: number;
  persons: number;
}

export type MealForm = {
  name: FormControl<string>;
  category: FormControl<Category>
  price: FormControl<number | null>;
  persons: FormControl<number>;
}

export enum Category {
  BREAKFAST = "Breakfast",
  DINNER = "Dinner",
  LUNCH = "Lunch"
}

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html'
})
export class TypedFormComponent implements OnInit {
  public form = new FormGroup<MealForm>({
    name: new FormControl('Pannekoeken', { nonNullable: true }),
    category: new FormControl(Category.LUNCH, { nonNullable: true }),
    price: new FormControl(5),
    persons: new FormControl(5, { nonNullable: true }),
  });

  public pricePerPerson: number | undefined | bigint;

  constructor() { }

  ngOnInit(): void {
    // console.log('FORM', this.form.value);
  }

  calculate() {
    if (this.form.controls.price.value && this.form.controls.persons.value) {
      this.pricePerPerson = this.form.controls.price.value / this.form.controls.persons.value;

      // Runtime error:
      this.pricePerPerson = BigInt(Math.round(this.form.controls.price.value / this.form.controls.persons.value));
    }
  }

}

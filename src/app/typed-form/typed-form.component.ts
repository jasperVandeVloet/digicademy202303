import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';

export type Meal = {
  name: string;
  category: Category
  price: number;
  persons: number;
  // location: Restaurant
}

export type MealForm = {
  name: FormControl<string>;
  category: FormControl<Category>
  price: FormControl<number | null>;
  persons: FormControl<number>;
  // location: FormGroup<RestaurantForm>
}

export enum Category {
  BREAKFAST = "Breakfast",
  DINNER = "Dinner",
  LUNCH = "Lunch"
}

export type Restaurant = {
  name: string,
  adress: string,
  openSince: number
}

// export type RestaurantForm = {
//   name: FormControl<string | null>
//   address: FormControl<string | null>
//   openSince: FormControl<number | null>
// }

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html'
})
export class TypedFormComponent implements OnInit {
  public form = new FormGroup<MealForm>({
    name: new FormControl('Pannekoeken', { nonNullable: true }),
    category: new FormControl(Category.LUNCH, { nonNullable: true }),
    price: new FormControl(12),
    persons: new FormControl(5, { nonNullable: true }),
    // location: new FormGroup<RestaurantForm>({
    //   name: new FormControl('pannenkoekenboot'),
    //   address: new FormControl('Dessel'),
    //   openSince: new FormControl(2000)
    // })
  });

  public pricePerPerson: number | undefined | bigint;

  constructor() { }

  ngOnInit(): void {
    console.log('FORM', this.form.value);
  }

  calculate() {
    if (this.form.controls.price.value && this.form.controls.persons.value) {
      this.pricePerPerson = this.form.controls.price.value / this.form.controls.persons.value;

      // Runtime error:
      this.pricePerPerson = BigInt(Math.round(this.form.controls.price.value / this.form.controls.persons.value));
    }
  }

}

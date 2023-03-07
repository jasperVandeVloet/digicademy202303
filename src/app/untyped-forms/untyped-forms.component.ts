import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

export type Meal = {
  name: string;
  category: Category
  price: number;
  persons: number;
}

export enum Category {
  BREAKFAST = "Breakfast",
  DINNER = "Dinner",
  LUNCH = "Lunch"
}

@Component({
  selector: 'app-untyped-forms',
  templateUrl: './untyped-forms.component.html'
})
export class UntypedFormsComponent implements OnInit {
  public form: any;

  pricePerPerson: any;

  constructor() { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('Pannekoeken'),
      category: new UntypedFormControl(Category.LUNCH),
      price: new UntypedFormControl('12'),
      persons: new UntypedFormControl(5),
      hasDessert: new UntypedFormControl(true)
    })
  }

  calculate() {
    if (this.form.controls.price.value && this.form.controls.persons.value) {
      this.pricePerPerson = this.form.controls.price.value / this.form.controls.persons.value;

      // Runtime error:
      this.pricePerPerson = BigInt(Math.round(this.form.controls.price.value / this.form.controls.persons.value));
    }
  }
}

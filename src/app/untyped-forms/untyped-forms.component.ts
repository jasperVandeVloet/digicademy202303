import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

export type Recipe = {
  name: string;
  category: Category
  price: number;
  persons: number;
  ingredients: Ingredient[];
}

export type Ingredient = {
  name: string;
  amount: number;
  ref: IngredientRef
}

export enum Category {
  DESSERT = "Dessert",
  BREAKFAST = "Breakfast",
  DINNER = "Dinner",
  LUNCH = "Lunch"
}

export enum IngredientRef{
  GRAM = 'gram',
  PIECES = 'pieces',
  LITRES = 'litres'
}

@Component({
  selector: 'app-untyped-forms',
  templateUrl: './untyped-forms.component.html'
})
export class UntypedFormsComponent implements OnInit {
  public form: any;

  pricePerPerson: any;

  ingredients: Ingredient[] = [
    { name: 'Bloem', amount: 250, ref: IngredientRef.GRAM },
    { name: 'Eieren', amount: 3, ref: IngredientRef.PIECES },
    { name: 'Melk', amount: 5, ref: IngredientRef.LITRES },
  ]

  constructor() { }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl('Pannekoeken'),
      category: new UntypedFormControl(Category.LUNCH),
      price: new UntypedFormControl(5),
      persons: new UntypedFormControl('Tante Gerda en Nonkel Harry'),
      ingredients: new UntypedFormArray([])
    })

    this.addIngredients();
  }

  addIngredients() {
    this.ingredients.forEach(ingredient => {
      this.form.get('ingredients').push(
        new UntypedFormGroup({
          name: new UntypedFormControl(ingredient.name),
          amount: new UntypedFormControl(ingredient.amount)
        })
        );
    });
  }

  calculate() {
    this.pricePerPerson = this.form.get('price').value / this.form.get('persons').value;

    // Runtime error:
    // this.pricePerPerson = BigInt(Math.round((Number(this.form.get('price').value) / Number(this.form.get('persons').value))));
  }
}

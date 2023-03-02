import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

export type Movie = {
  title: string;
  year: number;
  studio: FilmStudio;
  actors: Actor[];
}

export type FilmStudio = {
  name: string;
  country: Country;
  employees: number;
}

export type Actor = {
  name: string;
  country: Country;
  birthYear: number;
}

export enum Country {
  BELGIUM = "Belgium",
  ENGLAND = "England"
}

@Component({
  selector: 'app-typed-form',
  templateUrl: './typed-form.component.html'
})
export class TypedFormComponent {
  // https://blog.angular-university.io/angular-typed-forms/

  // - Form niet on init-> zorkgt voor FormGroup<any>
  form = this.fb.group<Movie>({
    title: '',
    year: 0,
    studio: {} as FilmStudio,
    actors: []
  });

  constructor(private fb: FormBuilder) { }

  login(): void {
    // Show auto completion and typeSafety
    this.form.value.studio?.country

    // Throws error since types arent matching
    //  this.form.controls.studio.setValue({
    //   country: Country.BELGIUM
    //  })

    // Not sure if this works or overwrites al existing values
    // this.form.controls.studio.patchValue({
    //   employees: 20
    // } as FilmStudio)

    this.form.patchValue({
      title : 'string',
    })

    // Nullable fields todo
  }

}


// DEMO POINTS:

// typed forms
// hot reloading
// Wat nog?

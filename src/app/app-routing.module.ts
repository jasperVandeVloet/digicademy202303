import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { UntypedFormsComponent } from './untyped-forms/untyped-forms.component';

const routes: Routes = [
  {
    path: 'untyped-forms',
    component: UntypedFormsComponent,
    title: 'Untyped form ☠️'
  },
  {
    path: 'typed-forms',
    component: TypedFormComponent,
    title: 'Typed form 🍕'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypedFormComponent } from './typed-form/typed-form.component';

const routes: Routes = [
  {
    path: 'forms',
    component: TypedFormComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

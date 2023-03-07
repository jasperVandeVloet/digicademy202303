import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypedFormComponent } from './typed-form/typed-form.component';
import { UntypedFormsComponent } from './untyped-forms/untyped-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TypedFormComponent,
    UntypedFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

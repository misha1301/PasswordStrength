import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {PasswordStrengthComponent} from "./password-input-field/password-strength.component";
import {InputPasswordComponent} from "./input-field/input.component";
import {StrengthBarComponent} from './strength-bar/strength-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    InputPasswordComponent,
    StrengthBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

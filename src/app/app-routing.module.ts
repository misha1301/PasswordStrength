import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PasswordStrengthComponent} from "./password-input-field/password-strength.component";

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

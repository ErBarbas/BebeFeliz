import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";

//myModules id a variable that is reused in "imports" and "exports" to be able to use the modules of angular material in more than one module

const myModules = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatListModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModules
  ],
  exports: [myModules]
})
export class MaterialModule { }

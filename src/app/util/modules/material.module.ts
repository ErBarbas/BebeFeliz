import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";

//myModules id a variable that is reused in "imports" and "exports" to be able to use the modules of angular material in more than one module

const myModules = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule
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

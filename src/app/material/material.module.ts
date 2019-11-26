import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

const MaterialComponent = [
  MatDialogModule
]

@NgModule({
  
  imports: [
    MaterialComponent
  ],
  exports: [
    MaterialComponent
  ]
})
export class MaterialModule { }

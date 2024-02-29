import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';


const MATERIAL_MODULES = [
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
]

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  declarations: [],
  exports: [...MATERIAL_MODULES]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatCardModule,
    MatIconModule,MatFormFieldModule,
    MatSelectModule,MatToolbarModule,
    MatButtonModule,MatInputModule

  ],
  exports: [
MatCardModule,
MatIconModule,MatFormFieldModule,MatSelectModule,
MatToolbarModule,MatButtonModule,MatInputModule
  ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule, } from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    MatBadgeModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MaterialModule { }

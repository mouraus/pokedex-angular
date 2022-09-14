import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CardComponent } from './components/card/card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchInputComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports:[
    SearchInputComponent,
    CardComponent,
    RouterModule

  ]
})
export class SharedModule { }

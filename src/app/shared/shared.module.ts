import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    SearchInputComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SearchInputComponent,
    CardComponent

  ]
})
export class SharedModule { }

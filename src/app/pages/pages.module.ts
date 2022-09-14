import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
import { DescriptionComponent } from './description/description.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    HttpClientModule

  ]
})
export class PagesModule { }

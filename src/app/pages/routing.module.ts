import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "pokemon/:id", component: DescriptionComponent },
    { path: "**", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectivesComponent } from './objectives/objectives.component';


const routes: Routes = [
  {
    path: '',
    component: ObjectivesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

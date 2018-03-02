import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyitemsComponent } from './myitems.component';


const routes: Routes = [
  { path: '', component: MyitemsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyitemsRoutingModule {}

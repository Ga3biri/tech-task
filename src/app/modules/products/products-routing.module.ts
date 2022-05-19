import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './products-component/add/add.component';
import { ListComponent } from './products-component/list/list.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'list',component:ListComponent},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
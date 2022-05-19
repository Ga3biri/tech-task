import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { PermissionGuard } from './guards/permission.guard';
import { ProductsModule } from './modules/products/products.module';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'products',loadChildren:()=>ProductsModule,canActivate:[PermissionGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

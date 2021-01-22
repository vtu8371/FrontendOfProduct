import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  {path:'',component:ProductlistComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'productlist',component:ProductlistComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'editproduct',component:EditproductComponent},
  {path:'viewproduct/:id',component:ViewproductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

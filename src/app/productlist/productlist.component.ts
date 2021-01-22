import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularserviceService } from '../angularservice.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private _service:AngularserviceService,private _route:Router) { }

  value:any;
  ngOnInit(): void {
    this._service.fetchProductListFromRemote().subscribe(
      data=>this.value=data,
      error=>console.log("error received"),
    )
  }
  goToAddProduct(){
      this._route.navigate(['./addproduct']);
  }
  goToEditProduct(id:number){
    this._route.navigate(['./editproduct',id]);
  }
  goToViewProduct(id:number){
    this._route.navigate(['./viewproduct',id]);
  }
  goTodeleteProduct(id:number){
    this._service.deleteProductById(id).subscribe(
      data=>{
        console.log("deleted successfully");
        this._route.navigate(['./productlist']);
      },
      error=>{
        console.log("exception occured");
        this._route.navigate(['./productlist']);
      }
    )
  }
  getUrl()
  {
    return "url('assets/images/bg9.jpg')";
  }
}

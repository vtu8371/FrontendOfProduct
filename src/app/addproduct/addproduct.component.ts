import { Component, OnInit } from '@angular/core';
import { AngularserviceService } from '../angularservice.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {Product} from '../product';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product = new Product();
  constructor(private _service:AngularserviceService,private _route:Router) { }

  ngOnInit(): void {
  }
  goToList(){
    console.log('go back');
    this._route.navigate(['productlist']);
  }
  addproductformsubmit(){
      this._service.addProductToRemote(this.product).subscribe(
        data=>{
          console.log("Data added successfully");
          this._route.navigate(['productlist']);
        },
        error=>console.log("error")
      )
  }
  getUrl()
{
  return "url('assets/images/bg14.jpg')";
}
}

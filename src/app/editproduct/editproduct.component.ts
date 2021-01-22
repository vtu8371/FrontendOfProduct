import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularserviceService } from '../angularservice.service';
import {Product} from '../product';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private _route:Router,private _service:AngularserviceService, private _activatedRoute:ActivatedRoute) { }

  product=new Product();

  ngOnInit(): void {
      let id=this._activatedRoute.snapshot.paramMap.get('id');
      this._service.fetchProductByIdFromRemote(id).subscribe(
        data=>{
            console.log("data received");
            this.product=data;
        },
        error=>console.log("exception occured")
      )
  }
  goToList(){
    console.log('go back');
    this._route.navigate(['productlist']);
  }
  updateproductformsubmit(){
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
  return "url('assets/images/bg11.jpg')";
}
}


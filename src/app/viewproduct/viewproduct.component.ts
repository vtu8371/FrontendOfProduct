import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularserviceService } from '../angularservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

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
  getUrl()
{
  return "url('assets/images/bg13.jpg')";
}

}

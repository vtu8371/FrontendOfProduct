import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from './product';


@Injectable({
  providedIn: 'root'
})
export class AngularserviceService {

  constructor(private _http:HttpClient) { }

  fetchProductListFromRemote():Observable<any>{
   return  this._http.get<any>("http://localhost:8080/getproductlist");
  }

  addProductToRemote(product : Product):Observable<any>{
    return this._http.post<any>("http://localhost:8080/addproduct",product);
  }

  fetchProductByIdFromRemote(id:any):Observable<any>{
    return  this._http.get<any>("http://localhost:8080/getproductbyid/"+id);
  }
  
  deleteProductById(id:any):Observable<any>{
    return this._http.delete<any>("http://localhost:8080/deleteproductbyid/"+id);
  }

}

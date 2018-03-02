import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MyitemsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(name:string, price:number, component:string, seller:string) {
    return this.httpClient.post(environment.apiUrl + 'omar/createProduct', {'name':name, 'price':price , 'component':component,'seller':seller});
  }

   getProducts(){
     return this.httpClient.get(environment.apiUrl + 'omar/getProducts');
   }

   updateProduct(id:object, name:string, price:number, component:string, seller:string) {
    return this.httpClient.patch(environment.apiUrl + 'omar/updateProduct/'+id,{'name':name, 'price':price, 'component':component,'seller':seller});
  }

  deleteProduct(id:object){
    return this.httpClient.delete(environment.apiUrl+ 'omar/deleteProduct/'+id);
  }

}

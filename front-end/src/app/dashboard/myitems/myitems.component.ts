import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule,LocalDataSource } from 'ng2-smart-table';
import { MyitemsService } from './myitems.service';
@Component({
  selector: 'app-myitems',
  template: `<input #search class="search" style="background:white" type="text"(keydown.enter)="onSearch(search.value)" placeholder="Search...">
  <ng2-smart-table [settings]="settings" [source]="data" (createConfirm)="onCreateCall($event)" (editConfirm)="onEditCall($event)" (deleteConfirm)="onDeleteCall($event)"></ng2-smart-table>
  
  `,
  styleUrls: ['./myitems.component.scss'],
  providers: [MyitemsService]
})
export class MyitemsComponent implements OnInit {

  source : LocalDataSource;


  settings = {

    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true
    },
    delete: {
      confirmDelete: true
    },

    columns: {
     
      name: {
        title: 'Name',
        filter:false
      },
      price: {
        title: 'Price',
        filter:false
      },
      
      component: {
        title: 'Component Name',
        filter:false
      },
      seller: {
        title: 'Seller Name',
        filter:false
      },
      createdAt: {
        title: 'CreatedAt',
        filter:false
      },
      updatedAt: {
        title: 'UpdatedAt',
        filter:false
      }


    }
  };

  data = [];

  constructor(private myitemsService:MyitemsService) { }

  
  onCreateCall(event){
    event.confirm.resolve(event.newData);
    this.myitemsService.createProduct(event.newData.name, event.newData.price,event.newData.component,event.newData.seller).subscribe();
}

onEditCall(event){
    event.confirm.resolve(event.newData);
    console.log(event);
    this.myitemsService.updateProduct(event.newData._id, event.newData.name, event.newData.price,event.newData.component,event.newData.seller).subscribe();
}

onDeleteCall(event){
 event.confirm.resolve(event.data._id);
 console.log(event.data._id);
 this.myitemsService.deleteProduct(event.data._id).subscribe();
}
// onEditCall(event){
//     event.confirm.resolve(event.newData);
//     this.myitemsService.updateProduct(event.newData.name, event.newData.price).subscribe();
// }



ngOnInit() {
  this.myitemsService.getProducts().subscribe(
     (res: any) => {
      // console.log(res.data)
      if(res.hasOwnProperty('data')){console.log(res);console.log(res.data);
      this.data = res.data;}
     }
  );
}

  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    
  }


}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyitemsComponent } from './myitems.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MyitemsService } from './myitems.service';

@NgModule({
  imports: [
    CommonModule,Ng2SmartTableModule,

  ],
  declarations: [MyitemsComponent],
  entryComponents: [],
  providers: [MyitemsService]
})
export class MyitemsModule { }

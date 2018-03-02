import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllproductsComponent } from './allproducts.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule, Ng2SmartTableModule
  ],
  declarations: [AllproductsComponent]
})
export class AllproductsModule { }

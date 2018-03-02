import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectronicsComponent } from './electronics.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ElectronicsService } from './electronics.service';

@NgModule({
  imports: [
    CommonModule , Ng2SmartTableModule
  ],
  declarations: [ElectronicsComponent],
  providers:[ ElectronicsService]
})
export class ElectronicsModule { }

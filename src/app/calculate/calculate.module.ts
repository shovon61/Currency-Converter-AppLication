import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculateRoutingModule } from './calculate-routing.module';
import { CalculateComponent } from './calculate.component';
import { ScalculateService } from './scalculate.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculateComponent],
  imports: [CommonModule, CalculateRoutingModule, FormsModule],
  providers: [ScalculateService],
})
export class CalculateModule {}

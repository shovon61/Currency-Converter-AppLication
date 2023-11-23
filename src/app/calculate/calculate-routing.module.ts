import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { CalculateComponent } from './calculate.component';

const routes: Routes = [{ path: '', component: CalculateComponent, data: { title: marker('calculate') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculateRoutingModule {}

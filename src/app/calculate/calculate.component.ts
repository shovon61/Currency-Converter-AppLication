import { Component, OnInit } from '@angular/core';
import { ScalculateService } from './scalculate.service';
import { Icalculate } from './icalculate';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss'],
})
export class CalculateComponent implements OnInit {
  data: Icalculate[] = [];
  value1!: number;
  var!: number;
  constructor(private serviceCalculate: ScalculateService) {}

  ngOnInit() {
    this.serviceCalculate.getData().subscribe((response) => {
      this.data = response;
      //console.log(this.data);
    });
  }
}

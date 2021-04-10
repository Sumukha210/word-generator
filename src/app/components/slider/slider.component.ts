import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  rangeValue: number = 1;

  @Output() inputRangeVal = new EventEmitter<number>();

  handleChange = () => {
    this.inputRangeVal.emit(this.rangeValue);
  };
}

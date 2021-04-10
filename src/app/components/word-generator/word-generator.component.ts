import { Component, OnInit } from '@angular/core';
import words from '../../../utils/words';

@Component({
  selector: 'app-word-generator',
  templateUrl: './word-generator.component.html',
  styleUrls: ['./word-generator.component.scss'],
})
export class WordGeneratorComponent implements OnInit {
  wordsArr: string[];
  inputRangeValue: number = 1;
  generate: boolean = false;
  slicedArr: string[];

  handleGenerate = () => {
    this.generate = true;
    this.slicedArr = this.wordsArr.slice(0, this.inputRangeValue);
  };

  constructor() {}

  ngOnInit(): void {
    this.wordsArr = words;
  }
}

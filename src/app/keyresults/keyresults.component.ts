import { Component, OnInit, Input } from '@angular/core';
import { OKR } from '../model/okrModel';

@Component({
  selector: 'keyresults',
  templateUrl: './keyresults.component.html',
  styleUrls: ['./keyresults.component.scss']
})
export class KeyresultsComponent implements OnInit {

  constructor() { }

  @Input()
  keyResults: OKR[]  = [];
  
  ngOnInit(): void {
    

  }

}

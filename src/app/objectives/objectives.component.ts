import { Component, OnInit } from '@angular/core';
import { OkrService } from '../services/okr.service';
import { OKR } from '../model/okrModel';

@Component({
  selector: 'objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {

  constructor(private _service: OkrService) { }

  allOKRs: OKR[] = [];
  objectives: OKR[] = [];
  keyResults: any = {}
  ngOnInit(): void {
    this._service.getOkRs().subscribe((results) => {
      this.allOKRs = results.data;
      this.getObjectivesAndKeyResults();
    },
    (error) => {
      throw new Error("Error occured while getting OKRs");
      console.log()
    })
  }

  getObjectivesAndKeyResults() : void {
    let okrParentId: string =''
    this.allOKRs.forEach((okr, index) => {
      okrParentId = okr.parent_objective_id;
      if (!okrParentId) {
        this.objectives.push(okr);
      } else {
        if (!this.keyResults[okrParentId]) {
          this.keyResults[okrParentId] = []
        }
        this.keyResults[okrParentId].push(okr);
      }
    })
  }

  getKeyResults(objetive: OKR) {
    return this.keyResults[objetive.id] || [];
  }

  toggleCollapse(event: any): void {
    const eleementRef = event.target;
    const listElement = eleementRef.parentElement.parentElement;
    listElement.classList.toggle("collapse");
  }
}

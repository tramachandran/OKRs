import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyresultsComponent } from './keyresults.component';

describe('KeyresultsComponent', () => {
  let component: KeyresultsComponent;
  let fixture: ComponentFixture<KeyresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

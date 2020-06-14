import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectSetComponent } from './prospect-set.component';

describe('ProspectSetComponent', () => {
  let component: ProspectSetComponent;
  let fixture: ComponentFixture<ProspectSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

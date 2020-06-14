import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectCustomerComponent } from './prospect-customer.component';

describe('ProspectCustomerComponent', () => {
  let component: ProspectCustomerComponent;
  let fixture: ComponentFixture<ProspectCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

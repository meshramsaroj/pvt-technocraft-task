import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'src/app/service/customer.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerId;
  customerName;
  customerForm = new FormGroup({
    prospectName: new FormControl(''),
    demographic: new FormControl(''),
    source: new FormControl(''),
    addedBy: new FormControl(''),
    setType: new FormControl(''),
    howMany: new FormControl('')
  })
  constructor(
    private service: CustomerService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCustomerData();

  }

  getCustomerData() {
    this.customerId = this.activateRoute.snapshot.params.id;
    this.service.getCustomer(this.customerId).subscribe({
      next: data => {
        this.customerName = data.prospectName;
        this.customerForm.controls.prospectName.setValue(data.prospectName);
        this.customerForm.controls.demographic.setValue(data.demographic);
        this.customerForm.controls.source.setValue(data.source);
        this.customerForm.controls.addedBy.setValue(data.addedBy);
        this.customerForm.controls.setType.setValue(data.setType);
        this.customerForm.controls.howMany.setValue(data.howMany);
      },
      error: err => {
        this.snackBar.open('Error ' + err);
      }
    })
  }

  updateCustomer() {
    this.service.updateCustomer(
      this.customerId,
      this.customerForm.controls.prospectName.value,
      this.customerForm.controls.demographic.value,
      this.customerForm.controls.source.value,
      this.customerForm.controls.addedBy.value,
      this.customerForm.controls.setType.value,
      this.customerForm.controls.howMany.value).subscribe({
        next: data => {
          this.router.navigateByUrl('');
          this.snackBar.open('Updated Successfully', 'Close', { duration: 3000 })
        },
        error: err => {
          this.snackBar.open('Error ' + err);
        }
      })
  }

}

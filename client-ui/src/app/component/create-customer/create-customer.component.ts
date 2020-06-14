import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerForm = new FormGroup({
    prospectName: new FormControl('Select Customer Name'),
    demographic: new FormControl('Select Demographic(state)'),
    source: new FormControl('Select Source'),
    addedBy: new FormControl('Select Added By'),
    setType: new FormControl('Select Set Type'),
    howMany: new FormControl('Select How Many')
  })

  constructor(
    private service: CustomerService,
    private router : Router,
    private snackBar : MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  addProspectSet() {
    return this.service.createCustumer(
      this.customerForm.controls.prospectName.value,
      this.customerForm.controls.demographic.value,
      this.customerForm.controls.source.value,
      this.customerForm.controls.addedBy.value,
      this.customerForm.controls.setType.value,
      this.customerForm.controls.howMany.value
    ).subscribe({
      next: data => {
        this.snackBar.open('Created Successfully',"Close",{duration : 3000});
        this.router.navigateByUrl('/');
      },
      error: err => {

        this.snackBar.open("Error","Close",{duration : 3000});


      }
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  nullData;
  customerId;
  prospectName;
  demographic;
  dateAdded;
  source;
  addedBy;
  setType;
  howMany;

  constructor(
    private service: CustomerService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCustomerData();
    console.log(this.router);
    // this.nullData = this.activateRoute.snapshot.params.id;
  }


  getCustomerData() {
    this.customerId = this.activateRoute.snapshot.params.id;

    this.service.getCustomer(this.customerId).subscribe({
      next: data => {
        console.log(data);
        this.prospectName = data.prospectName;
        this.demographic = data.demographic;
        this.dateAdded = data.dateAdded;
        this.source = data.source;
        this.addedBy = data.addedBy;
        this.setType = data.setType;
        this.howMany = data.howMany;
      },
      error: err => {
        console.log('Error' + err);
      }
    })


  }

  goBack() {
    this.router.navigateByUrl('');
  }

}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/interface/customer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerData: Customer[];
  customerId;

  constructor(
    private service: CustomerService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList() {
    return this.service.getCustomerList().subscribe({
      next: data => {
        this.customerData = data;
      }
    })
  }

  getId(id) {
    this.customerId = id;
  }

  deleteProspectSet() {
    if (this.customerId) {
      this.service.deleteCustomer(this.customerId).subscribe({
        next: data => {
          this.snackBar.open(`Deleted Successfully`, "Close", { duration: 3000 })
          this.getCustomerList();
        },
        error: err => {
          this.snackBar.open('Error', "Close", { duration: 3000 })
        }
      })
    }
    else {
      this.snackBar.open('Please select one checkbox', "Close", { duration: 3000 })

    }

  }

  updateProspectCustomer() {
    if (this.customerId) {
      this.router.navigateByUrl(`/update/${this.customerId}`);
    }
    else {
      this.snackBar.open('Please select one checkbox', "Close", { duration: 3000 })
    }

  }

}

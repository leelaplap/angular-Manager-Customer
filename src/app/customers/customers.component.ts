import {Component, OnInit} from '@angular/core';
import {Customers} from '../customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customers[] = [
    {
      name: 'trang',
      age: 20,
      phone: '0358463366',
      image: 'assets/images/anh1.jpg',
    },
    {
      name: 'linh',
      age: 20,
      phone: '0358463366',
      image: 'assets/images/anh2.jpg',
    },
    {
      name: 'phuong',
      age: 20,
      phone: '0358463366',
      image: 'assets/images/anh3.jpg',
    },
  ];
  widthImage = 100;
  showImg = true;
  listCustomer: Customers[] = [];

  constructor() {
  }

  ngOnInit() {
    this.listCustomer = this.customers;
  }

  delete(id) {
    this.customers.splice(id, 1);
  }

  showImage() {
    this.showImg = !this.showImg;
  }

  filter(even) {
    const data = even.target.value;
    this.listCustomer = (data) ? this.search(data) : this.customers;
  }

  search(data) {
    return this.customers.filter(
      customer => customer.name.toLowerCase().indexOf(data) !== -1);
  }
}

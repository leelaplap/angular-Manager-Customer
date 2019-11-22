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
      star: 4,
    },
    {
      name: 'linh',
      age: 20,
      phone: '0358463366',
      image: 'assets/images/anh2.jpg',
      star: 2.5,
    },
    {
      name: 'phuong',
      age: 20,
      phone: '0358463366',
      image: 'assets/images/anh3.jpg',
      star: 1.5,
    },
  ];
  widthImage = 100;
  showImg = true;
  listCustomer: Customers[] = [];
  messageShow: string;

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

  showMes(event) {
    this.messageShow = event;
  }
}

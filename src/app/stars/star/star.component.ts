import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() star: number;
  widthStar: number;

  constructor() {
  }

  ngOnInit() {
    this.widthStar = this.star * 75 / 5;
  }

}

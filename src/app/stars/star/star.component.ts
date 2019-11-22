import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  @Input() star: number;
  widthStar: number;
  @Output() message = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.widthStar = this.star * 75 / 5;
  }

  click() {
    this.message.emit('clicked ' + this.star);
  }

}

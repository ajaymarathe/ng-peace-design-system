import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.css']
})
export class BaseCardComponent implements OnInit {

  @Input() color: string;
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, ChangeDetectorRef, NgZone } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input()
  day: number;

  isScaled: boolean = false;

  constructor(private cgangeDetector: ChangeDetectorRef) { }

  ngOnInit() {
  }

  scale() { 
    this.isScaled = !this.isScaled;
  };

}

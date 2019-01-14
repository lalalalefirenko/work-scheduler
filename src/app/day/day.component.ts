import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef,
  NgZone,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  @Input()
  day: number;

  isScaled: any;

  constructor(private cgangeDetector: ChangeDetectorRef) {
    this.isScaled = false;
  }

  ngOnInit() {

  }

  scale() {
    this.isScaled = !this.isScaled;
  };

}
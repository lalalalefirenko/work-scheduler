import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sandbox';
  items: Array<number> = [0,0].concat(Array.from({ length: 31 }, (v, i) => i + 1).concat([0,0]));
  weekSize: number = 7;
  currentIndex: number = 0;

  get weeks(): Array<Array<number>> {
    return this.items.reduce((accum, currentValue, currentIndex) => {

        const portionIndex = Math.floor(currentIndex / this.weekSize);

        if (!accum[portionIndex])
          accum[portionIndex] = new Array<number>();

        accum[portionIndex].push(currentValue);
        return accum;

    }, [])
  }
}



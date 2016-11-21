import {groupBy, unpackAllGrouped} from 'aurelia-charts';
import {fakeData} from './data';

export class Demo {

  chart

  constructor() {
    this.dimensions = [];
    this.data       = unpackAllGrouped(groupBy('customer', fakeData));
    this.object     = fakeData[0];
  }

}

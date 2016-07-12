import {inject} from 'aurelia-framework';
import {groupBy, unpackAllGrouped} from 'aurelia-charts';
import {fakeData} from './data';

export class Demo {

  chart

  constructor() {
    this.product    = productChart();
    this.dimensions = [];
    this.data       = unpackAllGrouped(groupBy('customer', fakeData));
    this.object     = fakeData[0];
  }

}

function take(n, data) {
  return data.splice(0, n);
}

function productChart() {
  let data       = unpackAllGrouped(groupBy('customer', fakeData));
  let type       = 'pie';
  let dimensions = [{
    label: d => `${d.hour}th Hour`, /* constant function */
    data:  d => d.hour,
  }, {
    label: d => `${d.key}'s Sales`,
    data:  d => d.sales,
  }];

  return {dimensions, data, type};
}

import {groupBy} from 'aurelia-charts';
import {fakeData} from './data';

export class Demo {

  attached() {
    this.barChart = barChart();
    this.lineChart = lineChart();
    this.pieChart = pieChart();
  }
}

function pieChart() {
  const dimensions = [{
    value: d => d.sales
  }];

  return {
    dimensions: dimensions,
    type      : 'pie',
    library   : 'C3',
    data      : groupBy('customer', fakeData).map(d => d.values)
  };
}

function barChart() {
  const dimensions = [{
    value: d => d.sales
  }];

  dimensions.name = d => `${d[0].customer} ${d.length}h`;

  return {
    type      : 'bar',
    library   : 'C3',
    dimensions: dimensions,
    data      : groupBy('customer', fakeData).map(d => d.values)
  };
}

function lineChart() {
  const dimensions = [{
    value: d => d.hour
  }, {
    value: d => d.sales
  }];

  dimensions.name = d => `${d[0].customer} ${d.length}h`;

  return {
    type      : 'line',
    library   : 'C3',
    dimensions: dimensions,
    data      : groupBy('customer', fakeData).map(d => d.values)
  };
}

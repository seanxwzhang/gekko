// @link https://en.wikipedia.org/wiki/Momentum_(technical_analysis)
var EMA = require('./EMA.js')

var Indicator = function(config) {
    this.input = 'price';
    this.mom0 = [];
    this.mom1 = 0;
    this.short = config.short;
    this.long = config.long;
    this.smoothed_mom = new EMA(config.smoothness);
    this.smoothed_mom.result = 0;
    this.memory = []; // should be a queue, for simplicity just use an array
    this.result = false;
  }
  
  Indicator.prototype.update = function(price) {
    this.memory.push(price)
    this.calculate(price);    
    // console.log('this.smoothed_mom', this.smoothed_mom);
    // console.log('this.smoothed_mom.result:', this.smoothed_mom.result);
    this.result.smoothed_mom = this.smoothed_mom.result;
    return this.result;
  }
  
  //    calculation (based on tick/day):
  //  MOM = Price(t) - Price(t - n) 
  //  t = today, n = range of the indicator
  Indicator.prototype.calculate = function(price) {
    if (this.memory.length <= this.long) {
      this.result = {mom0: 0, mom1: 0}
    } else {
      mom = price - this.memory[0]; 
      this.mom0.push(mom);
      this.smoothed_mom.update(mom);
      if (this.mom0.length <= this.short) {
        this.result = {mom0: mom, mom1: 0};
      } else {
        this.mom1 = mom - this.mom0[0];
        this.mom0.shift();
        this.result = {mom0: mom, mom1: this.mom1};
      }
      this.memory.shift();
    }
  }
  
  module.exports = Indicator;
  
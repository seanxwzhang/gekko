// This is a basic momentum strategy
// helpers
var _ = require('lodash');
var log = require('../core/log.js');
var greater = (a, b) => {return a > b;};
var smaller = (a, b) => {return a < b;};
var all_satisfy = function(benchmark, variables, fn) {
  console.log(variables);
  for (var i in variables) {
    if (!fn(variables[i], benchmark)) {
      return false;
    }
  }
  return true;
};


// let's create our own method
var method = {};

// prepare everything our method needs
method.init = function() {
  this.name = 'MOMENTUM';

  this.currentTrend = 'no';
  this.memory = [];
  this.requiredHistory = this.settings.requiredHistory;
  this.up_confirmation_count = this.settings.up_confirmation_count;
  this.down_confirmation_count = this.settings.down_confirmation_count;

  // define the indicators we need
  this.addIndicator('mom', 'MOM', this.settings);
};

// what happens on every new candle?
method.update = function(candle) {
  this.memory.push(this.indicators.mom.result);
  if (this.memory.length > Math.max(this.settings.up_confirmation_count, this.settings.down_confirmation_count) + 1) {
    this.memory.shift();
  }
};

// for debugging purposes: log the last calculated
// EMAs and diff.
method.log = function() {
  var mom0 = this.indicators.mom.result.mom0;
  var mom1 = this.indicators.mom.result.mom1;
  var smom = this.indicators.mom.result.smoothed_mom;

  log.debug('calculated MOM properties for candle:');
  log.debug('\t', 'long mom:', mom1.toFixed(8));
  log.debug('\t', 'short mom:', mom0.toFixed(8));
  log.debug('\t', 'smoothed_mom', smom.toFixed(8));
  log.debug('\t', 'currentTrend', this.currentTrend);
  var smoms = this.memory.map((x) => {return x.smoothed_mom;});
  log.debug('\t', 'smoms', smoms);
  log.debug('\t', 'all_satisfy(0, smoms, greater): ', all_satisfy(0, smoms, greater));
};

method.check = function(candle) {
  var mom0 = this.indicators.mom.result.mom0;
  var mom1 = this.indicators.mom.result.mom1;
  var smom = this.indicators.mom.result.smoothed_mom;
  var smoms = this.memory.map((x) => {return x.smoothed_mom;});

  var price = candle.close;

  var message = '@ ' + price.toFixed(8);
  if (this.currentTrend != 'up' && all_satisfy(0, smoms.slice(-this.up_confirmation_count), greater)) {
    log.debug('we are entering an uptrend', message);
    this.advice('long');
    this.currentTrend = 'up';
  } else if (this.currentTrend != 'down' && all_satisfy(0, smoms.slice(-this.down_confirmation_count), smaller)) {
    log.debug('we are entering a downtrend', message);
    this.advice('short');
    this.currentTrend = 'down';
  }
};

module.exports = method;


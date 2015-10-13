/*jshint evil: true*/
var names = require('./names.js'),
  findSuperman = require('./findsuperman');

if (findSuperman) {
  console.log("FOUND");
} else {
  console.log("NOT FOUND");
}

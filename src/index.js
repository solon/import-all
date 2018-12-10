var fs = require('fs');
var path = require('path');

module.exports = function(importPath, asObject = false) {
  return fs
    .readdirSync(importPath)
    .filter(function(fileName) {
      return fileName.match(/\.js$/);
    })
    .map(function(fileName) {
      return {
        name: fileName.split('.js')[0],
        module: require(path.join(importPath, fileName)),
      };
    })
    .filter(function({ name, module }) {
      return { name, module: module.__esModule };
    })
    .map(function({ name, module }) {
      return { name, module: module.default };
    })
    .reduce(
      (accumulator, currentValue, currentIndex) => {
        asObject
          ? (accumulator[currentValue.name] = currentValue.module)
          : accumulator.push(currentValue.module);
        return accumulator;
      },
      asObject ? {} : []
    ); 
};

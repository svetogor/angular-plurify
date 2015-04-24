angular.module('plurify', []).filter('plurify', [
  function() {
    return function(input, textOne, textFew, textMany) {
      // input    - число
      // textOne  - 'кот'
      // textFew  - 'кота'
      // textMany - 'котов'

      var plur = textOne;
      var modulo = input % 10;

      if (input === 0) {
        plur = textMany;
      } else if (input === 1) {
        plur = textOne;
      } else if (input >= 2 && input <= 4) {
        plur = textFew;
      } else if (input >= 5 && input <= 19) {
        plur = textMany;
      } else if (modulo === 0) {
        plur = textMany;
      } else if (modulo === 1) {
        plur = textOne;
      } else if (modulo > 1 && modulo <= 4) {
        plur = textFew;
      } else {
        plur = textMany;
      }

      return input + ' ' + plur;
    };
  }
]);

angular.module('angular-plurify', []).filter('plurify', [
  function() {
    return function(input, textOne, textFew, textMany) {
      var mod10, mod100, plur, textOther;

      mod10 = input % 10;
      mod100 = input % 100;

      if (!textMany) {
        textMany = textOne;
      }

      textOther = textFew;

      if (mod10 === 1 && mod100 !== 11) {
        plur = textOne;
      } else if (mod10 >= 2 && mod10 <= 4 && mod100 !== 11 && mod100 !== 12 && mod100 !== 13 && mod100 !== 14) {
        plur = textFew;
      } else if (mod10 === 0) {
        plur = textMany;
      } else if (mod10 === 5 || mod10 === 6 || mod10 === 7 || mod10 === 8 || mod10 === 9) {
        plur = textMany;
      } else if (mod100 === 11 || mod100 === 12 || mod100 === 13 || mod100 === 14) {
        plur = textMany;
      } else {
        plur = textOther;
      }
      return input + ' ' + plur;
    };
  }
]);

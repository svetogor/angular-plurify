angular.module('angular-plurify', []).filter 'plurify', [ ->
  (input, textOne, textFew, textMany) ->
    # input    - число
    # textOne  - 'кот'
    # textFew  - 'кота'
    # textMany - 'котов'

    mod10 = input % 10
    mod100 = input % 100

    textMany = textOne unless textMany
    textOther = textFew

    if mod10 is 1 and mod100 isnt 11
      plur = textOne
    else if mod10 >= 2 and mod10 <= 4 and mod100 isnt 11 and mod100 isnt 12 and mod100 isnt 13 and mod100 isnt 14
      plur = textFew
    else if mod10 is 0
      plur = textMany
    else if mod10 is 5 or mod10 is 6 or mod10 is 7 or mod10 is 8 or mod10 is 9
      plur = textMany
    else if mod100 is 11 or mod100 is 12 or mod100 is 13 or mod100 is 14
      plur = textMany
    else
      plur = textOther

    return input + ' ' + plur

]

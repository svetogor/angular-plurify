# angular-plurify

Простейший фильтр плюрализации для angular.js.
На данный момент поддерживается только русский язык.

## Использование

#### В темплейтах

Используйте для числа фильтр `plurify`, который принимает 3 параметра:
- слово для одного объекта (например: кот)
- слово для двух объектов (например: кота)
- слово для пяти объектов (например: котов)

`{{ 1 | plurify:'кот':'кота':'котов' }}` результат __1 кот__

`{{ 2 | plurify:'кот':'кота':'котов' }}` результат __2 кота__

`{{ 5 | plurify:'кот':'кота':'котов' }}` результат __5 котов__

Для слов, имеющих только две формы во множественном числе, третий параметр можно не указывать:

`{{ 1 | plurify:'человек':'человека' }}` результат __1 человек__

`{{ 2 | plurify:'человек':'человека' }}` результат __2 человека__

`{{ 5 | plurify:'человек':'человека' }}` результат __5 человек__

#### В контроллерах
```
$filter('plurify')(1, 'кот', 'кота', 'котов')
```

## Установка

1. Скопируйте к себе в проект файл `plurify.js` или `plurify.js.coffee`
2. Добавьте в зависимости `angular.module('yourApp', ['angular-plurify']);`
3. Пользуйтесь!

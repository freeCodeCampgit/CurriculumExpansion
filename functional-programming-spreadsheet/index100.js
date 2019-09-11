---
id: 5d792533ed00e75d129e1b18
title: Step 13
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
`replace` is a higher order function because it can take a function as argument (higher order functions can also return functions).
Pass the `+` function from `infixToFunction` to the `replace` method as the second argument.
This is how you would pass the `-` function:
```
str.replace(regex, infixToFunction["-"])
```
</section>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) => str.replace(regex, "");

/*
`replace` is a higher order function because it can take a function as argument (higher order functions can also return functions).
Pass the `+` function from `infixToFunction` to the `replace` method as the second argument.
This is how you would pass the `-` function:
```
str.replace(regex, infixToFunction["-"])
```
*/

---
id: 5d79253386060ed9eb04a070
title: Step 17
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
The <code>match</code> parameter is currently unused, which can lead to unused variable warnings in some linters.
To fix this, prefix or replace it with an underscore (<code>_</code>) - both ways signal to the reader and linter that you're aware you don't need this.
Note that a single underscore can only be used once in a function and may conflict with some libraries (Lodash, Undrescore.js).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Prefix or replace <code>match</code> with an underscore.
    testString: assert(code.replace(/\s/g, "").includes("str.replace(regex,(_"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {
  "+": (x, y) => x + y,
  "-": (x, y) => x - y,
  "*": (x, y) => x * y,
  "/": (x, y) => x / y
};

const infixEval = (str, regex) =>
  str.replace(regex, (match, arg1, fn, arg2) =>
    infixToFunction[fn](parseFloat(arg1), parseFloat(arg2))
  );


</script>
```

</div>


### Before Test
<div id='html-setup'>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Spreadsheet</title>
  <style>
    #container {
      display: grid;
      grid-template-columns: 50px repeat(10, 200px);
      grid-template-rows: repeat(11, 30px);
    }
    .label {
      background-color: lightgray;
      text-align: center;
      vertical-align: middle;
      line-height: 30px;
    }
  </style>
</head>
<body>
<div id="container">
  <div></div>
</div>
```

</div>


### After Test
<div id='html-teardown'>

```html
</body>
</html>
```

</div>


</section>
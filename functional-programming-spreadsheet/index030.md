---
id: 5d7925329445167ecc2ac9c9
title: Step 4
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
In JavaScript, functions are first class.
This means that they can be used like any other values - for example, they can be assigned to variables.
Assign <code>add</code> to a new variable <code>addVar</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Assign <code>add</code> to a new variable <code>addVar</code>.
    testString: assert(/const\s+addVar\s*=\s*add/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>

const infixToFunction = {};

function add(x, y) {
  return x + y;
}


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
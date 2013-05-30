# Showcase homework - Plasm.js

## This homework is NOT mandatory.

## It MAY improve your mark up to 3 points.

Following parameters will be considered during evaluation:

- code elegance
- model complexity
- diversity of primitives (Plasm.js)
- execution time 

## The best works will be exhibited in the Plasm.js showcase.

# Instructions

Choose a model (e.g. Pixar Lamp, a chair, Apple iMac/MacPro/MacBook cases, a chess piece, a vehicle, etc.).  
Model it in Plasm.js taking care of his details.  
Try to reach a trade off between model complexity and code quality.

# Delivery

The delivery is required within Sunday, June 2.   

The project must be contained in a directory entitled `showcase`,  
pushed into your repository in cvdlab-cg organization [https://github.com/cvdlab-cg/xxxxxx](https://github.com/cvdlab-cg/)  
where `xxxxxx` is your student ID  (matricola).  

```
XXXXXX
|
+- showcase
  |
  +- code.js
  +- data.json
  +- node.js
  +- snapshot.jpeg
```

> where `XXXXXX` is the name of your repository (your matricola)

Four files are required to be delivered: `code.js`, `snapshot.jpeg`, `node.js`, `data.json`.

## `code.js`

The model must be delivered in a file named `code.js`.  

The entire model must be stored in a variable named `model`,  
you have to be able to:

- display the entire model by running `DRAW(model)`
- cancel the entire model by running `CANCEL(model)`

running relative command in the browser console, but   
THERE MUST NOT BE a `DRAW` command in the `code.js` file.

## `snapshot.jpeg`

A screenshot of the model must be provided as 400x300px jpeg format and named `snapshot.jpeg`.   


## `node.js`

A `node.js` file useful to compute your model via [Node.js](http://nodejs.org) is required.  
Simply use the template below:

- paste the content of `code.js` where indicated
- put you GitHub username where indicated
- put a category for the model where indicated (examples of categories are `devices`, `biologics`, `vehicles`, `fornitures`, `games`, `buildings`, `others`, ...)


```js
!(function (exports){

  var fs = require('fs');

  var plasm_lib = require('plasm.js');
  var obj = plasm_lib.plasm;
  var fun = plasm_lib.plasm_fun;
  var plasm = obj.plasm;
  var Plasm = obj.Plasm;

  var root = this;

  Object.keys(fun).forEach(function (k) { 
    root[k] = fun[k];
  });

  var p = new Plasm();
  fun.PLASM(p);


  var scmodel = (function () {
  /*///////////////////////////////////////////

  PASTE YOUR CODE HERE

  ///////////////////////////////////////////*/
  return model
  })();

  exports.author = 'PUT_YOUR_GITHUB_USERNAME_HERE';
  exports.category = 'PUT_YOUR_MODEL_CATEGORY_HERE';
  exports.scmodel = scmodel;

  if (!module.parent) {
    fs.writeFile('./data.json', JSON.stringify(scmodel.toJSON()));
  }

}(this));
```

## `data.json`

A json file `data.json` of the model is required.  
Generate it running the `node.js` script in Node.js:

```
$ node node.js
```

To be able to run Plasm.js in Node.js you should install the `plasm.js` module:

```
$ npm install plasm.js
```

> PAY ATTENTION:
> DO NOT PUSH `node_modules` FOLDER




# Intro 2 React

## Array functions 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

## ES6
http://es6-features.org/#Constants

## JSX
https://reactjs.org/docs/introducing-jsx.html 

After compiling: 
```
  const App = () => {
    const now = new Date()
    const a = 10
    const b = 20
    return React.createElement(
      'div',
      null,
      React.createElement(
        'p', null, 'Hello world, it is ', now.toString()
      ),
      React.createElement(
        'p', null, a, ' plus ', b, ' is ', a + b
      )
    )
  }
```

## Babel:
https://babeljs.io/docs/en/

# B: JavaScript

## Node.js
https://nodejs.org/en/

The code is written into files ending with .js that are run by issuing the command node name_of_file.js

## Chrome V8
https://v8.dev/

## Compare 
http://kangax.github.io/compat-table/es2016plus/ 

## JS array methods
Foreach
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Concat
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat 

Map 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Destructring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 

## Functional Programming 
Immutable object: https://en.wikipedia.org/wiki/Immutable_object

Function declaration, function expression, arrow function (modern way)

## Objects 
Object literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals

## Object methods and "this"
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this 

Methods can be assigned to objects even after the creation of the object
Contrary to other languages, in JavaScript the value of this is defined based on how the method is called.

https://developer.mozilla.org/en-US/docs/Glossary/Global_object

"this-less" JavaScript
bind: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth 

## Classes
Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes 

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript 

JS is not OOP language: https://rajaraodv.medium.com/is-class-in-es6-the-new-bad-part-6c4e6fe1ee65  
Further critique: https://github.com/petsel/not-awesome-es6-classes 

Modern way, Hooks: https://reactjs.org/docs/hooks-intro.html 

## JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript 
https://github.com/getify/You-Dont-Know-JS 
https://javascript.info/
https://egghead.io/ 

https://developer.mozilla.org/en-US/docs/Web/API/setInterval

## Component state, event handlers
https://reactjs.org/docs/lifting-state-up.html 

React tutorial: https://reactjs.org/tutorial/tutorial.html

MouseEvent:
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

## State
State change causes rerendering

## React v. 18 
Released late march 2022. 

v.17
```
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))
```

vs v.18
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

## Debugging
console.log('jotain', arvo)
debugger
Breakpoints in Sources tab, variable values in Scope
React developer tools addition to Chrome
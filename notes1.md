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
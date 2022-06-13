# Week 2 notes, communincating with the server

## Snippets
Create own: https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets 
Marketplace: https://marketplace.visualstudio.com

## JavaScript Arrays
JS functions are values
JS array functions like filter find (filter but only first item) map and reduce are higher order functions that replace for loops

### Reduce 
```
const orders = [...]
orders.reduce((sum, order) => {
  return sum + order.amount
}, 0) // starting point

import fs from 'fs'

const output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
  }, {})

console.log('output', JSON.stringify(output, null, 2))
```

## "React explosion"

## Forms
Form submit default action: 
https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event

## Controlled component
https://reactjs.org/docs/forms.html#controlled-components

## Using state correctly
https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly 

## NPM 
All modern JavaScript projects are defined using the node package manager NPM
- install dependencies from the command line root dir not straight to the package.json

## Promises
- A Promise is an object representing the eventual completion or failure of an asynchronous operation.
Three states: 
1. The promise is pending: It means that the final value (one of the following two) is not available yet.
2. The promise is fulfilled: It means that the operation has been completed and the final value is available, which generally is a successful operation. This state is sometimes also called resolved.
3. The promise is rejected: It means that an error prevented the final value from being determined, which generally represents a failed operation.

## DB 
```
npx json-server --port 3001 --watch db.json
```

## REST

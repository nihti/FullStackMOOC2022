# Fundamentals of Web Apps

## Event Handlers & Callback functions
- Event handler functions are called callback functions (https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

## DOM 
- topmost node of HTML document DOM tree is `document` object

## Forms and POST method
- 302 status code is URL redirect and redirect is done to Response Headers Location
- 201 = created

## AJAX 
- Asyncronous JS and XML

## Traditional web pages
- All logic on server and browser only renders HTML 
- SPA (Sinle-page application) is modern style
- e.preventDefault() stops the default GET request after POST

## Diagram maker
- https://www.websequencediagrams.com/ 

### Exercise 0.4
```
  note over browser:
  User writes the input and the
  browser sends user input to the server 
  when the save button is clicked
  end note
  note over server:
  Payload of the POST request 
  is the user input value
  end note
  browser->server: HTTP POST request to server endpoint /new_note 
  server-->browser: HTTP response status code "302 redirect" to location /notes
  browser->server: HTTP GET request to server endpoint /notes
  server-->browser: HTTP status code "200 OK", Response HTML-file
  browser->server: HTTP GET endpoint /main.css
  server-->browser: HTTP response "200 OK", Response CSS-file
  browser->server: HTTP GET endpoint /main.js
  server-->browser: HTTP response "200 OK", Response JS-file
  browser->server: HTTP GET server endpoint /data.json
  server-->browser: HTTP status code "200 OK", Response JSON-file
  note over browser:
  browser executes the event handler
  that renders notes to display
  end note
```

### Exercise 0.5
```
  note over browser:
  User navigates to .../exampleapp/spa
  end note
  browser->server: HTTP GET request to server endpoint /spa
  server-->browser: HTTP status code "200 OK", Response HTML-file
  browser->server: HTTP GET to server endpoint /main.css
  server-->browser: HTTP response "200 OK", Response CSS-file
  browser->server: HTTP GET endpoint /main.js
  server-->browser: HTTP response "200 OK", Response JS-file
  browser->server: HTTP GET server endpoint /data.json
  server-->browser: HTTP status code "200 OK", Response JSON-file
  browser->server: HTTP GET server endpoint /favicon.ico
  server-->browser: HTTP status code "200 OK", Response HTML-file
```

### Exercise 0.6
```
  note over browser:
  User writes to the input and the
  browser sends the input value to the 
  server when the save button is clicked
  end note
  note over server:
  Payload of the POST request is 
  the user input value and the timestamp 
  in JSON format
  end note
  browser->server: HTTP POST request to server endpoint /new_note_spa
  note over browser:
  browser blocks the default behaviour GET
  to the server and renders the new note 
  on the browser
  end notehttps
  server-->browser: HTTP response status code "201 created" to location /notes
```
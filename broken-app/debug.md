# Broken App Issues:

```
- var app changed to const app

- app.list(3000) changed to app.listen(3000, function() {})

- error-handling middleware added

- needs .json() express method to access request body using app.use(express.json())

- refactored code into separate files according to middleware logic

- refactored handleRequest code from original to be cleaner and to make logic easier to follow
```
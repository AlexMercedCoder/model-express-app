## Model Express App

This repository has an express app at many different states to model the setup for different situations. Explore the branches and checkout this readme to learn about each state.

## api-express-nodb Branch

This branch shows an express app that deliver a JSON API with CRUD functionality and no database.

|Route|Method|Path|Response|
|-----|------|----|--------|
|Index|GET|/todo| returns all todos as json |
|Show|GET|/todo/:id| returns a single todo as json |
|Create|POST|/todo| receives json body, creates new todo, returns updated list of todos |
|Update|PUT|/todo/:id| receives json body, updates todo, returns updated list as json |
|Destroy|Delete|/todo/:id| Deletes a todo and returns updated list as json |

checkout comments for more details

Any variables like `process.env.PORT` are assumed to have been defined in a .env file like so...

```
PORT=4000
```
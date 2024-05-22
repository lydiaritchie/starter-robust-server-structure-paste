const express = require("express");
const app = express();
const pastes = require("./data/pastes-data");
// TODO: Follow instructions in the checkpoint to implement ths API.
const usersRouter = require("./users/users.router");
const pastesRouter = require("./pastes/pastes.router");


app.use(express.json());

app.use("/users", usersRouter);
app.use("/pastes", pastesRouter); 

// Not found handler
app.use((request, response, next) => {
  next({
    status: 404,
    message: `Not found: ${request.originalUrl}`
  });
});

// Error handler
app.use((error, request, response, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong! "} = error;
  response.status(status).json({error:message});
});

module.exports = app;

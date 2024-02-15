import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("Hello");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



















// morgan(function(tokens, req, res){
//   return[
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, 'content-length'), '-',
//     tokens['response-time'](req, res), 'ms'].join(' ')

// })
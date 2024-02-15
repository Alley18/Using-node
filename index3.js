import express from "express";

const app = express();
const port = 3000;

const logger = function(req, res, next){
  
  console.log("request: ", req.method);
  console.log("request URL:", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

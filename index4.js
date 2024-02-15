import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname1 = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res)=>{
  res.sendFile(__dirname1 + "/public/index.html");
});

app.use(bodyParser.json());

app.post("/submit", (req, res)=>{
  res.send(req.body.street + req.body.pet);
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const {getFortune} = require('./controller')
const {getAnimal} = require('./controller')
const {deleteItem} = require('./controller')
const {submitAnimal} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune/", getFortune);
app.get("/api/animal/", getAnimal);
app.post("/api/animal/", submitAnimal);
app.delete("/api/animal/:id", deleteItem)

app.listen(4000, () => console.log("Server running on 4000"));

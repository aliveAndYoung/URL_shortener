const express = require("express");
const app = express();
const port = 3000;

const morgan = require("morgan");
app.use(morgan("dev"));

app.use(express.json());


const myAppRoute = require("./routes/myRoute");
app.use(myAppRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

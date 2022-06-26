const express = require("express");
const cors = require("cors");

const routerApi = require("./routes");

const { logErrors,errorHandler,boomerrorHandler } = require("./middlewares/errorHandler");

const app = express();

const port = 3000;


app.use(express.json());

const whiteList = ["http://localhost:8080","http://localhost:3000"]
const options = {
    origin: (origin,callback) => {
        if(whiteList.includes(origin)) {
            callback(null,true);
        }
        else {
            callback(new Error("No permitido"));
        }
    }
}
//app.use(cors(options));

routerApi(app);

app.use(logErrors);
app.use(boomerrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log("Listening in port " + port);
});
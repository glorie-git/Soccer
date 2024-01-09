import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import routes from "./src/routes/soccerRoutes";

const app = express();
const PORT = 3000;

// mongo connection to database
// ** what is a promise
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB',{
    // useNewUrlParser is a deprecated option: useNewUrlParser and useUnifiedTopology has no effect 
    // since Node.js Driver version 4.0.0 and will be removed in the next major version
    // useNewUrlParser: true,
    // UseUnifiedTopology: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

routes(app);

app.get('/', (req, res) =>
    res.send(`Our Soccer application is running on port ${PORT}`)
)

app.listen(PORT, () =>
    console.log(`Your soccer server is running on port ${PORT}`)
)
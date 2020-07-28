import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express();

// The server will be held on Heroku. Get the port from the Heroku environment.
const PORT = process.env.PORT || 4000;

// mongoose connection
const dbUri = "mongodb+srv://mongo_sep_user1:gBSiaw3WRWF0X1cG@cluster0.gqwhc.azure.mongodb.net/sep_database?retryWrites=true&w=majority"
mongoose.Promise = global.Promise
mongoose.connect(dbUri, {
    useNewUrlParser:true,
    userUnifiedTopology:true
});

//body-parser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

const server = app.listen(PORT, () => {
    const addr = server.address();
    console.log(`Server listening at http://${addr.address}:${addr.port}`)
});


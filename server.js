const express = require('express')
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors')
const logger = require('morgan');
const DBConnect = require('./services/db.service')
const PORT = process.env.PORT;

/**Loading Middlewares */
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors())
app.use(logger('tiny'))


app.use('/', function(req, res) {
  res.send('Hello WOrld');
});

/**Using Routes */
const AuthRouter = require('./routes/auth.routes');
app.use('/api/auth/', AuthRouter);

app.listen(() => console.log(`Server is Started on PORT: ${PORT}`));






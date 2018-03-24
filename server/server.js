const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('../webpack.config.js'));
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

var port = 8080;

app.use(middleware(compiler, {
  publicPath: "/dist/"
}));

app.listen(port, function()  {
  console.log(`Server is running on the localhost:${port} `);
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname , '../public/tpl/index.html'))
});

app.get('/freshmen', function(req, res) {
  res.sendFile(path.resolve(__dirname , '../public/tpl/freshmen.html'))
})

app.use('/css', express.static(path.resolve(__dirname, '../public/styles/css')))
app.use('/dist',  express.static(path.resolve(__dirname, '../dist')))
app.use('/music',  express.static(path.resolve(__dirname, '../public/styles/scss/music')))

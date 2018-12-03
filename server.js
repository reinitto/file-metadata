'use strict';

var express = require('express');
var cors = require('cors');
var multer = require("multer");
var app = express();
var upload = multer()
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/',function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });
// The form on main page submits to here and it displays some file info from request.file. It is created with Multer middleware - upload.single("upfile")
app.post("/api/fileanalyse", upload.single('upfile'), (req,res)=>{res.json({name: req.file.originalname, size: (req.file.size+" bytes"), encoding: req.file.encoding })} )

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

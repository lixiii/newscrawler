const express = require( 'express' );
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

/** 
 * Initialisation routine
 */

app.use(cookieParser());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

app.post("/upload", upload.single("pkl"), async function (req, res) {
    // handle upload
    
});



var _port = 8080;

app.listen( _port );

console.log(`server listening on port ${_port}`);
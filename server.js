var http = require('http'),
    controller = require('../webcetas.node/controller');

var args = process.argv;
var port = args[2];

function startServer()
{
    http.createServer( function( req, res ) {
        res_handle = res;
        controller( req, res );
       }).listen( port );
}

startServer();

console.log( 'Server started successfully' );


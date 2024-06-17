'use strict';

var path = require('path');
var http = require('http');
var express = require('express');
var oas3Tools = require('oas3-tools');
var swaggerUi = require('swagger-ui-express');
var fs = require('fs');
var yaml = require('js-yaml');
var serverPort = 8080;

// Load the OpenAPI document
var openApiDocument = yaml.load(fs.readFileSync(path.join(__dirname, 'api/openapi.yaml'), 'utf8'));

// swaggerRouter configuration
var options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

var expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
var app = express();

// Serve Swagger UI at /ui
app.use('/ui', swaggerUi.serve, swaggerUi.setup(openApiDocument));

// Use the oas3Tools app config middleware
app.use(expressAppConfig.getApp());

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/ui', serverPort);
});

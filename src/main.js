"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_http_1 = require("node:http");
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = require("./schema");
// Create a Yoga instance with a GraphQL schema.
var yoga = (0, graphql_yoga_1.createYoga)({ schema: schema_1.schema });
// Pass it into a server to hook into request handlers.
var main = (0, node_http_1.createServer)(yoga);
// Start the server and you're done!
main.listen(4000, function () {
    console.info('Server is running on http://localhost:4000/graphql');
});

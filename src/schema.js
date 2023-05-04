"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var graphql_yoga_1 = require("graphql-yoga");
exports.schema = (0, graphql_yoga_1.createSchema)({
    typeDefs: /* GraphQL */ "\n    type Query {\n      hello: String\n    }\n  ",
    resolvers: {
        Query: {
            hello: function () { return 'world'; }
        }
    }
});

import path from 'path';
import { graphqlHTTP } from "express-graphql";
import { loadFilesSync } from "@graphql-tools/load-files";
import { makeExecutableSchema } from "@graphql-tools/schema";


const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolver.ts'));


const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
})


const graphqlMiddleware = graphqlHTTP({
    schema: schema,
    rootValue: {},
    graphiql: true,
});


export default graphqlMiddleware;

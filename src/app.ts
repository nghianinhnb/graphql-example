import express, { Express } from "express";
import graphqlMiddleware from "./graphql";


const app: Express = express();


app.use('/graphql', graphqlMiddleware);


export default app;

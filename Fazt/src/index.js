// const express = require('express');
import express from 'express';
import { graphqlHTTP } from 'express-graphql';  //Middleware de express
import schema from "./schema.js";
import { connect } from "./database.js";

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello world!',
    });
});

//const schema = {};
app.use('/graphql', graphqlHTTP({
    graphiql: true, //interfaz, pero igual se puede consultar por GET
    schema: schema, //Lo que se puede consultar
    context: {
        messageId: 'Testing ...',
    } //Pasa datos a todos los resolvers
}));
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
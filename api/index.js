import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers';

import models from './models'


const schema = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const PORT = 3001;
var app = express();

app.use("/graphql", function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	if (req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: {models} }));

app.use('/graphiql', graphiqlExpress({
	endpointURL: '/graphql',
}));

models.sequelize.sync().then(() => app.listen(PORT));
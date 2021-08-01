import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import schema from './schema'
// The resolvers
const resolvers = {
  Query: {
  },
};
// Put together a schema
const server = new ApolloServer({
  schema, resolvers, context: ({ req, res }) => {
    return { req, res };
  }
});
// Start the server
server.listen().then(({ url }) => {
  mongoose.connect('mongodb://localhost:27017/reddit-clone', { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('db connected');
  });
  console.log(`🚀  Server ready at ${url}`);
});

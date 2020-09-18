import "./env";
import { GraphQLServer} from "graphql-yoga";
import {prisma} from "prisma-client-lib";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
//import {sendSecretMail} from "./utils";

//import "./passport";

const PORT = process.env.PORT || 4000;
/*
const typeDefs = `
  type Query {
    hello : String!
  }
`;


const resolvers = {
  Query : {
    hello: () => "Hi"
  }
}
*/
const server = new GraphQLServer({
  schema, 
  context: ({request}) => ({request})
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({port: PORT}, () => console.log(`Server runnung on http://localhost:${PORT}`));
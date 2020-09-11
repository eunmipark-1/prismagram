require("dotenv").config()
import { GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./src/schema";
const PORT = process.env.PORT || 4000;

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

const server = new GraphQLServer({typeDefs, resolvers });

server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`Server runnung on http://localhost:${PORT}`));
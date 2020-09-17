import dotenv from "dotenv";
import path from "path";
dotenv.config({path:path.resolve(__dirname, ".env")});
import { GraphQLServer} from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import {sendSecretMail} from "./utils";

sendSecretMail("보내고자 하는 이메일 주소", "1234");

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
const server = new GraphQLServer({schema});

server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`Server runnung on http://localhost:${PORT}`));
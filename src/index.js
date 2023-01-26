const { ApolloServer } = require('apollo-server');
const { PubSub }       = require('apollo-server')
const {PrismaClient} = require('@prisma/client')

const fs     =require('fs');
const path   =require("path");
const { getUserId }  = require('./utils');

const Query        = require('./resolvers/Query')
const Mutation     = require('./resolvers/Mutation')
const User         = require('./resolvers/User')
const Link         = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')

// 1
/*
let links=[{  
    id:'link_0',
	url:'www.pravda.com.ua',
	description: 'News Ukrainian about War with russish'
},
{
	id:'link_1',
	url:'www.finviz.com',
	description: 'News and charts on Americans fondmarkets: Nasdaq, S&P500, Djia'
}
]
*/
// 2
const resolvers = {
  Query,
  Mutation, 
  Subscription,
  User,
  Link
  
}

// 3

const prisma = new PrismaClient()
const pubsub = new PubSub()
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname,'schema.graphql'),'utf8'),
  resolvers,
  context : ({req}) => {  return {
	                    ...req,
	                   prisma,
					   pubsub,
					   userId: req && req.headers.authorization ? getUserId(req) : null
					   }
  }
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );
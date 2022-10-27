# Learning GraphQL
In this project I trying to work with 
 frontend and backend for web-applications

 use the following technologies:
 
 Node.js, GraphQL, JavaScript, SQLite, ORM Prisma

The goal of this project is to build an API for to show notifications on message board.
Notifications is short posts, that contain a reference and description put an by user.
Also  this implemented signup and login functionality that allows users to authenticate against  GraphQL server.

This project is for testing, learning new tehnologies in client-server interaction on GraphQL via GraphQL Playground


## Used library
The stack you used based on 
- node.js 
- apollo-server
- database SQLite
- Prisma.

## Usage
To start project I install node.js
and then in the appropriate directory of project, run the following command:

```
node src/index.js
```

The server will be started at http://localhost:4000.

Now with the GraphQLPlayGround can testing GraphQLServer,for place posts(via query "post"), delete posts(via query "deleteLink") 
and get a list posts(via query "feed", using various filters )

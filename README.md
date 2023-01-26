# Learning GraphQL
In this project I trying to work with 
 frontend and backend for web-applications

 use the following technologies:
 
 Node.js, GraphQL, JavaScript, SQLite, ORM Prisma

The goal of this project is to build an API for to show notifications on message board.
Notifications is short posts, that contain a reference and description put an by user.
Also  this implemented signup and login functionality that allows users to authenticate against  GraphQL server and realtime functionality  by implementing GraphQL subscriptions.Subscriptions are a GraphQL feature that allows a server to send data to its clients when a specific event happens and it implemented with WebSockets. I 

This project is for testing, learning new tehnologies in client-server interaction on GraphQL via GraphQL Playground


## Used library
The stack to use based on 
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
and get a list posts(via query "feed", using various filters ).

For testing authentication use queries "signup" and "login" .

For realtime subscription the client  opens up a long-lived connection to the server by sending a subscription query "newLink" that specifies event: new message which appearance on board.

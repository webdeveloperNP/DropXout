// To connect MongoDB to Node.js, you'll need to follow these steps:

// 1. **Install MongoDB**: Make sure you have MongoDB installed on your machine. If you haven't installed it yet, you can download and install it from the official MongoDB website (https://www.mongodb.com/try/download/community).

// 2. **Create a New Node.js Project**: Set up a new Node.js project if you haven't already. You can use npm to initialize a new project by running the following command in your terminal:

//    ```bash
//    npm init
//    ```

// 3. **Install MongoDB Driver for Node.js**: To interact with MongoDB from Node.js, you'll need a MongoDB driver. The most popular driver is `mongodb`, which is developed and maintained by the MongoDB team. Install it as a dependency in your project:

//    ```bash
//    npm install mongodb
//    ```

// 4. **Require the MongoDB Driver in Your Node.js Code**: In your Node.js code, import the MongoDB driver using the `require` statement:

//    ```javascript
//    const MongoClient = require('mongodb').MongoClient;
//    ```

// 5. **Create a Connection URL**: You need to define a connection URL to connect to your MongoDB server. The connection URL format is as follows:

//    ```
//    mongodb://<username>:<password>@<host>:<port>/<database>
//    ```

//    Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with your MongoDB server credentials and configuration. If you are running MongoDB locally, the URL might look like:

//    ```
//    mongodb://localhost:27017/mydatabase
//    ```

// 6. **Connect to MongoDB**: Use the `MongoClient` to connect to your MongoDB server using the connection URL:

//    ```javascript
//    const url = 'mongodb://localhost:27017/mydatabase';

//    MongoClient.connect(url, function(err, client) {
//      if (err) {
//        console.log('Error connecting to MongoDB:', err);
//        return;
//      }

//      console.log('Connected to MongoDB successfully!');

//      // Now, you can perform database operations using the "client" object.
//      // For example, you can create a referencez to a specific database:
//      const db = client.db('mydatabase');

//      // ... Perform database operations here ...

//      // Close the connection when done.
//      client.close();
//    });
//    ```

// 7. **Perform Database Operations**: Once you've successfully connected to the MongoDB server, you can perform various database operations, such as inserting, updating, querying, and deleting data.

// 8. **Handle Errors and Close the Connection**: Always handle errors properly and make sure to close the database connection when you're done with it. Failing to close the connection can lead to resource leaks.

// That's it! You should now be able to connect MongoDB to your Node.js application and interact with the database. Remember to handle errors gracefully and follow best practices for managing database connections in your Node.js application.
//Start ==============================================

const { MongoClient } = require('mongodb');
// or const MongoClient = require('mongodb').MongoClient;
// or as an es module:
// import { MongoClient } from 'mongodb' 
const url='mongodb://localhost27017';
 
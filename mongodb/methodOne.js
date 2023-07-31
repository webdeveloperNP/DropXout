const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://dropxout:dropxout@cluster0.vl4v7nn.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url);
const database = 'dropxout';
//creating new instance of mongoclient and passing url to connect to a db server(particlar project on atlas) ,client will now be used to establish connection on mongodb
//const con = client;
async function main() {
    await client.connect();//async-await meaning we're using promise
    //client.connect method establishes connection to our mongodb server using connect method of MongoClient class
    console.log('Connection successfull');
    const db = client.db(database);
    //connecting to particular db at our server
    const collection = db.collection('users');

    //const read = await collection.find();//returns cursor
    const read = await collection.find().toArray();
    console.log(read);
}

main();
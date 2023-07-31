//Good practice : making code cleaner and more explanatory
const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://dropxout:dropxout@cluster0.vl4v7nn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);
const database = 'dropxout';
const dbConnection = async () => {
    try {
        await client.connect();
        console.log('Connected to server successfully');
        const db = client.db(database);
        return db;
    } catch (error) {
        console.log('Error:' + error);
    }
}
module.exports = {dbConnection};
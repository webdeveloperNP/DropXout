const { dbConnection } = require('./methodTwo.js');

async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('users');
        //Reading data
        // const read = await collection.find().toArray();
        // console.log(read);


        //Writing/Creating data
        // let data = [
        //     { name: 'abcd', age: 20 }, { name: 'efgh', age: 21 }
        // ]
        // const acknowledgement = await collection.insertMany(data);
        // //console.log(acknowledgement);//use this or below
        // console.log(`${acknowledgement.insertedCount} : documents inserted`);

        //Updating data
        // const updateack = await collection.updateMany({name:'abcd'},{$set:{age:30}});
        // console.log(updateack);
        // console.log('modified count :'+ updateack.modifiedCount);

//Delete document
        //another way to define filter
        // const filter={name:"john"};
        // const deleteack = await collection.deleteOne(filter);
        // console.log(deleteack);
        // console.log(deleteack.deletedCount);

    } catch (error) {
        console.log('Error:' + error);
    }
}
main();
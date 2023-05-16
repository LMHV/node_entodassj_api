import mongoose from 'mongoose';

async function connect (){
    try{
        await mongoose.connect('mongodb+srv://userEnTodasSj:YtJf4TrXzuIdQIEF@cluster0.wis1b.mongodb.net/?retryWrites=true&w=majority', {dbName: 'entodassj'});{
            console.log('Connected to database')
        
        }
    }catch{
        console.log('Error connecting to Database')
    }
}

export default connect;


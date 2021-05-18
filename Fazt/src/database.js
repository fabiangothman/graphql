import mongoose from "mongoose";

export const connect = async () => {
    try{
        await mongoose.connect('mongodb://localhost/mongodb_graphql', {
            useNewUrlParser: true,  //Evita error por consola de biblioteca
            useUnifiedTopology: true,   //Evita error de motor de monitoreo
        });
        console.log('>>> MongoDB is connected');
    }catch (e){
        console.log(e);
    }
}
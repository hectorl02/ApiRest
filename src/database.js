import mongoose from 'mongoose';
import config from './config';

(async() => {
    const db = await mongoose.connect(config.mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:true
    });
    console.log("Base de datos conectada a:", db.connection.name);
})();



import { ConnectionOptions, connect } from 'mongoose';

const connectDatabase = async () => {
    const mongoURI: string = setMongoURI();
    const options: ConnectionOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    };
    try {
        await connect(mongoURI, options);
        console.log(`[MongoDB] Connection to ${mongoURI} established!`);
    } catch (err) {
        console.error(`[MongoDB] Connection to ${mongoURI} failed with error: ${err.message}.`);
        process.exit(1);
    }
};

const setMongoURI = (): string => {
    if (process.env.NODE_ENV === 'production') {
        return `${process.env.DB_PROT}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
    } else {
        return `${process.env.DB_PROT_DEV}://${process.env.DB_HOST_DEV}:${process.env.DB_PORT_DEV}/${process.env.DB_NAME_DEV}`;
    }
};

export default connectDatabase;

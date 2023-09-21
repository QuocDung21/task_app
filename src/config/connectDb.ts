import mongoose, { ConnectionOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection: { isConnected?: number } = {};

const dbConnection = async () => {
  if (connection.isConnected) {
    return;
  }

  try {
    const dbOptions: ConnectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const db = await mongoose.connect(process.env.MONGODB_URL!, dbOptions);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    throw new Error('Unable to connect to database: ' + error);
  }
};

export default dbConnection;

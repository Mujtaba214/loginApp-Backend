import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect("mongodb+srv://mujtaba21:mujtaba123@cluster0.tcsgq.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 30000,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

export const disconnectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB here');
  }
};

export default connectDb;
import mongoose from "mongoose";

const DB_URL = "mongodb+srv://skt48324:Shankar123@cluster0.68xta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error :', error.message);
    process.exit(1); 
  }
};

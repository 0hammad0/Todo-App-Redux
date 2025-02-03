import mongoose from 'mongoose';

// Get MongoDB URI from environment variables
// const dbURI = process.env.MONGO_URI;
const dbURI = 'mongodb+srv://hammad:srprEVtZ8lowRnCP@todo-app.wje5x.mongodb.net/todo?retryWrites=true&w=majority'

console.log('dbURI:', dbURI);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('*** DB connected successfully ***');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit with failure
  }
};

// Optional: Additional event listeners for better error handling
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err.message}`);
});

export default connectDB;

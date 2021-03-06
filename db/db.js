const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(process.env.MONGO_URI);
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(
      `mongoDb is connected: ${connection.connection.host}`.cyan.bold
    );
  } catch (err) {
    console.log(`error connecting to DATABASE: ${err}`.red.bold.inverse);
    process.exit(1);
  }
};

module.exports = connectDB;

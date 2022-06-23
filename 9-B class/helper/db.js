const mongoose = require("mongoose");
const uri =
  "mongodb+srv://sofiya:21010701@cluster0.xbmvd.mongodb.net/testesttest";

module.exports = async () => {
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("open", () => {
      console.log(`Server running`);
    });
    db.on("error", () => {
      console.log(`Server error running`);
    });
  } catch (error) {
    console.log(error);
  }
};

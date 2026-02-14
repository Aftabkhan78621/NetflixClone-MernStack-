import mongoose from "mongoose";

const dataBaseConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDb connected successfuly");
    })
    .catch((error) => {
      console.log("mongoDb error: ", error.message);
    });
};
export default dataBaseConnect;

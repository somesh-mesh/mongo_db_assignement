// const mongoose = require("mongoose");

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://meshramsomesh00:dK843ibndFBzgbJM@cluster0.6e6zuow.mongodb.net/");

// // Define schemas
// const AdminSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const UserSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   purchasedCourses: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Course",
//     },
//   ],
// });

// const CourseSchema = new mongoose.Schema({
//   // Schema definition here
//   title: String,
//   description: String,
//   image: String,
//   price: Number,
// });

// const Admin = mongoose.model("Admin", AdminSchema);
// const User = mongoose.model("User", UserSchema);
// const Course = mongoose.model("Course", CourseSchema);

// module.exports = {
//   Admin,
//   User,
//   Course,
// };
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://meshramsomesh00:dK843ibndFBzgbJM@cluster0.6e6zuow.mongodb.net/course_web_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};



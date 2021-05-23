const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log(err, "error message");
  });

const courseSchema = mongoose.Schema({
  name: String,
  date: {
    type: Date,
    default: Date.now,
  },
  author: String,
  tags: [String],
  isPublished: Boolean,
});
const Course = mongoose.model("course", courseSchema);

const createCourse = async () => {
  const latestCourse = new Course({
    name: "Backend Engineering using Node.js",
    author: "Thoth",
    tags: ["Node.js", "Backend"],
    isPublished: true,
  });

  const result = await latestCourse.save();
  //   console.log(result);
};

// createCourse();

async function getCourse() {
  const courses = await Course.find({ author: "Thoth" }).countDocuments();
  console.log(courses);
}

getCourse();

const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  try {
    await User.create({
      username,
      password,
    });

    res.json({
      msg: "User created successfully",
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne(
      { username },
      { $push: { purchasedCourses: courseId } }
    );

    res.json({ message: "Course purchased successfully" });
  } catch (error) {
    console.error("Error purchasing course:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const username = req.headers.username;
    const user = await User.findOne({ username }).populate("purchasedCourses");

    if (user) {
      res.json({ purchasedCourses: user.purchasedCourses });
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching purchased courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

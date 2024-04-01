const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware,  async(req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.username;   // which will be from  usermiddleware req.username= jwtDEcode.username
    console.log(username);

    // await User.updateOne({
    //     username: username
    // }, {
    //     "$push": {
    //         purchasedCourses: courseId
    //     }
    // })
    // res.json({
    //     message: "Purchase complete!"
    // })
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
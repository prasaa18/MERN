const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic

    const username=req.body.username;
    const password=req.body.password;

    //check username alraedy exists
   await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin Created Successfully "
    })
    // .then(function(){
    //     res.json({
    //         message:'Admin created Successfully'
    //     })
    // })
    // .catch(function(){
          
    // })
  
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const description=req.body.description;
    const imageLink=req.body.imageLink;
    const price=req.body.price;
    //zod
  const newcourse= await Course.create({   //key and value are same 
        title,
        description,
        imageLink,
        price
    })
    console.log(newcourse);
    res.json({
        message:'course created successfully', courseId:newcourse._id
    })

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    //  Course.find({})   //all courses
    //  .then(function(response){
    //     res.json({
    //         courses:response
    //     })
    //  })
    const response = await Course.find({})
   res.json({
    courses:response
   })
   
});

module.exports = router;
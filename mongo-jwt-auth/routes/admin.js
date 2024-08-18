const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");

const router = Router();

const jwt = require("jsonwebtoken");
const jwt_secret = require("../config");


const {Admin, User, Course} = require("../db");

//Admin Routes
router.post('/signup', async (req,res,next)=>{
    //signup logic
    const {username, password} = req.body;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        message: "Admin created successfully!"
    });
});

router.post('/signin', async (req, res, next)=>{
    const {username, password} = req.body;

    const user = await Admin.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({ username}, jwt_secret);
        res.json({
            token
        })
    }
    else{
        res.status(411).json({
            message: "Invalid credentials"
        })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});


module.exports = router;
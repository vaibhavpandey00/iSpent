const User = require("../Models/User");
const bcrypt = require("bcrypt");

// User Sign up funtion
const userSignup = async (req,res) => {
    try {

        const {fullName, email, password} = req.body;
        if(!fullName, !email, !password){
            res.status(400);
            throw new Error("Please Fill All The Fields")
        }

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message : "User already exist"});
        }

        const userCreated = await User.create({
            fullName,
            email,
            password
        })

        if(userCreated) {
            // if user created successfully then this response will be sent
            const {fullName, email} = userCreated;
            res.status(201).json({message: {fullName, email}, token: await userCreated.generateToken(), userId: userCreated._id.toString()})
        }
        else{
            res.status(400).json({ message: 'Failed to  create the user' });
        }
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// User login funtion
const userLogin = async (req,res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400);
            throw new Error("Please Enter all the feilds")
        }

        // Check DB for user 
        const userExist = await User.findOne({ email });
        
    } catch (error) {
        
    }
}
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
export const register=async (req,res,next)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            isAdmin:req.body.isAdmin
        })
            await newUser.save()
            res.status(200).send("User has been created.")
    }catch(err){
        next(err);
    }

}
const createError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
export const login = async (req, res, next) => {
    try {
        // Find user by username
        const user = await User.findOne({ username: req.body.username }); 
        if (!user) return next(createError(404, "User not found!"));

        // Check password match
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));

        // Debugging: check the isAdmin value in the database
        console.log("Admin user in DB:", user.isAdmin); // Log the isAdmin value from DB

        // Create the JWT token
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT, { expiresIn: "1h" });

        // Remove sensitive data (password) from the user object
        const { password, isAdmin, ...otherDetails } = user._doc;

        // Send the response with the token
        res.cookie("access_token", token, {
            httpOnly: true,  // Secure cookie
        }).status(200).json({ ...otherDetails });
    } catch (err) {
        next(err);
    }
};

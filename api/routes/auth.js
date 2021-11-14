const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//register
router.post("/register", async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err);
    }

});

//LOGIN
router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({ username:req.body.username });
        !user && res.status(401).json("Wrong credentials"); //(if user is different from any user inside the DB then return error 401 with a message "wrong credentials")

        const hashedPSW = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC
        );

        const psw = hashedPSW.toString(CryptoJS.enc.Utf8);
        psw !== req.body.password && res.status(401).json("Wrong password"); //(if password is different from password inside the DB then return error 401 with a message "wrong passwords")
        //security token 

        const accessToken = jwt.sign({
                id:user._id,
                isAdmin:user.isAdmin,
            }, process.env.JWT_SEC,
            {expiresIn:'3d'}
        );

        //return the user object with it's all its info but the password
        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch(err) {
        res.status(500).json(err);
    }
    

})


module.exports = router;
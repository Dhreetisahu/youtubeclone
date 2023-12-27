import jwt from 'jsonwebtoken'

const auth =(req,res,next)=>{
    try {
        // console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1];
        let decodeData= jwt.verify(token,process.env.JWT_SECRET)
        req.userId=decodeData?.id
        next();
    } catch (error) {
        console.log("Authentication error:", error);
        res.status(400).json("Invalid Credentials")
    }
}
export default auth


import mongoose from "mongoose";

const watchLaterSchema= mongoose.Schema({
    videoId:{type:String, require:true},
    viewer:{type:String, require:true},
    LikedOn:{type:Date, default:Date.now}
})
export default mongoose.model('watchLater',watchLaterSchema)
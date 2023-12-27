import likedVideo from '../models/likedVideo.js';
import mongoose from 'mongoose';

export const likeVideoController = async (req, res) => {
    try {
      //console.log(req.body);
       const likedVideoData = req.body;
       const addToLikedVideo = new likedVideo({...likedVideoData });
       await addToLikedVideo.save();
       res.status(200).json("added to likedVideo");
    } catch (error) {
      res.status(400).json(error);
    }
  };

export const getAlllikeVideoController = async(req,res)=>{
    try {
        const files = await likedVideo.find();
        res.status(200).send(files)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export const deletelikeVideoController=async(req, res)=>{
  const { videoId:videoId,viewer:viewer}=req.params;
  //console.log(videoId,viewer)
  try {
    await likedVideo.findOneAndDelete({
      videoId:videoId,viewer:viewer
    })
    res.status(200).json({message: "Removed from your liked video"})
  } catch (error) {
    res.status(400).json({message:error.message})
  }
}
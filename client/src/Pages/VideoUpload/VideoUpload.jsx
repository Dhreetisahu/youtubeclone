import React, { useState } from 'react';
import './VideoUpload.css';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { uploadVideo } from '../../actions/video';
function VideoUpload({setvidUploadPage}) {

    const CurrentUser = useSelector(state=>state.currentUserReducer)
    const dispatch = useDispatch();
    const[title, setTitle]=useState("")
    const[VideoFile, setVideoFile]=useState("")

    const handlesetVideoFile=(e)=>{
        setVideoFile(e.target.files[0]);
    }

    const[progress,setProgress]= useState(0);
    const fileOptions={
       onUploadProgress:(progressEvent)=>{
        const {loaded,total}=progressEvent;
        const percentage=Math.floor(((loaded/1000)*100)/(total/1000));
        setProgress(percentage)
        if(percentage==100){
            setTimeout(function(){},3000)
            setvidUploadPage(false);
        }
       }
    };

    const uploadVideoFile=()=>{
        if(!title){
            alert("Plz Enter A Title of the video")
        }
        else if(!VideoFile){
            alert("Plz Attach a video File")
        }
        else if(VideoFile.size > 1000000){
            alert("Plz Attach video file less than 1kb")
        }
        else{
            const fileData = new FormData();
            fileData.append("file",VideoFile);
            fileData.append("title",title);
            fileData.append("chanel",CurrentUser?.result._id);
            fileData.append("Uploader",CurrentUser?.result.name);
            // console.log(fileData,VideoFile)
            dispatch(uploadVideo({
                fileData:fileData,fileOptions:fileOptions
            }))
        }
    }

    return (
        <div className='container_VidUpload'>

            <input
            onClick={()=>setvidUploadPage(false)}
             type="submit" name='text' value={"x"} className='ibtn_x' />

            <div className="container2_VidUpload">
                <div className="ibox_div_vidupload">
                    <input 
                    onChange={(e)=>{setTitle(e.target.value)}}
                    type="text" className="ibox_vidupload"
                        maxLength={30}
                        placeholder='Enter Title of your video' />
                    <label htmlFor="file" className='ibox_vidupload btn_vidUpload'>
                        <input 
                        onChange={e=>{handlesetVideoFile(e)}}
                        type="file" name='file' className='ibox_vidupload' style={{ fontSize: "1rem" }} />
                    </label>
                </div>
                <div className="ibox_div_vidupload">
                    <input 
                    onClick={()=>uploadVideoFile()}
                    type="submit" value="Upload" className='ibox_vidupload btn_vidUpload' />
                </div>
                <div className="loader ibox_div_vidupload">
                    <CircularProgressbar
                    value={progress}
                    text={`${progress}`}
                    styles={buildStyles({
                        rotation:0.25,
                        strokeLinecap: "butt",
                        textSize:"20px",
                        pathTransitionDuration:0.5,
                        pathColor:`rgba(255,255,255,${progress/100})`,
                        textColor:"#f88",
                        trailColor:"#adff2f",
                        backgroundColor:"#3e98c7"
                    })}/>
                </div>
            </div>
        </div>
    )
}

export default VideoUpload

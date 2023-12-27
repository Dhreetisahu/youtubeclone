import React, { useEffect } from 'react'
 import vid from '../../Components/Video/vid.mp4';
import './VideoPage.css';
import LikeWatchLaterSaveBtn from './LikeWatchLaterSaveBtn';
import Comments from '../../Components/Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';


function VideoPage() {
  const {vid}=useParams();
  //console.log(vid)

  //const chanels = useSelector((state) => state?.chanelReducers)
  // console.log(chanels)
  //const currentChanel = chanels.filter(c => c._id === Cid)[0];

  const vids= useSelector((state)=>state.videoReducer);
  //console.log(vids.data);
  const vv = vids?.data.filter((q)=>q._id === vid)[0];

  const dispatch = useDispatch();
  const CurrentUser = useSelector(state => state?.currentUserReducer);

  const handleHistory=()=>{
    dispatch(
       addToHistory({
         videoId: vid,
         viewer: CurrentUser?.result._id,
       })
    )
  };

  const handleViews=()=>{
    dispatch(viewVideo({
      id:vid
    }))
  }

  useEffect(()=>{
    if(CurrentUser){
      handleHistory();
    }
    handleViews();
  }, []);

  return (
    <>
      <div className="container_videoPage">
        <div className="container2_videoPage">
           <div className="video_display_screen_videopage">

              <video src={`http://localhost:5500/${vv?.filePath}`} className={"video_ShowVideo_videoPage"} controls ></video>

              <div className="video_details_videopage">
                <div className="video_btns_title_videopage_cont">
                  <p className="video_title_videopage">{vv?.VideoTitle}</p>
                  <div className="views_date_btns_videopage">
                    <div className="views_videopage">
                    {vv?.Views} views <div className="dot"></div>{moment(vv?.createdAt).fromNow()}</div>
                    <LikeWatchLaterSaveBtn
                    vv={vv} vid={vid}
                    />
                  </div>
                </div>

                
                <Link to={`/chanel/${vv?.videoChanel}`}className="channel_details_videopage">
                  <b className="channel_logo_videopage">
                    <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                  </b>
                  <p className="channel_name_videopage">{vv?.Uploader}</p>
                </Link >

                <div className="comments_videopage">
                  <h2><u>Comments</u></h2>
                  <Comments videoId={vv._id}/>
                </div>
              </div>
           </div>
           <div className="MoreVideoBar">More Video</div>
        </div>
      </div>
      
    </>
  )
}


export default VideoPage

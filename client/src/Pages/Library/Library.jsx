import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
//import vid from '../../Components/Video/vid.mp4';
import WHLVideoList from '../../Components/WHL/WHLVideoList';
import { FaHistory } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import {AiOutlineLike} from 'react-icons/ai';

import './Library.css';
import { useSelector } from 'react-redux';

function Library() {

  const CurrentUser = useSelector((state) => state?.currentUserReducer)

  const watchLaterList = useSelector((state)=>state.watchLaterReducer)
  const historyList = useSelector((state)=>state.HistoryReducer)
  const likedVideoList = useSelector((state)=>state.likedVideoReducer)
  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     uploader: "abc",
  //     description: "description of video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     chanel: "cdd",
  //     title: "video 2",
  //     uploader: "def",
  //     description: "description of video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     chanel: "add",
  //     title: "video 3",
  //     uploader: "ghi",
  //     description: "description of video 3"
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     chanel: "add",
  //     title: "video 4",
  //     uploader: "jkl",
  //     description: "description of video 4"
  //   },
  // ];

  return (
    <div className="Container_Pages_App">
      <LeftSidebar />
      <div className="Container2_Pages_App">
        <div className="container_libraryPage">
          <h1 className="title_container_libaryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList
              page={"history"}
              CurrentUser={CurrentUser?.result._id}
              videoList={historyList} />
          </div>
        </div>


        <div className="container_libraryPage">
          <h1 className="title_container_libaryPage">
            <b>
              <MdOutlineWatchLater/>
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList
              page={"Watch Later"}
              CurrentUser={CurrentUser?.result._id}
              videoList={watchLaterList} />
          </div>
        </div>


        <div className="container_libraryPage">
          <h1 className="title_container_libaryPage">
            <b>
              <AiOutlineLike/>
            </b>
            <b>Liked Video</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList
              page={"Liked Video"}
              CurrentUser={CurrentUser?.result._id}
              videoList={likedVideoList} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Library

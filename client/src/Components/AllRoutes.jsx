import React from 'react'
import Home from '../Pages/Home/Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import YourVideo from '../Pages/YourVideo/YourVideo';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Chanel from '../Pages/Chanel/Chanel';
import Search from '../Pages/Search/Search';

function AllRoutes({setEditCreateChanelBtn, setvidUploadPage}) {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/yourvideo' element={<YourVideo/>}/>
        <Route path='/history' element={<WatchHistory/>}/>
        <Route path='/watchlater' element={<WatchLater/>}/>
        <Route path='/likedvideo' element={<LikedVideo/>}/>
        <Route path='/videoPage/:vid' element={<VideoPage/>}/>
        <Route path='/search/:searchQuery' element={<Search/>}/>
        <Route 
        path='/chanel/:Cid' element={<Chanel 
        setvidUploadPage={setvidUploadPage}
        setEditCreateChanelBtn={setEditCreateChanelBtn}/>}/>
      
    </Routes>
  )
}

export default AllRoutes

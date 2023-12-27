import React from 'react';
//import './Home.css';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
import vid from '../../Components/Video/vid.mp4';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

function Search() {

    const {searchQuery}=useParams();

  const vids= useSelector(state=>state.videoReducer)?.data?.filter((q)=>q?.VideoTitle.toUpperCase().includes(searchQuery.toUpperCase())).reverse();
  //console.log(videoFile);
  

  return (
    <div className="Container_Pages_App">
      <LeftSidebar />
      <div className="Container2_Pages_App">
        <h2 style={{color:"white"}}>Search Results for {searchQuery}....</h2>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}

export default Search

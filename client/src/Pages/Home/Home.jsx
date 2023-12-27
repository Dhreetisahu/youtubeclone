import React from 'react';
import './Home.css';
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid';
//import vid from '../../Components/Video/vid.mp4';
import {useSelector} from 'react-redux';

function Home() {

  const vids= useSelector(state=>state.videoReducer)?.data?.filter(q=>q).reverse();
  //console.log(videoFile);

//  const vids = [
//     {
//       _id: 1,
//       video_src: vid,
//       chanel: "62bafe6752cea35a6c30685f",
//       title: "video 1",
//       uploader: "abc",
//       description: "description of video 1"
//     },
//     {
//       _id: 2,
//       video_src: vid,
//       chanel: "cdd",
//       title: "video 2",
//       uploader: "def",
//       description: "description of video 2"
//     },
//     {
//       _id: 3,
//       video_src: vid,
//       chanel: "add",
//       title: "video 3",
//       uploader: "ghi",
//       description: "description of video 3"
//     },
//     {
//       _id: 4,
//       video_src: vid,
//       chanel: "add",
//       title: "video 4",
//       uploader: "jkl",
//       description: "description of video 4"
//     },
//   ];
  
const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
  ]

  return (
    <div className="Container_Pages_App">
      <LeftSidebar />
      <div className="Container2_Pages_App">
        <div className="navigation_Home">
          {
            NavList.map(m => {
              return (
                <p key={m} className="btn_nav_home">
                  {m}
                </p>)
            })
          }
        </div>
        <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}

export default Home

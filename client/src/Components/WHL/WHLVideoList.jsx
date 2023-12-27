import React from "react";
import ShowVideoList from "../ShowVideoList/ShowVideoList";

function WHLVideoList({ page, CurrentUser, videoList }) {
  // console.log(videoList);
  // console.log(CurrentUser);

  return (
    <>
    { CurrentUser ?(<>
    {
      videoList?.data
        ?.filter((q) => q?.viewer === CurrentUser)
        .reverse()
        .map((m) => {
          return (
            <>
              <ShowVideoList videoId={m?.videoId} key={m?._id} />
            </>
          );
          })
    }
    </>):(<> 
    <h2 style={{color:"white"}}>Plz Login To Watch Your {page}</h2>


    </>)
    }
  </>
  );
}

export default WHLVideoList;

import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar';
import './WHLcss.css';
import WHLVideoList from './WHLVideoList';
import { useDispatch, useSelector } from 'react-redux';
import { clearHistory } from '../../actions/History';

function WHL({page,videoList}){
    const CurrentUser = useSelector((state) => state?.currentUserReducer)

    const dispatch = useDispatch();
    const handleClearHistory=()=>{
      if(CurrentUser){
        dispatch(clearHistory({
            userId:CurrentUser?.result._id
        }))
      }
    }

    // console.log(videoList)
    return (
        <div className="Container_Pages_App">
            <LeftSidebar />
            <div className="Container2_Pages_App">
                <p className="container_whl">
                    <div className="box_WHL leftside_whl">
                         <b>Your {page} shown here</b>
                         {
                            page==="history" &&<div className="clear_history_btn" onClick={()=>handleClearHistory()}>clear history</div>
                         }
                         
                    </div>
                    <div className="rightSide_whl">
                        <h1>{page}</h1>
                        <div className="whl_list">
                            <WHLVideoList 
                            CurrentUser={CurrentUser?.result._id}
                            page={page} videoList={videoList}/>
                        </div>

                    </div>

                </p>
            </div>
        </div>
    )
}

export default WHL

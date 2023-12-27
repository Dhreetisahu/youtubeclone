import React, { useState } from 'react'
import './CreateEditChanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../actions/chanelUser';

function CreateEditChanel({setEditCreateChanelBtn}) {
    // const CurrentUser = {
    //     result:{
    //       email:"xyz@mail.com",
    //       joinedOn:"2222-07-15T09:57:23.489Z",
    //     },
    //    };
    const CurrentUser = useSelector(state=>state.currentUserReducer)
       const[name,setName] =useState(CurrentUser?.result.name)
       const[desc,setDesc] =useState(CurrentUser?.result.desc)
       const dispatch = useDispatch();
       const handleSubmit=()=>{
        if(!name){
            alert("plz Enter Name!");
        }else if(!desc){
            alert("plz Enter Discription!");
        }else{
            dispatch(updateChanelData(CurrentUser?.result._id,{
                name:name,
                desc:desc,
            }));
            setEditCreateChanelBtn(false);
            setTimeout(()=>{
                dispatch(login({email:CurrentUser?.result.email}));
            },5000);
        }
       }
    return (
        <div className='container_CreateEditChanel'>
            <input type="submit" name='text' value={"x"} className='ibtn_x' onClick={()=>setEditCreateChanelBtn(false)} />
            <div className='container2_CreateEditChanel'>
                <h1>
                    {CurrentUser?.result.name?<>Edit</>:<>Create</>} Your Chanel
                </h1>
                <input 
                type="text"
                 placeholder='Enter Your/Chanel Name'
                 className="ibox" 
                 name='text' 
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 />
                 <textarea 
                 rows={15}
                 type="text"
                 placeholder={"Enter Chanel Description"}
                 className={"ibox"}
                 value={desc}
                 onChange={(e)=>setDesc(e.target.value)}
                 ></textarea>

                 <input 
                 type="submit"
                 value={"submit"}
                 onClick={handleSubmit}
                 className='ibtn'
                 />
            </div>
        </div>
    )
}

export default CreateEditChanel

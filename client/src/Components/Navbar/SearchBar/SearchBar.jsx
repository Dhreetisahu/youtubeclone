import React from 'react';
import './SearchBar.css';
import{FaSearch} from 'react-icons/fa';
import{BsMicFill} from 'react-icons/bs';
import SearchList from './SearchList';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




function SearchBar() {
    
    const[searchQuery,setSearchQuery] = useState("");
    const[seachListA,setSeachList] = useState(false);

    const TitleArray = useSelector(s=>s?.videoReducer)?.data?.filter(q=>q?.VideoTitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.VideoTitle)

    // const TitleArray=["video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));

    return (
        <>
            <div className="Searchbar_Container">
                <div className="Searchbar_Container2">
                    <div className="Search_div">
                        <input type="text" className='iBox_SearchBar' placeholder='Search' onChange={e=>setSearchQuery(e.target.value)} value={searchQuery} onClick={e=>setSeachList(true)}/>

                        <Link to={`/search/${searchQuery}`}>
                        <FaSearch className='Searchicon_Searchbar' onClick={e=>setSeachList(false)}/>
                        </Link>

                        <BsMicFill className='Mic_Searchbar'/>
                        
                        {searchQuery&& seachListA &&
                            <SearchList
                            setSearchQuery ={setSearchQuery}
                            TitleArray = {TitleArray}
                            />
                        }
                        
                        
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchBar


import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa';

function SearchList({ TitleArray, setSearchQuery }) {

  return (
    <>
      <div className="Container_SearchList">
        {
          TitleArray.map(m => {
            return <p
              key={m}
              onClick={e => setSearchQuery(m)}
              className='titleitem'>
              <FaSearch />
              {m}
            </p>
          })
        }
      </div>
    </>
  )
}

export default SearchList

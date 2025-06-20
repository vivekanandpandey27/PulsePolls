import React from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchResultProfile = ({ searchResults }) => {

  const navigate = useNavigate();

  const handleProfileClick = (people) => {
    navigate("/OthersProfile", { state: { userData: people } });
  }

  return (
        <div className="absolute mt-14 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
              <div className="max-h-60 overflow-y-auto">
                
                {searchResults.length > 0 ? 
                (
                  searchResults.map((people, index) => (
                    <div key={index} onClick={() => handleProfileClick(people)}  className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition-colors duration-150 flex items-center ">
                      
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                        <img src = {people.profilePhoto}/>
                      </div>

                      <div>
                        <p className="font-medium text-gray-800">{people.userName}</p>
                        {people.fullName && (<p className="text-xs text-gray-500">{people.fullName}</p>)}
                      </div>

                    </div>
                  ))) : 
                  (
                    <div className="px-4 py-3 text-gray-500 text-center">
                        No results found
                    </div> 
                  )}
        </div>

        <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 border-t border-gray-100">
          {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
        </div>
  </div>
  )
}

import React from "react"

const Search = () => {
  return (
    <div className="px-8 py-4">
      <div className="focus-within:ring-2 focus-within:ring-black bg-white mb-8 rounded-full flex items-center w-full p-3 shadow-sm border focus:outline-black border-gray-200 font-inter transition ease-in-out duration-300">
        <button className="outline-none focus:outline-none">
          <svg
            className=" w-6 text-black h-6 cursor-pointer"
            fill="none"
            strokeLinecap="round"
            stroke-linejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <input
          type="search"
          placeholder="search for a creator ..."
          className="w-full text-lg pl-4 outline-none focus:outline-none  bg-transparent"
        />
      </div>
    </div>
  )
}

export default Search

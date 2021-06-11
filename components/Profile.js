import React from "react"

const Profile = ({ style }) => {
  return (
    <div className=" popover__wrapper">
      <div className={style}>
        <img
          src="https://f8n-production.imgix.net/creators/profile/604qgsmmg-screen-shot-2021-04-04-at-11-16-22-pm-png-phpnw5.png"
          alt=""
          className=" w-10 h-10 border rounded-full"
        />
        <p className=" px-2 text-base font-semibold rounded-full">@elliepritts</p>
      </div>

      <div className=" popover__content px-4 py-3 bg-white rounded-md shadow">
        <div className="flex items-center justify-between p-4 ">
          <img
            className=" object-cover w-20 h-20 rounded-full"
            src="https://f8n-production.imgix.net/creators/profile/604qgsmmg-screen-shot-2021-04-04-at-11-16-22-pm-png-phpnw5.png"
            alt="avatar"
          />
          <button className=" px-8 py-3 font-bold text-lg  text-black  duration-200 transform border-2 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white">
            Follow
          </button>
        </div>
        <div className="flex flex-col p-2 space-y-6">
          <div>
            <h1 className="text-4xl font-semibold font-inter">elliepritts</h1>
            <h2 className="text-2xl font-bold text-gradient rainbow-text font-sans">
              @elliepritts
            </h2>
          </div>
          <p className="text-sm font-medium font-inter">
            ellie pritts is an interdisciplinary artist and composer interested in the nature of
            immateriality and being. Represented b…
          </p>
          <div className="flex space-x-4 items-center">
            <p className="font-bold">Followed by</p>
            <div className="flex -space-x-2">
              <img
                src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                alt=""
                className="w-8 h-8 border rounded-full border-coolGray-300"
              />
              <img
                src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                alt=""
                className="w-8 h-8 border rounded-full border-coolGray-300"
              />
              <img
                src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                alt=""
                className="w-8 h-8 border rounded-full border-coolGray-300"
              />
              <img
                src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                alt=""
                className="w-8 h-8 border rounded-full border-coolGray-300"
              />
              <img
                src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
                alt=""
                className="w-8 h-8 border rounded-full border-coolGray-300"
              />
            </div>
          </div>
          <div className="flex space-x-5 border-t p-4 w-full">
            <div className="flex flex-col -space-y-1">
              <span className="font-inter text-lg font-bold">32</span>
              <p className="font-bold text-base text-gray-600">Following</p>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-inter text-lg font-bold">10</span>
              <p className="font-bold text-base text-gray-600">Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

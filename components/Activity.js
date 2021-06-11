import React from "react"

const Activity = () => {
  return (
    <div className="flex py-6 px-4 justify-between shadow-sh rounded-lg">
      <div className="flex items-center space-x-6 ">
        <img
          className=" object-cover w-10 h-10 rounded-full"
          src="https://f8n-production.imgix.net/creators/profile/604qgsmmg-screen-shot-2021-04-04-at-11-16-22-pm-png-phpnw5.png"
          alt="avatar"
        />
        <div className="flex flex-col space-y-1">
          <span className="font-inter font-bold">
            Bid placed by <span className="text-gray-400">@cw</span>
          </span>
          <p className="font-inter font-medium text-gray-500">May 19, 2021 at 9:55pm</p>
        </div>
      </div>

      <div className="flex items-center space-x-6 ">
        <div className="flex flex-col space-y-1">
          <span className="font-inter font-bold">2.211 ETH</span>
          <p className="font-inter font-medium text-gray-500">$6,479.73</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </div>
  )
}

export default Activity

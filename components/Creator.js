import React from "react"

const Creator = () => {
  return (
    <div className="flex flex-col shadow-sh transform transition duration-300 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-2 ">
      <img
        src="https://f8n-production.imgix.net/creators/profile/an3u8dwt0-foundation-artifact-retro-banner-1500x500-png-w2xdck.png?fit=fill&h=570&q=70&w=960"
        alt=""
        className="rounded-t-xl h-52 "
      />
      <img
        className=" object-cover w-20 h-20 rounded-full -mt-10 ml-8 ring-8 ring-white"
        src="https://f8n-production.imgix.net/creators/profile/jsz7n1o7t-foundation-avatar-mono-3x-smaller-png-80uycl.png?fit=fill&amp;q=80&amp;w=160"
        alt="avatar"
      />
      <div className=" flex flex-col px-4 py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold font-inter">The Tor Project</h1>
          <h2 className="text-2xl font-bold text-gradient rainbow-text font-sans">@torproject</h2>
        </div>
        <p className="text-sm font-medium font-inter">
          We're a nonprofit defending your privacy and freedom online.
        </p>
        <div className="flex w-full lg:w-80 border-t border-gray-200 pt-5 px-2 justify-between">
          <div className="flex flex-col -space-y-1">
            <span className="font-inter text-xl font-bold">715</span>
            <p className="font-bold text-lg text-gray-500">Followers</p>
          </div>
          <button className=" px-8 py-3 font-bold text-lg  text-black  duration-200 transform border-2 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-md hover:bg-black hover:text-white">
            Follow
          </button>
        </div>
      </div>
    </div>
  )
}

export default Creator

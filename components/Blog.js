import React from "react"

const Blog = ({ image, title, description }) => {
  return (
    <div className="flex flex-col justify-between shadow-sh transform transition duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-2 border-2 border-black">
      <img src={image} alt="" />
      <div className="flex flex-col p-8 space-y-8">
        <h1 className="text-2xl font-semibold font-inter">{title}</h1>
        <p className="text-base font-bold text-gray-900 font-quick ">{description}</p>
        <p className=" text-base text-gray-700 font-mono uppercase tracking-widest">
          Published 17 May 2021
        </p>
      </div>
    </div>
  )
}

export default Blog

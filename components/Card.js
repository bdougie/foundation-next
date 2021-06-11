import React from "react"
import Profile from "./Profile"
import Countdown from "react-countdown"

const Card = ({ image }) => {
  const Completionist = () => <span>Auction ended</span>
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <span>
          {minutes + " m"} {seconds + " s"}
        </span>
      )
    }
  }
  return (
    <div className=" flex flex-col justify-between  shadow-sh transform transition duration-300 cursor-pointer rounded-xl hover:shadow-lg hover:-translate-y-2 ">
      <img src={image} alt="" className="rounded-t-xl h-96" />
      <div className=" flex flex-col space-y-4 py-4 px-6">
        <h1 className="font-semibold ml-2 text-2xl font-inter">Sand Gold</h1>
        <Profile style=" flex items-center rounded-full w-40 px-2 cursor-pointer transform" />
      </div>
      <div className="flex justify-around p-4 bg-black text-white rounded-b-xl">
        <div>
          <p className="text-lg text-gray-300 font-quick font-bold">Current bid</p>
          <span className="text-lg font-quick font-bold">0.15 ETH</span>
        </div>
        <div>
          <p className="text-lg text-gray-300 font-quick font-bold">Ending in</p>
          <span className="text-lg  font-quick font-bold">
            <Countdown date={Date.now() + 700000} renderer={renderer} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card

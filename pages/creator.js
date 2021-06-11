import Head from "next/head"
import { useRef } from "react"
import Navbar from "../components/Navbar"
import Profile from "../components/Profile"
import Countdown from "react-countdown"
import Activity from "../components/Activity"
import Footer from "../components/Footer"

export default function Creator() {
  const Completionist = () => <span>Auction ended</span>
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <>
          <span>{hours}</span>
          <span>{minutes}</span>
          <span>{seconds}</span>
        </>
      )
    }
  }
  const fullScreenVideoRef = useRef()
  const toggleFullScreen = () => {
    fullScreenVideoRef.current.requestFullscreen()
  }
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <title>creator | foundation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute w-full h-tbml bg-white md:bg-gray-200">
        <Navbar buttonStyle="bg-white text-black " />
        <header className="relative -top-12 sm:top-10 md:-top-12 xl:-top-44 z-0 flex justify-center h-screen overflow-hidden">
          <video
            ref={fullScreenVideoRef}
            onClick={toggleFullScreen}
            playsInline
            autoPlay="1"
            loop
            muted
            className="hover:cursor-zoom-in absolute h-2/3 w-10/12 md:w-5/12 lg:w-96"
          >
            <source
              src="https://d2ybmb80bbm9ts.cloudfront.net/qJ/Zn/QmbENPncVeBBfxW2UEQdU5DUQdhtm6aR58ps1kEEJrqJZn/nft.mp4"
              type="video/mp4"
            />
          </video>
        </header>
        <div className="relative bottom-48 md:bottom-84 xl:bottom-full xl:-my-36  md:-my-4 lg:-my-0  lg:bottom-96 flex justify-center md:justify-between">
          <div className="mx-10 lg:mx-20">
            <Profile style="bg-white transform flex items-center shadow-sh rounded-full w-40 px-2 py-1 mb-4 transition duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer" />
          </div>
          <div className="flex mx-10 lg:mx-20 items-center space-x-6">
            <span className="flex items-center justify-center  shadow-sh  w-14 h-14 border bg-white rounded-full ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </span>
            <div>
              <button className="bg-white px-8 py-3 font-bold text-lg duration-200 shadow-sh transform rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-md inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                <span className="ml-2 font-medium">Share</span>
              </button>
            </div>
          </div>
        </div>
        <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl md:px-24 lg:px-8">
          <div className="-mt-32 md:-mt-80 grid gap-5 row-gap-10 lg:grid-cols-2 lg:gap-x-56">
            <div className=" flex flex-col justify-center">
              <div className="max-w-4xl mb-6 ">
                <h2 className="text-center lg:text-left mb-6 font-inter text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none lg:text-4xl">
                  Bitwise Archetypes: CHILD
                </h2>
                <div className="flex flex-col mx-4  space-y-8 text-base font-inter">
                  <p className=" ">ESFP</p>
                  <p className=" ">#1 in a series of 16 Archetypes</p>
                  <p className=" ">
                    “77. Even a highly differentiated consciousness has not by any means finished
                    with CHILDISH things”
                  </p>
                  <p className="">
                    A collaboration between IX SHELLS and KAI. Drawing on a lifetime of influences,
                    from Carl Jung to the I CHING. From Afro-Caribbean masks to Goethe's Theory of
                    Colors. The Archetypes represent the conscious architectures that unite us as a
                    single being of many people.
                  </p>
                  <p className=" ">Sound design remixed from ByteBeat #169</p>
                  <p className=" ">Collection also found at: foundation.app/kaigani</p>
                </div>
                <div className="mb-8">
                  <p className="font-inter text-black font-bold mt-16 mb-2 ml-4">Edition of</p>
                  <p className="text-2xl lg:text-4xl  font-bold font-inter ml-4">1</p>
                </div>
                <div className="flex py-6 px-4 w-96 justify-between shadow-sh rounded-lg">
                  <div className="flex items-center space-x-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span className="font-inter font-bold">View on Etherscan</span>
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
                <div className="flex py-6 px-4 w-96 justify-between shadow-sh rounded-lg">
                  <div className="flex items-center space-x-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span className="font-inter font-bold">View on Etherscan</span>
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
                <div className="flex py-6 px-4 w-96 justify-between shadow-sh rounded-lg">
                  <div className="flex items-center space-x-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span className="font-inter font-bold">View on Etherscan</span>
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
            </div>
            <div className="p-4 ">
              <div className="shadow-sh flex flex-col space-y-5 lg:space-y-0 lg:flex-row md:space-x-10 lg:space-x-0 justify-evenly lg:divide-x-2 my-8 border-b pb-8">
                <div className="md:mx-10">
                  <div className="flex flex-col space-y-2 text-black mx-16 lg:mx-0">
                    <h4 className="text-base font-bold ">Current Bid</h4>
                    <p className="text-2xl xl:text-4xl  font-bold font-inter">2.211 ETH</p>
                    <h4 className="text-xl font-semibold text-gray-500 font-quick tracking-wide">
                      $6,502.64
                    </h4>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col mx-16 space-y-2 text-black">
                    <h4 className="text-base font-semibold ">Auction ending in</h4>
                    <span className="flex space-x-8 text-4xl font-bold font-inter">
                      <Countdown date={Date.now() + 990 * 890000} renderer={renderer} />
                    </span>
                    <h4 className="flex space-x-4 text-base font-semibold text-gray-500 font-quick tracking-wide">
                      <span>hours</span>
                      <span>minutes</span>
                      <span>seconds</span>
                    </h4>
                  </div>
                </div>
              </div>
              <button className="inline-block text-center h-14 w-full mb-4 duration-200 transform bg-black text-white rounded-xl focus:outline-none hover:-translate-y-1 hover:shadow-md focus:shadow-outline font-semibold">
                Place a bid
              </button>
              <h1 className="font-bold text-xl font-inter my-4">Activity</h1>
              <div className="flex flex-col  space-y-2 w-full">
                <Activity />
                <Activity />
                <Activity />
                <Activity />
              </div>
            </div>
          </div>
        </div>
        <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-16 lg:px-8 lg:py-4">
          <div className=" font-inter mb-8 lg:mt-20 border-black border-b py-4">
            <h1 className="text-2xl font-semibold">Creator</h1>
          </div>
          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row justify-between lg:items-center lg:mt-16">
            <div className="flex items-center space-x-8">
              <img
                className=" object-cover w-20 h-20  md:w-32 md:h-32 rounded-full"
                src="https://f8n-production.imgix.net/creators/profile/604qgsmmg-screen-shot-2021-04-04-at-11-16-22-pm-png-phpnw5.png"
                alt="avatar"
              />
              <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-semibold font-inter">elliepritts</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient rainbow-text font-sans">
                  @elliepritts
                </h2>
              </div>
            </div>
            <div className="lg:w-1/2 pb-8 ">
              <p className="font-inter text-lg lg:text-2xl font-medium">
                gen art + exp music // a sense of rhythm fuels my research and real time visions
                becomes quests for parallels // Created Tor's project first NFT, collected by
                PleasrDAO based in Meta-Panama
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

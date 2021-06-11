import Profile from "./Profile"

const Header = () => {
  return (
    <div className="relative flex flex-col px-4 py-16 mx-auto lg:block lg:flex-col md:px-8 sm:max-w-xl md:max-w-full font-quick">
      <a href="/creator">
        <div className=" flex justify-center h-full -mx-20 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <video
            className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-4/5 xl:w-7/12 px-3 cursor-pointer"
            src="https://d2ybmb80bbm9ts.cloudfront.net/D1/Vo/QmPh4z7vjX7fq7j6Bia3eJNf8KqNf1AxgP5Trt7gSmD1Vo/nft.mp4"
            poster="https://d2ybmb80bbm9ts.cloudfront.net/D1/Vo/QmPh4z7vjX7fq7j6Bia3eJNf8KqNf1AxgP5Trt7gSmD1Vo/nft.jpg"
            playsInline
            autoPlay="1"
            muted
            loop
          ></video>
        </div>
      </a>
      <div className="flex justify-end max-w-xl mx-auto xl:pr-14 lg:max-w-screen-xl">
        <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <Profile style=" transform flex items-center shadow-sh rounded-full w-40 px-2 py-1 mb-4 transition duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer" />
            <h2 className="mb-8 text-6xl font-semibold font-inter text-gray-900 sm:leading-none">
              home
            </h2>
            <div className="flex flex-col space-y-2 text-black">
              <h4 className="text-base font-semibold ">Reserve Price</h4>
              <p className="text-4xl font-bold font-inter">0.50 ETH</p>
              <h4 className="text-xl font-semibold text-gray-500 font-quick tracking-wide">
                $1,682.78
              </h4>
            </div>
          </div>
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row ">
            <button className="inline-block text-center h-14 px-24 md:px-24 duration-200 transform bg-black text-white rounded-xl focus:outline-none hover:-translate-y-1 hover:shadow-md md:mr-2 focus:shadow-outline font-semibold">
              Place a bid
            </button>
            <button className="inline-block text-center h-14 px-12 py-1 duration-200 transform border-2 border-black text-black rounded-xl focus:outline-none hover:-translate-y-1 hover:shadow-md md:mr-2 focus:shadow-outline hover:bg-black hover:text-white font-semibold">
              View artwork
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

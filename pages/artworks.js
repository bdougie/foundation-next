import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Card from "../components/Card"

export default function Artworks() {
  const artworks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <title>Artworks | foundation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar buttonStyle="bg-black text-gray-100" />
      <div className="mx-8 flex items-center font-inter mb-8 border-black border-b py-2">
        <button className="font-semibold tracking-wide m-2 bg-black focus:outline-none text-white text-sm px-4 rounded-lg py-1 transition-colors duration-200 cursor-pointer">
          Live auction
        </button>
        <a className="font-semibold tracking-wide m-2 hover:bg-gray-100 active:bg-black focus:text-white text-black text-sm px-4 rounded-lg py-1  transition-colors duration-200 cursor-pointer">
          Reserve not me
        </a>
        <a className="font-semibold tracking-wide m-2 hover:bg-gray-100 focus:bg-black focus:text-white text-black text-sm px-4 rounded-lg py-1 transition-colors duration-200 cursor-pointer">
          Sold
        </a>
      </div>
      <div className=" px-6 sm:px-4 mx-auto max-w-lg sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-8 lg:px-6 lg:py-16 mb-24 lg:mb-52">
        <div className=" grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {artworks.map((artwork) => {
            return (
              <Card
                key={artwork}
                image="https://d2ybmb80bbm9ts.cloudfront.net/m7/mB/QmZuEmGeytEzycZSYnN3vVT9dkyxxsZYjDDcjFeM3Lm7mB/nft.jpg"
              />
            )
          })}
        </div>
        <div className="flex justify-center my-8">
          <button className="font-inter px-6 py-3 font-medium text-lg text-black duration-200 transform bg-white border-2 border-black rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:text-white  hover:bg-black">
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

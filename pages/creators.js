import Head from "next/head"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Search from "../components/Search"
import Creator from "../components/Creator"

export default function Creators() {
  var c

  const creators = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17]

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <title>Creators | foundation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Search />
      <div className=" px-6 sm:px-4 mx-auto max-w-lg sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-8 lg:px-6 lg:py-16 mb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {creators.map((creator) => {
            return <Creator key={creator} />
          })}
        </div>
        <div className="flex justify-center my-8">
          <button className="font-inter px-6 py-3 font-medium text-lg text-black duration-200 transform bg-white border-2 border-black rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:text-white  hover:bg-black">
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

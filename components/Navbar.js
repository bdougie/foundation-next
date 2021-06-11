import { useState } from "react"

const Navbar = ({ buttonStyle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8 font-quick">
      <div className="relative flex items-center justify-between">
        <a href="/" className="inline-flex items-center">
          <svg
            fill="none"
            viewBox="0 0 98 33"
            xmlns="http://www.w3.org/2000/svg"
            className="text-black h-20 w-20 lg:h-24 lg:w-24"
          >
            <path
              clip-rule="evenodd"
              d="M64.894 16.456c0 9.088-7.368 16.456-16.457 16.456s-16.455-7.368-16.455-16.456S39.349 0 48.438 0s16.455 7.368 16.455 16.456zM16.902 1.567a.784.784 0 011.358 0L35.056 30.66a.784.784 0 01-.679 1.176H.785a.784.784 0 01-.679-1.176zM68.614.98c-.865 0-1.567.702-1.567 1.568v27.818c0 .866.702 1.567 1.567 1.567h27.819c.865 0 1.567-.701 1.567-1.567V2.547c0-.866-.702-1.568-1.567-1.568z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </a>
        <ul className="bg-white items-center hidden space-x-2 lg:flex lg:justify-center lg:ml-20 shadow-sh py-4 rounded-lg">
          <li>
            <a
              href="/artworks"
              aria-label="Our product"
              className="font-extrabold tracking-wide m-2 hover:bg-gray-200 text-black text-lg px-4 rounded-xl py-3 transition-colors duration-200 "
            >
              Artworks
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              className={`font-extrabold tracking-wide ${buttonStyle} text-lg px-4 rounded-xl py-3 transition-colors duration-200`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/creators"
              aria-label="Product pricing"
              className="font-extrabold tracking-wide m-2 hover:bg-gray-200 text-black text-lg px-4 rounded-xl py-3 transition-colors duration-200"
            >
              Creators
            </a>
          </li>
        </ul>
        <ul className="flex items-center space-x-8 lg:flex">
          <li>
            <button className="hidden md:block px-8 py-2 font-bold md:py-3 text-sm md:text-lg text-gray-50  duration-200 transform bg-black rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-md">
              Connect Wallet
            </button>
          </li>
        </ul>
        <div className="sm:hidden">
          <button
            aria-label="Open Menu"
            className={`${
              isMenuOpen ? "hidden" : "block"
            } p-4 -mt-2 -mr-2 transform hover:scale-105 transition duration-200 focus:outline-none focus:shadow-outline shadow-lg rounded-full`}
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6 text-gray-600 " viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="min-w-max absolute top-0 -left-4 w-full max-z ">
              <div className=" bg-white rounded min-w-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="px-8">
                    <a href="/" aria-label="Company" className="inline-flex items-center">
                      <svg
                        fill="none"
                        viewBox="0 0 98 33"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-black h-20 w-20"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M64.894 16.456c0 9.088-7.368 16.456-16.457 16.456s-16.455-7.368-16.455-16.456S39.349 0 48.438 0s16.455 7.368 16.455 16.456zM16.902 1.567a.784.784 0 011.358 0L35.056 30.66a.784.784 0 01-.679 1.176H.785a.784.784 0 01-.679-1.176zM68.614.98c-.865 0-1.567.702-1.567 1.568v27.818c0 .866.702 1.567 1.567 1.567h27.819c.865 0 1.567-.701 1.567-1.567V2.547c0-.866-.702-1.568-1.567-1.568z"
                          fill="currentColor"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="px-16">
                    <button
                      aria-label="Close Menu"
                      className="p-4 -mt-2 transform hover:scale-105 transition duration-200 focus:outline-none focus:shadow-outline shadow rounded-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-6 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className="mx-4 h-screen w-screen">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/artworks"
                        aria-label="Our product"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Artworks
                      </a>
                    </li>
                    <li>
                      <a
                        href="/creator"
                        aria-label="Our product"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Creators
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Help
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Discord
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        className="font-inter font-bold text-3xl tracking-wide  "
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                  <div className="w-full -mx-8 text-sm text-gray-400 font-bold font-quick space-x-24 flex h-32 my-52">
                    <div className="mx-8 flex flex-col py-6 space-y-1 ">
                      <a className="hover:text-gray-600" href="">
                        Twitter
                      </a>
                      <a className="hover:text-gray-600" href="">
                        Privacy Policy
                      </a>
                      <a className="hover:text-gray-600" href="">
                        Discord
                      </a>
                    </div>
                    <div className="mx-8 py-6  flex flex-col  space-y-1 ">
                      <a className="hover:text-gray-600" href="">
                        Terms of Service
                      </a>
                      <a className="hover:text-gray-600" href="">
                        Instgram
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Navbar

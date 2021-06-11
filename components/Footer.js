import React from "react"

const Footer = () => {
  return (
    <div className=" text-sm text-gray-400 font-bold font-quick flex space-x-20 md:space-x-12 md:py-0 lg:justify-between h-64  lg:h-32 bg-gray-100 mx-auto sm:max-w-l md:max-w-full lg:px-2 lg:py-4 xl:px-4">
      <div className="mx-8 lg:mx-20 flex flex-col py-6 space-y-1 lg:space-y-0 lg:flex-row lg:space-x-4 lg:items-center ">
        <a href="/">
          <svg
            fill="none"
            viewBox="0 0 98 33"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-300 h-16 w-16"
          >
            <path
              clipRule="evenodd"
              d="M64.894 16.456c0 9.088-7.368 16.456-16.457 16.456s-16.455-7.368-16.455-16.456S39.349 0 48.438 0s16.455 7.368 16.455 16.456zM16.902 1.567a.784.784 0 011.358 0L35.056 30.66a.784.784 0 01-.679 1.176H.785a.784.784 0 01-.679-1.176zM68.614.98c-.865 0-1.567.702-1.567 1.568v27.818c0 .866.702 1.567 1.567 1.567h27.819c.865 0 1.567-.701 1.567-1.567V2.547c0-.866-.702-1.568-1.567-1.568z"
              fill="currentColor"
              fillRule="evenodd"
            ></path>
          </svg>
        </a>
        <a className="hover:text-gray-600" href="">
          Instagram
        </a>
        <a className="hover:text-gray-600" href="">
          Twitter
        </a>
        <a className="hover:text-gray-600" href="">
          Discord
        </a>
        <a className="hover:text-gray-600" href="">
          Blog
        </a>
      </div>
      <div className="mx-8 lg:mx-20 lg:py-0 py-24 flex flex-col lg:space-y-0 space-y-1 lg:flex-row lg:space-x-4 lg:items-center">
        <a className="hover:text-gray-600" href="">
          About
        </a>
        <a className="hover:text-gray-600" href="">
          Community Guidelines
        </a>
        <a className="hover:text-gray-600" href="">
          Terms of Service
        </a>
        <a className="hover:text-gray-600" href="">
          Privacy
        </a>
        <a className="hover:text-gray-600" href="">
          Careers
        </a>
        <a className="hover:text-gray-600" href="">
          Help
        </a>
      </div>
    </div>
  )
}

export default Footer

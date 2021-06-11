import Card from "./Card"

const Artwork = () => {
  const artworks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  return (
    <div className=" px-6 sm:px-4 mx-auto max-w-lg sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-8 lg:px-6 lg:py-16">
      <div className="flex justify-between font-inter mb-8 border-black border-b py-4">
        <h1 className="text-2xl font-semibold">Featured artworks</h1>

        <a className="font-semibold text-lg text-gray-500 hover:text-gray-800" href="/artworks">
          View all artworks
        </a>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {artworks.map((artwork) => {
          return (
            <Card
              key={artwork}
              image="https://f8n-ipfs-production.imgix.net/QmetZL2Da5XBhFMJf74nPmTj6rXba9zcY9Rabd8PRnNgi9/nft.jpg?h=640&q=80"
            />
          )
        })}
      </div>
      <div className="flex justify-center my-8">
        <a
          href="/artworks"
          className="font-inter px-8 py-3 font-medium text-lg text-black duration-200 transform bg-white border-2 border-gray-400 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:text-white hover:bg-black"
        >
          View all artworks
        </a>
      </div>
    </div>
  )
}

export default Artwork

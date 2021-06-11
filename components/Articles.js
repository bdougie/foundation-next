import Blog from "./Blog"

const Articles = () => {
  return (
    <div className=" px-4 mx-auto sm:max-w-3xl sm:px-6 md:max-w-full lg:max-w-screen-2xl lg:px-8 lg:py-4">
      <div className="flex justify-between font-inter mb-8 border-black border-b py-4">
        <h1 className="text-2xl font-semibold">Blog</h1>

        <a className="font-semibold text-lg text-gray-500 hover:text-gray-800" href="#artworks">
          View all articles
        </a>
      </div>
      <div className="grid gap-4 md:grid-cols-3 ">
        <Blog
          description="A fascination with the wilderness, landscapes, and geological forms are central to the artist’s Geomancer series."
          title="Rick Silva on the nature of a not-too-distant future."
          image="https://images.ctfassets.net/9tp4nbs38ooy/5eSbKAA2f6W3jSZYzzVZbE/7eea5c112d459d138dfdd3439a8e1369/210505_RickSilva_Blog-Header_01.png?fit=pad&h=420&q=90&w=630"
        />
        <Blog
          title="Yatreda on the power of storytelling and owning your history. "
          description="A family of artists celebrates Ethiopian legacies with NFTs."
          image="https://images.ctfassets.net/9tp4nbs38ooy/6gjiiKosfcLotVaAvzSnPD/af6cbd56883fd0232aca8e16e1868a9c/210505_Yatreda_Blog-Header_01.png?fit=pad&h=420&q=90&w=630"
        />
        <Blog
          title="Everything you need to know about DAOs."
          description="A primer on how DAOs are working to collectively shape the new creative economy."
          image="https://images.ctfassets.net/9tp4nbs38ooy/6CosmVcLUhUOwH7XyEm3mx/aaf3da2742190ffde20fc5e48712c9ad/21041XX_Everything_Blog-Header_01.png?fit=pad&h=420&q=90&w=630"
        />
      </div>
      <div className="flex justify-center my-8">
        <button className="font-inter px-8 py-3 font-medium text-lg text-black duration-200 transform bg-white border-2 border-gray-400 rounded-full focus:outline-none hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:text-white hover:bg-black">
          View all Articles
        </button>
      </div>
    </div>
  )
}

export default Articles

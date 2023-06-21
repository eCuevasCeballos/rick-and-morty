/* Welcome page, first to load, contains info about the page and the author */

const Header = () => {
  return (
    <header className='text-white font-logo py-3 flex justify-center bg-black shadow-2xl shadow-gray-nav'>
      <h1 className="text-3xl"><span className="text-blue-rick">Rick</span>&<span className="text-yellow-morty">Morty</span>.info</h1>
    </header>
  )
}

export default Header
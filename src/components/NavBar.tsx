/* Navigation bar between the different sections */

const NavBar:  React.FC<{activeComponent: string; setActiveComponent: React.Dispatch<React.SetStateAction<string>> }> = ({ setActiveComponent, activeComponent }) => {

  /* Sections */
  const Section = [
    {
      id : 1,
      name: 'About'
    },
    {
      id : 2,
      name: 'Characters'
    },
    {
      id : 3,
      name: 'Locations'
    },
    {
      id : 4,
      name: 'Episodes'
    },
  ]
  

  return (

    <nav className="flex flex-col bg-gray-nav text-white shadow-md shadow-black">

      {/* Page header */}
      <h1 className="font-bold font-logo text-2xl mx-auto py-2">
        <span className="text-blue-rick">Rick</span>&<span className="text-yellow-morty">Morty</span>.info
      </h1>

      {/* Iterates through the sections and highlights the current section */}
      <div className="flex w-full justify-between px-2 py-2">
        {Section.map((section) => (
          <div
            key={section.id}
            className={`text-gray-text list-none cursor-pointer justify-center ${
              activeComponent === section.name ? "font-bold text-gray-text-soft" : ""
            }`}
            onClick={() => setActiveComponent(section.name)}
          >
            {section.name}
          </div>
        ))}
      </div>
      
    </nav>
  )
}

export default NavBar
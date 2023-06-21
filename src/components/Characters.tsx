/* Connects to the api displays the character information */
import React, { useState, useEffect } from 'react';
import axios from 'axios' /* Axios for the http request */
import {HiOutlineArrowSmLeft, HiOutlineArrowSmRight} from 'react-icons/hi' /* Arrow icons */

/* Object to access origin object in the api */
  type Origin = {
    name: string;
    url: string;
  };

/* Object to access location object in the api */
  type Location = {
    name: string;
    url: string;
  };

 /* Accessing the character information in the api */ 
  type Character = {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    type: string;
    origin: Origin;
    location: Location;
  };

const Characters = () => {

  /* Using react hooks to set the current page and character */
  const [characterIndex, setCharacterIndex] = useState<number>(0);
  const [character, setCharacter] = useState<Character | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  /* http request / extracts the selected character information */
  useEffect(() =>{
    
      const fetchCharacter = async () => {
        try {
          const response = await axios.get(
            `https://rickandmortyapi.com/api/character?page=${currentPage}`
          );
          const results = response.data.results;
          const totalPages = response.data.info.pages;
          setTotalPages(totalPages);
  
          const index = characterIndex % results.length;
          const CharacterCounter = results[index];
          const { id, name, image, status, species, gender, type, origin, location } =
            CharacterCounter;
          setCharacter({ id, name, image, status, species, gender, type, origin, location });
        } catch (error) {
          console.error("Error fetching character:", error);
        }
    };
    fetchCharacter();
  },[currentPage, characterIndex]);

  const handleNextCharacter = () => {
    if (characterIndex % 20 === 19) {
      if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
        setCharacterIndex(0);
      }
    } else {
      setCharacterIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevCharacter = () => {
    if (characterIndex === 0 && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      setCharacterIndex(19);
    } else {
      setCharacterIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    }
  };

  /* Shows loading text while the current character loads */
  if (!character) {
    return <div>Loading...</div>;
  }

  /* Assigns a null value when the type is an empty string */
  if(character.type === ""){
    character.type = "N/A"
  }

  /* Destructuring the object to retrieve the properties without the prefix "character" */
  const {id, name, image, species, status, gender, type, origin, location } = character;
 
  return (

    <section className='flex justify-center md:justify-end'>
      <button onClick={handlePrevCharacter} disabled={characterIndex === 0 && currentPage === 1}>
          <HiOutlineArrowSmLeft size={30} className='text-white rounded-full bg-gray-card m-2'/>
      </button>
      <article className='flex flex-col bg-white w-8/12 rounded-md mt-6 overflow-hidden shadow-lg shadow-black sm:w-2/3'>
        <h2 className=' text-black font-name font-bold px-2 pt-2 mx-auto'>{name}</h2>  
        <img key={id} src={image} alt={name} className='mx-6 my-3 rounded-md shadow-lg shadow-gray-text'/>
        <p className='ml-6'> Species: {species}</p>
        <p className='ml-6'> Gender: {gender}</p>
        <p className='ml-6'> Type: {type}</p>
        <p className='ml-6'> Status: {status}</p>
        <p className='ml-6'> Origin: {origin.name}</p>
        <p className='ml-6 mb-6'> Location: {location.name}</p>
      </article>
      <button onClick={handleNextCharacter}><HiOutlineArrowSmRight size={30} className='text-white rounded-full bg-gray-card m-2'/></button>

    </section>
   
   
  )
}

export default Characters
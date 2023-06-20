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
  type Location ={
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

  /* http request / extracts the selected character information */
  useEffect(() =>{
    
      const fetchCharacter = async () => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}` );
          const results = response.data.results;
          const index = characterIndex < results.length ? characterIndex : 0;
          const CharacterCounter = results[index];
          const { id, name, image, status, species, gender, type, origin, location } = CharacterCounter;
          setCharacter({ id, name, image, status, species, gender, type, origin, location });
        } catch (error) {
          console.error("Error fetching character:", error);
        }
    };
    fetchCharacter();
  },[currentPage, characterIndex]);

  /* Goes to the next character */
  const handleNextCharacter = () => {
    setCharacterIndex((prevIndex) => prevIndex + 1);
  };

  /* Goes to the previous character */
  const handlePrevCharacter = () => {
    setCharacterIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  /* Changes the current page of characters + 1 and resets the character index */
  const handleNextPage = () =>{
    setCurrentPage((prevPage) => prevPage + 1);
    setCharacterIndex(0);
  }

    /* Changes the current page of characters - 1 and resets the character index */
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 1));
    setCharacterIndex(0);
  }

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

    <section className='flex flex-col items-center justify-center mx-auto w-5/6 mt-14'>
      <div className='w-full rounded-xl bg-gray-card overflow-hidden'>
        <img className='mx-auto w-4/5 h-auto rounded-xl m-5' key={id} src={image} alt={name} />
        <div className='text-white p-5'>
          <h2 className='font-header text-2xl font-bold font-name'>{name}</h2>  
          <p>Species: {species}</p>
          <p>Gender: {gender}</p>
          <p>Type: {type}</p>
          <p>Status: {status}</p>
          <p>Origin: {origin.name}</p>
          <p>Location: {location.name}</p>
        </div>
      </div>
    
      <div className='flex justify-between mt-5 w-full text-white'>
        <button onClick={handlePrevCharacter} disabled={characterIndex === 0}>
          <HiOutlineArrowSmLeft size={40}/>
        </button>
        <button onClick={handleNextCharacter}><HiOutlineArrowSmRight size={40}/></button>
      </div>

      <div className='flex justify-between mt-5 gap-5 w-full text-white'>
        <button className='rounded-xl p-5 text-xs font-bold bg-gray-card' onClick={handlePrevPage} disabled={currentPage === 1}>Prev <br /> Page</button>
        <button className='rounded-xl p-5 text-xs font-bold bg-gray-card' onClick={handleNextPage}>Next <br /> Page</button>
      </div>
    </section>
   
   
  )
}

export default Characters
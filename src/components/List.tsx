import React from 'react'
import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios'
import { AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai'

interface Character {
    name : string;
    status : string;
    species : string;
    type : string;
    gender : string; 
  }


const List = () => {

    const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response: AxiosResponse) => {
        const charactersData: Character[] = response.data.results.slice(0, 7);
        setCharacters(charactersData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage === 42){
      setCurrentPage(1)
    }else{
      setCurrentPage(currentPage + 1);
    }
    
  };

  return (
    <div className='h-screen w-screen text-white'>
    <div className="w-full flex justify-center">
      <div className='h-auto'>
     <table className="table-auto">
    <thead>
      <tr>
        <th className="px-1 py-1 font-bold text-xs sm:text-base">Name</th>
        <th className="px-1 py-1 font-bold text-xs sm:text-base">Status</th>
        <th className="px-1 py-1 font-bold text-xs sm:text-base">Species</th>
        <th className="px-1 py-1 font-bold text-xs sm:text-base">Type</th>
        <th className="px-1 py-1 font-bold text-xs sm:text-base">Gender</th>
      </tr>
    </thead>
    <tbody>
      {characters.map((character: Character) => (
        <tr>
          <td className="border px-1 py-1 text-xs sm:text-base">{character.name}</td>
          <td className="border px-1 py-1 text-xs sm:text-base">{character.status}</td>
          <td className="border px-1 py-1 text-xs sm:text-base">{character.species}</td>
          <td className="border px-1 py-1 text-xs sm:text-base">{character.type}</td>
          <td className="border px-1 py-1 text-xs sm:text-base">{character.gender}</td>
        </tr>
      ))}
    </tbody>
  </table>   
      </div>
</div>

<div className='flex items-center justify-center w-full pt-5'>
        <button onClick={handlePreviousPage}><AiOutlineArrowLeft size={30}/></button>
        <span className='px-20'>Page {currentPage}</span>
        <button onClick={handleNextPage}><AiOutlineArrowRight size={30}/></button>
      </div>
    </div>

      
  )
}

export default List
import React from 'react'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='flex flex-col w-full'>
        <img src={Logo} alt="rick and morty logo" className='block mx-auto px-5 md:w-1/2 md:flex md:justify-center'/>
        <div className='w-full'>
            <h1 className='font-header text-3xl text-center text-white font-bold'>CHARACTERS</h1>
        </div>
    </div>
  )
}

export default Header
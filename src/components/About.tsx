import React from 'react'

const About = () => {
  return (
    <article className='mt-6 text-white text-justify w-3/4 mx-auto sm:w-1/3 lg:w-2/6 md:mx-2'>
        <h2 className='p-2 font-name font-bold mx-auto text-center md:text-start'><span className='text-blue-rick'>A</span>bout this page!</h2>
        <p>Welcome to our page! Here, we harness the power of the Rick and Morty API to bring you a trove of information about your 
        favorite animated sci-fi series. Our mission is to immerse you in the multiverse of Rick and Morty by providing comprehensive 
        details about the characters.</p>
        <h2 className='p-2 font-name font-bold mx-auto text-center md:text-start'><span className='text-yellow-morty'>A</span>bout me</h2>
        <p className='pb-6'>I'm a front end web developer based in Mexico, I like to work with ReactJs you can check my portfolio clicking on the link bellow.</p>
        <a href="https://erickcuevas-dev.netlify.app/" target='_blank' rel='noopener noreferrer' className='font-bold'>My portfolio</a> <br />
        <a href="https://github.com/eCuevasCeballos/rick-and-morty" target='_blank' rel='noopener noreferrer' className='font-bold'>Check the page code</a>
    </article>
  )
}

export default About
/* Welcome page, first to load, contains info about the page and the author */

const About = () => {
  return (
    <section className='p-6'>

      <h2 className='text-white text-xl font-bold'><span className='text-blue-rick'>A</span>bout this page!</h2>
        <p className='text-white text-justify mb-5'>Welcome to our page! Here, we harness the power of the Rick and Morty API to bring you a
        trove of information about your favorite animated sci-fi series. Our mission is to immerse you in the multiverse of 
        Rick and Morty by providing comprehensive details about the characters, episodes, and locations that make up this captivating universe.</p>
        <h2 className='text-white text-xl font-bold'><span className='text-yellow-morty'>A</span>bout me</h2>
        <p className='text-white text-justify'>My name is Erick and I'm a front-end developer based in Mexico, check out my portfolio at:
        <a href="https://erickcuevas-dev.netlify.app/" target='_blank' rel='noopener noreferrer' className='pl-1'>Erick's Portfolio</a></p>

    </section>
  )
}

export default About
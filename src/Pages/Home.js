import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/CSS-FOLDER/home.css'


const Home = () => {
  return (
    <>
      <section className='home px-5'>
        <div className="overlay ">
          <article className=''>
          <h1 className='text-2xl text-gray-400'>SO, YOU WANT TO TRAVEL TO 
            <span className='block text-4xl lg:text-6xl text-white mt-5 mb-3'>SPACE</span>
          </h1>
            <p className='text-gray-400'> 
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>
          </article>
          <article className='mt-20'>
            <button className='w-52 h-52 rounded-full bg-white text-gray-800 text-4xl lg:text-4xl font-bold animate-pulse'>
              <Link to= '/destionation'>EXPLORE</Link>
            </button>
          </article>
        </div>

      </section>
    </>
  )
}

export default Home
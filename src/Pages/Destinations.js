import React from 'react'
import { useState } from 'react'
import '../Components/CSS-FOLDER/destination.css'
import dataJson from '../space-tourism-website-main/space-tourism-website/starter-code/data.json'


const Destinations = () => {
    const [planets] = useState(dataJson.destinations)
    console.log(planets)
    const [value, setValue] = useState(0)
    const {name, images, description, distance, travel} = planets[value]
  return (
    <>
        <section className='home destination md:pt-20 px-10 sm:pt-20 px-20'>
            <h1>01 Pick your destination</h1>
            <div className='pt-20 md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto lg:pt-52'>
                <article className=''>
                    <img src={images.png} alt={name} className="block mx-auto mb-10 w-3/4" />
                </article>
                <article className='text-center lg: text-left' >
                    {
                        planets.map((item, index)=>(
                            <button key={index} onClick={() => setValue(index)} className={`uppercase text-white text-2xl pb-2  mx-2 ${index === value && "border-b border-white"}`}>
                                {item.name} 
                            </button>
                        ))
                    }
                    <h1 className='text-4xl font-bold text-white mt-10 mb-5 uppercase tracking-widest'>{name}</h1>
                    <p className='text-gray-400 lg:text-left pb-10'>{description}</p>
                    <ul id='inline' className='sm:flex items-center justify-evenly gap-2 flex items-center justify-between flex-wrap text-white text-left  border-top border-gray-400 pt-10'>
                        <li className='text-3xl'><span className='text-2xl block'>Avg.Distace</span>{distance}</li>
                        <li className='text-3xl'><span className='text-2xl block'>Est.Travel</span> Time{travel}</li>
                    </ul>
                </article>
            </div>
        </section>
    </>
  )
}

export default Destinations
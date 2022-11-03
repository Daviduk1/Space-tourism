import React from 'react'
import { useState } from 'react'
import '../Components/CSS-FOLDER/tech.css'
import jsonData from '../space-tourism-website-main/space-tourism-website/starter-code/data.json'

const Technology = () => {
  const [tech] = useState(jsonData.technology)
  
  const [value, setValue] = useState(0)
  const {name, images, description} = tech[value]
  return (
    <>
      <section className='home technology px-4 pt-10 sm:pt-20 px-10'>

      <h1 className='pt-20 lg:pt-40 lg: mx-w-7xl  uppercase mb-20 text-white text-4xl lg: hidden'>Meet your Crew</h1>
        <div className='flex items-center justify-center flex-col-reverse pt-20 lg:pt-40 md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto'>
            <article className=' lg:text-left'>
                <h2 className='text-5xl text-bold text-white mb-5'>{name}</h2>
                <p className='text-gray-400 mb-10 lg:text-left'>{description}</p>
                {
                    tech.map((item, index) => (
                        <button key={index} 
                            onClick={() => setValue(index)} 
                            className={`text-white text-2xl border-2 border-white rounded-full h-14 w-14 mx-2 pb-2 p-1
                            ${index === value && "bg-indigo-500"}`}>
                            {index +1}
                        </button>
                    ))
                }
            </article>
            <article>
                <picture>
                    <source media="(min-width: 770px)" srcSet={images.portrait} />
                    <img src={images.landscape} alt={name} className="block mx-auto mb-10" />
                </picture>
            </article>
        </div>
    </section>
    </>
  )
}

export default Technology
import React from 'react'
import { useState } from 'react'
import '../Components/CSS-FOLDER/crew.css'
import {BiCircle} from 'react-icons/bi'
import jsonData from '../space-tourism-website-main/space-tourism-website/starter-code/data.json'


const Crew = () => {
    const [people] = useState(jsonData.crew)
    const[value, setValue] = useState(0)
    const{name, images, role, bio} = people[value]
  return (
    <>
        <section className='home crew text-white'>
            <h1 className='pt-20 lg:pt-40 lg: mx-w-7xl  uppercase mb-20 text-white text-4xl lg: hidden'>Meet your Crew</h1>
            <div className='flex items-center justify-center flex-col-reverse pt-20 lg:pt-40 md:grid grid-cols-2 gap-5 md:items-center lg:max-w-7xl lg:mx-auto'>
                
                <article className='text-center lg:text-left'>
                    <h2 className='text-5xl text-bold text-white mb-5'>{name}</h2>
                    <p className='text-gray-400 mb-10 text-left'>{bio}</p>

                    {
                        people.map((item, index) => (
                            <button key={index} onClick={()=>setValue(index)} id="crewBtn" className={`text-white text-4xl h-8 pb-2 mx-2 ${index === value && "bg-white rounded-full"}`}>
                                <BiCircle className='' />
                            </button>
                        ))
                    }
                </article>
                <article>
                    <img src={images.png} alt={name} className="block mx-auto mb-10" />
                </article>
            </div>
        </section>
    </>
  )
}

export default Crew
'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const page = () => {
  const [images, setImages] = useState([]);

  useEffect(() =>{
    getImages()
  }, [])
  const getImages= async () =>{
    try {
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = response.data;
    setImages(data)
    console.log(images)
    } catch (error) {
      console.log("error fetching images");
    }
    
  }
  return (
    <div>
      <button onClick={getImages} className='px-5 py-3 bg-gray-700 text-white font-bold'>Get Images</button>
      <div className='p-10'>
        {images.map((elem,i)=>{
         return <img key={i}
         src={elem.download_url}
         width={300}
         height={300}
         className='m-10 rounded inline-block'
         />
        })}
      </div>
    </div>
  )
}

export default page

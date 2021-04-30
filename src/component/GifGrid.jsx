import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifta'
//import React, { useState, useEffect } from 'react'
//import { getGif } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {loading, data} = useFetchGifts(category);


    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGif( category )
    //     .then( setImages )
    // }, [setImages])

    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Loading...</p> }
        <div  className="card-grid">
          
                  {data.map((item)=> (
                   <GifGridItem 
                    key={item.id}
                    {...item}
                    />
                  ))}  
                
        </div>
        </>
    )
}

export default GifGrid

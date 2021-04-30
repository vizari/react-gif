import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs"

export const useFetchGifts = (category) =>{
    
    const [state, setstate] = useState({
        data:[],
        loading:true
    })

    useEffect(() => {
       getGif(category)
       .then(imgs => {
        setTimeout(() => {
        setstate({
            data:imgs,
            loading:false
        })

    }, 3000);
       })
    }, [category])

    return state // {data[], loading:true}
    
}
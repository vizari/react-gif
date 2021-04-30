import React from 'react'

const GifGridItem = ({id, title, url}) => {

   
    return (
        <div className="card animate__animated animate__fadeInUp">
            <img src={ url } alt={ title }/>
            <p key={title}>{ title }</p>
        </div>
    )
}

export default GifGridItem

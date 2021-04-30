import React, { useState } from 'react'
import AddCategory from './component/AddCategory'
import GifGrid from './component/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'Shingeki no Kyojin', 'Chobits'];

    const [category, setCategory] = useState(['One Punch'])

    // const handleAdd = () =>{
    //     setCategories([...categories, 'DMC'])
    //     setCategories(categories =>[...categories, 'DMS'])
    // }
    console.log(setCategory)
    return (
        <div>
            <h2>GifExpertApp</h2>

            <AddCategory
                setCategory={setCategory}
            />

            <hr />

            <ol>
               { category.map(item => (
                <GifGrid 
                    key={item} 
                    category={item}
                />
               ))
               }
            </ol>
        </div>
    )
}
export default GifExpertApp;
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onChange= (e) =>{
        setinputValue(e.target.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()

        if( inputValue.trim().length > 2 ) {
            setCategory(category =>[inputValue, ...category])
        setinputValue('');
        }
    }
    console.log('category', setCategory)

    return (
        <form onSubmit={handlerSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={onChange}
            />
        </form>
    )
}

AddCategory.propTypes ={
    setCategory: PropTypes.func.isRequired
}


export default AddCategory

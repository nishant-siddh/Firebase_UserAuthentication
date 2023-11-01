import React from 'react'

const inputControl = (props) => {
    return (
        <div className='flex flex-col'>
            <label className='my-3 text-xl'>{props.label}</label>
            <input {...props} className='border outline-none px-3 py-2' />
        </div>
    )
}

export default inputControl
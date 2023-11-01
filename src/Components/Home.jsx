import React from 'react'
import { Link } from 'react-router-dom'
import { useHomeContext } from '../ContextAPI/Context/HomeContext'

const Home = () => {
    const { username, isLoggedIn } = useHomeContext();
    return (
        <>
            {
                username && isLoggedIn ? (
                    <h2 className='w-fit mx-auto text-3xl mt-20'>Welcome <span className='text-orange-700'>{username}</span></h2>
                ) : (
                    <div className='w-fit mx-auto mt-20'>
                        <div className='text-3xl'>Please Login first to see your username here.</div>
                        <button
                            className='bg-orange-500 hover:bg-orange-400 p-3 text-white border-none rounded-md my-4'
                        >
                            <Link to='/signup'>Signup</Link>
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default Home
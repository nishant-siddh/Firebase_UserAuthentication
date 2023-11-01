import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputControl from './inputControl'
import { signup } from '../Firebase/Firebase'
import { updateProfile } from 'firebase/auth'
import { useHomeContext } from '../ContextAPI/Context/HomeContext'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [errorMsg, setErrorMsg] = useState('')
    const [disableBtn, setDisableBtn] = useState(false)
    const navigate = useNavigate()
    const {setIsLoggedIn} = useHomeContext();


    async function handleSignup(e) {
        e.preventDefault();
        
        if (!values.name || !values.email || !values.password) {
            setErrorMsg('Please fill all the fields');
        }
        else {
            setErrorMsg('');
        }

        try {
            setDisableBtn(true)
            const res = await signup(values.email, values.password)
            if (res) {
                setDisableBtn(false)
                const user = res.user;
                console.log(user);
                await updateProfile(user, {
                    displayName: values.name
                })
                setIsLoggedIn(true);
                navigate('/')
            }
        } catch (error) {
            setDisableBtn(false)
            setErrorMsg(error.message.split('/')[1].split(')')[0].split('-').map((item) => item[0].toUpperCase() + item.slice(1)).join(' '));
        }
    }

    function handleChangeValues(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className='w-[30rem] bg-white rounded-lg hover:shadow-lg border mx-auto mt-24 px-6 py-3'>
                <h2 className='text-4xl font-semibold my-3 text-center'>Signup</h2>
                <form onSubmit={handleSignup}>
                    <InputControl type='text' name='name' label='Name' placeholder='Enter your name here' value={values.name} onChange={handleChangeValues} />
                    <InputControl type='email' name='email' label='Email' placeholder='Enter your email id here' value={values.email} onChange={handleChangeValues} />
                    <InputControl type='password' name='password' label='Password' placeholder='Enter password' value={values.password} onChange={handleChangeValues} />
                    {errorMsg && <p className='text-red-500 text-sm mt-5'>{errorMsg}</p>}
                    <button type='submit' className='bg-orange-500 hover:bg-orange-400 w-full p-3 text-white border-none rounded-md my-4 disabled:cursor-not-allowed disabled:bg-orange-300' disabled={disableBtn}>Signup</button>
                    <p>Not registered yet? <Link to='/login' className='text-orange-700'>Login</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Signup
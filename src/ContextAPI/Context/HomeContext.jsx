import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/HomeReducer";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../../Firebase/Firebase";

const HomeContext = createContext();

const initialState = {
    isLoggedIn: false,
    username: ''
}

const HomeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsername(user.displayName)
            }
            else {
                setUsername('')
            }
        })
    }, [state.isLoggedIn])

    const setUsername = (username) => {
        dispatch({
            type: 'Set_Username',
            payload: username
        })
    }

    const setIsLoggedIn = (isLoggedIn) => {
        dispatch({
            type: 'Check_Is_Logged_In',
            payload: isLoggedIn
        })
    }

    return (
        <HomeContext.Provider value={{ ...state, setIsLoggedIn, setUsername }}>
            {children}
        </HomeContext.Provider>
    )
}



const useHomeContext = () => {
    return useContext(HomeContext)
}

export { HomeContext, HomeContextProvider, useHomeContext }
import { createContext, useEffect, useReducer, useState } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    const [loggedInUser, setLoggedInUser] = useState();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem("data")));
    }, [])

    return (
        <AuthContext.Provider value={{user: state.user, isFetching: state.isFetching, error: state.error, dispatch, loggedInUser, setLoggedInUser, notifications, setNotifications}}>
            {children}
        </AuthContext.Provider>
    )
}
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const { user, loggedInUser } = useContext(AuthContext);

    return (loggedInUser || user) ? (children) : 
    <Navigate to='/login' replace></Navigate>;
};

export default PrivateRoute;
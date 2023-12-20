/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PublicRoute = ({children}) => {
    const { user, loggedInUser } = useContext(AuthContext);

    return !(user || loggedInUser) ? (children) : 
    <Navigate to='/'></Navigate>;
};

export default PublicRoute;
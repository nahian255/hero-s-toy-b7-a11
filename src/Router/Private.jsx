import React, { useContext } from 'react';
import { toyContex } from '../provider/ToyProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {

    const { user, loading } = useContext(toyContex)
    const location = useLocation()
    console.log(location);

    if (loading) {
        return <progress className="progress progress-error w-56" value="70" max="100"></progress>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} rerplace></Navigate>

};

export default Private;
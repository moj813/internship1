import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const StudentRoute = ({ children }) => {
    const { user } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.profile);
    console.log("Kaha bHai Student haomn");
    if (token !== null && user.role === 'student') {
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

export default StudentRoute;
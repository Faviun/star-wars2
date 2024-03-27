import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("user")) navigate("/");
    }, []);

    return children;
};

export default ProtectedRoute;

//Форма входа

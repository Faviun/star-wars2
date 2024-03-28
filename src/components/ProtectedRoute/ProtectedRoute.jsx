import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (!localStorage.getItem("user")) navigate("/");
    // }, []);

    useEffect(() => {
        if (
            localStorage.getItem("name") === "Favian" &&
            localStorage.getItem("pass") === "123"
        ) {
            console.log(localStorage.getItem("user"));
        } else {
            navigate("/");
        }
        // eslint-disable-next-line
    }, []);
    return children;
    // console.log(localStorage.getItem("user"));
};

export default ProtectedRoute;

//Форма входа

import React from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
    return (
        <div>
            <Link to={`/people?page=1`}>1</Link>
            <Link to={`/people?page=2`}>2</Link>
            <Link to={`/people?page=3`}>3</Link>
            <Link to={`/people?page=4`}>4</Link>
            <Link to={`/people?page=5`}>5</Link>
            <Link to={`/people?page=6`}>6</Link>
            <Link to={`/people?page=7`}>7</Link>
            <Link to={`/people?page=8`}>8</Link>
            <Link to={`/people?page=9`}>9</Link>
        </div>
    );
};

export default Pagination;

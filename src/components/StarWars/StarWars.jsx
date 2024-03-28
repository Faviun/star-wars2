import React, { useState } from "react";
import { useGetPeoplesQuery } from "../../api/api";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const StarWars = () => {
    // eslint-disable-next-line
    const [searchParams, setSearchParams] = useSearchParams();
    // eslint-disable-next-line
    const [people, setPeople] = useState([]);

    // const tmp = useGetFilmsQuery();
    // const tmp2 = useGetFilmByIdQuery(1);
    // eslint-disable-next-line
    const { data, error, isLoading } = useGetPeoplesQuery(
        searchParams.get("page")
    );

    return (
        <div>
            Staw Wars
            <h1>Peoples</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data?.results.map((item) => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            )}
            <Pagination />
        </div>
    );
};

export default StarWars;

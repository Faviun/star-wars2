import React from "react";
import {
    useGetFilmByIdQuery,
    useGetFilmsQuery,
    useGetPeoplesQuery,
} from "../../api/api";
import { useSearchParams } from "react-router-dom";

const StarWars = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const tmp = useGetFilmsQuery();
    const tmp2 = useGetFilmByIdQuery(1);
    const tmp3 = useGetPeoplesQuery(searchParams.get("page"));

    console.log(tmp3);
    return <div>Staw Wars</div>;
};

export default StarWars;

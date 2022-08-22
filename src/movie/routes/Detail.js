import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams()

    const getMovie = async() => {
        const json = await (
            await (await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`))
        ).json();
    };

    return (
        <div>
            <h1>Detail</h1>
        </div>
    );
}

export default Detail;
import React, { useState } from "react";

import films from "../data/films.json";
import Film from './Film';
//import sortFilms from './Sort';
import SearchBox from './SearchBox';

function FilmList() { 
    const [inputValue, setInputValue] = useState("");
    //const [titoli, setTitoli] = useState(films);


    const desiredTitles = (inputValue === "") ? 
        films : films.filter(film => {
                    return film.Title.toLowerCase().includes(inputValue.toLowerCase())
                });
    //titoli = sortFilms(desiredTitles);

    return (
        <div>
            <SearchBox inputValue={inputValue} setInputValue={setInputValue}/>
            
            {
                desiredTitles.map((film, i) => {
                    return(
                        <Film film={film} key={i} />
                    )
                })
            }
        </div>
    );
}

export default FilmList;
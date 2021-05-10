import React from "react";
import { Carousel } from "react-bootstrap";

function Details({film}) {

//let film = films[key];

    return(
        <article className="container">
            <p>Director: {film.Director}</p>
            <p>Cast: {film.Actors}</p>
            <p>{film.Plot}</p>
            <p>{film.Awards}</p>
            <div>{film.Rated}</div>
            <Carousel className="images">
                {film.Images.map((url, i) => {
                    return(
                        <Carousel.Item>
                            <img 
                                calassName="d-block w-100"    
                                src={url} 
                                alt={film.Title + i} />
                        </Carousel.Item> 
                    )
                })}
            </Carousel>
        </article>
    )
}

export default Details;
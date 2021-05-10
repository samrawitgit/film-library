import React, { useState } from 'react';
import { Button, Jumbotron, Col, Image } from 'react-bootstrap';

import '../css/Film.css';
import Details from './Details';
import Rating from './Rating';

const Film = ( {film, i} ) => {
    
    const [openDetails, setOpenDetails] = useState(false);

    const showComponent = (name) => {
        if (name === "openDetails") {
            setOpenDetails(!openDetails);
        }
    }

    const populateStorage = () => {
        localStorage.setItem('Numero rating '+film.Title, 0);               //numero votazioni
        localStorage.setItem('Somma rating attuali '+film.Title, 0);        //somma votazioni totali
        localStorage.setItem('Rating attuale per '+film.Title, 0);          //media dei rating    
    }

    var mediaVoti;
    var numVoti;

    if(!localStorage.getItem('Numero rating '+film.Title)) {
        populateStorage();
        mediaVoti = 0;
        numVoti = 0;
    } else {
        mediaVoti = localStorage.getItem('Rating attuale per '+film.Title);
        numVoti = localStorage.getItem('Numero rating '+film.Title)
    }

    const updateStorage = (index) => {
        var numeroVotazioni = parseInt(localStorage.getItem('Numero rating '+film.Title)) + 1;
        var sommaVotazioni = parseInt(localStorage.getItem('Somma rating attuali '+film.Title)) + index;
        var mediaRating = sommaVotazioni / numeroVotazioni;

        localStorage.setItem('Numero rating '+film.Title, numeroVotazioni);             //numero votazioni
        localStorage.setItem('Somma rating attuali '+film.Title, sommaVotazioni);       //somma votazioni totali
        localStorage.setItem('Rating attuale per '+film.Title, mediaRating);            //media dei rating    

        mediaVoti = mediaRating;
        numVoti = numeroVotazioni;
    }

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const onMouseEnter = (index) => {
        setHoverRating(index);
    };
    const onMouseLeave = () => {
        setHoverRating(0);
    };
    const onSaveRating = (index) => {
        setRating(index);
        updateStorage(index);
    };

    return (
        <div>
            <div key={i}>

                <Jumbotron>                  
                    <Col xs={3} md={4}>
                        <Image src="holder.js/171x180" rounded />
                    </Col>
                    <Col>
                        <h4>{film.Title}</h4>
                        <div>{film.Year}</div>
                        <div>{film.Runtime}</div>
                        <div>{film.Genre}</div>

                        <div className="box flex">
                        {[1, 2, 3, 4, 5].map((index) => {
                            return (
                            <Rating 
                                index={index} 
                                rating={rating} 
                                hoverRating={hoverRating} 
                                onMouseEnter={onMouseEnter} 
                                onMouseLeave={onMouseLeave} 
                                onSaveRating={onSaveRating} />
                            )
                        })}
                            <div className="stats"> {mediaVoti} basato su {numVoti} voti</div>
                        </div>

                        <Button onClick={() => showComponent("openDetails")} key={i}>
                            Read more
                        </Button>
                    </Col>
                    
                    { openDetails && <Details film={film} key={i} />}
                    
                </Jumbotron>

            </div>           
        </div>
    );
}

export default Film;
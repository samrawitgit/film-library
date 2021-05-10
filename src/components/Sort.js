import React from 'react';

// Compare function needed by the Sort component
const compare =(x, y) => {
    if (x.title < y.title)
        return -1;
    if (x.title > y.title)
        return 1;
    return 0;
  }

//console.log(library.sort(compare_to_sort));

const sortFilms = ({films})=> {
    if (!films) {
    // If no title provided, return original list
        return films
    }
    return React.Children.toArray(films).sort(compare)
}

export default sortFilms;
import  moviesAPI  from '../../api/api';

import {
    setMovies,
} from './actionCreators';

const getMovies = (sortValue, genreValue, searchValue) => async (dispatch) => {    
    const data = await moviesAPI.getMovies(0, 10, sortValue, genreValue, searchValue);
    dispatch(setMovies(data));
};

const postMovie = ({title, poster_path, genre, vote_average, overview, runtime, release_date}) => async () => {
    
    const movie = { 
        title, 
        poster_path, 
        genres: [genre], 
        vote_average: parseInt(vote_average), 
        overview,
        runtime: parseInt(runtime), 
        release_date }
    
    const response = await moviesAPI.postMovie(movie);
    
    if (response.status === 201) {        
        alert("Movie added successfuly !");
    } else {
        alert("Error something went wrong !");
    }
}

const putMovie = ({id, title, poster_path, genre, vote_average, overview, runtime, release_date}) => async () => {
    
    const movie = { 
        id,
        title, 
        poster_path, 
        genres: [genre], 
        vote_average: parseInt(vote_average), 
        overview,
        runtime: parseInt(runtime), 
        release_date }
    
    const response = await moviesAPI.putMovie(movie);
    
    if (response.status === 200) {        
        alert("Movie updated successfuly !");
    } else {
        alert("Error something went wrong !");
    }
}

const deleteMovie = (id) => async () => {
    await moviesAPI.deleteMovie(id);
}

export {
    getMovies, postMovie, deleteMovie, putMovie,
}
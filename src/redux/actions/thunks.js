import  moviesAPI  from '../../api/api';

import {
    setMovies,
} from './actionCreators';

const getMovies = (sortValue, genreValue) => async (dispatch) => {    
    const data = await moviesAPI.getMovies(0, 10, sortValue, genreValue);
    dispatch(setMovies(data));
};

export {
    getMovies,
}
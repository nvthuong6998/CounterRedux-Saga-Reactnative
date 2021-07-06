import { ADD_MOVIE,FETCH_MOVIES,FETCH_SUCCEEDED, FETCH_FAILED } from "./actionType";

export const addMovieAction = (newMovie) => {
    return{
        type: ADD_MOVIE,
        newMovie
    }
}

export const fetchMovieAction = (sort) => {
    return{
        type: FETCH_MOVIES,
        sort
    }
}

export const fetchSuccessAction = (receivedMovies) => {
    return{
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}
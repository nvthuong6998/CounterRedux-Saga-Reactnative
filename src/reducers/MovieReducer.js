import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED } from "../actions/actionType";

const movieReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_SUCCEEDED:
            return action.receivedMovies
            
        case ADD_MOVIE:
            return [
                ...state,
                action.newMovie
            ]
        case FETCH_FAILED:
            return []

        default: 
        return state;
    }
}

export default movieReducer;
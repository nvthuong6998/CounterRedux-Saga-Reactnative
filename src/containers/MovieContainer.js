import MovieComponent from "../components/MovieComponent";

import { connect } from "react-redux";
import { addMovieAction, fetchMovieAction, fetchSuccessAction, fetchFailedAction } from "../actions/MovieActions";

const mapStateToProps = (state) => {
    return{
        movies: state.movieReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchMovie: () => {
            dispatch(fetchMovieAction());
        },
        onAddMovie: () => {
            dispatch(addMovieAction());
        }


    }
}

const MovieContainer = connect(mapStateToProps, mapDispatchToProps)(MovieComponent);

export default MovieContainer
import {ADD_MOVIE,FETCH_MOVIES,FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionType'

import { put, takeLatest } from '@redux-saga/core/effects'
import { Api } from './API'

function* fetchMovies(){
    try {
        const receivedMovies = yield Api.getMovieFromApi();
        yield put({
            type: FETCH_SUCCEEDED,
            receivedMovies: receivedMovies
        })
    } catch (error) {
            yield put({
                type: FETCH_FAILED,
                error: error
            })
    }
}

export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIES, fetchMovies)
}
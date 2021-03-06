const urlGetMovies = 'http://localhost:3000/movies'

function* getMovieFromApi(){
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: ''
    });
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit): []
    return movies;
}

export const Api = {
    getMovieFromApi
}
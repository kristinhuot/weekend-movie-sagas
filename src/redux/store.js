import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, take } from 'redux-saga/effects';
import axios from 'axios';


function* setCurrentMovieID(){

}

function* fetchOneMovie(){
  try{
    const response = yield axios({
      method: 'GET',
      url: '/api/movies'
    })
    yield put({
      type: '****',
      payload: response.data
    })
  }
    catch(error){
      console.log('Error fetching one movie', error);
    }  
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
}

const currentMovieID = (state= 0, action) => {
  switch (action.type) {
    case 'SET_MOVIE_ID': 
    console.log('currentMovieID is', action.payload);
      return action.payload;
    default: 
      return state; 
  }
}

//STRETCH 
// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_ONE_MOVIE', fetchOneMovie); 
  yield takeEvery('SET_MOVIE_ID', setCurrentMovieID)
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    currentMovieID,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;

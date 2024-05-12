import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MovieList() {

  const history = useHistory(); 
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  //upon load, sends dispatches to grab id, genre, and details for the movie selected
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  function changeToDetailsPage(movie){
    dispatch({
      type: 'SET_MOVIE_ID',
      payload: movie.id
    })
    dispatch({
      type: 'SET_MOVIE_GENRE',
      payload: movie.id
    })
    dispatch({
      type: 'SET_MOVIE_DETAILS',
      payload: movie.id
    })
    history.push('/details')
    
  }

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
              <img data-testid="toDetails" onClick={() => changeToDetailsPage(movie)} src={movie.poster} alt={movie.title}/>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;

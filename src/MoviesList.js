import React, { PureComponent } from 'react';
import Movie from './Movie';
import styled from 'styled-components';



const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;

`;

class MoviesList extends PureComponent {
constructor(props){
  super(props)
  this.state = {
    movies: []
  }
}
  

async componentDidMount() {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_LIST_KEY}`)
    const movies = await res.json();
    console.log(movies)
    this.setState({
      movies: movies.results
    })
  }catch(e) {
    console.log(e)
  }
  
}
    render(){

    
  return (
    <MovieGrid>
      {this.state.movies.map((movie) => 
          <Movie key={movie.id} movie={movie} />
      )}
    </MovieGrid>
  );
}
}



export default MoviesList;


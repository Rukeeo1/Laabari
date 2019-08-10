import { gql } from 'apollo-boost';


const movieQuery = gql`
{
  movies {
    _id
    title
    similarMovies
    year
    synopsis
    creator
    genre
  }
}
`;

export {movieQuery}
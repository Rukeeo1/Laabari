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

const deleteMovie = gql`
  mutation($id:String!) {
    deleteMovie(id:$id) {
      title
      _id
    }
  }
`;
console.log(deleteMovie, 'hello');
export { movieQuery, deleteMovie};

import { gql } from 'apollo-boost';

// const singleMovieQuery = gql`
// {
// movie(id:"5d587fb47b458620787b86dc"){
//   title
// }
// }
// `


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
      poster
    }
  }
`;

const deleteMovie = gql`
  mutation($id: String!) {
    deleteMovie(id: $id) {
      title
      _id
    }
  }
`;

const updateMovie = gql`
  mutation(
    $id: String!
    $title: String!
    $year: String!
    $genre: String!
    $creator: [String!]
  ) {
    updateMovie(
      id: $id
      input: { title: $title, year: $year, creator: $creator, genre: $genre }
    ) {
      title
    }
  }
`;

const addMovie = gql`
  mutation(
    $title: String!
    $year: String!
    $poster: String!
    $synopsis: String!
    $src: String!
    $creator: [String!]
    $genre: String!
    $backgroundImage: String!
    $cast: [String!]
  ) {
    addMovie(
      title: $title
      year: $year
      poster: $poster
      src: $src
      synopsis: $synopsis
      similarMovies: [
        "a movie"
        "a another movie"
        "a very good movie"
        "another very good movie"
      ]
      creator: $creator
      cast: $cast
      genre: $genre
      backgroundImage: $backgroundImage
     
    ) {
      title
    }
  }
`;



export { movieQuery, deleteMovie, updateMovie, addMovie };

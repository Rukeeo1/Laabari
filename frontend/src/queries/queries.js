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
  mutation($id: String!) {
    deleteMovie(id: $id) {
      title
      _id
    }
  }
`;

const updateMovie = gql`
  mutation($id: String!, $title: String!, $year: String!, $genre: String!,$creator: [String!]) {
    updateMovie(
      id: $id
      input: {
        title: $title
        year: $year
        creator: $creator
        genre: $genre
      }
    ) {
      title
    }
  }
`;

// const addMovie = gql `

// `

export { movieQuery, deleteMovie, updateMovie };

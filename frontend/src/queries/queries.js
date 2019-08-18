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
// const addMovie = gql`
//  mutation($title:String!,$year:String!,$poster:String!,$src:String!,$synopsis:String!,$similarMovies:[String!],$creator:[String!],$cast:[String!],$genre:String!,$backgroundImage:String!){
//    addMovie(title:$title,year:$year,poster:$poster,src:$src,synopsis:$synopsis,similarMovies:$similarMovies,creator:$creator, cast:$cast,genre:$genre,backgroundImage:$backgroundImage){
//      title
//    }
//  }
// `;
// const addMovie = gql`
//  mutation($title:String!,$year:String!,$poster:String!,$src:String!,$synopsis:String!,$similarMovies:[String!],$creator:[String!],$cast:[String!],$genre:String!,$backgroundImage:String!){
//   addMovie(title: "ppppp", year: "2014", poster: "https://alexis.lindaikejisblog.com/photos/shares/5d57e2da72f96.jpg", src: "https://www.youtube.com/watch?v=YxMKUsG-U6Q",synopsis:"Aisha Buhari is shaking a major table with her Instagram birthday post to immediate past National Chairman of the All Progressives Congress APC, John Odigie-Oyegun.",similarMovies:["a movie","a another movie","a very good movie","another very good movie"],creator:["rukee","and willochs"],cast:["adesuwa etomi","banki w"],genre:"drama",backgroundImage:"https://alexis.lindaikejisblog.com/photos/shares/5d57e2da72f96.jpg") {
//     title
//  }
// `;
const addMovie = gql`
  mutation(
    $title: String!
    $year: String!
    $poster: String!
    $synopsis: String!
    $src: String!
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
      creator: ["rukee", "and willochs"]
      cast: ["adesuwa etomi", "banki w"]
      genre: "drama"
      backgroundImage: "https://alexis.lindaikejisblog.com/photos/shares/5d57e2da72f96.jpg"
    ) {
      title
    }
  }
`;
// mutation {
//   addMovie(title: "A young woman", year: "2014", poster: "https://alexis.lindaikejisblog.com/photos/shares/5d57e2da72f96.jpg", src: "https://www.youtube.com/watch?v=YxMKUsG-U6Q",synopsis:"Aisha Buhari is shaking a major table with her Instagram birthday post to immediate past National Chairman of the All Progressives Congress APC, John Odigie-Oyegun.",similarMovies:["a movie","a another movie","a very good movie","another very good movie"],creator:["rukee","and willochs"],cast:["adesuwa etomi","banki w"],genre:"drama",backgroundImage:"https://alexis.lindaikejisblog.com/photos/shares/5d57e2da72f96.jpg") {
//     title
//   }
// }

export { movieQuery, deleteMovie, updateMovie, addMovie };

import { gql } from 'apollo-boost'

const getBooks = gql`
  {
    books {
      name
      id
    }
  }
`

const getBook = gql`
  query($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`

const getAuthors = gql`
  {
    authors {
      name
      id
    }
  }
`

const addBook = gql`
  mutation($name: String!, $genre: String!, $authorId:ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

export {
  getAuthors,
  getBooks,
  addBook,
  getBook
}

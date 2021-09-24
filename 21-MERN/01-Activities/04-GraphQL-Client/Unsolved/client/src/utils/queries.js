import { gql } from '@apollo/client';

export const QUERY_BOOKS = gql`
query {
    books {
        _id
        title
        author
        pages
    }
}
`
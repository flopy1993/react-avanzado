import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

// export const PhotoCardWithQuery = ({ id }) => (
//   <Query query={query} variables={{ id }}>
//     {
//       ({ loading, error, data }) => {
//         const { photo } = data
        
//         return <PhotoCard {...photo} />
//       }
//     }
//   </Query>
// )

export const PhotoCardWithQuery=({ id })=> {

  const { loading, error, data } = useQuery(
    GET_SINGLE_PHOTO, 
    {variables: { id }}
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! ${error}`</p>;

  
  return (
   
    <PhotoCard {...data.photo} />
   // id, likes = 0, src = DEFAULT_IMAGE 
  );
}
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import {ListOfFavs} from '../components/ListOfFavs'
const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const FavsWithQuery = () => {
  const { loading, error, data } = useQuery(GET_FAVS,
    {fetchPolicy: 'network-only'})
  
  if (loading) return <p>loading</p>
  if (error) return <p>Error!</p>
  const {favs} = data
 
return <ListOfFavs favs={favs}/>
}


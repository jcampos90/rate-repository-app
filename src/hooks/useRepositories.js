import { useQuery } from '@apollo/client'
// import { useEffect, useState } from "react"
// import Constants from 'expo-constants'
import { GET_REPOSITORIES } from "../graphql/queries"

// const useRepositories = () => {
//     const [repositories, setRepositories] = useState()
//     const [loading, setLoading] = useState(false)

//     const fetchRepositories = async () => {

//         // setLoading(true)
//         const response = await fetch(Constants.manifest.extra.api_url)
//         const json = await response.json()
//         const repositoriesList = json.edges.map(edge => edge.node)
//         console.log(repositoriesList)
//         setRepositories(repositoriesList)
//         setLoading(false)
//     }

//     useEffect(() => {
//         fetchRepositories() // esta funcion esta funcional solo se comento para probar la implementacion de graphql
//         // fetchRepositoriesWithGraphql()
//     }, [])

//     return { repositories, loading, fetchRepositories }

// }


const useRepositories = () => {

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  })
  
  let repositories = []
  // console.log("DATA >>> ",data);

  if (!loading)
    repositories = data?.repositories.edges.map(edge => edge.node)

  return { repositories, loading }

}
export default useRepositories
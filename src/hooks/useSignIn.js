import { useApolloClient, useMutation, useQuery } from "@apollo/client"
import { AUTHENTICATE, ME } from "../graphql/queries"
import AuthStorage from "../utils/authStorage"


const useSignIn = () => {

    const [mutate, result] = useMutation(AUTHENTICATE)
    const apolloClient = useApolloClient()

    const { data: meData, loading: meDataIsLoding } = useQuery(ME, { fetchPolicy: 'cache-and-network', })

    const authStorage = new AuthStorage()


    const signIn = async ({ username, password }) => {
        //console.log('from signin >>> ', password, username);
        const { data, errors } = await mutate({ variables: { credentials: { username, password } } })
        authStorage.setAccessToken(data.authenticate.accessToken)

        // esto es para que se vuelvan a ejecutar las consultas
        apolloClient.resetStore()

        if (errors)
            console.log(errors);

        return { data, errors }

    }

    const checkSignedIn = () => {

        let isUserSignedIn = false

        if (!meDataIsLoding) {
            isUserSignedIn = meData.me ? true : false
            console.log("CheckSignedIn >>> ",isUserSignedIn);
            return isUserSignedIn
        }

        return false


    }


    const signOut = async()=> {
        await authStorage.removeAccessToken()
        apolloClient.resetStore()   
    }

    return { signIn, result, checkSignedIn, signOut }

}
export default useSignIn
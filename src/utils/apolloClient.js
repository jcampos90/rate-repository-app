import { ApolloClient, InMemoryCache,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const createApolloClient = (authStorage) => {

  const httpLink = createHttpLink({
    uri: 'https://38d7-2603-6011-8c00-91fc-155a-98a5-b37b-8b03.ngrok.io/graphql',
  });

  const authLink =  setContext( async (_, { headers }) => {
    const token =  await authStorage.getAccessToken()
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  });

  return new ApolloClient({
    // request: async (operation) => {
    //   try {
    //     const accessToken = await authStorage.getAccessToken();
    //     console.log("access token >>>",accessToken);
    //     operation.setContext({
    //       headers: { authorization: accessToken ? `Bearer ${accessToken}` : '' },
    //     });
    //   }
    //   catch (e) {
    //     console.log(e);
    //   }
    // },
    // uri: 'https://3c0e-2603-6011-8c00-91fc-155a-98a5-b37b-8b03.ngrok.io//graphql',
    link:authLink.concat(httpLink),
    //uri: 'https://38d7-2603-6011-8c00-91fc-155a-98a5-b37b-8b03.ngrok.io/graphql',
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
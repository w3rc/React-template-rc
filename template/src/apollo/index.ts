import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({ message }) => {
			console.log(`Graphql error ${message}`);
		});
	}
	if (networkError) {
		console.error(`Network error ${networkError.message}`);
	}
});

const PROD_URL = 'https://workhour-api.herokuapp.com';
const LOCAL_URL = 'http://localhost:4000';

const API_URL = `${LOCAL_URL}/graphql`;

const httpLink = new HttpLink({
	uri: API_URL
});

// const authLink = new ApolloLink((operation, forward) => {
// 	operation.setContext({
// 		headers: {
// 			// 'api-key': process.env.GQL_API_KEY
// 		}
// 	});

// 	return forward(operation);
// });

const link = from([errorLink, httpLink]);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache()
});

export default client;
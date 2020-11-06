import { 
  ApolloProvider,  
  ApolloClient, 
  InMemoryCache,
  } 
  from '@apollo/client';
import {LaunchesContainer} from './containers/LaunchesContainer';
import './App.css';
function App() {

const client= new ApolloClient({
  uri:'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


  return(
    <ApolloProvider client={client}> 
      <main>
        <LaunchesContainer />
      </main>
    </ApolloProvider>

  );
  
  
 
}

export default App;

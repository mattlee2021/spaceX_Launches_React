import { ApolloProvider,ApolloClient,InMemoryCache,} from '@apollo/client';
import {LaunchesContainer} from './containers/LaunchesContainer';
import { useState } from "react";

import './App.css';
import { Search_component } from './components/Search_component';

/**
 * Connecting to the SpaceX GraphQL API and displaying LaunchesContainer, which holds all 
 * my components. 
 */


function App() {

const [searched, searched_state] = useState("");

const submit_search = (search_pass) => {
  searched_state(search_pass)
}

const client= new ApolloClient({
  uri:'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

  return(
    <ApolloProvider client={client}> 
      <main>
        <Search_component onSubmit={submit_search}/>
        <LaunchesContainer search={searched}/>
      </main>
    </ApolloProvider>
  );
 
}

export default App;

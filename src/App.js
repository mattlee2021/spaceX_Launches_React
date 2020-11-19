import { ApolloProvider,ApolloClient,InMemoryCache,} from '@apollo/client';
import {LaunchesContainer} from './containers/LaunchesContainer';
import { useState } from "react";

import './App.css';
import { Search_component } from './components/Search_component';
import { Sort_component } from './components/Sort_component';
import { LaunchSite_Filter } from './components/Launch_Site_Filter_component';

/**
 * Connecting to the SpaceX GraphQL API and displaying LaunchesContainer, which holds all 
 * my components. 
 */


function App() {

  

const [searched, searched_state] = useState("");
const [sorted, sorted_state] = useState("");
const[launchSite_state, launchSite_fetch]=useState("")

const client= new ApolloClient({
  uri:'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

const submit_search = (search_pass) => {
  searched_state(search_pass)
}

const submit_launchSite = (launchSite_pass) => {
  launchSite_fetch(launchSite_pass)
}

const submit_sort = (sort_pass) => {
  sorted_state(sort_pass)
}


  return(
    <ApolloProvider client={client}> 
      <main>
        <Search_component onSubmit={submit_search}/>
        <LaunchSite_Filter onSubmit={submit_launchSite}/>
        <Sort_component onSubmit={submit_sort}/>
        <LaunchesContainer search={searched}  launchSite_filter={launchSite_state} sort={sorted}/>
      </main>
    </ApolloProvider>
  );
 
}

export default App;

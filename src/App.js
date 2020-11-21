import { ApolloProvider, ApolloClient, InMemoryCache, } from '@apollo/client';
import { LaunchesContainer } from './containers/LaunchesContainer';
import { useState } from "react";

import './App.css';
import { MissionNameSearch } from './containers/MissionNameSearch';
import { SortDataFeature } from './containers/SortData';
import { LaunchSiteFilter } from './containers/LaunchSiteFilter';

/**
 * This function connecting to the SpaceX GraphQL API and displaying LaunchesContainer, which holds all 
 * my components. All containers and components are used in this method to create the web page.
 * Furthermore, information from the sorting, filtering, and searching component is passed to this function,
 * which then passes the relevant information to LaunchesContainer, which helps to fetch the GraphQL data.
 */


function App() {

	const client = new ApolloClient({
		uri: 'https://api.spacex.land/graphql/',
		cache: new InMemoryCache()
	});

	const [missionName_searched_state, searched_set] = useState("");
	const [launchSite_filter_state, launchSite_set] = useState("");
	const [sortBy_sort_state, sorted_set] = useState("");

	const missionName_searched_fetch = (search_pass) => {
		searched_set(search_pass)
	}

	const launchSite_filter_fetch = (launchSite_pass) => {
		launchSite_set(launchSite_pass)
	}

	const sortBy_sort_fetch = (sort_pass) => {
		sorted_set(sort_pass)
	}


	return (
		<ApolloProvider client={client}>
			<main>
				<MissionNameSearch onSubmit={missionName_searched_fetch} />
				<LaunchSiteFilter onSubmit={launchSite_filter_fetch} />
				<SortDataFeature onSubmit={sortBy_sort_fetch} />
				<LaunchesContainer search={missionName_searched_state} launchSite_filter={launchSite_filter_state} sort={sortBy_sort_state} />
			</main>
		</ApolloProvider>
	);

}

export default App;

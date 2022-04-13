import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import LaunchesContainer from "./PrimaryDisplay/LaunchesContainer";
import { useState } from "react";
import styles from "./App.module.css";
import MissionNameSearch from "./Features/MissionNameSearch";
import SortDataFeature from "./Features/SortData";
import LaunchSiteFilter from "./Features/LaunchSiteFilter";

/**
 * This function connecting to the SpaceX GraphQL API and displaying LaunchesContainer, which holds all
 * my components. All containers and components are used in this method to create the web page.
 * Furthermore, information from the sorting, filtering, and searching component is passed to this function,
 * which then passes the relevant information to LaunchesContainer, which helps to fetch the GraphQL data.
 */

function App() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const [missionNameSearchedState, searchedSet] = useState("");
  const [launchSiteFilterState, launchSiteSet] = useState("");
  const [sortBySortState, sortedSet] = useState("");

  const missionNameSearchedFetch = (searchPass) => {
    searchedSet(searchPass);
  };

  const launchSiteFilterFetch = (launchSitePass) => {
    launchSiteSet(launchSitePass);
  };

  const sortBySortFetch = (sortPass) => {
    sortedSet(sortPass);
  };

  return (
    <ApolloProvider client={client}>
      <main>
        <div className={styles.input__container}>
          <MissionNameSearch onSubmit={missionNameSearchedFetch} />
          <LaunchSiteFilter onSubmit={launchSiteFilterFetch} />
          <SortDataFeature onSubmit={sortBySortFetch} />
        </div>
        <LaunchesContainer
          search={missionNameSearchedState}
          launchSite_filter={launchSiteFilterState}
          sort={sortBySortState}
        />
      </main>
    </ApolloProvider>
  );
}

export default App;

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import LaunchesContainer from "./PrimaryDisplay/LaunchesContainer";
import { useState } from "react";
import styles from "./App.module.css";
import MissionNameSearch from "./Features/MissionNameSearch";
import SortData from "./Features/SortData";
import LaunchSiteFilter from "./Features/LaunchSiteFilter";

function App() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const [missionNameSearch, setMissionNameSearch] = useState("");
  const [launchSiteFilter, setLaunchSiteFilter] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");

  return (
    <ApolloProvider client={client}>
      <main>
        <div className={styles.input__container}>
          <MissionNameSearch setMissionNameSearch={setMissionNameSearch} />
          <LaunchSiteFilter setLaunchSiteFilter={setLaunchSiteFilter} />
          <SortData setSortCriteria={setSortCriteria} />
        </div>
        <LaunchesContainer
          search={missionNameSearch}
          launchSite_filter={launchSiteFilter}
          sort={sortCriteria}
        />
      </main>
    </ApolloProvider>
  );
}

export default App;

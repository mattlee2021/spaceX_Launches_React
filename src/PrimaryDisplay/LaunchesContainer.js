import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../GraphQL/get_launches";
import Launch from "./Launch";
import styles from "./LaunchesContainer.module.css";

const LaunchesContainer = (props) => {
  const { data, loading, error } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 10,
      filter_Mission: props.search,
      filter_launchSite: props.launchSite_filter,
      sort_by: props.sort,
    },
  });

  if (loading) {
    return <div className={styles.processing__text}>Loading...</div>;
  } else if (error) {
    return (
      <div className={styles.processing__text}>
        Error... Please Refresh The Page
      </div>
    );
  } else {
    return (
      <div className={styles.launch__container}>
        {data.launchesPast.length > 0 ? (
          data.launchesPast.map((launchData) => (
            <Launch key={launchData.id} launch={launchData} />
          ))
        ) : (
          <div className={styles.processing__text}> No Launches Found </div>
        )}
      </div>
    );
  }
};

export default LaunchesContainer;

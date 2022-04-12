import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "../GraphQL/get_launches";
import Launches from "./DisplayLaunches";

/**
 * Fetching 10 SpaceX Launches with limit:10 that is passed to GET_LAUNCHES.
 * Displaying either Loading and Error messages that are passed from useQuery()
 * If there are no errors and data has loaded, I am mapping each subset of launch data
 * to the <Launches /> component.
 */
const LaunchesContainer = (props) => {
  const { data, loading, error } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 10,
      filter_Mission: props.search,
      filter_launchSite: props.launchSite_filter,
      sort_by: props.sort
    }
  });

  if (loading) {
    return <div className="processing__text">Loading...</div>;
  } else if (error) {
    console.error(error);
    return <div className="processing__text">Error. Check the console.</div>;
  } else {
    return (
      <div className="launch__container">
        {data.launchesPast.length > 0 ? (
          data.launchesPast.map((launchData) => (
            <Launches key={launchData.id} launch={launchData} />
          ))
        ) : (
          <div className="processing__text"> No Launches Found </div>
        )}
      </div>
    );
  }
};

export default LaunchesContainer;

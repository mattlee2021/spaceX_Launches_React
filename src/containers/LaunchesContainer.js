import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../graphql/get_launches';
import { Launches } from '../components/DisplayLaunches';

/**
 * Fetching 10 SpaceX Launches with limit:10 that is passed to GET_LAUNCHES.
 * Displaying either Loading and Error messages that are passed from useQuery()
 * If there are no errors and data has loaded, I am mapping each subset of launch data 
 * to the <Launches /> component. 
 */
export function LaunchesContainer(props) {
    console.log("Searched: ", props.search, "; Filter is ", props.launchSite_filter, "; Sort By ", props.sort)
    const { data, loading, error } = useQuery(GET_LAUNCHES, {
        variables: {
            limit: 20, filter_Mission: props.search,
            filter_launchSite: props.launchSite_filter, sort_by: props.sort
        },
    });

    if (loading) {
        return (<div className="Processing">Loading...</div>)
    }

    if (error) {
        console.error(error)
        return (<div className="Processing">Error. Check the console.</div>)
    }

    return (
        <div className="container">
            {data.launchesPast && data.launchesPast.map(launch_data =>
                <Launches key={launch_data.id} launch={launch_data} />)}

        </div>
    )

}
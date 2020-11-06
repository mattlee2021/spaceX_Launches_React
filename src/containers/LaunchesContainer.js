import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_LAUNCHES} from '../graphql/get_launches';
import {Launches} from '../components/launches';


export function LaunchesContainer() {
    const {data: { launchesPast= [] } = {} } = useQuery(GET_LAUNCHES, {
    variables:{limit:5}, 
});

return (
    <div className="container">
        {launchesPast && launchesPast.map(launch => 
            <Launches key={launch.id} launch={launch}/> )}
    </div>
)

}
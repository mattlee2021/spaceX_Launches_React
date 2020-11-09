import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_LAUNCHES} from '../graphql/get_launches';
import {Launches} from '../components/launches';


export function LaunchesContainer() {
    const {data,loading,error} = useQuery(GET_LAUNCHES, {
    variables:{limit:3}, 
});

if(loading){
    return ( <div className="Processing">Loading...</div>)
}

if(error){
    console.error(error)
    return (<div className="Processing">Error. Check the console.</div>)
}

return (
    <div className="container">
        {data.launchesPast && data.launchesPast.map(launch => 
            <Launches key={launch.id} launch={launch}/> )}
    </div>
)



}
import {gql, useQuery} from '@apollo/client';

export const GET_LAUNCHES = gql`
query launchesPast($limit: Int) {
    launchesPast(limit:$limit){
        id
        mission_name
        launch_date_local
        launch_site {
            site_name_long
        }
        links {
            video_link
        }
        rocket {
            rocket_name
        }
    }
}`;
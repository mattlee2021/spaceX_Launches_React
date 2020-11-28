import { gql } from '@apollo/client'

/**
 * Query used to fetch data from SpaceX GraphQL API.
 * This Query is used in LaunchesContainer.
 */
export const GET_LAUNCHES = gql`
query launchesPast($limit: Int, $filter_Mission:String, $filter_launchSite:String, $sort_by:String) {
    launchesPast(limit:$limit, find:{mission_name:$filter_Mission, site_name_long:$filter_launchSite}, sort:$sort_by){
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
}`

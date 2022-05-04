import TestRenderer from "react-test-renderer";
import LaunchesContainer from "./LaunchesContainer";
import { MockedProvider } from "@apollo/client/testing";
import { GET_LAUNCHES } from "../GraphQL/get_launches";
import { render, screen } from "@testing-library/react";
import { GraphQLError } from "graphql";

describe("LaunchesContainer", () => {
  const mockLaunchesContainerData = {
    launchesPast: [
      {
        id: "109",
        mission_name: "Starlink-15 (v1.0)",
        launch_date_utc: "2020-10-24T15:31:00.000Z",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          video_link: "https://youtu.be/J442-ti-Dhg",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "108",
        mission_name: "Sentinel-6 Michael Freilich",
        launch_date_utc: "2020-11-21T17:17:00.000Z",
        launch_site: {
          site_name_long: "Vandenberg Air Force Base Space Launch Complex 4E",
        },
        links: {
          video_link: "https://youtu.be/aVFPzTDCihQ",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "107",
        mission_name: "Crew-1",
        launch_date_utc: "2020-11-16T00:27:00.000Z",
        launch_site: {
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        links: {
          video_link: "https://youtu.be/bnChQbxLkkI",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "106",
        mission_name: "GPS III SV04 (Sacagawea)",
        launch_date_utc: "2020-11-05T23:24:00.000Z",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          video_link: "https://youtu.be/wufXF5YKR1M",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "105",
        mission_name: "Starlink-14 (v1.0)",
        launch_date_utc: "2020-10-24T15:31:00.000Z",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          video_link: "https://youtu.be/2gbVgTxLgN0",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "104",
        mission_name: "Starlink-13 (v1.0)",
        launch_date_utc: "2020-10-18T12:25:00.000Z",
        launch_site: {
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        links: {
          video_link: "https://youtu.be/UM8CDDAmp98",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "103",
        mission_name: "Starlink-12 (v1.0)",
        launch_date_utc: "2020-10-06T11:29:00.000Z",
        launch_site: {
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        links: {
          video_link: "https://youtu.be/8O8Z2yPyTnc",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "102",
        mission_name: "Starlink-11 (v1.0)",
        launch_date_utc: "2020-09-03T12:46:00.000Z",
        launch_site: {
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        links: {
          video_link: "https://youtu.be/_j4xR7LMCGY",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "101",
        mission_name: "SAOCOM 1B, GNOMES-1, Tyvak-0172",
        launch_date_utc: "2020-08-30T23:18:00.000Z",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          video_link: "https://youtu.be/P-gLOsDjE3E",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "100",
        mission_name: "Starlink-10 (v1.0) & SkySat 19-21",
        launch_date_utc: "2020-08-18T14:31:00.000Z",
        launch_site: {
          site_name_long:
            "Cape Canaveral Air Force Station Space Launch Complex 40",
        },
        links: {
          video_link: "https://youtu.be/jTMJK7wb0rM",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
      {
        id: "99",
        mission_name: "Starlink-9 (v1.0) & BlackSky Global 5-6",
        launch_date_utc: "2020-08-07T05:12:00.000Z",
        launch_site: {
          site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
        },
        links: {
          video_link: "https://youtu.be/KU6KogxG5BE",
        },
        rocket: {
          rocket_name: "Falcon 9",
        },
      },
    ],
  };

  const mockData = {
    request: {
      query: GET_LAUNCHES,
      variables: {
        limit: 10,
        filter_Mission: "",
        filter_launchSite: "",
        sort_by: "",
      },
    },
    result: {
      data: mockLaunchesContainerData,
    },
  };

  it("Should display Loading...", () => {
    render(
      <MockedProvider mocks={[mockData]} addTypename={false}>
        <LaunchesContainer search={""} launchSite_filter={""} sort={""} />
      </MockedProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Should display the mocked data", async () => {
    const testRenderer = TestRenderer.create(
      <MockedProvider mocks={[mockData]} addTypename={false}>
        <LaunchesContainer search={""} launchSite_filter={""} sort={""} />
      </MockedProvider>
    );
    testRenderer.toJSON();
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(testRenderer).toMatchSnapshot();
  });

  it("Should display the error message on network error", async () => {
    const mockError = {
      request: {
        query: GET_LAUNCHES,
        variables: {
          limit: 10,
          filter_Mission: "",
          filter_launchSite: "",
          sort_by: "",
        },
      },
      error: new Error("An error occurred"),
    };

    render(
      <MockedProvider mocks={[mockError]} addTypename={false}>
        <LaunchesContainer search={""} launchSite_filter={""} sort={""} />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(
      screen.getByText("Error... Please Refresh The Page")
    ).toBeInTheDocument();
  });

  it("Should display the error message on GraphQL error", async () => {
    const mockError = {
      request: {
        query: GET_LAUNCHES,
        variables: {
          limit: 10,
          filter_Mission: "",
          filter_launchSite: "",
          sort_by: "",
        },
      },
      result: { errors: [new GraphQLError("Error")] },
    };

    render(
      <MockedProvider mocks={[mockError]} addTypename={false}>
        <LaunchesContainer search={""} launchSite_filter={""} sort={""} />
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 0));
    screen.debug();
    expect(
      screen.getByText("Error... Please Refresh The Page")
    ).toBeInTheDocument();
  });
});

import TestRenderer from "react-test-renderer";
import Launch from "./Launch";
describe("Launch", () => {
  const mockLaunchData = {
    launch_data_utc: "2020-10-24T15:31:00.000Z",
    mission_name: "Starlink-15 (v1.0)",
    launch_site: {
      site_name_long:
        "Cape Canaveral Air Force Station Space Launch Complex 40",
    },
    rocket: {
      rocket_name: "Falcon 9",
    },
    links: {
      video_link: "mockVideoLink.com",
    },
  };
  it("Should match the snapshot with the mocked data", () => {
    const testRenderer = TestRenderer.create(
      <Launch launch={mockLaunchData} />
    );
    testRenderer.toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
});

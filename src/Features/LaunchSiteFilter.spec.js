import TestRenderer from "react-test-renderer";
import LaunchSiteFilter from "./LaunchSiteFilter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("LaunchSiteFilter", () => {
  it("Should match the snapshot", () => {
    const testRenderer = TestRenderer.create(<LaunchSiteFilter />);
    testRenderer.toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

  it("Should call setLaunchSiteFilter with Kwajalein Atoll", () => {
    const mockSetLaunchSiteFilter = jest.fn();
    render(<LaunchSiteFilter setLaunchSiteFilter={mockSetLaunchSiteFilter} />);
    const radioButton = screen.getByLabelText("Kwajalein Atoll");
    userEvent.click(radioButton);
    expect(mockSetLaunchSiteFilter).toHaveBeenCalledWith("Kwajalein Atoll");
  });

  it("Should call setLaunchSiteFilter with Cape Canaveral", () => {
    const mockSetLaunchSiteFilter = jest.fn();
    render(<LaunchSiteFilter setLaunchSiteFilter={mockSetLaunchSiteFilter} />);
    const radioButton = screen.getByLabelText("Cape Canaveral");
    userEvent.click(radioButton);
    expect(mockSetLaunchSiteFilter).toHaveBeenCalledWith("Cape Canaveral");
  });

  it("Should call setLaunchSiteFilter with Kennedy Space Center", () => {
    const mockSetLaunchSiteFilter = jest.fn();
    render(<LaunchSiteFilter setLaunchSiteFilter={mockSetLaunchSiteFilter} />);
    const radioButton = screen.getByLabelText("Kennedy Space Center");
    userEvent.click(radioButton);
    expect(mockSetLaunchSiteFilter).toHaveBeenCalledWith(
      "Kennedy Space Center"
    );
  });

  it("Should call setLaunchSiteFilter with Show All, when Show All is not currently selected", () => {
    const mockSetLaunchSiteFilter = jest.fn();
    render(<LaunchSiteFilter setLaunchSiteFilter={mockSetLaunchSiteFilter} />);
    userEvent.click(screen.getByLabelText("Kennedy Space Center"));
    const radioButton = screen.getByLabelText("Show All");
    userEvent.click(radioButton);
    expect(mockSetLaunchSiteFilter).toHaveBeenCalledWith("");
  });
});

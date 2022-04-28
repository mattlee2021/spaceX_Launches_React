import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import MissionNameSearch from "./MissionNameSearch";

describe("MissionNameSearch", () => {
  it("Should match the snapshot", () => {
    const testRenderer = TestRenderer.create(<MissionNameSearch />);
    testRenderer.toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

  it("Should call setMissionNameSearch with the entered input", () => {
    const mockSetMissionNameSearch = jest.fn();
    render(
      <MissionNameSearch setMissionNameSearch={mockSetMissionNameSearch} />
    );
    const inputBox = screen.getByRole("textbox");
    userEvent.type(inputBox, "Falcon");
    const submitButton = screen.getByRole("button", { name: "Search" });
    userEvent.click(submitButton);
    expect(mockSetMissionNameSearch).toHaveBeenCalledWith("Falcon");
  });

  it("Should clear input when clicking Clear Search", () => {
    render(<MissionNameSearch />);
    const inputBox = screen.getByRole("textbox");
    userEvent.type(inputBox, "Falcon");
    const clearSearchButton = screen.getByRole("button", {
      name: "Clear Search",
    });
    expect(inputBox).toHaveValue("Falcon");
    userEvent.click(clearSearchButton);
    expect(inputBox).toHaveValue("");
  });
});

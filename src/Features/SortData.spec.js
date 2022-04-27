import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import SortData from "./SortData";

describe("SortData", () => {
  it("Should match the snapshot", () => {
    const testRenderer = TestRenderer.create(<SortData />);
    testRenderer.toJSON();
    expect(testRenderer).toMatchSnapshot();
  });

  it("Should have 4 options in dropdown", () => {
    const mockSetSortCriteria = jest.fn();
    render(<SortData setSortCriteria={mockSetSortCriteria} />);
    expect(screen.getAllByRole("option").length).toBe(4);
  });

  it("Should call setSortCriteria with site_name_long", () => {
    const mockSetSortCriteria = jest.fn();
    render(<SortData setSortCriteria={mockSetSortCriteria} />);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Launch Site" })
    );
    expect(mockSetSortCriteria).toHaveBeenCalledWith("site_name_long");
  });

  it("Should call setSortCriteria with launch_date_local", () => {
    const mockSetSortCriteria = jest.fn();
    render(<SortData setSortCriteria={mockSetSortCriteria} />);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Launch Date" })
    );
    expect(mockSetSortCriteria).toHaveBeenCalledWith("launch_date_local");
  });

  it("Should call setSortCriteria with mission_name", () => {
    const mockSetSortCriteria = jest.fn();
    render(<SortData setSortCriteria={mockSetSortCriteria} />);
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", { name: "Mission Name" })
    );
    expect(mockSetSortCriteria).toHaveBeenCalledWith("mission_name");
  });
});

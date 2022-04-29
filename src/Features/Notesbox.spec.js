import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";
import NotesBox from "./Notesbox";

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe("NotesBox", () => {
  it("Should match the snapshot", () => {
    const testRenderer = TestRenderer.create(<NotesBox />);
    testRenderer.toJSON();
    expect(testRenderer).toMatchSnapshot();
  });
  it("Should contain the user's input", () => {
    render(<NotesBox />);
    const notesbox = screen.getByRole("textbox");
    userEvent.type(notesbox, "Some Notes");
    expect(notesbox).toHaveValue("Some Notes");
  });

  it("Should copy the content of the notesbox to clipboard", () => {
    navigator.clipboard.writeText = jest.fn();
    render(<NotesBox />);
    const notesbox = screen.getByRole("textbox");
    userEvent.type(notesbox, "Some Notes");
    const copyToClipboardButton = screen.getByRole("button", {
      name: "Copy This Note To Clipboard",
    });
    userEvent.click(copyToClipboardButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("Some Notes");
  });
});

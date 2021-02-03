import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from 'react-test-renderer';

import NoteList from "./NoteList";

test("user can add a single note", () => {
  render(<NoteList />);

  const textBox = screen.getByRole("textbox");
  userEvent.type(textBox, "A test note!");
  userEvent.click(screen.getByText("Submit"));
  const note = screen.getByText("A test note!");

  expect(note).toBeInTheDocument();
});

test('renders correctly when there are no notes', () => {
  const tree = renderer.create(<NoteList />).toJSON();
  expect(tree).toMatchSnapshot();
});

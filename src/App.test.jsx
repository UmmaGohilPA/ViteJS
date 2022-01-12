import React from "react";
import renderer from "react-test-renderer";
import { expect, test } from "vitest";
import App from "./App";

test("About renders a snapshot properly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

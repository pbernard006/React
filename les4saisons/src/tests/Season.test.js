import Season from "../components/Season";

import React from "react";
import { render, screen} from '@testing-library/react' ;
import "@testing-library/jest-dom" ;

describe(Season.name, () => {
    it("renders a title 'Winter'", () => {
        render(<Season name="Winter"/>);
        expect(screen.queryByText("Winter")).toBeInTheDocument();
    });
    it("renders a start date '2021-12-21'", () => {});
    it("renders a end date '2022-03-19", () => {});
})
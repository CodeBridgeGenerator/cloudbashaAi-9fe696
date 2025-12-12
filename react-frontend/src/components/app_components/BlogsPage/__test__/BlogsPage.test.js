import React from "react";
import { render, screen } from "@testing-library/react";

import BlogsPage from "../BlogsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders blogs page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BlogsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("blogs-datatable")).toBeInTheDocument();
    expect(screen.getByRole("blogs-add-button")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import ContactSubmissionsPage from "../ContactSubmissionsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contactSubmissions page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContactSubmissionsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contactSubmissions-datatable")).toBeInTheDocument();
    expect(screen.getByRole("contactSubmissions-add-button")).toBeInTheDocument();
});

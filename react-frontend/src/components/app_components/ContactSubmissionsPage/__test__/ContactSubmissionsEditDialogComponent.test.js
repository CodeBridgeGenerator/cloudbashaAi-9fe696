import React from "react";
import { render, screen } from "@testing-library/react";

import ContactSubmissionsEditDialogComponent from "../ContactSubmissionsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contactSubmissions edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContactSubmissionsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contactSubmissions-edit-dialog-component")).toBeInTheDocument();
});

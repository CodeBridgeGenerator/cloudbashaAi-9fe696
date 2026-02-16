import React from "react";
import { render, screen } from "@testing-library/react";

import ContactSubmissionsCreateDialogComponent from "../ContactSubmissionsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contactSubmissions create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContactSubmissionsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contactSubmissions-create-dialog-component")).toBeInTheDocument();
});

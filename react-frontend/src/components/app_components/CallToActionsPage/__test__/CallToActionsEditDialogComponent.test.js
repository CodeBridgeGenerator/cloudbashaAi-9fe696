import React from "react";
import { render, screen } from "@testing-library/react";

import CallToActionsEditDialogComponent from "../CallToActionsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders callToActions edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CallToActionsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("callToActions-edit-dialog-component")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import CallToActionsPage from "../CallToActionsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders callToActions page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CallToActionsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("callToActions-datatable")).toBeInTheDocument();
    expect(screen.getByRole("callToActions-add-button")).toBeInTheDocument();
});

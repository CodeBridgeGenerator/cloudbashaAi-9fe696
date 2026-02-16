import React from "react";
import { render, screen } from "@testing-library/react";

import EmailSubscriptionsCreateDialogComponent from "../EmailSubscriptionsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders emailSubscriptions create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmailSubscriptionsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("emailSubscriptions-create-dialog-component")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import EmailSubscriptionsPage from "../EmailSubscriptionsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../../models";

test("renders emailSubscriptions page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <EmailSubscriptionsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("emailSubscriptions-datatable")).toBeInTheDocument();
    expect(screen.getByRole("emailSubscriptions-add-button")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";

import ApiTokensPage from "../ApiTokensPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders apiTokens page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ApiTokensPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("apiTokens-datatable")).toBeInTheDocument();
    expect(screen.getByRole("apiTokens-add-button")).toBeInTheDocument();
});

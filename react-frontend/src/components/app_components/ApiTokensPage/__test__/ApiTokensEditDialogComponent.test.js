import React from "react";
import { render, screen } from "@testing-library/react";

import ApiTokensEditDialogComponent from "../ApiTokensEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders apiTokens edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ApiTokensEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("apiTokens-edit-dialog-component")).toBeInTheDocument();
});

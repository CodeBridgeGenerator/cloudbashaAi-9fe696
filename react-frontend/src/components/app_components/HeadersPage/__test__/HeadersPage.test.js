import React from "react";
import { render, screen } from "@testing-library/react";

import HeadersPage from "../HeadersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders headers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HeadersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("headers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("headers-add-button")).toBeInTheDocument();
});

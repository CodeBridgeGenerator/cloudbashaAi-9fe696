import React from "react";
import { render, screen } from "@testing-library/react";

import ContentsPage from "../ContentsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders contents page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ContentsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("contents-datatable")).toBeInTheDocument();
    expect(screen.getByRole("contents-add-button")).toBeInTheDocument();
});

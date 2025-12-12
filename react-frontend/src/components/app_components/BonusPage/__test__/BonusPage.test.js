import React from "react";
import { render, screen } from "@testing-library/react";

import BonusPage from "../BonusPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders bonus page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BonusPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("bonus-datatable")).toBeInTheDocument();
    expect(screen.getByRole("bonus-add-button")).toBeInTheDocument();
});

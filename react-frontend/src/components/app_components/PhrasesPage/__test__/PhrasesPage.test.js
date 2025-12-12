import React from "react";
import { render, screen } from "@testing-library/react";

import PhrasesPage from "../PhrasesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders phrases page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PhrasesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("phrases-datatable")).toBeInTheDocument();
    expect(screen.getByRole("phrases-add-button")).toBeInTheDocument();
});

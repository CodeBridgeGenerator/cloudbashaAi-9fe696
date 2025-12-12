import React from "react";
import { render, screen } from "@testing-library/react";

import FaqsPage from "../FaqsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders faqs page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FaqsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("faqs-datatable")).toBeInTheDocument();
    expect(screen.getByRole("faqs-add-button")).toBeInTheDocument();
});

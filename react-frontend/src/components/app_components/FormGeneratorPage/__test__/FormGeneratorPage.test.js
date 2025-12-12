import React from "react";
import { render, screen } from "@testing-library/react";

import FormGeneratorPage from "../FormGeneratorPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders formGenerator page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FormGeneratorPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("formGenerator-datatable")).toBeInTheDocument();
    expect(screen.getByRole("formGenerator-add-button")).toBeInTheDocument();
});

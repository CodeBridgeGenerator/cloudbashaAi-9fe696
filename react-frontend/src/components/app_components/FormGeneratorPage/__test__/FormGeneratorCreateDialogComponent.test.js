import React from "react";
import { render, screen } from "@testing-library/react";

import FormGeneratorCreateDialogComponent from "../FormGeneratorCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders formGenerator create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FormGeneratorCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("formGenerator-create-dialog-component")).toBeInTheDocument();
});

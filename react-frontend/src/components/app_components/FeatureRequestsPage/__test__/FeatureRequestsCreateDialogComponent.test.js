import React from "react";
import { render, screen } from "@testing-library/react";

import FeatureRequestsCreateDialogComponent from "../FeatureRequestsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders featureRequests create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FeatureRequestsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("featureRequests-create-dialog-component")).toBeInTheDocument();
});

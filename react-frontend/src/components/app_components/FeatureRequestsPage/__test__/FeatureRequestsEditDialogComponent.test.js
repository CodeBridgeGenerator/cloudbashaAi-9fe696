import React from "react";
import { render, screen } from "@testing-library/react";

import FeatureRequestsEditDialogComponent from "../FeatureRequestsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders featureRequests edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FeatureRequestsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("featureRequests-edit-dialog-component")).toBeInTheDocument();
});

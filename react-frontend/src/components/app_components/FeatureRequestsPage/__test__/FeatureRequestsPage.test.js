import React from "react";
import { render, screen } from "@testing-library/react";

import FeatureRequestsPage from "../FeatureRequestsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../../models";

test("renders featureRequests page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <FeatureRequestsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("featureRequests-datatable")).toBeInTheDocument();
    expect(screen.getByRole("featureRequests-add-button")).toBeInTheDocument();
});

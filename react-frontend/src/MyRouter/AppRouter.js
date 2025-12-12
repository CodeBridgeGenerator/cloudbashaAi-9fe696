import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";


import SingleCmsPage from "../components/app_components/CmsPage/SingleCmsPage";
import CmProjectLayoutPage from "../components/app_components/CmsPage/CmProjectLayoutPage";
import SingleFormGeneratorPage from "../components/app_components/FormGeneratorPage/SingleFormGeneratorPage";
import FormGeneratorProjectLayoutPage from "../components/app_components/FormGeneratorPage/FormGeneratorProjectLayoutPage";
import SingleContactSubmissionsPage from "../components/app_components/ContactSubmissionsPage/SingleContactSubmissionsPage";
import ContactSubmissionProjectLayoutPage from "../components/app_components/ContactSubmissionsPage/ContactSubmissionProjectLayoutPage";
import SinglePaymentsPage from "../components/app_components/PaymentsPage/SinglePaymentsPage";
import PaymentProjectLayoutPage from "../components/app_components/PaymentsPage/PaymentProjectLayoutPage";
import SingleWorkspacesPage from "../components/app_components/WorkspacesPage/SingleWorkspacesPage";
import WorkspaceProjectLayoutPage from "../components/app_components/WorkspacesPage/WorkspaceProjectLayoutPage";
import SingleWorkspaceMembersPage from "../components/app_components/WorkspaceMembersPage/SingleWorkspaceMembersPage";
import WorkspaceMemberProjectLayoutPage from "../components/app_components/WorkspaceMembersPage/WorkspaceMemberProjectLayoutPage";
import SinglePhrasesPage from "../components/app_components/PhrasesPage/SinglePhrasesPage";
import PhraseProjectLayoutPage from "../components/app_components/PhrasesPage/PhraseProjectLayoutPage";
import SingleHeadersPage from "../components/app_components/HeadersPage/SingleHeadersPage";
import HeaderProjectLayoutPage from "../components/app_components/HeadersPage/HeaderProjectLayoutPage";
import SingleContentsPage from "../components/app_components/ContentsPage/SingleContentsPage";
import ContentProjectLayoutPage from "../components/app_components/ContentsPage/ContentProjectLayoutPage";
import SingleBlogsPage from "../components/app_components/BlogsPage/SingleBlogsPage";
import BlogProjectLayoutPage from "../components/app_components/BlogsPage/BlogProjectLayoutPage";
import SingleBonusPage from "../components/app_components/BonusPage/SingleBonusPage";
import BonusProjectLayoutPage from "../components/app_components/BonusPage/BonusProjectLayoutPage";
import SingleFaqsPage from "../components/app_components/FaqsPage/SingleFaqsPage";
import FaqProjectLayoutPage from "../components/app_components/FaqsPage/FaqProjectLayoutPage";
import SingleCallToActionsPage from "../components/app_components/CallToActionsPage/SingleCallToActionsPage";
import CallToActionProjectLayoutPage from "../components/app_components/CallToActionsPage/CallToActionProjectLayoutPage";
import SingleApiTokensPage from "../components/app_components/ApiTokensPage/SingleApiTokensPage";
import ApiTokenProjectLayoutPage from "../components/app_components/ApiTokensPage/ApiTokenProjectLayoutPage";
//  ~cb-add-import~

const AppRouter = () => {
  return (
    <Routes>
      {/* ~cb-add-unprotected-route~ */}
      <Route element={<ProtectedRoute redirectPath={"/login"} />}>
        
<Route path="/cms/:singleCmsId" exact element={<SingleCmsPage />} />
<Route path="/cms" exact element={<CmProjectLayoutPage />} />
<Route path="/formGenerator/:singleFormGeneratorId" exact element={<SingleFormGeneratorPage />} />
<Route path="/formGenerator" exact element={<FormGeneratorProjectLayoutPage />} />
<Route path="/contactSubmissions/:singleContactSubmissionsId" exact element={<SingleContactSubmissionsPage />} />
<Route path="/contactSubmissions" exact element={<ContactSubmissionProjectLayoutPage />} />
<Route path="/payments/:singlePaymentsId" exact element={<SinglePaymentsPage />} />
<Route path="/payments" exact element={<PaymentProjectLayoutPage />} />
<Route path="/workspaces/:singleWorkspacesId" exact element={<SingleWorkspacesPage />} />
<Route path="/workspaces" exact element={<WorkspaceProjectLayoutPage />} />
<Route path="/workspaceMembers/:singleWorkspaceMembersId" exact element={<SingleWorkspaceMembersPage />} />
<Route path="/workspaceMembers" exact element={<WorkspaceMemberProjectLayoutPage />} />
<Route path="/phrases/:singlePhrasesId" exact element={<SinglePhrasesPage />} />
<Route path="/phrases" exact element={<PhraseProjectLayoutPage />} />
<Route path="/headers/:singleHeadersId" exact element={<SingleHeadersPage />} />
<Route path="/headers" exact element={<HeaderProjectLayoutPage />} />
<Route path="/contents/:singleContentsId" exact element={<SingleContentsPage />} />
<Route path="/contents" exact element={<ContentProjectLayoutPage />} />
<Route path="/blogs/:singleBlogsId" exact element={<SingleBlogsPage />} />
<Route path="/blogs" exact element={<BlogProjectLayoutPage />} />
<Route path="/bonus/:singleBonusId" exact element={<SingleBonusPage />} />
<Route path="/bonus" exact element={<BonusProjectLayoutPage />} />
<Route path="/faqs/:singleFaqsId" exact element={<SingleFaqsPage />} />
<Route path="/faqs" exact element={<FaqProjectLayoutPage />} />
<Route path="/callToActions/:singleCallToActionsId" exact element={<SingleCallToActionsPage />} />
<Route path="/callToActions" exact element={<CallToActionProjectLayoutPage />} />
<Route path="/apiTokens/:singleApiTokensId" exact element={<SingleApiTokensPage />} />
<Route path="/apiTokens" exact element={<ApiTokenProjectLayoutPage />} />
        {/* ~cb-add-protected-route~ */}
      </Route>
    </Routes>
  );
};

const mapState = (state) => {
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
};
const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(AppRouter);

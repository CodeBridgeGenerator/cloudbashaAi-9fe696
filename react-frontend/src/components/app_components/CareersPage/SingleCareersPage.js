import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { classNames } from "primereact/utils";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { SplitButton } from "primereact/splitbutton";
import client from "../../../services/restClient";
import CommentsSection from "../../common/CommentsSection";
import ProjectLayout from "../../Layouts/ProjectLayout";


const SingleCareersPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState({});
  const [isHelpSidebarVisible, setHelpSidebarVisible] = useState(false);

    

    useEffect(() => {
        //on mount
        client
            .service("careers")
            .get(urlParams.singleCareersId, { query: { $populate: [            {
                path: "createdBy",
                service: "users",
                select: ["name"],
              },{
                path: "updatedBy",
                service: "users",
                select: ["name"],
              },] }})
            .then((res) => {
                set_entity(res || {});
                
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Careers", type: "error", message: error.message || "Failed get careers" });
            });
    }, [props,urlParams.singleCareersId]);


    const goBack = () => {
        navigate("/careers");
    };

      const toggleHelpSidebar = () => {
    setHelpSidebarVisible(!isHelpSidebarVisible);
  };

  const copyPageLink = () => {
    const currentUrl = window.location.href;

    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        props.alert({
          title: "Link Copied",
          type: "success",
          message: "Page link copied to clipboard!",
        });
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
        props.alert({
          title: "Error",
          type: "error",
          message: "Failed to copy page link.",
        });
      });
  };

    const menuItems = [
        {
            label: "Copy link",
            icon: "pi pi-copy",
            command: () => copyPageLink(),
        },
        {
            label: "Help",
            icon: "pi pi-question-circle",
            command: () => toggleHelpSidebar(),
        },
    ];

    return (
        <ProjectLayout>
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-12">
                <div className="flex align-items-center justify-content-between">
                <div className="flex align-items-center">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Careers</h3>
                    <SplitButton
                        model={menuItems.filter(
                        (m) => !(m.icon === "pi pi-trash" && items?.length === 0),
                        )}
                        dropdownIcon="pi pi-ellipsis-h"
                        buttonClassName="hidden"
                        menuButtonClassName="ml-1 p-button-text"
                    />
                </div>
                
                {/* <p>careers/{urlParams.singleCareersId}</p> */}
            </div>
            <div className="card w-full">
                <div className="grid ">

            <div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Position</label><p className="m-0 ml-3" >{_entity?.position}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Category</label><p className="m-0 ml-3" >{_entity?.category}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Location</label><p className="m-0 ml-3" >{_entity?.location}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Employment Type</label><p className="m-0 ml-3" >{_entity?.employmentType}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Job Description</label><p className="m-0 ml-3" >{_entity?.jobDescription}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Requirements</label><p className="m-0 ml-3" >{_entity?.requirements}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">About The Team</label><p className="m-0 ml-3" >{_entity?.aboutTheTeam}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Salary Range</label><p className="m-0 ml-3" >{_entity?.salaryRange}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Experience Level</label><p className="m-0 ml-3" >{_entity?.experienceLevel}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Is Active</label><p className="m-0" ><i id="isActive" className={`pi ${_entity?.isActive?"pi-check": "pi-times"}`}  ></i></p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Responsibilites</label><p className="m-0 ml-3" >{_entity?.responsibilites}</p></div>
<div className="col-12 md:col-6 lg:col-3"><label className="text-sm text-gray-600">Application Link</label><p className="m-0 ml-3" >{_entity?.applicationLink}</p></div>
            

                    <div className="col-12">&nbsp;</div>
                </div>
            </div>
         </div>

      


      <CommentsSection
        recordId={urlParams.singleCareersId}
        user={props.user}
        alert={props.alert}
        serviceName="careers"
      />
      <div
        id="rightsidebar"
        className={classNames("overlay-auto z-1 surface-overlay shadow-2 absolute right-0 w-20rem animation-duration-150 animation-ease-in-out", { "hidden" : !isHelpSidebarVisible })}
        style={{ top: "60px", height: "calc(100% - 60px)" }}
      >
        <div className="flex flex-column h-full p-4">
          <span className="text-xl font-medium text-900 mb-3">Help bar</span>
          <div className="border-2 border-dashed surface-border border-round surface-section flex-auto"></div>
        </div>
      </div>
      </div>
        </ProjectLayout>
    );
};

const mapState = (state) => {
    const { user, isLoggedIn } = state.auth;
    return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(SingleCareersPage);

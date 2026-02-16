/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Calendar } from "primereact/calendar";
import { Checkbox } from 'primereact/checkbox';


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const CareersEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            position: _entity?.position,
category: _entity?.category,
location: _entity?.location,
employmentType: _entity?.employmentType,
jobDescription: _entity?.jobDescription,
requirements: _entity?.requirements,
aboutTheTeam: _entity?.aboutTheTeam,
salaryRange: _entity?.salaryRange,
experienceLevel: _entity?.experienceLevel,
applicationDeadline: _entity?.applicationDeadline,
isActive: _entity?.isActive,
responsibilites: _entity?.responsibilites,
applicationLink: _entity?.applicationLink,
        };

        setLoading(true);
        try {
            
        const result = await client.service("careers").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info careers updated successfully" });
        props.onEditResult(result);
        
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to update info");
            props.alert({ type: "error", title: "Edit info", message: "Failed to update info" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Edit Careers" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="careers-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="position">Position:</label>
                <InputText id="position" className="w-full mb-3 p-inputtext-sm" value={_entity?.position} onChange={(e) => setValByKey("position", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["position"]) && (
              <p className="m-0" key="error-position">
                {error["position"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="category">Category:</label>
                <InputText id="category" className="w-full mb-3 p-inputtext-sm" value={_entity?.category} onChange={(e) => setValByKey("category", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["category"]) && (
              <p className="m-0" key="error-category">
                {error["category"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="location">Location:</label>
                <InputText id="location" className="w-full mb-3 p-inputtext-sm" value={_entity?.location} onChange={(e) => setValByKey("location", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["location"]) && (
              <p className="m-0" key="error-location">
                {error["location"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="employmentType">Employment Type:</label>
                <InputText id="employmentType" className="w-full mb-3 p-inputtext-sm" value={_entity?.employmentType} onChange={(e) => setValByKey("employmentType", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["employmentType"]) && (
              <p className="m-0" key="error-employmentType">
                {error["employmentType"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="jobDescription">Job Description:</label>
                <InputText id="jobDescription" className="w-full mb-3 p-inputtext-sm" value={_entity?.jobDescription} onChange={(e) => setValByKey("jobDescription", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["jobDescription"]) && (
              <p className="m-0" key="error-jobDescription">
                {error["jobDescription"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="requirements">Requirements:</label>
                <InputText id="requirements" className="w-full mb-3 p-inputtext-sm" value={_entity?.requirements} onChange={(e) => setValByKey("requirements", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["requirements"]) && (
              <p className="m-0" key="error-requirements">
                {error["requirements"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="aboutTheTeam">About The Team:</label>
                <InputText id="aboutTheTeam" className="w-full mb-3 p-inputtext-sm" value={_entity?.aboutTheTeam} onChange={(e) => setValByKey("aboutTheTeam", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["aboutTheTeam"]) && (
              <p className="m-0" key="error-aboutTheTeam">
                {error["aboutTheTeam"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="salaryRange">Salary Range:</label>
                <InputText id="salaryRange" className="w-full mb-3 p-inputtext-sm" value={_entity?.salaryRange} onChange={(e) => setValByKey("salaryRange", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["salaryRange"]) && (
              <p className="m-0" key="error-salaryRange">
                {error["salaryRange"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="experienceLevel">Experience Level:</label>
                <InputText id="experienceLevel" className="w-full mb-3 p-inputtext-sm" value={_entity?.experienceLevel} onChange={(e) => setValByKey("experienceLevel", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["experienceLevel"]) && (
              <p className="m-0" key="error-experienceLevel">
                {error["experienceLevel"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="applicationDeadline">Application Deadline:</label>
                <Calendar id="applicationDeadline"  value={_entity?.applicationDeadline ? new Date(_entity?.applicationDeadline) : null} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("applicationDeadline", new Date(e.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["applicationDeadline"]) && (
              <p className="m-0" key="error-applicationDeadline">
                {error["applicationDeadline"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="isActive">Is Active:</label>
                <Checkbox id="isActive" className="ml-3" checked={_entity?.isActive} onChange={(e) => setValByKey("isActive", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["isActive"]) && (
              <p className="m-0" key="error-isActive">
                {error["isActive"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="responsibilites">Responsibilites:</label>
                <InputText id="responsibilites" className="w-full mb-3 p-inputtext-sm" value={_entity?.responsibilites} onChange={(e) => setValByKey("responsibilites", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["responsibilites"]) && (
              <p className="m-0" key="error-responsibilites">
                {error["responsibilites"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="applicationLink">Application Link:</label>
                <InputText id="applicationLink" className="w-full mb-3 p-inputtext-sm" value={_entity?.applicationLink} onChange={(e) => setValByKey("applicationLink", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["applicationLink"]) && (
              <p className="m-0" key="error-applicationLink">
                {error["applicationLink"]}
              </p>
            )}
          </small>
            </div>
                <div className="col-12">&nbsp;</div>
                <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(CareersEditDialogComponent);

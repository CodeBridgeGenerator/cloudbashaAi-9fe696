/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import UploadFilesToS3 from "../../../services/UploadFilesToS3";
import { Editor } from 'primereact/editor';
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

const CmsEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            name: _entity?.name,
path: _entity?.path,
image1: _entity?.image1,
image2: _entity?.image2,
category: _entity?.category,
headerContent: _entity?.headerContent,
bodyContent: _entity?.bodyContent,
disclaimer: _entity?.disclaimer,
visible: _entity?.visible,
bodyList: _entity?.bodyList,
        };

        setLoading(true);
        try {
            
        const result = await client.service("cms").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info cms updated successfully" });
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
        <Dialog header="Edit Cms" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="cms-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="name">name:</label>
                <InputText id="name" className="w-full mb-3 p-inputtext-sm" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["name"]) && (
              <p className="m-0" key="error-name">
                {error["name"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="path">path:</label>
                <InputText id="path" className="w-full mb-3 p-inputtext-sm" value={_entity?.path} onChange={(e) => setValByKey("path", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["path"]) && (
              <p className="m-0" key="error-path">
                {error["path"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 field">
                <span className="align-items-center">
                    <label htmlFor="image1">image1:</label>
                    <UploadFilesToS3 type={'edit'} setValByKey={setValByKey} onSave={onSave} id={urlParams.singleCmsId} serviceName="cms" />
                </span>
                <small className="p-error">
                {!_.isEmpty(error["image1"]) && (
                  <p className="m-0" key="error-image1">
                    {error["image1"]}
                  </p>
                )}
              </small>
                </div>
<div className="col-12 field">
                <span className="align-items-center">
                    <label htmlFor="image2">image2:</label>
                    <UploadFilesToS3 type={'edit'} setValByKey={setValByKey} onSave={onSave} id={urlParams.singleCmsId} serviceName="cms" />
                </span>
                <small className="p-error">
                {!_.isEmpty(error["image2"]) && (
                  <p className="m-0" key="error-image2">
                    {error["image2"]}
                  </p>
                )}
              </small>
                </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="category">category:</label>
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
<div className="col-12 field">
                <span className="align-items-center">
                    <label htmlFor="headerContent">headerContent:</label>
                    <Editor id="headerContent" value={_entity?.headerContent} onTextChange={(e) => setValByKey("headerContent", e.htmlValue)} style={{ height: '320px' }} />
                </span>
                <small className="p-error">
                {!_.isEmpty(error["headerContent"]) && (
                  <p className="m-0" key="error-headerContent">
                    {error["headerContent"]}
                  </p>
                ) }
              </small>
                </div>
<div className="col-12 field">
                <span className="align-items-center">
                    <label htmlFor="bodyContent">bodyContent:</label>
                    <Editor id="bodyContent" value={_entity?.bodyContent} onTextChange={(e) => setValByKey("bodyContent", e.htmlValue)} style={{ height: '320px' }} />
                </span>
                <small className="p-error">
                {!_.isEmpty(error["bodyContent"]) && (
                  <p className="m-0" key="error-bodyContent">
                    {error["bodyContent"]}
                  </p>
                ) }
              </small>
                </div>
<div className="col-12 field">
                <span className="align-items-center">
                    <label htmlFor="disclaimer">disclaimer:</label>
                    <Editor id="disclaimer" value={_entity?.disclaimer} onTextChange={(e) => setValByKey("disclaimer", e.htmlValue)} style={{ height: '320px' }} />
                </span>
                <small className="p-error">
                {!_.isEmpty(error["disclaimer"]) && (
                  <p className="m-0" key="error-disclaimer">
                    {error["disclaimer"]}
                  </p>
                ) }
              </small>
                </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="visible">visible:</label>
                <Checkbox id="visible" className="ml-3" checked={_entity?.visible} onChange={(e) => setValByKey("visible", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["visible"]) && (
              <p className="m-0" key="error-visible">
                {error["visible"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 field">
                <span className="align-items-center">
                    <label htmlFor="bodyList">headerContent:</label>
                    <Editor id="bodyList" value={_entity?.bodyList} onTextChange={(e) => setValByKey("bodyList", e.htmlValue)} style={{ height: '320px' }} />
                </span>
                <small className="p-error">
                {!_.isEmpty(error["bodyList"]) && (
                  <p className="m-0" key="error-bodyList">
                    {error["bodyList"]}
                  </p>
                ) }
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

export default connect(mapState, mapDispatch)(CmsEditDialogComponent);

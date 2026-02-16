/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';


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

const ApiTokensEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            company: _entity?.company,
apiKey: _entity?.apiKey,
apiSecret: _entity?.apiSecret,
accessToken: _entity?.accessToken,
createdDate: _entity?.createdDate,
expiryDate: _entity?.expiryDate,
status: _entity?.status,
environment: _entity?.environment,
notes: _entity?.notes,
        };

        setLoading(true);
        try {
            
        const result = await client.service("apiTokens").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info apiTokens updated successfully" });
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
        <Dialog header="Edit Api Tokens" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="apiTokens-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="company">Company:</label>
                <InputText id="company" className="w-full mb-3 p-inputtext-sm" value={_entity?.company} onChange={(e) => setValByKey("company", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["company"]) && (
              <p className="m-0" key="error-company">
                {error["company"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="apiKey">API Key:</label>
                <InputText id="apiKey" className="w-full mb-3 p-inputtext-sm" value={_entity?.apiKey} onChange={(e) => setValByKey("apiKey", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["apiKey"]) && (
              <p className="m-0" key="error-apiKey">
                {error["apiKey"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="apiSecret">API Secret:</label>
                <InputText id="apiSecret" className="w-full mb-3 p-inputtext-sm" value={_entity?.apiSecret} onChange={(e) => setValByKey("apiSecret", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["apiSecret"]) && (
              <p className="m-0" key="error-apiSecret">
                {error["apiSecret"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="accessToken">Access Token:</label>
                <InputText id="accessToken" className="w-full mb-3 p-inputtext-sm" value={_entity?.accessToken} onChange={(e) => setValByKey("accessToken", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["accessToken"]) && (
              <p className="m-0" key="error-accessToken">
                {error["accessToken"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="createdDate">Created Date:</label>
                <InputNumber id="createdDate" className="w-full mb-3 p-inputtext-sm" value={_entity?.createdDate} onChange={(e) => setValByKey("createdDate", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["createdDate"]) && (
              <p className="m-0" key="error-createdDate">
                {error["createdDate"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="expiryDate">Expiry Date:</label>
                <InputNumber id="expiryDate" className="w-full mb-3 p-inputtext-sm" value={_entity?.expiryDate} onChange={(e) => setValByKey("expiryDate", e.value)}  useGrouping={false}/>
            </span>
            <small className="p-error">
            {!_.isEmpty(error["expiryDate"]) && (
              <p className="m-0" key="error-expiryDate">
                {error["expiryDate"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="status">Status:</label>
                <InputText id="status" className="w-full mb-3 p-inputtext-sm" value={_entity?.status} onChange={(e) => setValByKey("status", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["status"]) && (
              <p className="m-0" key="error-status">
                {error["status"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="environment">Environment:</label>
                <InputText id="environment" className="w-full mb-3 p-inputtext-sm" value={_entity?.environment} onChange={(e) => setValByKey("environment", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["environment"]) && (
              <p className="m-0" key="error-environment">
                {error["environment"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="notes">Notes:</label>
                <InputText id="notes" className="w-full mb-3 p-inputtext-sm" value={_entity?.notes} onChange={(e) => setValByKey("notes", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["notes"]) && (
              <p className="m-0" key="error-notes">
                {error["notes"]}
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

export default connect(mapState, mapDispatch)(ApiTokensEditDialogComponent);

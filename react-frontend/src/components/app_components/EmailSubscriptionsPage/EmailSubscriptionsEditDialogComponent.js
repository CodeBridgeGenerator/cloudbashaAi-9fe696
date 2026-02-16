/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from "primereact/calendar";


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

const EmailSubscriptionsEditDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        set_entity(props.entity);
    }, [props.entity, props.show]);

    

    const onSave = async () => {
        let _data = {
            email: _entity?.email,
subscribed: _entity?.subscribed,
token: _entity?.token,
source: _entity?.source,
unsubscribedAt: _entity?.unsubscribedAt,
subscribedAt: _entity?.subscribedAt,
lastChangedAt: _entity?.lastChangedAt,
        };

        setLoading(true);
        try {
            
        const result = await client.service("emailSubscriptions").patch(_entity._id, _data);
        props.onHide();
        props.alert({ type: "success", title: "Edit info", message: "Info emailSubscriptions updated successfully" });
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
        <Dialog header="Edit EmailSubscriptions" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="emailSubscriptions-edit-dialog-component">
                <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="email">email:</label>
                <InputText id="email" className="w-full mb-3 p-inputtext-sm" value={_entity?.email} onChange={(e) => setValByKey("email", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["email"]) && (
              <p className="m-0" key="error-email">
                {error["email"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="subscribed">subscribed:</label>
                <Checkbox id="subscribed" className="ml-3" checked={_entity?.subscribed} onChange={(e) => setValByKey("subscribed", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["subscribed"]) && (
              <p className="m-0" key="error-subscribed">
                {error["subscribed"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="token">token:</label>
                <InputText id="token" className="w-full mb-3 p-inputtext-sm" value={_entity?.token} onChange={(e) => setValByKey("token", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["token"]) && (
              <p className="m-0" key="error-token">
                {error["token"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="source">source:</label>
                <InputText id="source" className="w-full mb-3 p-inputtext-sm" value={_entity?.source} onChange={(e) => setValByKey("source", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["source"]) && (
              <p className="m-0" key="error-source">
                {error["source"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="unsubscribedAt">unsubscribedAt:</label>
                <Calendar id="unsubscribedAt"  value={_entity?.unsubscribedAt ? new Date(_entity?.unsubscribedAt) : null} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("unsubscribedAt", new Date(e.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["unsubscribedAt"]) && (
              <p className="m-0" key="error-unsubscribedAt">
                {error["unsubscribedAt"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="subscribedAt">subscribedAt:</label>
                <Calendar id="subscribedAt"  value={_entity?.subscribedAt ? new Date(_entity?.subscribedAt) : null} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("subscribedAt", new Date(e.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["subscribedAt"]) && (
              <p className="m-0" key="error-subscribedAt">
                {error["subscribedAt"]}
              </p>
            )}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="lastChangedAt">lastChangedAt:</label>
                <Calendar id="lastChangedAt"  value={_entity?.lastChangedAt ? new Date(_entity?.lastChangedAt) : null} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("lastChangedAt", new Date(e.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["lastChangedAt"]) && (
              <p className="m-0" key="error-lastChangedAt">
                {error["lastChangedAt"]}
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

export default connect(mapState, mapDispatch)(EmailSubscriptionsEditDialogComponent);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const FormGeneratorCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {isPublic: false};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            goal: _entity?.goal,status: _entity?.status,generatedQuestions: _entity?.generatedQuestions,formResponses: _entity?.formResponses,conversationHistory: _entity?.conversationHistory,dashboardData: _entity?.dashboardData,rawGeminiResponse: _entity?.rawGeminiResponse,generationError: _entity?.generationError,user: _entity?.user,collaborators: _entity?.collaborators,isPublic: _entity?.isPublic || false,publicUrl: _entity?.publicUrl,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("formGenerator").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Form Generator created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Form Generator" });
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
        <Dialog header="Create Form Generator" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="formGenerator-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="goal">Goal:</label>
                <InputText id="goal" className="w-full mb-3 p-inputtext-sm" value={_entity?.goal} onChange={(e) => setValByKey("goal", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["goal"]) ? (
              <p className="m-0" key="error-goal">
                {error["goal"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="status">Status:</label>
                <InputText id="status" className="w-full mb-3 p-inputtext-sm" value={_entity?.status} onChange={(e) => setValByKey("status", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["status"]) ? (
              <p className="m-0" key="error-status">
                {error["status"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="generatedQuestions">Generated Questions:</label>
                <InputText id="generatedQuestions" className="w-full mb-3 p-inputtext-sm" value={_entity?.generatedQuestions} onChange={(e) => setValByKey("generatedQuestions", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["generatedQuestions"]) ? (
              <p className="m-0" key="error-generatedQuestions">
                {error["generatedQuestions"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="formResponses">Form Responses:</label>
                <InputText id="formResponses" className="w-full mb-3 p-inputtext-sm" value={_entity?.formResponses} onChange={(e) => setValByKey("formResponses", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["formResponses"]) ? (
              <p className="m-0" key="error-formResponses">
                {error["formResponses"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="conversationHistory">Conversation History:</label>
                <InputText id="conversationHistory" className="w-full mb-3 p-inputtext-sm" value={_entity?.conversationHistory} onChange={(e) => setValByKey("conversationHistory", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["conversationHistory"]) ? (
              <p className="m-0" key="error-conversationHistory">
                {error["conversationHistory"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="dashboardData">Dashboard Data:</label>
                <InputText id="dashboardData" className="w-full mb-3 p-inputtext-sm" value={_entity?.dashboardData} onChange={(e) => setValByKey("dashboardData", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["dashboardData"]) ? (
              <p className="m-0" key="error-dashboardData">
                {error["dashboardData"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="rawGeminiResponse">Raw Gemini Response:</label>
                <InputText id="rawGeminiResponse" className="w-full mb-3 p-inputtext-sm" value={_entity?.rawGeminiResponse} onChange={(e) => setValByKey("rawGeminiResponse", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["rawGeminiResponse"]) ? (
              <p className="m-0" key="error-rawGeminiResponse">
                {error["rawGeminiResponse"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="generationError">Generation Error:</label>
                <InputText id="generationError" className="w-full mb-3 p-inputtext-sm" value={_entity?.generationError} onChange={(e) => setValByKey("generationError", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["generationError"]) ? (
              <p className="m-0" key="error-generationError">
                {error["generationError"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="user">User:</label>
                <InputText id="user" className="w-full mb-3 p-inputtext-sm" value={_entity?.user} onChange={(e) => setValByKey("user", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["user"]) ? (
              <p className="m-0" key="error-user">
                {error["user"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="collaborators">Collaborators:</label>
                <InputText id="collaborators" className="w-full mb-3 p-inputtext-sm" value={_entity?.collaborators} onChange={(e) => setValByKey("collaborators", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["collaborators"]) ? (
              <p className="m-0" key="error-collaborators">
                {error["collaborators"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="isPublic">Is Public:</label>
                <Checkbox id="isPublic" className="ml-3" checked={_entity?.isPublic} onChange={(e) => setValByKey("isPublic", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["isPublic"]) ? (
              <p className="m-0" key="error-isPublic">
                {error["isPublic"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="publicUrl">Public Url:</label>
                <InputText id="publicUrl" className="w-full mb-3 p-inputtext-sm" value={_entity?.publicUrl} onChange={(e) => setValByKey("publicUrl", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["publicUrl"]) ? (
              <p className="m-0" key="error-publicUrl">
                {error["publicUrl"]}
              </p>
            ) : null}
          </small>
            </div>
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

export default connect(mapState, mapDispatch)(FormGeneratorCreateDialogComponent);

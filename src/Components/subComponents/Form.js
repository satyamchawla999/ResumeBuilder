import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import { Modal } from "antd";

import { addResume, addDraft } from "../../Features/Users/usersSlice";
import { initialValue } from "../../Constants/const";
import FormInputs from "./FormInputs";
import { Template1, Template2, Template3 } from "../templateComponents";

import "../../Assets/Styles/template.css";
import "../../Assets/Styles/form.css";

const Form = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const [values, setValues] = useState(initialValue);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [template, setTemplate] = useState("template1");
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values !== initialValue && values.name !== "") {
      dispatch(addResume(values));
      setValues(initialValue);
      setSubmit(true);
      addToast('Published Successfully!', {
        appearance: 'success',
      });
    } else {
      addToast('Name Field Is Required.', {
        appearance: 'error',
      });
    }
  };

  const handleInputChange = (e) => {
    setSubmit(false);
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDraft = () => {
    if (values !== initialValue && values.name !== "") {
      dispatch(addDraft(values));
      setValues(initialValue);
      addToast('Added To Draft.', {
        appearance: 'success',
      });
    } else {
      addToast('Name Field Is Required.', {
        appearance: 'error',
      });
    }
  };

  const handleTemplateChange = (change) => {
    values.template = change;
    setTemplate(change);
  };

  const handleCancle = () => Navigate("/dashboard");
  const handleReset = () => setValues(initialValue);
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="form">
      <div className="formBox">
        <h1>Insert Details</h1>

        <FormInputs
          values={values}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleTemplateChange={handleTemplateChange}
          handleDraft={handleDraft}
          submit={submit}
        />

        <div className="formButtons">
          <button onClick={handleCancle}>Cancle</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={showModal}>Preview</button>
        </div>

        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[]}
          width={500}
        >
          
          {template === "template1" && (
              <div id="report">
                <Template1 values={values} />
              </div>
          )}

          {template === "template2" && (
              <div id="report">
                <Template2 values={values} />
              </div>
          )}

          {template === "template3" && (
              <div id="report">
                <Template3 values={values} />
              </div>
          )}

          <div className="modalButtons">
            <button onClick={() => handleTemplateChange("template1")}>
              Template 1
            </button>
            <button onClick={() => handleTemplateChange("template2")}>
              Template 2
            </button>
            <button onClick={() => handleTemplateChange("template3")}>
              Template 3
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Form;

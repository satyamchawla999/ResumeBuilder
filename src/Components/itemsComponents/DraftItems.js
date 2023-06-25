import { Modal } from "antd";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { addResume, deleteDraft } from "../../Features/Users/usersSlice"; //saveChange } from "../../Features/Users/usersSlice";
import React, { useState } from "react";
import { getItems } from "../../Constants/const";
import { Template1, Template2, Template3 } from "../templateComponents";
import FormInputs from "../subComponents/FormInputs";

import "../../Assets/Styles/items.css";
import "../../Assets/Styles/template.css";
import "../../Assets/Styles/template.scss";
import "../../Assets/Styles/draftItems.scss";

const DraftItems = (props) => {
  const dispatch = useDispatch();
  const { name } = getItems(props.item); //template } = getItems(props.item);
  const items = getItems(props.item);
  const [values, setValues] = useState(items);
  const [design, setDesign] = useState(props.item.template);
  const { addToast } = useToasts();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    if (values.name !== "") {
      e.preventDefault();
      dispatch(addResume(values));
      dispatch(deleteDraft(props.item.id));
      addToast("Published Successfully!", {
        appearance: "success",
      });
    } else {
      return addToast("Name Field Is Required.", {
        appearance: "error",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSaveChanges = (e) => {
    console.log("handleSaveChanges");
    // dispatch(saveChange(props.item));
    // setChange(!change);
    // handleTemplateChange(values.template)
  };

  const handleTemplateChange = (change) => {
    values.template = change;
    setDesign(change);
  };

  const handleDelete = () => {
    dispatch(deleteDraft(props.item.id));
    addToast("Deleted Successfully!", {
      appearance: "success",
    });
  };
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  return (
    <div className="cvItems draftItems">
      <div className="image">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
          alt="#"
        />
      </div>

      <div className="buttons">
        <p>Name: {name}</p>
        <button onClick={showModal}>Edit / Submit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={1000}
      >
        <div className="draftContainer">
          <div className="drafttemplateContainer">
            {design === "template1" && (
              <div id="report">
                <Template1 values={values} />
              </div>
            )}

            {design === "template2" && (
              <div id="report">
                <Template2 values={values} />
              </div>
            )}

            {design === "template3" && (
              <div id="report">
                <Template3 values={values} />
              </div>
            )}
          </div>

          <div className="draftFormContainer">
            <h1>Edit Resume</h1>
            <FormInputs
              handleTemplateChange={handleTemplateChange}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              handleSaveChanges={handleSaveChanges}
              values={values}
              toggle={"draft"}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DraftItems;

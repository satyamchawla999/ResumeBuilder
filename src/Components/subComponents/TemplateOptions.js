import { Modal } from "antd";
import { useState } from "react";

const TemplateOptions = (props) => {
  const { handleTemplateChange, handleDraft, toggle} = props; // handleSaveChanges } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);

  const handleSelect = (choice) => {
    setSelect1(false);
    setSelect2(false);
    setSelect3(false);

    if(choice === "template1"){setSelect1(true);}
    if(choice === "template2"){setSelect2(true);}
    if(choice === "template3"){setSelect3(true);}
    handleTemplateChange(choice);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="templateOptions">
        
      <div onClick={showModal}>Select Template</div>
      <button className="formSubmitButton">Submit</button>
      {toggle !== "draft" && 
        <div name="draft" onClick={handleDraft}>
          Add To Draft
        </div>
      }
      {/* {toggle === "draft" ? (
        <div name="draft" value={true} onClick={handleSaveChanges}>
          Save Changes
        </div>
      ) : (
        <div name="draft" onClick={handleDraft}>
          Add To Draft
        </div>
      )} */}

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        bodyStyle={{ height: "200px" }}
      >
        <div className="choice">
          <span>
            <img
              onClick={() => handleSelect("template1")}
              src={require("../../Assets/Images/template1.png")}
              alt="#"
            />
            {select1 ? (
              <p style={{ color: "red" }}>Selected</p>
            ) : (
              <p>Template 1</p>
            )}
          </span>

          <span>
            <img
              onClick={() => handleSelect("template2")}
              src={require("../../Assets/Images/template2.png")}
              alt="#"
            />
            {select2 ? (
              <p style={{ color: "red" }}>Selected</p>
            ) : (
              <p>Template 2</p>
            )}
          </span>

          <span>
            <img
              onClick={() => handleSelect("template3")}
              src={require("../../Assets/Images/template3.png")}
              alt="#"
            />
            {select3 ? (
              <p style={{ color: "red" }}>Selected</p>
            ) : (
              <p>Template 3</p>
            )}
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default TemplateOptions;

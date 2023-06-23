import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Modal } from 'antd';

import { addResume } from "../../Features/Users/usersSlice";
import { initialValue } from "../../Constants/const";
import FormInputs from "./FormInputs";
import {Template1,Template2} from "../templates";

import "../../Assets/Styles/template.css"
import "../../Assets/Styles/form.css"



const Form = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();

    const [values, setValues] = useState(initialValue);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [template, setTemplate] = useState("template1");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values !== initialValue) {
            dispatch(addResume(values));
            setValues(initialValue);
            setSubmit(true);
        }
    }

    const handleInputChange = (e) => {
        setSubmit(false);
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleTemplateChange = (change) => {
        values.template = change;
        setTemplate(change);
    }

    const handleCancle = () => {
        Navigate("/dashboard");
    }

    const handleReset = () => {
        setValues(initialValue)
    }

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
        <div className="form">

            <div className="formBox">

                <h1>Insert Details</h1>


                <FormInputs
                    values={values}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    handleTemplateChange={handleTemplateChange}
                    submit={submit}
                />

                <div className="formButtons">
                    <button onClick={handleCancle}>Cancle</button>
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={showModal}>Preview</button>
                </div>

                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} width={500}>
                    {template === "template3" && 
                         <>

                        <div className={template}>

                            <div className="resumeSection1">

                                {template === "template1" && <img src={require("../../Assets/Images/avataar.png")} />}
                                {template === "template2" && <img src={require("../../Assets/Images/avataar2.png")} />}
                                {template === "template3" && <img src={require("../../Assets/Images/avataar3.png")} />}

                                <h1>Info</h1>
                                <p>Name : {values.name}</p>
                                <p>Email : {values.email}</p>

                                <h1>Language</h1>
                                <p>Language-1 : {values.language1}</p>
                                <p>Language-2 : {values.language2}</p>

                                <h1>Organisation</h1>
                                <p>Organisation : {values.organisation}</p>

                            </div>

                            <div className="resumeSection2">

                                <h1>Summary</h1>
                                <p>Summary : {values.summary}</p>

                                <h1>Skills</h1>
                                <p>Skill-1 : {values.skill1}</p>
                                <p>Skill-2 : {values.skill2}</p>

                                <h1>Education</h1>
                                <p>School : {values.school}</p>
                                <p>College : {values.college}</p>

                                <h1>Experience</h1>
                                <p>Experience : {values.experience}</p>

                            </div>

                        </div>

                    </>}

                    {template === "template1" && <>
                        <div id="report">
                            <Template1 values={values} />
                        </div>
                    </>}

                    {template === "template2" && <>
                        <div id="report">
                            <Template2 values={values} />
                        </div>
                    </>}


                    <div className="modalButtons">
                        <button onClick={() => handleTemplateChange("template1")}>Template 1</button>
                        <button onClick={() => handleTemplateChange("template2")}>Template 2</button>
                        <button onClick={() => handleTemplateChange("template3")}>Template 3</button>
                    </div>
                    
                </Modal>

            </div>

        </div>
    );
}

export default Form;
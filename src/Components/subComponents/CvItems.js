import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteResume } from '../../Features/Users/usersSlice';
import React, { useState } from 'react';
import { getItems } from '../../Constants/const';
import { generatePDF } from "../../Constants/const";
import {Template1,Template2} from "../templates"

import "../../Assets/Styles/items.css";
import "../../Assets/Styles/template.css";
import "../../Assets/Styles/template.scss";


const CvItems = (props) => {

    const dispatch = useDispatch();

    const {
        name,
        email,
        experience,
        language1,
        language2,
        skill1,
        skill2,
        organisation,
        summary,
        school,
        college,
        template
    } = getItems(props.item);

    const values = getItems(props.item);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => setIsModalOpen(true);

    const handleOk = () => setIsModalOpen(false);

    const handleCancel = () => setIsModalOpen(false);

    const handleDelete = () => dispatch(deleteResume(props.item.id))

    return (
        <div className="cvItems">

            <div className="image">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="#" />
            </div>

            <div className="buttons">
                <p>Name: {name}</p>
                <button onClick={showModal}>
                    View
                </button>
                <button onClick={handleDelete}>
                    Delete
                </button>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >

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
                
                {template === "template3" && <>
                <div id="report">
                <div className={template} id="report">
                        <div className="resumeSection1">
                            {template === "template1" && <img src={require("../../Assets/Images/avataar.png")} alt="#" />}
                            {template === "template2" && <img src={require("../../Assets/Images/avataar2.png")} alt="#" />}
                            {template === "template3" && <img src="https://media.licdn.com/dms/image/C4D03AQHLP6gI90jGEQ/profile-displayphoto-shrink_200_200/0/1658116787038?e=1692835200&v=beta&t=t7FEtrdEvLT1CcxueC_rJA7eRJL61swj5IXWBuohdOE" alt="#" />}

                            <h1>Info</h1>
                            <p>Name : {name}</p>
                            <p>Email : {email}</p>

                            <h1>Language</h1>
                            <p>Language-1 : {language1}</p>
                            <p>Language-2 : {language2}</p>

                            <h1>Organisation</h1>
                            <p>Organisation : {organisation}</p>
                        </div>

                        <div className="resumeSection2">
                            <h1>Summary</h1>
                            <p>Summary : {summary}</p>

                            <h1>Skills</h1>
                            <p>Skill-1 : {skill1}</p>
                            <p>Skill-2 : {skill2}</p>

                            <h1>Education</h1>
                            <p>School : {school}</p>
                            <p>College : {college}</p>

                            <h1>Experience</h1>
                            <p>Experience : {experience}</p>
                        </div>
                    </div>
                </div>
                </>} 
                <button className="pdfButton" onClick={generatePDF} type="button">Export PDF</button>
            </Modal>

        </div>
    );
}

export default CvItems;
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { deleteResume } from '../../Features/Users/usersSlice';
import React, { useState } from 'react';
import { getItems } from '../../Constants/const';
import { generatePDF } from "../../Constants/const";
import {Template1,Template2, Template3} from "../templateComponents"

import "../../Assets/Styles/items.css";
import "../../Assets/Styles/template.css";
import "../../Assets/Styles/template.scss";


const CvItems = (props) => {

    const dispatch = useDispatch();
    const {name,template} = getItems(props.item);
    const values = getItems(props.item);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { addToast } = useToasts();

    const showModal = () => setIsModalOpen(true);
    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);
    const handleDelete = () => {
        dispatch(deleteResume(props.item.id));
        addToast('Deleted Successfully!', {
            appearance: 'success',
        });
    };

    return (
        <div className="cvItems">

            <div className="image">
                {template === "template1" && <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" alt="#" />}   
                {template === "template2" && <img src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-375-456327.png?f=avif&w=512" alt="#" />}   
                {template === "template3" && <img src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-367-456319.png?f=avif&w=512" alt="#" />}   
            </div>

            <div className="buttons">
                <p>Name: {name}</p>
                <button onClick={showModal}>
                <i className="fa-regular fa-eye"></i> View
                </button>
                <button onClick={handleDelete}>
                <i className="fa-solid fa-trash-can"></i> Delete
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
                    <Template3 values={values} />
                </div>
                </>} 
                <button className="pdfButton" onClick={generatePDF} type="button">Export PDF</button>
            </Modal>

        </div>
    );
}

export default CvItems;
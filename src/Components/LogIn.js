import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Features/Users/usersSlice";
import { useNavigate } from "react-router-dom";

import "../Assets/Styles/common.css"

const LogIn = () => {

    const dispatch = useDispatch();
    const [number, setNumber] = useState("");
    const [validate, setValidate] = useState(false);
    const user = useSelector((state) => state.user);
    const Navigate = useNavigate();

    useEffect(() => {
        if (user) {
            Navigate("/dashboard")
        }
    }, [])

    const handleAdd = (e) => {
        e.preventDefault();
        setValidate(false);

        if (number.length < 10 || number.length > 10 || number === "") {
            setValidate(true);
            return;
        }

        dispatch(addUser(number));
        Navigate("/Otp")
    }

    return (
        <div className="login-otp">
            <div className="container">
                <h1>Login</h1>

                <div className="formSection">
                    <form onSubmit={handleAdd}>
                        <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="Number" />
                        {validate && <p>Please Enter 10 Digit Number</p>}
                        <button>Send OTP</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default LogIn;
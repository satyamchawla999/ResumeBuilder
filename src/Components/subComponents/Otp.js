import { useNavigate } from "react-router-dom";
import OtpInput from 'react-otp-input';
import { useState } from "react";

import "../../Assets/Styles/common.css"


const Otp = () => {


    const [otp, setOtp] = useState('');
    const [validate, setValidate] = useState(false);
    const Navigate = useNavigate();


    const handleAdd = (e) => {

        e.preventDefault();
        setValidate(false);

        if (otp !== process.env.REACT_APP_OTP) {
            setValidate(true);
            return;
        }

        if (otp.length < 4 || otp.length > 4 || otp === "") {
            setValidate(true);
            return;
        } else {
            Navigate("/dashboard")
        }
    }

    return (


        <div className="login-otp">
            <div className="container">
                <h1>Enter Otp</h1>

                <div className="formSection">
                    <form onSubmit={handleAdd}>

                            <OtpInput className="otpInput"
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                renderSeparator={<span>-</span>}
                                renderInput={(props) => <input {...props} />}
                            />
                        	
                            {validate && <p>Invalid OTP</p>}
                            <button>LogIn</button>
                    </form>
                </div>

            </div>
        </div>

        );
}

export default Otp;
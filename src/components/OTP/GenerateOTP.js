import React, { useState } from 'react'
const GenerateOTP = (props) => {
    const [orgOTP, setOrgOTP] = useState("");

    // render to OTP about 6 digits
    const handleGenerareOTP = () => {
        const otp = (Math.floor(100000 + Math.random() * 900000));
        setOrgOTP(otp);
        props.setOrgOTPParent(otp);
    }
    return (
        <div className='generate-otp-container'>
            <button onClick={() => handleGenerareOTP()}>
                GenerateOTP
            </button>
            <div className='title'>Your OTP is: {orgOTP}</div>
        </div>
    )
}
export default GenerateOTP;
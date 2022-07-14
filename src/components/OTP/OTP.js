import React, { useState } from 'react'
import CountDownAnimation from './CountDownAnimation';
import GenerateOTP from './GenerateOTP'
import InputOTP from './InputOTP'
import "./OTP.scss"
export default function OTP() {
    //original

    const [orgOTPParent, setOrgOTPParent] = useState("");
    const [userOTPParent, setuserOTPParent] = useState("");
    const [isDisable, setIsDisable] = useState(false);

    const handleSubmitOTP = () => {
        if (!orgOTPParent) {
            alert("Please generate an OTP")
            return
        }
        if (!userOTPParent) {
            alert("Please enter an OTP")
            return
        }
        // + the hien la check theo number 
        if (+orgOTPParent === +userOTPParent) {
            alert("Submit Sucessfull")

        } else {
            alert("wrongs")
        }
    }
    return (
        <div className='otp-parent-container'>

            <GenerateOTP
                setOrgOTPParent={setOrgOTPParent}
            />
            <InputOTP
                setuserOTPParent={setuserOTPParent}
                handleSubmitOTP={handleSubmitOTP}
                isDisable={isDisable}
                setIsDisable={setIsDisable} />
        </div>
    )
}

import React, { useRef, useState } from 'react'
import OtpInput from 'react-otp-input';
import CountDown from './CountDown';
import CountDownAnimation from './CountDownAnimation';
export default function InputOTP(props) {
    const childRef = useRef();
    const [otp, setOtp] = useState("");
    const handleChange = (otp1) => {
        console.log(">>> check otp: ", otp1)
        setOtp(otp1);
        props.setuserOTPParent(otp1);
    }
    const handleConfirmOTP = () => {
        props.handleSubmitOTP();
    }
    const handleClear = () => {
        childRef.current.restTimer();
        console.log(">>> check ref: ", childRef)
    }
    return (
        <div className='input-otp-container'>
            <div className='title'>Enter Verification code</div>
            <OtpInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                separator={<span>-</span>}
                inputStyle={"input-style-otp"}
            />
            {/* <CountDown
                setIsDisable={props.setIsDisable}
            /> */}
            <CountDownAnimation
                setIsDisable={props.setIsDisable}
                ref={childRef}
            />
            <div className='action'>
                <button className='clear'
                    style={props.isDisable ? {} : { opacity: 0.8 }}
                    onClick={() => handleClear()}>Clear</button>
                <button className='confirm' style={props.isDisable ? { opacity: 0.8 } : {}}
                    disabled={props.isDisable}
                    onClick={() => handleConfirmOTP()}>Confirm</button>
            </div>
        </div>
    )
}

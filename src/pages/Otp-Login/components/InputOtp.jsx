import React, { useEffect, useRef, useState } from 'react'

function InputOtp({ onOtpSubmit }) {
    const inputRefs = useRef([]);
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const handleChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)
        // submit triger 
        const compinedOtp = newOtp.join("")
        // console.log(otp,compinedOtp);
        if (compinedOtp.length === 6) {

            onOtpSubmit(compinedOtp)
        }
        if (value && index < 6 && inputRefs.current[index + 1]) { // we can use length if componetn is resuable  
            inputRefs.current[index + 1].focus()
        }
       
       
    }
    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1)

        if (index > 0 && !otp[index - 1]) {
            inputRefs.current[otp.indexOf("")].focus()
        }
       

    }
    const handleKeyDown = (e, index) => {

        if (e.key == "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1].focus()
        }


    }

    useEffect(() => {
        if (inputRefs.current[0]) {
            inputRefs.current[0].focus()
        }
    }, [])

    return (
        <div>
            <div className='w-full bg-blue-500/20 rounded-xl  mt-2 '>
                <h1 className='text-2xl px-2'>Enter OTP</h1>
                {
                    otp.map((value, index) => (
                        <input type="text"
                            ref={(input) => inputRefs.current[index] = input}
                            value={value}
                            key={index}
                            onChange={(e) => handleChange(e, index)}
                            onClick={() => handleClick(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className='w-10 h-10 bg-white mx-2
             text-blue-950  rounded-xl text-center' />
                    ))
                }
                <button className='text-blue-900 bg-white  px-2 py-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg' onClick={() => onOtpSubmit(otp)}>Submit</button>
            </div>
        </div>
    )
}

export default InputOtp


import { useState } from "react"
import InputOtp from "./components/InputOtp"


function PhoneOtpForm() {
  const [showOtp, setShowOtp] = useState(true)
  const [number, setNumber] = useState("")


  const onOtpSubmit = (otp) => {
    console.log("logined sucksexfully",otp)
  }
  const formSubit = (e) => {
    e.preventDefault()
    const regex = /[^0-9]/;
    if (number.length < 10 || regex.test(number)) {
      alert("invaild number")
      return
    }
    setShowOtp(true)
  }



  if (showOtp) {
    return <div className="p-4">
      <h1 className="bg-blue-500 text-black font-bold text-center p-2 rounded-md">Login with Phone Number</h1>
      <p className="text-center text-gray-100 bg-amber-400/30 px-10 font-semibold font-sans">OTP sent to {number}</p>
      <InputOtp onOtpSubmit={onOtpSubmit} />
    </div>
  }
  return (
    <div className="p-4">
      <h1 className="bg-blue-500 text-white p-2 rounded-md">Login with Phone Number</h1>

      <form onSubmit={formSubit}>

        <input onChange={(e) => setNumber(e.target.value)} className="text-white border mt-2 mx-2  rounded-lg px-2 py-2 outline-blue-500" type="text" placeholder="Phone Number" />
        <button type="submit" className="text-blue-900 bg-white  px-2 py-2 cursor-pointer hover:bg-blue-500 hover:text-white rounded-lg" >Send OTP</button>
      </form>


    </div>
  )
}

export default PhoneOtpForm

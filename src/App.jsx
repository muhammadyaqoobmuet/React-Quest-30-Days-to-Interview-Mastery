import { useEffect, useState } from "react"
import PhoneOtpForm from "./pages/Otp-Login/PhoneOtpForm"
import Progress from "./pages/Progress-Bar/Progress"


function App() {
  //for day 2 question
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => value + 1)

    }, 100)

    //remove
    if (value >= 100) {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }

  }, [])
  return (
    <div className="bg-[#0d0d0d] h-screen w-full">
      {/* day one */}
      {/* <PhoneOtpForm /> */}
      {/* day 2 */}
      <Progress value={value} />
    </div>
  )
}

export default App

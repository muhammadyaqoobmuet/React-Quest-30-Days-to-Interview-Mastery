import { useEffect, useState } from "react"

function Progress({ value = 0 }) {
    const [perc, setPerc] = useState(value)

    useEffect(() => {
        setPerc(Math.min(100, Math.max(value, 0)))
    }, [value])

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 lg:mb-8 text-gray-800 text-center">
                Progress Bar
            </h1>
            <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-[16px] md:h-[18px] lg:h-[20px] bg-gray-200 rounded-full overflow-hidden">
                <div
                    style={{
                        transform: `scaleX(${perc / 100})`,
                        transformOrigin: 'left',
                        background: "linear-gradient(90deg, #4ade80 0%, #22c55e 100%)",
                        transition: "transform 0.5s ease-in-out",
                    }}
                    className="absolute top-0 left-0 w-full h-full rounded-full flex items-center justify-center"
                >
                    <span className="text-xs md:text-sm text-white font-semibold whitespace-nowrap">
                        {perc.toFixed()}%
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Progress

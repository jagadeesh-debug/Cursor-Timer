"use client";
import { useState, useEffect } from "react";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import AddIcon from "@mui/icons-material/Add";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Image from "next/image";
import FaceCleanser from "../assets/face-cleanser.png";
export default function CursorTimer() {
    const [time, setTime] = useState(60);
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const progress = (time / 60) * circumference;

    useEffect(() => {
        if (time === 0) return;
        const interval = setInterval(() => {
            setTime((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

    const handleAddTime = () => {
        setTime((prev) => (prev + 10 <= 60 ? prev + 10 : 60));
    };

    const handleSkip = () => {
        setTime(60);
    };

    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <h1 className="font-bold mb-4 md:text-3xl text-2xl">
                    Routine Starting in...
                </h1>
                <p className="text-md md:text-xl font-semibold text-gray-500 mb-4">
                    subheading here
                </p>
            </div>

            <div className="relative w-48 h-48 mb-4">
                <svg className="absolute top-0 left-0 w-full h-full rotate-[-90deg]">
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="#E4E4E7"
                        strokeWidth="10"
                        fill="none"
                    />
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        stroke="#86198f"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - progress}
                        strokeLinecap="round"
                        className="transition-all duration-1000"
                    />
                </svg>
                <div className="flex items-center justify-center w-full h-full rounded-full ">
                    <span className="text-xl font-bold">
                        {minutes}:{seconds}
                    </span>
                </div>
            </div>

            <div className="flex items-center mt-4 w-86 justify-around">
                <button
                    onClick={handleAddTime}
                    className="flex items-center justify-center gap-2 bg-white text-violet-500 px-4 py-2 rounded-full shadow-md w-28 transition duration-300 cursor-pointer"
                >
                    <AddIcon /> 10 sec
                </button>
                <button
                    onClick={handleSkip}
                    className="flex items-center justify-center gap-2 bg-white text-violet-500 px-4 py-2 rounded-full shadow-md w-28 transition duration-300 cursor-pointer"
                >
                    <SkipNextOutlinedIcon /> skip
                </button>
            </div>

            <div className="flex flex-col mt-4 w-86 h-42 bg-violet-100 rounded-lg px-7 py-4 mt-18">
                <p className="text-xl  block">
                    Step 2/<span className="text-sm font-normal">3</span>
                </p>
                <div className="flex mt-6 ">
                    <div className="h-18 w-12 relative ">
                        <Image
                            src={FaceCleanser}
                            alt="Face Cleanser"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="h-18 flex flex-col justify-around  flex-2 ml-3 mb-12">
                        <p className="text-xl font-bold ">cleansing</p>
                        <div className="flex justify-between">
                            <p className="text-sm font-semibold text-black ">
                                <AvTimerIcon style={{ color: "86198f" }} /> 60sec
                            </p>
                            <p className="text-sm font-semibold text-fuchsia-800">How to do</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

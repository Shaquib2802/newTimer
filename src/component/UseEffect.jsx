import React, { useEffect, useState } from "react";
import { MdOutlineTimer } from "react-icons/md";
import "./button.css";

const Useeffect = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setsec] = useState(0);
  const [isRunning, setISRunning] = useState(false);

  function handleReset() {
    setsec(0);
    setMin(0);
    setHour(0);
    setISRunning(false);
  }

  useEffect(() => {
    setTimeout(() => {
      if (isRunning) {
        if (sec >= 59) {
          if (min >= 59) {
            setHour(hour + 1);
            setMin(0);
          } else {
            setMin(min + 1);
            setsec(0);
          }
        } else {
          setsec(sec + 1);
        }
      }
    }, 1000);
  });

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 lg:grid-cols-2  overflow-hidden">
      <div className=" w-[81%] mx-auto xl:hidden lg:hidden md:hidden">
        <div className="">
          <img
            className="xl:w-[88%]  xl:m-auto md:mt-12 md:w-[100%]"
            src="https://img.freepik.com/premium-vector/vector-stopwatch-timer-cartoon-icon_300636-2773.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-purple-50 w-screen  md:border-2 border-black shadow-2xl">
        <div className="mx-28  w-[50%] text-2xl mt-3   xl:mx-40 xl:text-6xl xl:mt-10 font-semibold md:mx-20 md:mt-14 md:text-5xl  ">
          Stopwatch
        </div>
        <div className="flex flex-col mx-auto mt-5 w-[45%] h-[40%] xl:mx-32 xl:my-16  bg-white shadow-2xl lg:w-[30%] md:mx-16 md:mt-8 md:w-[35%]">
          <div className="flex mt-2 justify-center gap-x-2 md:mt-4">
            <div>
              <MdOutlineTimer className="text-blue-400 mt-1  xl:text-3xl" />
            </div>
            <div className="text-base font-semibold xl:text-2xl">Timer</div>
          </div>
          <div className="text-center mt-2 text-2xl xl:text-7xl md:text-5xl md:mt-2">
            {hour < 9 ? `0${hour}` : hour}: {min < 9 ? `0${min}` : min}:{" "}
            {sec < 9 ? `0${sec}` : sec}
          </div>
          <div className="-mx-3 flex justify-evenly mt-8">
            <button onClick={() => setISRunning(true)} className="pushable ">
              <span className="shadow1"></span>
              <span className="edge1"></span>
              <span className="front1"> Start </span>
            </button>
            <button onClick={() => setISRunning(false)} className="pushable ">
              <span className="shadow2"></span>
              <span className="edge2"></span>
              <span className="front2"> Stop </span>
            </button>
            <button onClick={handleReset} className="pushable ">
              <span className="shadow3"></span>
              <span className="edge3"></span>
              <span className="front3"> Reset </span>
            </button>
          </div>
        </div>

        {/* <button onClick={() => setISRunning(true)}>Start</button>
      {hour}:{min}:{sec}
      <button onClick={() => setISRunning(false)}>Stop</button>
      <button onClick={handleReset}>Reset</button> */}
      </div>
      <div className="xl:border-2 shadow-2xl xl:border-black flex bg-white hidden md:block md:border-2 border-black">
        <div>
          <img
            className="  xl:w-[88%]  xl:m-auto md:mt-12 md:w-[100%]"
            src="https://img.freepik.com/premium-vector/vector-stopwatch-timer-cartoon-icon_300636-2773.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Useeffect;

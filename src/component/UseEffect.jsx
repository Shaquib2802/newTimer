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
    <div className="grid grid-cols-2">
      <div className="bg-purple-50 w-screen h-screen border-2 border-black shadow-2xl">
        <div className="text-6xl font-semibold mt-16 mx-44">Stopwatch</div>
        <div className="flex flex-col w-[25%] h-[40%] mx-44 my-10 bg-white shadow-2xl">
          <div className="flex mt-6 justify-center gap-x-2">
            <div>
              <MdOutlineTimer className="text-blue-400 mt-1 text-xl" />
            </div>
            <div className="text-base font-semibold">Timer</div>
          </div>
          <div className="text-center mt-3 text-7xl">
            {hour < 9 ? `0${hour}` : hour}:   {min < 9 ? `0${min}` : min}:   {sec < 9 ? `0${sec}` : sec}
          </div>
          <div className="flex justify-evenly mt-8">
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
      <div className="border-2 shadow-2xl border-black flex bg-white ">
        <div>
          <img
            className="w-[85%] m-auto"
            src="https://img.freepik.com/premium-vector/vector-stopwatch-timer-cartoon-icon_300636-2773.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Useeffect;

import { useState, useEffect } from "react";
const StopWatch = () => {
  const [countSeconds, setCountSeconds] = useState(0);
  const [isStart, setIsStart] = useState(false);
  
  useEffect(() => {
    let interval;
    if (isStart) {
      interval = setInterval(() => {
        setCountSeconds((last) => last + 10);
      }, 10);
    }
  
    return () => clearInterval(interval);
  }, [isStart]);
  
  const milliSecond = countSeconds % 1000;
  const second = Math.floor(countSeconds / 1000) % 60;
  const minute = Math.floor((countSeconds / 1000) / 60) % 60;
  const hour = Math.floor((countSeconds / 1000) / 3600);
  
  const TimerIsStart = () => {
    setIsStart(true);
  };
  const TimerStop = () => {
    setIsStart(false);
  };
  const TimeRest = () => {
    setIsStart(false);
    setCountSeconds(0);
  };

  return (
    <>
      <div className="prince-flex prince-justify-around prince-pt-20 ">
        <div className="shadow-lg prince-w-96 prince-h-56 prince-bg-gray-700 prince-rounded-lg prince-place-content-center ">
          <div className="prince-text-center ">
            <div className="prince-flex prince-justify-around">
              <div className="prince-w-20">
              <span className="prince-font-Digital prince-text-6xl prince-text-green-500 ">
                {hour.toString().slice(0,2).padStart(2,'0')}
              </span>
              </div>
              <div className="prince-w-20">
              <span className="prince-font-Digital prince-text-6xl prince-text-green-500 ">
                {minute.toString().slice(0,2).padStart(2,'0')}
              </span>
              </div>
              <div className="prince-w-20">
              <span className="prince-font-Digital prince-text-6xl prince-text-green-500 ">
                {second.toString().slice(0,2).padStart(2,'0')}
              </span>
              </div>
              <div className="prince-w-20">
              <span className="prince-font-Digital prince-text-6xl prince-text-green-500 ">
                {milliSecond.toString().slice(0,2).padStart(2,'0')}
              </span>
              </div>
            </div>

            <div className="prince-flex prince-justify-around">
              <span className="prince-text-green-200 prince-text-opacity-65 prince-font-bold prince-text-lg">
                HH
              </span>
              <span className="prince-text-green-200 prince-text-opacity-65 prince-font-bold prince-text-lg">
                MM
              </span>
              <span className="prince-text-green-200 prince-text-opacity-65 prince-font-bold prince-text-lg">
                SS
              </span>
              <span className="prince-text-green-200 prince-text-opacity-65 prince-font-bold prince-text-lg">
                MS
              </span>
            </div>
          </div>

          <div className="prince-flex prince-justify-around">
            <button
              onClick={TimerIsStart}
              className="prince-text-green-600 prince-shadow-lg prince-shadow-green-500/40 prince-bg-white prince-w-24 prince-h-10 prince-mt-5 prince-rounded-lg prince-font-Timers prince-uppercase prince-font-bold prince-tracking-widest"
            >
              Start
            </button>
            <button
              onClick={TimerStop}
              className="prince-shadow-lg prince-shadow-green-500/40 prince-bg-white prince-w-24 prince-h-10 prince-mt-5 prince-rounded-lg prince-font-Timers prince-uppercase prince-font-bold prince-tracking-widest"
            >
              stop
            </button>
            <button
              onClick={TimeRest}
              className="prince-shadow-lg prince-shadow-red-500/40 prince-bg-red-500 prince-text-white prince-w-24 prince-h-10 prince-mt-5 prince-rounded-lg prince-font-Timers prince-uppercase prince-font-bold prince-tracking-widest"
            >
              reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StopWatch;

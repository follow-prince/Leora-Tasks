import { useState, useEffect } from "react";

const SetTimerComponent = () => {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hoursValue, setHoursValue] = useState("");
  const [minutesValue, setMinutesValue] = useState("");
  const [secondsValue, setSecondsValue] = useState("");

  function ShareToOtherState() {
    setHoursValue(timer.hours);
    setMinutesValue(timer.minutes);
    setSecondsValue(timer.seconds);
  }
  useEffect(() => {
    ShareToOtherState();
  }, [timer]);

  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let timeClear;
    if (isStart) {
      timeClear = null;
      if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
        clearInterval(timeClear);
        setIsStart(false);
      } else {
        timeClear = setInterval(() => {
          // hours -1
          if (timer.minutes === 0 && timer.seconds === 0) {
            setTimer({
              hours: timer.hours - 1,
              minutes: 59,
              seconds: 59,
            });
          }
          // minute -1
          else if (timer.seconds === 0) {
            setTimer({
              hours: timer.hours,
              minutes: timer.minutes - 1,
              seconds: 59,
            });
          }
          // secund -1
          else {
            setTimer({
              hours: timer.hours,
              minutes: timer.minutes,
              seconds: timer.seconds - 1,
            });
          }
        }, 1000);
      }
    }

    return () => clearInterval(timeClear);
  }, [timer, isStart]);

  const TimerIsStart = () => {
    setIsStart(true);
  };
  const TimeIsStop = () => {
    setIsStart(false);
  };
  const TimeRest = () => {
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setIsStart(false);
  };
  return (
    <>
      <div className="prince-flex prince-justify-around prince-pt-20 ">
        <div className="shadow-lg prince-w-96 prince-h-56 prince-bg-gray-700 prince-rounded-lg prince-place-content-center ">
          <div className="prince-text-center ">
            <div className="prince-flex prince-justify-around">
              <input
                className="prince-ml-8 prince-font-Digital prince-text-green-500 prince-h-24 prince-text-6xl prince-w-16 prince-outline-0 prince-bg-gray-700 prince-pointer-events-auto"
                type="number"
                value={hoursValue}
                onChange={(e) => {
                  setTimer({
                    hours: e.target.value,
                    minutes: timer.minutes,
                    seconds: timer.seconds,
                  });
                }}
              />
              <input
                className="prince-font-Digital prince-text-green-500 prince-h-24 prince-text-6xl prince-w-16 prince-outline-0 prince-bg-gray-700 prince-pointer-events-auto"
                type="number"
                value={minutesValue}
                onChange={(e) => {
                  setTimer({
                    hours: timer.hours,
                    minutes: e.target.value,
                    seconds: timer.seconds,
                  });
                }}
              />
              <input
                className="prince-mr-8 prince-font-Digital prince-text-green-500 prince-h-24 prince-text-6xl prince-w-16 prince-outline-0 prince-bg-gray-700 prince-pointer-events-auto"
                value={secondsValue}
                type="number"
                onChange={(e) => {
                  setTimer({
                    hours: timer.hours,
                    minutes: timer.minutes,
                    seconds: e.target.value,
                  });
                }}
              />
            </div>

            <div className="prince-flex prince-justify-around prince-pl-10 prince-pr-10">
              <span className="prince-text-green-200 prince-text-opacity-65 prince-font-bold prince-text-lg">
                HH
              </span>
              <span className="prince-text-green-200 prince-text-opacity-65 prince-font-bold prince-text-lg">
                MM
              </span>
              <span className="prince-text-green-200 prince-text-opacity-65 prince-font-bold prince-text-lg">
                SS
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
              onClick={TimeIsStop}
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

export default SetTimerComponent;

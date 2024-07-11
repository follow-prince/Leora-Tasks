import SetTimer from "./widgets/SetTimer";
import StopWatch from "./widgets/StopWatch";
const TimeControl = () => {
  return (
    <>
      <div className="prince-bg-white prince-w-screen prince-h-screen">
        <h1 className=" prince-font-Timers prince-text-center prince-text-gray-700 prince-font-bold prince-text-5xl prince-pt-16">
          Set Timer
        </h1>
        <SetTimer />

        <h1 className=" prince-font-Timers prince-text-center prince-text-gray-700 prince-font-bold prince-text-5xl prince-pt-16">
          StopWatch
        </h1>

        <StopWatch />
      </div>
    </>
  );
};

export default TimeControl;

import { useState } from "react";
let Id;
export default function Stopwatch() {
  const [running, setrunning] = useState(false);
  const [time, settime] = useState({ min: 0, sec: 0, msec: 0 });
  let updatedMS = time.msec;
  let updatedSEC = time.sec;
  let updatedMIN = time.min;
  function run() {
    updatedMS++;
    if (updatedMS === 100) {
      updatedMS = 0;
      updatedSEC++;
    }
    if (updatedSEC === 60) {
      updatedSEC = 0;
      updatedMIN++;
    }
    settime({ min: updatedMIN, sec: updatedSEC, msec: updatedMS });
  }
  function handleStart() {
    if (!running) {
      Id = setInterval(run, 10);
      setrunning(true);
    }
    if (running) {
      clearInterval(Id);
      setrunning(false);
    }
  }
  function handleReset() {
    clearInterval(Id);
    setrunning(false);
    settime({ min: 0, sec: 0, msec: 0 });
  }
  return (
    <>
      <div className="container">
        <h1>Stopwatch</h1>
        <p>
          <span>{time.min}:</span>
          <span>{time.sec}:</span>
          <span>{time.msec}</span>
        </p>
        <p>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStart}>Stop</button>
        </p>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

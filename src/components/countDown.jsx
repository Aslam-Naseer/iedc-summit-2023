import { useState, useEffect } from "react";

function CountDown() {
  const deadline = new Date("2023-10-12T09:00:00");
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  function getTimeLeft() {
    const totalSec = Math.floor((deadline - Date.now()) / 1000);

    setDays(String(Math.floor(totalSec / (60 * 60 * 24))).padStart(2, "0"));
    setHours(
      String(Math.floor((totalSec % (60 * 60 * 24)) / (60 * 60))).padStart(
        2,
        "0"
      )
    );
    setMinutes(
      String(Math.floor((totalSec % (60 * 60)) / 60)).padStart(2, "0")
    );
    setSeconds(String(Math.floor(totalSec % 60)).padStart(2, "0"));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getTimeLeft();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="font-dm-sans mb-8 text-5xl lg:text-6xl font-normal bg-gradient-to-b from-blue-500 to-blue-900 text-white bg-clip-text w-[85vw] sm:w-[65vw] lg:w-[40vw] grid grid-cols-4 gap-5 justify-between">
      <div className=" text-center py-5 px-3 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-900">
        <h1 className="text-2xl md:text-6xl">{days}</h1>
        <p className="font-bold text-white bg-clip-text text-xs lg:text-md">
          DAY
        </p>
      </div>
      <div className=" text-center py-5 px-3 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-900 ">
        <h1 className="text-2xl md:text-6xl">{hours}</h1>
        <p className="font-bold text-white bg-clip-text text-xs lg:text-md">
          HOUR
        </p>
      </div>
      <div className="text-center py-5 px-3 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-900">
        <h1 className="text-2xl md:text-6xl">{minutes}</h1>
        <p className="font-bold text-white bg-clip-text text-xs lg:text-md">
          MIN
        </p>
      </div>
      <div className="text-center py-5 px-3 rounded-2xl bg-gradient-to-b from-blue-500 to-blue-900">
        <h1 className="text-2xl md:text-6xl">{seconds}</h1>
        <p className="font-bold text-white bg-clip-text text-xs lg:text-md">
          SEC
        </p>
      </div>
    </div>
  );
}

export default CountDown;
const ScheduleTile = ({ schedule, num, top, bottom }) => {
  return (
    <div className="flex items-center py-8 gap-8 lg:gap-12">
      <div className="hidden lg:block w-2/12 font-darker-grotesque text-lg font-semibold">
        {schedule.time}
      </div>
      <div className="w-2 relative self-stretch my-[-20px] flex flex-col justify-center mr-4">
        <div className="text-2xl font-semibold text-white bg-theme-blue3 w-9 h-6 pb-9 text-center rounded-full z-10">
          {num}
        </div>
        <div
          className={
            top
              ? "absolute opacity-0"
              : "absolute bg-theme-blue3 w-1 h-4/6 left-4 top-[-10%]"
          }
        ></div>
        <div
          className={
            bottom
              ? "absolute opacity-0"
              : "absolute bg-theme-blue3 w-1 h-4/6 left-4 bottom-[-10%]"
          }
        ></div>
      </div>
      <div className="w-15 sm:w-17 md:w-28">
        <img
          src={schedule.image}
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <div className="w-8/12 lg:w-6/12">
        <div className="lg:hidden font-darker-grotesque text-sm sm:text-md font-semibold">
          {schedule.time}
        </div>
        <div className="font-darker-grotesque text-xl sm:text-4xl font-semibold text-theme-blue">
          {schedule.event}
        </div>
        <div className="font-darker-grotesque text-md sm:text-xl font-semibold">
          {schedule.speaker}
        </div>
<<<<<<< HEAD
        
=======
        <div className="font-darker-grotesque text-md sm:text-xl font-semibold">
          {schedule.title}
        </div>
>>>>>>> 8181fea7cae8f27056c82c4faabc8631c208676f
      </div>
    </div>
  );
};

export default ScheduleTile;
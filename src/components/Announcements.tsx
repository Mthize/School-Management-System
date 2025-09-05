const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View all</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium ">
              School Sports Day
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025/09/08</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Join us this Friday for the annual Sports Day. Parents are welcome to attend!</p>
        </div>
         <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium ">
              Library Week
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025/09/08</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">Special activities and book exhibitions will be held all week in the library.</p>
        </div>
           <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium ">
              Midterm Exams
            </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025/09/08</span>
          </div>
          <p className="text-xs text-gray-400 nt-1">Exams begin on the 12th of October. Timetables are available online.</p>
        </div> 
      </div>
    </div>
  );
};

export default Announcements;


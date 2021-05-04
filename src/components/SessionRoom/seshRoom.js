import React from "react";

const Sessionroom = () => {
  const troom = ["room-1", "room-2", "room-3"];
  return (
    <div className="flex flex-col bg-appLoginColor box-border h-12/12 w-12/12">
      <div className="self-start m-1">
        <label className="text-twhite mx-4 text-lg" for="area">
          Area:
        </label>
        <select
          className="w-24 bg-appoff text-pinkpink mx-4"
          name="area"
          id="area"
        >
          {troom.map((ele, index) => (
            <option key={index} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <div className="w-10/12 h-12/12 m-1 bg-appoff"></div>
        <div>
          <div className="w-56 h-80 m-1 bg-appoff"></div>
          <div className="w-56 h-80 m-1 bg-appoff"></div>
        </div>
      </div>
    </div>
  );
};

export default Sessionroom;

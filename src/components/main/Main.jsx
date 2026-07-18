import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import SunPosition from "./SunPosition";
import Alert from "./Alert";

const Main = () => {
  return (
    <div className=" flex pl-5 pb-5 pt-5   w-full h-full">
      <MainLeft />
      <div className="flex w-[50%] justify-end gap-5 items-center">
        <SunPosition />
      <Alert />
      </div>
    </div>
  );
};

export default Main;

import MainLeft from "./MainLeft";
import SunPosition from "./SunPosition";
import Alert from "./Alert";

const Main = () => {
  return (
    <div className="flex w-full justify-between items-center gap-10 h-full responsive1">
  <div className="flex pl-5 responsive14 pb-5 pt-5 w-full flex h-full">
    <MainLeft />
  </div>
  <div className="flex w-full h-full gap-5 gaps flex-1 responsive3 responsive5 responsive11 items-center">
    <div className="flex w-[45%] flex-2 pb-3 pt-5 h-full gap-5 items-center">
      <SunPosition />
    </div>
    <div className="flex w-[50%] flex-3 pb-3 pt-5 h-full gap-5 items-center">
      <Alert />
    </div>
  </div>
</div>
  );
};

export default Main;

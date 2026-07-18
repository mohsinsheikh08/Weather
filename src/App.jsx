import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Forecast from "./components/hourlyforecast/Forecast";
import { useContext } from "react";
import { ShareData } from "./utils/WeatherContext";

const App = () => {
  const {DarkLight} = useContext(ShareData)
  return (
    <div className={`px-3 h-screen py-2 w-full bg-gradient-to-r ${DarkLight ? "bg-[#0B1019]" : "from-[#785EF0] to-[#44ADF8] via-[#587FF1]"} `}>
      <Header />

      <div className="flex flex-col">
        <div className="h-57 flex flex-col w-full">
          <Main />
        </div>

        <div className="h-66 w-full">
          <Forecast />
        </div>
      </div>
    </div>
  );
};

export default App;

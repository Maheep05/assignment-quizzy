import { Home } from "./components/Home";
import { Sidenav } from "./components/Sidenav";

function App() {
  return (
    <div className="flex  bg-[#2A2A2A]">
      <Sidenav />
      <div className="flex-grow  bg-gradient-to-br   from-[#354940] via-[#2d2d2d]    via-opacity-5 to-[#2d2d2d] py-2">
      <Home/>
     
      </div>
    </div>
  );
}

export default App;

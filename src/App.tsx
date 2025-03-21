import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/Logos";
import { TabComponent } from "./components/tabs";
function App() {
 
  return (
    <div className="">
      <Navbar />
      <Hero />
      <ClientLogos />
      <TabComponent/>
    </div>
  );
}

export default App;

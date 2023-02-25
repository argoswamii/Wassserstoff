import { Routes, Route } from "react-router-dom";
import BubbleChart from "./pages/BubbleChart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BubbleChart />} />
    </Routes>
  );
}
export default App;

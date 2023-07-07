import Picture from "./components/Picture";
import Homepage from "./pages/Homepage";
import data from "./helper/data";

import "./sass/app.scss";

function App() {
  return (
    <div>
      <Homepage />
      <Picture data={data} />
    </div>
  );
}
export default App;

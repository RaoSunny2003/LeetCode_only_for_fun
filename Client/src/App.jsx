import { useState } from "react";
import { Landing } from "./Component/Landing";
import { Problems } from "./Component/Problems/Problems"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Landing /> */}
      < Problems />
    </>
  );
}

export default App;

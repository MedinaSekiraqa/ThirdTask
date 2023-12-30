import Popup from "./components/Popup";
import { useState } from "react";


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  

  

  return (
    <div className="App">
      <main>
       
        <br></br>
        <button onClick={() => setButtonPopup(true)}>show popup</button>
        
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        
      </Popup>

      
    </div>
  );
}

export default App;

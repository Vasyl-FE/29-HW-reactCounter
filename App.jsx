import { useState } from "react";
import Button from "./Components/Button/Button";

function App() {
  const [count , setCount] = useState(0);

  const funcIncrement = () => {
    setCount(count + 1)
  }

  const  funcDecrement = () => {
    setCount(count - 1)
  }

  return (
      <div>
        <h1>В який бік клікаємо?</h1>
        <div>
          <Button countClick={funcIncrement}>Уверх</Button>
        </div>
        <div>
          <Button countClick={funcDecrement}>Униз</Button>
        </div>
          <h2>{count}</h2>
      </div>
  );
}

export default App;
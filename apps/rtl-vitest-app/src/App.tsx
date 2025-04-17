import React from 'react'; 
import { Button } from "@poc/shared";
import { useState } from "react";

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Button data-testid="shared-button" onClick={() => setClicked(true)}>
        Click me
      </Button>
      {clicked && <span>Clicked!</span>}
    </div>
  );
};

export default App;

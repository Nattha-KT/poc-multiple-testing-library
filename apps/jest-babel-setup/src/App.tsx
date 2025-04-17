import { Button } from "@poc/shared";
import React, { useState } from "react";

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Button data-testid="shared-button" onClick={() => setClicked(true)}>
        Click me
      </Button>
      {clicked && <span>Clicked!</span>}
      Hello
    </div>
  );
};

export default App;

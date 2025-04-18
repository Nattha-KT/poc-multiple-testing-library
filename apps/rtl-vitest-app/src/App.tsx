import React from "react";
import { Button } from "@poc/shared";
import { useState } from "react";
import { store } from "./features/auth/stores";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./shared";

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <div>
        <Button data-testid="shared-button" onClick={() => setClicked(true)}>
          Click me
        </Button>
        {clicked && <span>Clicked!</span>}
      </div>
    </Provider>
  );
};

export default App;

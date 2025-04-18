import React from 'react'; 
import { Button } from "@poc/shared";
import { useState } from "react";
import Dashboard from './pages/dashboard';
import { store } from './libs/stores';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Button data-testid="shared-button" onClick={() => setClicked(true)}>
        Click me
      </Button>
      {clicked && <span>Clicked!</span>}
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </div>
  );
};

export default App;

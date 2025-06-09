import { useEffect, useRef, useState } from "react";

import "./App.css";
import Landing from "./Components/Layout/Landing/Landing";
import { Route } from "wouter";
import Home from "./Components/Layout/Home/Home";
import ContextProvider from "./Components/Layout/context/ContextProvider";

function App() {
  const [keyPressed, setKeyPressed] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <ContextProvider>
      <div
        ref={ref}
        tabIndex={0}
        onKeyDown={() => setKeyPressed(true)}
        className="flex flex-col min-h-screen w-screen"
      >
        {keyPressed ? <Home /> : <Landing />}

        {/* {keyPressed ? (
          <Route path="/" component={Home} />
        ) : (
          <Route path="/" component={Landing} />
        )} */}
      </div>
    </ContextProvider>
  );
}

export default App;

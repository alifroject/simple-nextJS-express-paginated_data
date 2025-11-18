import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <header className="header">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1 className="title">Vite + React</h1>
          <p className="subtitle">A clean and beautiful starter interface</p>
        </header>

        <main className="content">
          <button onClick={() => setCount((count) => count + 1)} className="btn">
            count is {count}
          </button>

          <p className="hint">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </main>

        <footer className="footer">
          <p>Made with ❤️ using Vite & React</p>
        </footer>
      </div>
    </>
  );
}

export default App;

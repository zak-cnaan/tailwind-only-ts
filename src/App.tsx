import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-auto max-w-[1280px] mx-auto px-[20px]">
        <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          impedit incidunt iste corporis laborum veniam rerum iusto tempore
          soluta! Placeat blanditiis sapiente corporis nemo magnam. Cupiditate
          sequi autem voluptate minima!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          impedit incidunt iste corporis laborum veniam rerum iusto tempore
          soluta! Placeat blanditiis sapiente corporis nemo magnam.
          <a href="#">Click me</a> Cupiditate sequi autem voluptate minima!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          impedit incidunt iste corporis laborum veniam rerum iusto tempore
          soluta! Placeat blanditiis sapiente corporis nemo magnam. Cupiditate
          sequi autem voluptate minima!
        </p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="inline-block" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="inline-block" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;

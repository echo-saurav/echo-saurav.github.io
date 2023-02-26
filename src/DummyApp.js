import { useEffect, useState } from "react";
import "./dummy.css";

export default function DummyApp() {
  const [count, setCount] = useState(5);
    const link="https://echo-saurav.github.io/obsidianDoc/";
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(timer);
      const body = document.querySelector("h1");
      body.classList.add("zoomed");
      setTimeout(() => {
        window.location.href = link;
      }, 1500);
    }

    return () => clearInterval(timer);
  }, [count]);
  return (
    <div className="dummy">
      <div className="text">
        <h2>Under development</h2>
        {count == 0 ? <p>and now!</p> : <p>Redirecting to my <a href={link}>docs</a> in</p>}

        <h1>{count}</h1>
      </div>
    </div>
  );
}

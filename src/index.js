import React from "react";
import ReactDOM from "react-dom/client";
import timelineItems from "./timelineItems.js";
import Timeline from "./components/Timeline.jsx";

function App() {
  return <Timeline items={timelineItems} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

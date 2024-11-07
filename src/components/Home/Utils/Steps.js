import React from "react";
import "./Steps.css";


function Step({ timeline_end, icon, step, desc }) {
  return (
    <div className="list_container">
      <ul>
        <li>
          {icon}
        </li>
        <li>{step}</li>
        <li>{desc}</li>
      </ul>

      <div className={`roadmap_circle ${!timeline_end && "timeline"}`}></div>
    </div>
  );
}

export default Step;

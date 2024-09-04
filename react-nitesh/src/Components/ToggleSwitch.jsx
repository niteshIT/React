import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [buttonState, setButtonState] = useState("toggle_off");

  const handleClick = () => {
    if (buttonState == "toggle_off") {
      setButtonState("toggle_on");
    } else {
      setButtonState("toggle_off");
    }
  };
  const isToggleOn = buttonState == "toggle_on" ? "ON" : "OFF";
  const BgToggle = {
    backgroundColor: buttonState == "toggle_on" ? "aquamarine" : "",
  };
  // const ratingClass = rating >= 70 ? styles.super_hit : styles.hit;
  return (
    <div style={BgToggle} className={`toggle-switch  `}>
      <div onClick={handleClick} className={`switch ${buttonState}`}>
        <span className="switch-state">{isToggleOn}</span>
      </div>
    </div>
  );
};

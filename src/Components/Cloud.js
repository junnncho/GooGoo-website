import React from "react";
import ReactWordcloud from "react-wordcloud";

import words from "./word";
const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "Wake",
  fontSizes: [20, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000,
};

const Cloud = () => {
  return (
    <div className="wordcloud">
      <ReactWordcloud options={options} words={words} />
    </div>
  );
};
export default Cloud;

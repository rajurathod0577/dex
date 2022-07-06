import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings }) => {
  return (
    <div className="meanings">
      {word === "" ? (
        <span className="subTitle">Start by typing word in the Search</span>
      ) : (
                  meanings.map((mean) => (console.log(mean)))
        )
      
      }
    </div>
  );
};

export default Definitions;

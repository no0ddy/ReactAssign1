import React from "react";

const Display = (prop) => {
  return (
    <ol>
      {prop.data.map((ele, index) => {
        return (
          <li key={`${index + 1}`}>
            {`${ele.name.title} ${ele.name.first} ${ele.name.last}`}
          </li>
        );
      })}
    </ol>
  );
};

export default Display;

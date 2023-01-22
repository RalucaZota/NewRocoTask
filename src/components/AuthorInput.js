import React, { useState, useRef } from "react";
import "../Styles/AuthorInput.css";

export default function AuthorInput() {
  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = (e) => {
    e.preventDefault();
    setArr((s) => {
      const lastId = s[s.length - 1].id;
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const index = e.target.id;
    setArr((s) => {
      const newArr = s.slice();
      newArr[index].value = e.target.value;

      return newArr;
    });
  };
  return (
    <div className="author-input">
      <button onClick={addInput} className="author-button">
        +
      </button>
      {arr.map((item, i) => {
        return (
          <input
            className="author"
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            size="50"
          />
        );
      })}
    </div>
  );
}

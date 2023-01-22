import React from "react";

export default function Card({ lastObject }) {
  console.log(lastObject);
  return (
    <section>
      <p>Aici e ce trb</p>
      {lastObject.map((item, id) => {
        return (
          <ul key={id}>
            <li>{item.option}</li>
            <li>{item.title}</li>
            <li>{item.Abstract}</li>
          </ul>
        );
      })}
    </section>
  );
}

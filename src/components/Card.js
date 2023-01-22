import React from "react";
import "../Styles/Card.css";
import { useState, useEffect } from "react";

export default function Card({ lastObject }) {
  return (
    <section className="card">
      <p>Your data is:</p>
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

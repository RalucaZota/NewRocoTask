import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Form.css";

export default function Form({ data }) {
  const [details, setDetails] = useState({
    option: "",
    title: "",
    Abstract: "",
  });
  function HandleOption(e) {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const HandleSubmit = () => {
    const postData = details;
    console.log(postData);
    axios
      .post(
        "https://newrocotask-default-rtdb.firebaseio.com/form.json",
        postData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload(true);
  };

  return (
    <section className="parent">
      <form onChange={HandleOption}>
        <div>
          <select name="option">
            <option hidden>Choose One..</option>
            {data.map(({ id, value }) => {
              return <option key={id}>{value}</option>;
            })}
          </select>
        </div>
        <div>
          <label htmlFor="title"></label>
          <textarea
            name="title"
            id="title"
            cols="25"
            rows="10"
            maxLength="255"
            placeholder="Title"
            className="title"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="abstract"></label>
          <textarea
            name="Abstract"
            id="abstract"
            cols="30"
            rows="30"
            maxLength="1000"
            placeholder="Abstract"
            className="abstract"
            required
          ></textarea>
        </div>
        <button onClick={HandleSubmit}> Submit</button>
      </form>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Form.css";
import Card from "../components/Card";
import Modal from "../components/Modal";
import UploadFile from "./Uploadfile";
import AuthorInput from "./AuthorInput";

export default function Form({ data, lastObject }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

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

  function OpenModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  function CloseModal() {
    setIsOpen(false);
  }

  const handleSubmit = () => {
    const postData = details;
    console.log(postData);
    axios
      .post(
        `https://newrocotask-default-rtdb.firebaseio.com/form.json`,
        postData
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(details);
    setIsOpen(false);

    const timer = setTimeout(() => {
      console.log("This will run after 2 seconds!");
      window.location.reload(true);
      setShowCard(true);
    }, 2000);
  };

  return (
    <section className="parent">
      <form onChange={HandleOption}>
        <div>
          <select name="option">
            <option hidden>Choose One..</option>
            {data.map(({ id, value }) => {
              return (
                <option key={id} className="options">
                  {value}
                </option>
              );
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

        <div>
          {" "}
          <AuthorInput />{" "}
        </div>
        <div> {/* <UploadFile /> */}</div>
        <button onClick={OpenModal}>Submit</button>
      </form>
      <div className="BUTTON_WRAPPER_STYLES">
        <Modal handleSubmit={handleSubmit} open={isOpen} onClose={CloseModal}>
          {Object.values(details).map((obj, index) => {
            return <p key={index}>{obj}</p>;
          })}
        </Modal>
      </div>
      <div className="card" handleSubmit={handleSubmit}>
        {!showCard && <Card lastObject={lastObject} />}
      </div>
    </section>
  );
}

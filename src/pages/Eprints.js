import axios from "axios";
import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import options from "../data";

export default function Eprints() {
  const [getInfo, setGetInfo] = useState([]);

  useEffect(() => {
    const loadInfo = async () => {
      //setGetInfo(true);
      const response = await axios.get(
        "https://newrocotask-default-rtdb.firebaseio.com/form.json"
      );
      setGetInfo(response.data);
    };

    loadInfo();
  }, []);
  return (
    <div>
      <Form data={options} />
      {Object.entries(getInfo).map((obj) => {
        console.log(obj.slice(-1));
        return (
          <div>
            <p>{obj[1].title}</p>
          </div>
        );
      })}
    </div>
  );
}

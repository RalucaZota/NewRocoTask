import React, { useState, useEffect } from "react";
import Form from "../components/Form";
import options from "../data";

export default function Eprints() {
  const [loadedInfo, setloadedInfo] = useState([]);

  useEffect(() => {
    fetch("https://newrocotask-default-rtdb.firebaseio.com/form.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const infos = [];
        for (const key in data) {
          const newInfos = {
            id: key,
            ...data[key],
          };

          infos.push(newInfos);
        }
        setloadedInfo(infos);
      });
  }, []);

  const lastObject = loadedInfo.slice(-1);

  return (
    <>
      <div>
        <Form data={options} lastObject={lastObject} />
      </div>
    </>
  );
}

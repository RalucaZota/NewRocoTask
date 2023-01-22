import storage from "../components/Firebase";
import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "@firebase/storage";
import "../Styles/UploadFile.css";

// import {
//   getDownloadURL,
//   uploadBytesResumable,
// } from "../src/components/Firebase";

function UploadFile() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    if (!file) return;
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <>
      <div className="App">
        <form onSubmit={formHandler} className={"form-upload"}>
          <input type="file" className="input" />
          <button type="submit" className="upload">
            Upload
          </button>
        </form>
        <hr />
        <p className="progress">Uploading done {progress}%</p>
      </div>
      <div></div>
    </>
  );
}
export default UploadFile;

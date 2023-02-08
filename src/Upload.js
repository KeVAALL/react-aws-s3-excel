import React, { useState } from "react";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageLink, setImageLink] = useState("");

  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = async (file) => {
    const res = await fetch("http://localhost:4000/s3URL");
    const response = await res.json();
    const { url } = response;

    // post the image direclty to the s3 bucket
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });
    const imageUrl = url.split("?")[0];
    setImageLink(imageUrl);
  };
  return (
    <div>
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput} />
      <br></br>
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
      <img src={imageLink} alt="" />
    </div>
  );
};

export default Upload;

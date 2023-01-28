import React, { useState } from "react";
// import S3 from "react-aws-s3";
import S3FileUpload from "react-s3/lib/ReactS3";

window.Buffer = window.Buffer || require("buffer").Buffer;
// a React functional component, used to create a simple upload input and button

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // the configuration information is fetched from the .env file
  console.log(process.env.REACT_APP_BUCKET_NAME);
  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_KEY,
  };

  const handleFileInput = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = async (file) => {
    // const ReactS3Client = new S3(config);
    // the name of the file uploaded is used to upload it to S3
    // ReactS3Client.uploadFile(file, file.name)
    //   .then((data) => console.log(data.location))
    //   .catch((err) => console.error(err));

    S3FileUpload.uploadFile(file, config)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>React S3 File Upload</div>
      <input type="file" onChange={handleFileInput} />
      <br></br>
      <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
    </div>
  );
};

export default Upload;

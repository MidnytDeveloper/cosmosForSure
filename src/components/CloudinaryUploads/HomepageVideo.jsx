function UploadVideo() {
  const uploadVideo = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "fqv2n0oo");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtsp8zzu3/video/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    console.log("Video URL:", data.secure_url);
  };

  return <input type="file" accept="video/*" onChange={uploadVideo} />;
}

export default UploadVideo;

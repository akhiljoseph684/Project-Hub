import cloudinary from "../../config/cloudinary.js";
import streamifier from "streamifier";

export const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "projecthub",
      },
      (error, result) => {
        if (error) {
          console.error(error);
          return reject(error);
        }

        resolve(result);
      }
    );

    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};
const Book=require('../models/book');
const cloudinary = require("../config/cloudinary");
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "uploads" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });
};

const getAllBooks = async ()=>{
  return await Book.find();
}

const getBookById= async (id) =>{
  return await Book.findById(id);
}

const createBook= async (bookData)=>{
  return await Book.create(bookData);
}

const deleteBookById= async (id)=>{
  return await Book.findByIdAndDelete(id);
}

module.exports = {uploadToCloudinary,getAllBooks,getBookById,createBook,deleteBookById};
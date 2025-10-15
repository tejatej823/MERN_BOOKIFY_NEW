const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      min: 0,
    },
    genre: {
      type: String,
    },
    price: {
      type: Number,
      min: 0,
    },
    totalBooks: {
      type: Number,
      min: 0,
    },
    imageUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

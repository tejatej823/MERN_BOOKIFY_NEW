const {
  uploadToCloudinary,
  getAllBooks,
  getBookById,
  createBook,
  deleteBookById
} = require("../../services/book");

const Book = require("../../models/book");

const uploadBooks = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });
    // Upload to Cloudinary
    const result = await uploadToCloudinary(req.file.buffer);
    const imageUrl = result.secure_url;
    const { title, author, publishedYear, genre, price, totalBooks } = req.body;

    const newBook = new Book({
      title,
      author,
      publishedYear,
      genre,
      price,
      totalBooks,
      imageUrl,
    });
    const savedBook = await createBook(newBook);
    res.status(201).json({
      message: "File uploaded & saved successfully",
      data: savedBook,
    });
  } catch (err) {
    console.error("error:", err);
    res.status(400).json({ error: err.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const allBooks = await getAllBooks();
    console.log("All books", allBooks);
    res.status(200).json({data:allBooks});
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({ error: error.message });
  }
};
const findBook=async (req,res)=>{
  try {
    const { id } = req.params;
    const Book = await getBookById(id);
    console.log(Book);
    if (!Book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({
      message: "Book found successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await deleteBookById(id);
    console.log(deletedBook);
    if (!deletedBook) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json({
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBook= async (req, res)=>{
  const {id}=req.params;
  console.log(id)
  const updates=req.body;
  console.log(updates);
  try{
    const updatedBook=await Book.findOneAndUpdate({_id:id},{$set:updates},{new:true});
    res.status(200).json({
      message:"Book updated Successfully",
      data:updatedBook
    })
  }
  catch(error){
    res.status(500).json({error:error.message});
  }
}
module.exports = { uploadBooks, getBooks, deleteBook,findBook,updateBook };

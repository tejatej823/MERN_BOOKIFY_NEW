const express = require("express");
const router = express.Router();
const upload=require("../middlewares/upload");
const {
  uploadBooks,
  getBooks,
  deleteBook,
  findBook,
  updateBook
} = require("../controllers/admin/bookController");
const multer = require("multer");
const uploads = multer();
console.log({ uploadBooks, getBooks, deleteBook,findBook,updateBook});

router.post("/upload", upload.single("imageUrl"), uploadBooks); 
router.get("/",getBooks);
router.delete("/:id",deleteBook);
router.get("/:id",findBook);
router.put("/:id",uploads.none(),updateBook)
module.exports = router;


const express = require("express");
const router = express.Router();

const {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoById,
  updatePhoto,
  likePhoto,
  commentPhoto,
  searchPhotos,
} = require("../controllers/Photo");

const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");

const {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation,
} = require("../middlewares/photoValidation");
const { imageUpload } = require("../middlewares/imageUpload");

router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/search", authGuard, searchPhotos);
router.get("/:id", authGuard, getPhotoById);

router.post(
  "/",
  authGuard,
  imageUpload.single("image"),
  photoInsertValidation(),
  validate,
  insertPhoto
);

router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto);
router.put("/like/:id", authGuard, likePhoto);
router.put(
  "/comment/:id",
  authGuard,
  commentValidation(),
  validate,
  commentPhoto
);

router.delete("/:id", authGuard, deletePhoto);

module.exports = router;

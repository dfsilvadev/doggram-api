const multer = require("multer");
const path = require("path");

const imageStorage = multer.diskStorage({
  destination: (req, _, callback) => {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos";
    }

    callback(null, `src/uploads/${folder}`);
  },
  filename: (_, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(_, file, callback) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return callback(new Error("As imagens devem ser no formato png ou jpg."));
    }
    callback(undefined, true);
  },
});

module.exports = {
  imageUpload,
};

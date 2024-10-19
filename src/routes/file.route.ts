import { Router } from "express";
import fileController from "../controllers/file.controller";
import multer from "multer";
const path = require("path");

const storage = multer.diskStorage({
    destination: "~/uploads/",
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileExtension = path.extname(file.originalname);
      cb(null, uniqueSuffix + fileExtension);
    },
  });
//   const uploadPath = path.join(
//     __dirname,
//     process.env.PATH_UPLOAD,
//     filename
//   );
const upload = multer({ storage: storage });

const router = Router();

router.get("/", fileController.getFile);

router.post("/", upload.single("file"), fileController.uploadFile);

router.delete("/", fileController.deleteAllFiles);

export default router;

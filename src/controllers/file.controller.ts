import { Response, Request } from "express";
import dotenv from "dotenv";
import { fileGetUsecase } from "../usecases/file/file-get.usecase";
import { fileUploadUsecase } from "../usecases/file/file-upload.usecase";
import { fileDeleteAllUsecase } from "../usecases/file/file-deleteAllFiles";

dotenv.config();

const uploadFile = async (req: Request, res: any) => {
  return fileUploadUsecase(req, res);
};

const getFile = async (req: Request, res: Response) => {
  return fileGetUsecase(req, res);
};

const deleteAllFiles = async (req: Request, res: Response) => {
  return fileDeleteAllUsecase(req, res);
}

export default {
  uploadFile,
  getFile,
  deleteAllFiles
};

import { Response, Request } from "express";

export const fileUploadUsecase = async (req: Request, res: Response) => {
  try {
    return res
      .status(201)
      // .json({ filePath: req.file!.path.replace("uploads\\", "") }); // for windows
      .json({ filePath: req.file!.path.replace("uploads/", "") }); // for linux
  } catch (error) {
    return res.status(500).json({ message: "เกิดข้อผิดพลาดจากระบบ" });
  }
};

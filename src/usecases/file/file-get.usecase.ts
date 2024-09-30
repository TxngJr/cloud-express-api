import { Request, Response } from "express";
import path from "path";

export const fileGetUsecase = async (req: Request, res: Response) => {
  try {
    const { fileUrl } = req.query as { fileUrl: string };
    return res.sendFile(path.resolve(`uploads//${fileUrl}`));
  } catch (error) {
    return res.status(500).json({ message: "เกิดข้อผิดพลาดจากระบบ" });
  }
};

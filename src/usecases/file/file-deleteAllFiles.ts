import { Response, Request } from "express";
import path from "path";
import fs from "fs";

export const fileDeleteAllUsecase = async (req: Request, res: Response) => {
  try {
    const directory: string = path.resolve("uploads");

  try {
    const files: string[] = fs.readdirSync(directory);

    if (files.length === 0) {
      return res.status(404).json({ message: "No files found" });
    }

    files.forEach((file: string) => {
      const filePath = path.join(directory, file);
      fs.unlinkSync(filePath); // Synchronously delete each file
    });

    return res.status(200).json({ message: "All files deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Error reading or deleting files" });
  }
  } catch (error) {
    return res.status(500).json({ message: "เกิดข้อผิดพลาดจากระบบ" });
  }
};

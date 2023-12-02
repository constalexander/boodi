import { Request, Response } from "express";

export const check = async (req: Request, res: Response) => {
  res.json({ status: "OK 👌🏼✔" });
};

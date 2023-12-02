import { NextFunction, Request, Response } from "express";

// Higher order function
// to avoid using try-catch blocks
const catchErrors =
  (fn: any) => (req: Request, res: Response, next: NextFunction) => {
    return fn(req, res, next).catch(next);
  };

export default catchErrors;

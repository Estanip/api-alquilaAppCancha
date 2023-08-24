import { INTERNAL_SERVER_ERROR } from "../constants/responseStatusCode";
import { Request, Response, NextFunction } from "express";

export class ErrorResponse extends Error {
  private statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const returnErroResponse = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode || INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: err,
  });
};

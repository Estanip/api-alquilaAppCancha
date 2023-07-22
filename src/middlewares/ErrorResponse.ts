import { Request, Response, NextFunction } from "express";

export class ErrorResponse extends Error {
  private statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

function returnErroResponse(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
}

export default returnErroResponse;
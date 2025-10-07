import * as express from "express"
import { IUserPayload } from "../../interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      user?: IUserPayload;
    }
  }
}

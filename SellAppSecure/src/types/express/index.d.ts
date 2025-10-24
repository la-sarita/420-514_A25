import * as express from "express"
import { IUserPayload } from "../../V2/interfaces/user.interface";

declare global {
  namespace Express {
    interface Request {
      user?: IUserPayload;
    }
  }
}

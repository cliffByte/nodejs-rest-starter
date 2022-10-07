import { StatusCodes } from "../constants/statusCodes";
import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import messages from "../constants/messages";
import JWTService from "../services/utils/jwt.service";
import Env from "../config/env";

class AuthController {
  constructor(private authService: AuthService = new AuthService()) {}

  async signUp(req: Request, res: Response, next: NextFunction) {
    const user = await this.authService.signUp(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: messages["userCreated"],
      data: {
        user:{...user,password:undefined},
      },
    });
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    const user = await this.authService.signIn(req.body);
    const token = JWTService.sign({}, Env.JWT_SECRET, {
      expiresIn: Env.TOKEN_EXPIRES_IN,
    });
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: messages["userCreated"],
      data: {
        user:{...user,password:undefined},
token
      },
    });
  }
}

export default AuthController;

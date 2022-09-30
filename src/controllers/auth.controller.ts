import { StatusCodes } from "../constants/statusCodes";
import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import messages from "../constants/messages";

class AuthController {
  constructor(private authService: AuthService = new AuthService()) {}

  async signUp(req: Request, res: Response, next: NextFunction) {
    const user = await this.authService.signUp(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: messages["userCreated"],
      data: {
        user,
      },
    });
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    const user = await this.authService.signIn(req.body);
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: messages["userCreated"],
      data: {
        user,
      },
    });
  }
}

export default AuthController;

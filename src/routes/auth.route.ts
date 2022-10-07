import AuthController from "../controllers/auth.controller";
import { Router } from "express";
import { catchAsync } from "../utils/catchAsync";
import Validate from "../middlewares/validation.middleware";
import { SignInDTO } from "../dtos/auth.dto";
import { SignUpDTO } from "../dtos/auth.dto";

const authController = new AuthController();

class AuthRoutes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes() {
    this.router.post(
      "/signin",
      Validate(SignInDTO),
      catchAsync(authController.signIn.bind(authController))
    );
    this.router.post(
      "/signup",
      Validate(SignUpDTO),
      catchAsync(authController.signUp.bind(authController))
    );
  };

  static routerInstance() {
    const authRouter = new AuthRoutes();
    return authRouter.router;
  }
}

export default AuthRoutes.routerInstance;

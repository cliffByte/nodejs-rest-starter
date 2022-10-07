import { Body, Post, Route, SuccessResponse, Tags } from "tsoa";
import AppDataSource from "../config/database.config";
import HttpException from "../utils/HttpException";
import User from "../entities/user.entity";
import { SignUpDTO } from "../dtos/auth.dto";
import { SignInDTO } from "../dtos/auth.dto";
import BcryptService from "./utils/bcrypt.service";
import messages from "../constants/messages";


@Route("/api/auth")
@Tags("Authentication")
class AuthService {
  constructor(private userRepository = AppDataSource.getRepository(User)) {}

  /**
   *
   * @summary This services simply creates a user
   *
   */
   @Post("signup")
   @SuccessResponse("201", "User Created Successfully") // Custom success response 
  async signUp(@Body() userData: SignUpDTO): Promise<User> {
    const { email, firstName, lastName, middleName, password } = userData;
    const isExists = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (isExists) {
      throw HttpException.badRequest(messages["emailAlreadyExists"]);
    }
    const hashedPassword= await BcryptService.hash(password)
    const user = this.userRepository.create({
      email,
      firstName,
      lastName,
      middleName,
      password:hashedPassword
    });
    return await this.userRepository.save(user);
  }

  @Post("signin")
  @SuccessResponse("200", "User Logged in Successfully") // Custom success response 
  async signIn(@Body() userData: SignInDTO): Promise<User> {
    const { email, password } = userData;
    const user = await this.userRepository.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw HttpException.badRequest(messages["invalidAuth"]);
    }

    
    const isValidPassword = await BcryptService.compare(
      password,
      user.password
      );
      if (!isValidPassword) {
      throw HttpException.badRequest(messages["invalidAuth"]);
    }
    return user;
  }
}

export default AuthService;

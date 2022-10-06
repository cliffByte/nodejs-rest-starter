import { validate } from "class-validator";
import { ClassConstructor, plainToClass } from "class-transformer";
import { Request, Response, NextFunction } from "express";
import HttpException from "../utils/HttpException";

const Validate = <T extends ClassConstructor<any>>(DTO: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validatorDto = async () => {
      try {
        const objInstance = plainToClass(DTO, req.body);
        const errors = await validate(objInstance, { whitelist: true, });
        if (errors.length) {
          const error = errors[0].constraints;
          if (error) {
            const message = Object.values(error)[0];
            throw HttpException.badRequest(message);
          }
        }
        
        next();
      } catch (error) {
        next(error);
      }
    };
    validatorDto();
  };
};


export default Validate;
import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

class JWTService {
  static sign(
    payload: JwtPayload,
    secretOrPublicKey: Secret,
    options: SignOptions
  ) {
    return jwt.sign(payload, secretOrPublicKey, options);
  }

  static verify(token: string, secret: Secret) {
    return jwt.verify(token, secret);
  }
}

export default JWTService;

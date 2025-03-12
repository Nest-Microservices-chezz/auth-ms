import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {

  @MessagePattern('auth.register.user')
  registerUser() {
    return 'register user!!';
  }

  @MessagePattern('auth.login.user')
  loginUser() {
    return 'login user';
  }

  @MessagePattern('auth.verify.user')
  verifyToken() {
    return 'verify Token ';
  }
}

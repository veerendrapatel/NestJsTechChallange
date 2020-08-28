import { createParamDecorator } from '@nestjs/common';
import { User } from '../user/user.entity';

export const GetUser = createParamDecorator((data, req): User => {
  console.log(req, req.user);
  return req.user;
});
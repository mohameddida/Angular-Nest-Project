import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) { }

    async validate(token: string) {
        try {
            const decoded = this.jwtService.verify(token);
            const user = await this.usersService.findOne(decoded.email);
            if (!user) {
                throw new UnauthorizedException();
            }
            return user;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}

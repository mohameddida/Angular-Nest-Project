import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class JwtStrategy {
    private readonly jwtService;
    private readonly usersService;
    constructor(jwtService: JwtService, usersService: UsersService);
    validate(token: string): Promise<string>;
}

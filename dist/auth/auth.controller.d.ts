import { LoginDto } from 'src/dto/login.dto';
import { CreateUserDto } from 'src/dto/user.dto';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
    register(createUserDto: CreateUserDto): Promise<import("../Schema/user.schema").User>;
}

import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractJwtFromRequest(request);
        if (!token) {
            throw new UnauthorizedException('Unauthorized access');
        }
        return this.validateToken(token);
    }

    private extractJwtFromRequest(request): string | null {
        const authHeader = request.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer ')) {
            return authHeader.substring(7); // Remove 'Bearer ' from the token
        }
        return null;
    }

    private async validateToken(token: string): Promise<boolean> {
        try {
            const decoded = this.jwtService.verify(token);
            const user = await this.usersService.findOne(decoded.email);
            if (!user) {
                throw new UnauthorizedException('Unauthorized access');
            }
            return true;
        } catch (error) {
            throw new UnauthorizedException('Unauthorized access');
        }
    }
}

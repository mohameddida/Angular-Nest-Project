import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseSchema } from 'src/Schema/expense.schema';
import { JwtStrategy } from 'src/auth/jwt.strategy'; // Adjust the path to your JwtStrategy
import { UsersModule } from 'src/users/users.module';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRE_KEY'),
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    MongooseModule.forFeature([{ name: 'Expense', schema: ExpenseSchema }]),
  ],
  providers: [ExpensesService, JwtStrategy],
  controllers: [ExpensesController],
})
export class ExpensesModule { }

import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateTransactionDto } from './create-transaction.dto';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
    @IsNumber()
    readonly amount: number;

    @IsString()
    readonly category: string;

    @IsDate()
    readonly date: Date;

    @IsOptional()
    @IsString()
    readonly description?: string;
}

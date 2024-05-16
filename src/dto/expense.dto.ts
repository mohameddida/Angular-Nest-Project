import { IsNumber, IsString } from 'class-validator';

export class CreateExpenseDto {
    @IsNumber()
    amount: number;

    @IsString()
    date: string;

    @IsString()
    category: string;

    @IsString()
    description: string;

    @IsString()
    tags: string;
}

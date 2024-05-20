import { IsNotEmpty, IsNumber, IsString, IsDate, IsOptional } from 'class-validator';


export class CreateTransactionDto {
    @IsNotEmpty()
    @IsNumber()
    readonly amount: number;

    @IsNotEmpty()
    @IsString()
    readonly category: string;

    @IsNotEmpty()
    @IsDate()
    readonly date: Date;

    @IsOptional()
    @IsString()
    readonly description?: string;
}

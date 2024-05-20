import { CreateTransactionDto } from './create-transaction.dto';
declare const UpdateTransactionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTransactionDto>>;
export declare class UpdateTransactionDto extends UpdateTransactionDto_base {
    readonly amount: number;
    readonly category: string;
    readonly date: Date;
    readonly description?: string;
}
export {};

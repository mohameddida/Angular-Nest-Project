import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsService } from './transactions.service';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(req: any, createTransactionDto: CreateTransactionDto): Promise<import("./entities/transaction.entity").Transaction>;
    findAll(req: any): Promise<import("./entities/transaction.entity").Transaction[]>;
    findOne(req: any, id: string): Promise<import("./entities/transaction.entity").Transaction>;
    update(req: any, id: string, updateTransactionDto: UpdateTransactionDto): Promise<import("./entities/transaction.entity").Transaction>;
    remove(req: any, id: string): Promise<import("./entities/transaction.entity").Transaction>;
}

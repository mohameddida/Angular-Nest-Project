import { CreateExpenseDto } from 'src/dto/expense.dto';
import { ExpensesService } from './expenses.service';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    create(createExpenseDto: CreateExpenseDto, req: any): Promise<import("../Schema/expense.schema").Expense>;
    findAll(req: any): Promise<import("../Schema/expense.schema").Expense[]>;
}

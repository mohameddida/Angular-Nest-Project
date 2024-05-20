import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    create(createExpenseDto: CreateExpenseDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateExpenseDto: UpdateExpenseDto): string;
    remove(id: string): string;
}

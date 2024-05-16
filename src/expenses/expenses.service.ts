import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Expense } from 'src/Schema/expense.schema';
import { CreateExpenseDto } from 'src/dto/expense.dto';

@Injectable()
export class ExpensesService {
    constructor(@InjectModel('Expense') private expenseModel: Model<Expense>) { }

    async create(
        createExpenseDto: CreateExpenseDto,
        userId: string,
    ): Promise<Expense> {
        const createdExpense = new this.expenseModel({
            ...createExpenseDto,
            user: userId,
        });
        return createdExpense.save();
    }

    async findAll(userId: string): Promise<Expense[]> {
        return this.expenseModel.find({ user: userId }).exec();
    }
}

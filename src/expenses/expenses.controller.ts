import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateExpenseDto } from 'src/dto/expense.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() createExpenseDto: CreateExpenseDto, @Req() req) {
        return this.expensesService.create(createExpenseDto, req.user.id);
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll(@Req() req) {
        return this.expensesService.findAll(req.user.id);
    }
}

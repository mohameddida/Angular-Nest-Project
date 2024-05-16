import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwtauthGard';
import { CreateExpenseDto } from 'src/dto/expense.dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createExpenseDto: CreateExpenseDto, @Req() req) {
        return this.expensesService.create(createExpenseDto, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async findAll(@Req() req) {
        return this.expensesService.findAll(req.user.id);
    }
}

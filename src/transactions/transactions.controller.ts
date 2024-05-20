import { Body, Controller, Delete, Get, Param, Post, Put, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
@UseGuards(AuthGuard)
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @Post()
  async create(@Request() req, @Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionsService.createTransaction(req.user.userId, createTransactionDto);
  }

  @Get()
  async findAll(@Request() req) {
    return this.transactionsService.getTransactions(req.user.userId);
  }

  @Get(':id')
  async findOne(@Request() req, @Param('id') id: string) {
    return this.transactionsService.getTransactionById(req.user.userId, id);
  }

  @Put(':id')
  async update(@Request() req, @Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsService.updateTransaction(req.user.userId, id, updateTransactionDto);
  }

  @Delete(':id')
  async remove(@Request() req, @Param('id') id: string) {
    return this.transactionsService.deleteTransaction(req.user.userId, id);
  }
}

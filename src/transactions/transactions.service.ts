import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(@InjectModel(Transaction.name) private transactionModel: Model<Transaction>) { }

  async createTransaction(userId: string, transactionDto: CreateTransactionDto): Promise<Transaction> {
    const newTransaction = new this.transactionModel({ ...transactionDto, userId });
    return newTransaction.save();
  }

  async getTransactions(userId: string): Promise<Transaction[]> {
    return this.transactionModel.find({ userId }).exec();
  }

  async getTransactionById(userId: string, id: string): Promise<Transaction> {
    return this.transactionModel.findOne({ _id: id, userId }).exec();
  }

  async deleteTransaction(userId: string, id: string): Promise<Transaction> {
    return this.transactionModel.findOneAndDelete({ _id: id, userId }).exec();
  }

  async updateTransaction(userId: string, id: string, transactionDto: UpdateTransactionDto): Promise<Transaction> {
    return this.transactionModel.findOneAndUpdate({ _id: id, userId }, transactionDto, { new: true }).exec();
  }
}

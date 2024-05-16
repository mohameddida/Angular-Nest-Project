import { Document, Schema } from 'mongoose';
import { User } from './user.schema';

export const ExpenseSchema = new Schema({
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    tags: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
});

export interface Expense extends Document {
    id: string;
    amount: number;
    date: string;
    category: string;
    description: string;
    tags: string;
    user: User;
}

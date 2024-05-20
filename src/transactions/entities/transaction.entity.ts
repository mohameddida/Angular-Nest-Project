import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Transaction extends Document {
    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    date: Date;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    description: string;

    @Prop({ type: [String] })
    tags: string[];

    @Prop({ required: true })
    userId: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

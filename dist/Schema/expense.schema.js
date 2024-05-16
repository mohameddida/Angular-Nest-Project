"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ExpenseSchema = new mongoose_1.Schema({
    amount: { type: Number, required: true },
    date: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    tags: { type: String },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
});
//# sourceMappingURL=expense.schema.js.map